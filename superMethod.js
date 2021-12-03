import getCaller from "./getCaller";

function getMethodFromComponent(methodName, parentComponentOptions, methodStat) {
    const componentMethod = getMethodsMethod(methodName, parentComponentOptions, methodStat);

    if (componentMethod) {
        return componentMethod;
    }

    const mixinsMethod = getMixinsMethod(methodName, parentComponentOptions, methodStat);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    return getExtendsMethod(methodName, parentComponentOptions, methodStat);
}

function getExtendsMethod(methodName, parentComponentOptions, methodStat) {
    const extendsComponentOptions = parentComponentOptions.extends;

    if (!extendsComponentOptions) {
        return false;
    }

    return getMethodFromComponent(methodName, extendsComponentOptions, methodStat);
}

function getMethodsMethod(methodName, componentOptions, methodStat) {
    const optionPropertyName = methodStat.optionPropertyName;
    const methods = componentOptions[optionPropertyName];

    if (!methods) {
        return false;
    }

    const method = methods[methodName];

    if (!method) {
        return false;
    }

    // First $super() caller is method in mixin/extends - skip it and continue search base method
    if (methodStat.origFunction === method) {
        return false;
    }

    if (methodStat.skipTimes) {
        methodStat.skipTimes--;

        return false;
        // return getParentMethod(componentOptions, methodName, methodStat);
    }

    return method;
}

function getMixinsMethod(methodName, parentComponentOptions, methodStat) {
    const mixins = parentComponentOptions.mixins;

    if (!mixins) {
        return false;
    }

    const reversedMixins = Array.from(mixins).reverse();

    for (const mixinComponentOptions of reversedMixins) {
        const mixinMethod = getMethodFromComponent(methodName, mixinComponentOptions, methodStat);

        if (mixinMethod) {
            return mixinMethod;
        }
    }

    return false;
}

function getCallerMethodName() {
    return getCaller(3).split('.')[1];
}

function getParentMethod(componentOptions, methodName, methodStat) {
    const mixinsMethod = getMixinsMethod(methodName, componentOptions, methodStat);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    const extendsMethod = getExtendsMethod(methodName, componentOptions, methodStat);

    if (extendsMethod) {
        return extendsMethod;
    }

    return false;
}

function getComputedGetterRecursively(vm, propName) {
    const propsDescription = Object.getOwnPropertyDescriptor(vm, propName);

    if (!propsDescription) {
        const proto = vm.__proto__;

        if (!proto) {
            throw new Error('Computed getters not found.');
        }

        return getComputedGetterRecursively(proto, propName);
    }

    return propsDescription.get;
}

export default function () {
    const methodName = getCallerMethodName();

    const componentOptions = this.$options;

    // first call for component instance
    if (!this.__super) {
        this.__super = {};
    }

    const superGlobals = this.__super;

    const optionPropertyName = componentOptions.methods[methodName] ? 'methods' : 'computed';

    // first call for method
    if (!superGlobals.hasOwnProperty(methodName)) {
        const origFunction = componentOptions[optionPropertyName][methodName];

        superGlobals[methodName] = {
            optionPropertyName: optionPropertyName,
            origFunction: origFunction,
            callLevel: -1,
            skipTimes: -1,
            levelsCache: {},
        };
    }

    const methodStat = superGlobals[methodName];
    methodStat.callLevel++;
    // methodStat.skipTimes = methodStat.callLevel;
    methodStat.skipTimes = methodStat.callLevel;

    const parentMethod = (methodStat.levelsCache[methodStat.callLevel])
        ? methodStat.levelsCache[methodStat.callLevel]
        : getParentMethod(componentOptions, methodName, methodStat);

    if (!parentMethod) {
        throw Error('Super method not found!');
    }

    methodStat.levelsCache[methodStat.callLevel] = parentMethod;

    let result;

    if (optionPropertyName === 'methods') {
        const oldMethod = this[methodName];

        // don't use apply to not method name in stack
        this[methodName] = parentMethod;
        result = this[methodName](...arguments);
        this[methodName] = oldMethod;
    } else {
        const oldMethod = getComputedGetterRecursively(this, methodName);

        Object.defineProperty(this, methodName, {
            configurable: true,
            enumerable: true,
            get: function () {
                return parentMethod.call(this);
            },
        });

        result = this[methodName];

        //todo: must be set on parent proto
        Object.defineProperty(this, methodName, {
            configurable: true,
            enumerable: true,
            get: oldMethod,
        });
    }

    methodStat.callLevel--;

    return result;
}

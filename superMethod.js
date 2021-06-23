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
    const methods = componentOptions.methods;

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

export default function () {
    debugger;
    const methodName = getCallerMethodName();

    const componentOptions = this.$options;

    // first call for component instance
    if (!this.__super) {
        this.__super = {};
    }

    const superGlobals = this.__super;

    // first call for method
    if (!superGlobals.hasOwnProperty(methodName)) {
        superGlobals[methodName] = {
            origFunction: componentOptions.methods[methodName],
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

    const oldMethod = this[methodName];

    // don't use apply to not method name in stack
    this[methodName] = parentMethod;
    const result = this[methodName](...arguments);
    this[methodName] = oldMethod;

    methodStat.callLevel--;

    return result;
}

import getCaller from "./getCaller";

function getMethodFromComponent(methodName, parentComponentOptions) {
    const componentMethod = getMethodsMethod(methodName, parentComponentOptions);

    if (componentMethod) {
        return componentMethod;
    }

    const mixinsMethod = getMixinsMethod(methodName, parentComponentOptions);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    return getExtendsMethod(methodName, parentComponentOptions);
}

function getExtendsMethod(methodName, parentComponentOptions) {
    const extendsComponentOptions = parentComponentOptions.extends;

    if (!extendsComponentOptions) {
        return false;
    }

    return getMethodFromComponent(methodName, extendsComponentOptions);
}

function getMethodsMethod(methodName, parentComponentOptions) {
    const methods = parentComponentOptions.methods;

    if (!methods) {
        return false;
    }

    const method = methods[methodName];

    if (!method) {
        return false;
    }

    return method;
}

function getMixinsMethod(methodName, parentComponentOptions) {
    const mixins = parentComponentOptions.mixins;

    if (!mixins) {
        return false;
    }

    const reversedMixins = Array.from(mixins).reverse();

    for (const mixinComponentOptions of reversedMixins) {
        const mixinMethod = getMethodFromComponent(methodName, mixinComponentOptions);

        if (mixinMethod) {
            return mixinMethod;
        }
    }

    return false;
}

function getCallerMethodName() {
    /**
     * Callers:
     * 0 - "Module.eval [as default]"
     * 1 - "eval"
     * 2 - "getCallerMethodName"
     * 3 - "VueComponent.eval [as $super]"
     */
    return getCaller(4).split('.')[1];
}

function getParentMethod(component, methodName) {
    const componentOptions = component.$options;
    const mixinsMethod = getMixinsMethod(methodName, componentOptions, this);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    const extendsMethod = getExtendsMethod(methodName, componentOptions, this);

    if (extendsMethod) {
        return extendsMethod;
    }

    throw Error('Super method not found!');
}

export default function () {
    debugger;
    const methodName = getCallerMethodName();
    const parentMethod = getParentMethod(this, methodName);

    return parentMethod.apply(this, arguments);
}

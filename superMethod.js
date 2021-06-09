import getCaller from "./getCaller";

function getMethodFromComponent(methodName, parentComponentOptions, skipTimes) {
    const componentMethod = getMethodsMethod(methodName, parentComponentOptions, skipTimes);

    if (componentMethod) {
        return componentMethod;
    }

    const mixinsMethod = getMixinsMethod(methodName, parentComponentOptions, skipTimes);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    return getExtendsMethod(methodName, parentComponentOptions, skipTimes);
}

function getExtendsMethod(methodName, parentComponentOptions, skipTimes) {
    const extendsComponentOptions = parentComponentOptions.extends;

    if (!extendsComponentOptions) {
        return false;
    }

    return getMethodFromComponent(methodName, extendsComponentOptions, skipTimes);
}

function getMethodsMethod(methodName, componentOptions, skipTimes) {
    const methods = componentOptions.methods;

    if (!methods) {
        return false;
    }

    const method = methods[methodName];

    if (!method) {
        return false;
    }

    if (skipTimes) {
        skipTimes--;

        return getParentMethod(componentOptions, methodName, skipTimes);
    }

    return method;
}

function getMixinsMethod(methodName, parentComponentOptions, skipTimes) {
    const mixins = parentComponentOptions.mixins;

    if (!mixins) {
        return false;
    }

    const reversedMixins = Array.from(mixins).reverse();

    for (const mixinComponentOptions of reversedMixins) {
        const mixinMethod = getMethodFromComponent(methodName, mixinComponentOptions, skipTimes);

        if (mixinMethod) {
            return mixinMethod;
        }
    }

    return false;
}

function getCallerMethodName() {
    return getCaller(3).split('.')[1];
}

function getParentMethod(componentOptions, methodName, skipTimes) {
    const mixinsMethod = getMixinsMethod(methodName, componentOptions, skipTimes);

    if (mixinsMethod) {
        return mixinsMethod;
    }

    const extendsMethod = getExtendsMethod(methodName, componentOptions, skipTimes);

    if (extendsMethod) {
        return extendsMethod;
    }

    throw Error('Super method not found!');
}

const skipCount = {};

export default function () {
    debugger;
    const methodName = getCallerMethodName();

    debugger;
    skipCount.hasOwnProperty(methodName) ? skipCount[methodName]++ : skipCount[methodName] = 0;

    const componentOptions = this.$options;
    const parentMethod = getParentMethod(componentOptions, methodName, skipCount[methodName]);

    const result = parentMethod.apply(this, arguments);
    skipCount[methodName]--;

    return result;
}

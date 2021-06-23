import superMethod from "./superMethod";

export default {
    install(Vue) {
        Vue.prototype.$super = superMethod;

        const strategies = Vue.config.optionMergeStrategies;
        strategies.mixins = function (toVal, fromVal) {
            return fromVal ? fromVal : undefined;
        };

        const baseExtend = Vue.extend;

        Vue.extend = function (extendOptions) {
            const sub = baseExtend.call(this, extendOptions);
            const base = this;
            const baseOptionsMixins = base.options.mixins;

            if (baseOptionsMixins) {
                sub.options.mixins = baseOptionsMixins;
            }

            return sub;
        };
    },
}

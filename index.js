import superMethod from "./superMethod";

export default {
    install(Vue) {
        Vue.prototype.$super = superMethod;
    },
}

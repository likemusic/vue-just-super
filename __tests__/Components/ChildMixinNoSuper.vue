<template>
    <div>{{ wrappedHelloMessage() }}</div>
</template>


<script>
export default {
    name: "ChildMixinNoSuper",
    methods: {
        helloMessage() {
            debugger;
            return 'ChildMixinNoSuper';
        },
        wrappedHelloMessage() {
            const preMessage = this.$options.name + ': ';
            return preMessage + this.helloMessage();
        },
    },
}
</script>

<template>
    <div>{{ wrappedHelloMessage() }}</div>
</template>


<script>
export default {
    name: "ChildMixinNoSuper",
    methods: {
        helloMessage() {
            return 'ChildMixinNoSuper';
        },
        wrappedHelloMessage() {
            const preMessage = this.$options.name + ': ';
            return preMessage + this.helloMessage();
        },
    },
}
</script>

<template>
    <div>{{ wrappedHelloMessage() }}</div>
</template>

<script>
export default {
    name: "Extends",
    methods: {
        helloMessage() {
            return 'Extends';
        },
        wrappedHelloMessage() {
            const preMessage = this.$options.name + ': ';
            return preMessage + this.helloMessage();
        },
    },
}
</script>

<script>
export default {
    name: "ChildMixinWithSuper",
    methods: {
        helloMessage() {
            return this.$super() + ' > ChildMixinWithSuper';
        },
    },
}
</script>

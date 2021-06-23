<script>
export default {
    name: "GrandchildMixinWithSuper",
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildMixinWithSuper';
        },
    },
}
</script>

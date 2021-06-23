<script>
import ChildWithExtendsNoMixinsWithOwn from "../../../ChildWithExtendsNoMixinsWithOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn';
        },
    }
}
</script>

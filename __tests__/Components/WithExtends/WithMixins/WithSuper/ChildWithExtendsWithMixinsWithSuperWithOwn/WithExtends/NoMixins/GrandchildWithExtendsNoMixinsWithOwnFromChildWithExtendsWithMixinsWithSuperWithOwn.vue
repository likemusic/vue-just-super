<script>
import ChildWithExtendsWithMixinsWithSuperWithOwn from "../../../ChildWithExtendsWithMixinsWithSuperWithOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: ChildWithExtendsWithMixinsWithSuperWithOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn';
        },
    }
}
</script>

<script>
import ChildWithExtendsWithMixinsWithSuperWithOwn from "../../../../ChildWithExtendsWithMixinsWithSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: ChildWithExtendsWithMixinsWithSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn';
        },
    },
}
</script>

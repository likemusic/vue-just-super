<script>
import ChildWithExtendsWithMixinsNoSuperWithOwn from "../../../../ChildWithExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: ChildWithExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn';
        },
    },
}
</script>

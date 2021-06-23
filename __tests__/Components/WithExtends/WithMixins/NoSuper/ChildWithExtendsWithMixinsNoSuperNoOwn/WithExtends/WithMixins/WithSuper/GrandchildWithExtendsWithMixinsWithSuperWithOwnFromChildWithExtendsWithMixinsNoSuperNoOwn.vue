<script>
import ChildWithExtendsWithMixinsNoSuperNoOwn from "../../../../ChildWithExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn",
    extends: ChildWithExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn';
        },
    },
}
</script>

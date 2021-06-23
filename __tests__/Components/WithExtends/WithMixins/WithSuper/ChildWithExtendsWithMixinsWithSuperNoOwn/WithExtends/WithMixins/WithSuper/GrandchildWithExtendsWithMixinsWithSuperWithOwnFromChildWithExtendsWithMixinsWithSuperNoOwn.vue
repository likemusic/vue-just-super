<script>
import ChildWithExtendsWithMixinsWithSuperNoOwn from "../../../../ChildWithExtendsWithMixinsWithSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn",
    extends: ChildWithExtendsWithMixinsWithSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn';
        },
    },
}
</script>

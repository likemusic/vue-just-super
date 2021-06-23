<script>
import ChildNoExtendsWithMixinsNoSuperNoOwn from "../../../../ChildNoExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn",
    extends: ChildNoExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn';
        },
    }
}
</script>

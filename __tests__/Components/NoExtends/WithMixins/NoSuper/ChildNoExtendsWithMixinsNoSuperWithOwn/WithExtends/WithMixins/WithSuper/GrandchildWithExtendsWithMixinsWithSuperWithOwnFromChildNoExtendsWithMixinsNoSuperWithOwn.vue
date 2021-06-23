<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../../ChildNoExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn';
        },
    }
}
</script>

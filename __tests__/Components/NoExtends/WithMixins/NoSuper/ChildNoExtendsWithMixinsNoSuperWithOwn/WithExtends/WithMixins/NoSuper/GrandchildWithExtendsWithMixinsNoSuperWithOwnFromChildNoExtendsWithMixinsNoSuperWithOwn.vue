<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../../ChildNoExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn';
        },
    }
}
</script>

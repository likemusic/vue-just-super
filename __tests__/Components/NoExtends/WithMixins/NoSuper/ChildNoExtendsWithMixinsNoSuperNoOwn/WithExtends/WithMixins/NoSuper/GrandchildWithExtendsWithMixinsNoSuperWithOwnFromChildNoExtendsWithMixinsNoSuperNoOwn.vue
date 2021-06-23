<script>
import ChildNoExtendsWithMixinsNoSuperNoOwn from "../../../../ChildNoExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn",
    extends: ChildNoExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn';
        },
    }
}
</script>

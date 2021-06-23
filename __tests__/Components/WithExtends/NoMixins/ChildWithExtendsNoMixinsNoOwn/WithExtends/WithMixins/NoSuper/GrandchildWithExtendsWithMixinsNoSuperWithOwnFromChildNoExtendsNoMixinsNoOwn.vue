<script>
import GrandchildMixinNoSuper from "../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsNoMixinsNoOwn from "../../../../ChildWithExtendsNoMixinsNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn",
    extends: ChildWithExtendsNoMixinsNoOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn';
        },
    }
}
</script>

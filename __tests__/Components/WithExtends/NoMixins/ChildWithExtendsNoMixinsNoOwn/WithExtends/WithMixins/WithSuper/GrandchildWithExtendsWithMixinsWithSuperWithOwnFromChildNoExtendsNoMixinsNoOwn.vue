<script>
import ChildWithExtendsNoMixinsNoOwn from "../../../../ChildWithExtendsNoMixinsNoOwn";
import GrandchildMixinWithSuper from "../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn",
    extends: ChildWithExtendsNoMixinsNoOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn';
        },
    }
}
</script>

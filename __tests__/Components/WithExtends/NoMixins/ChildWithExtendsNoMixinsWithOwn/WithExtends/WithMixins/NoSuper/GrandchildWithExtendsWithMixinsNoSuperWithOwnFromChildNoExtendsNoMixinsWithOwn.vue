<script>
import GrandchildMixinNoSuper from "../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsNoMixinsWithOwn from "../../../../ChildWithExtendsNoMixinsWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn';
        },
    }
}
</script>

<script>
import GrandchildMixinNoSuper from "../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsNoMixinsWithOwn from "../../../../ChildWithExtendsNoMixinsWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn';
        },
    }
}
</script>

<script>
import ChildWithExtendsNoMixinsWithOwn from "../../../../ChildWithExtendsNoMixinsWithOwn";
import GrandchildMixinWithSuper from "../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    mixins: [GrandchildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn';
        },
    }
}
</script>

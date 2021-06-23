<script>
import ChildWithExtendsNoMixinsWithOwn from "../../../../ChildWithExtendsNoMixinsWithOwn";
import GrandchildMixinWithSuper from "../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

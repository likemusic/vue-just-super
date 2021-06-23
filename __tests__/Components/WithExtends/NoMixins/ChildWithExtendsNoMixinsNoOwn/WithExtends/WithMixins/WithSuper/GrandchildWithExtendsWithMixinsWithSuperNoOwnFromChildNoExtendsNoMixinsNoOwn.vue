<script>
import ChildWithExtendsNoMixinsNoOwn from "../../../../ChildWithExtendsNoMixinsNoOwn";
import GrandchildMixinWithSuper from "../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsNoOwn",
    extends: ChildWithExtendsNoMixinsNoOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

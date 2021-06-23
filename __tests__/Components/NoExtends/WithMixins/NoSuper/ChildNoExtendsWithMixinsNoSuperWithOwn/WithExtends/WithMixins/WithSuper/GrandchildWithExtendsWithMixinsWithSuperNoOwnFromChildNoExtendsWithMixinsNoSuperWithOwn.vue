<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../../ChildNoExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

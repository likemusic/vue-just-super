<script>
import ChildNoExtendsWithMixinsNoSuperNoOwn from "../../../../ChildNoExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn",
    extends: ChildNoExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

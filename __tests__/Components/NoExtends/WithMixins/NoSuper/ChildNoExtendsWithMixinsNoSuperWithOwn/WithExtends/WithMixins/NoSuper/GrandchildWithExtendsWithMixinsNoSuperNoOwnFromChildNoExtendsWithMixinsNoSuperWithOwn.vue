<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../../ChildNoExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

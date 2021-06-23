<script>
import ChildNoExtendsWithMixinsNoSuperNoOwn from "../../../../ChildNoExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn",
    extends: ChildNoExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

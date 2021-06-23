<script>
import GrandchildMixinNoSuper from "../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsNoMixinsNoOwn from "../../../../ChildWithExtendsNoMixinsNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsNoOwn",
    extends: ChildWithExtendsNoMixinsNoOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

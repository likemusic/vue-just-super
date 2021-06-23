<script>
import GrandchildMixinNoSuper from "../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsNoMixinsWithOwn from "../../../../ChildWithExtendsNoMixinsWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsWithOwn",
    extends: ChildWithExtendsNoMixinsWithOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

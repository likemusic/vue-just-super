<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsWithSuperWithOwn from "../../../../ChildWithExtendsWithMixinsWithSuperWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: ChildWithExtendsWithMixinsWithSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

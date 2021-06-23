<script>
import ChildWithExtendsWithMixinsNoSuperWithOwn from "../../../../ChildWithExtendsWithMixinsNoSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: ChildWithExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

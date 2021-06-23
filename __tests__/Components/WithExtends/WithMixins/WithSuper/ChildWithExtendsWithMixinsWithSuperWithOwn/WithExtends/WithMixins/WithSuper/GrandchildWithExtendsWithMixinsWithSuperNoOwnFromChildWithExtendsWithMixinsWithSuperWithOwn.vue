<script>
import ChildWithExtendsWithMixinsWithSuperWithOwn from "../../../../ChildWithExtendsWithMixinsWithSuperWithOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: ChildWithExtendsWithMixinsWithSuperWithOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

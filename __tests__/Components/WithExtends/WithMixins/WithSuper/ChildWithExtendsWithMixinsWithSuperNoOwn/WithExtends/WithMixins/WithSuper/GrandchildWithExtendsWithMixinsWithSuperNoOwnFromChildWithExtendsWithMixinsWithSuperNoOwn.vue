<script>
import ChildWithExtendsWithMixinsWithSuperNoOwn from "../../../../ChildWithExtendsWithMixinsWithSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn",
    extends: ChildWithExtendsWithMixinsWithSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

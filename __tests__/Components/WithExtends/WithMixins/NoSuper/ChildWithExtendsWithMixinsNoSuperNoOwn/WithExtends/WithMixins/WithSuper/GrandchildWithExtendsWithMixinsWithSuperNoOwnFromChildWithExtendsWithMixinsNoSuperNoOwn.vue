<script>
import ChildWithExtendsWithMixinsNoSuperNoOwn from "../../../../ChildWithExtendsWithMixinsNoSuperNoOwn";
import GrandchildMixinWithSuper from "../../../../../../../GrandchildMixinWithSuper";

export default {
    name: "GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn",
    extends: ChildWithExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinWithSuper],
}
</script>

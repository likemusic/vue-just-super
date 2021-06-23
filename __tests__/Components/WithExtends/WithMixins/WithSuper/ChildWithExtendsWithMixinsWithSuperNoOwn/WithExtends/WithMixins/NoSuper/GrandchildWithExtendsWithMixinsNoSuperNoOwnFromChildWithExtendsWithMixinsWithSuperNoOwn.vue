<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsWithSuperNoOwn from "../../../../ChildWithExtendsWithMixinsWithSuperNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn",
    extends: ChildWithExtendsWithMixinsWithSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

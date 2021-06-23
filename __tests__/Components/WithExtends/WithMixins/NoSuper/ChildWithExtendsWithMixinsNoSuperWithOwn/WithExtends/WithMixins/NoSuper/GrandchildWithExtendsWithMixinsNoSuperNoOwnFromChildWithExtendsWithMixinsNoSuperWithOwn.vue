<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsNoSuperWithOwn from "../../../../ChildWithExtendsWithMixinsNoSuperWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: ChildWithExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsNoSuperNoOwn from "../../../../ChildWithExtendsWithMixinsNoSuperNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn",
    extends: ChildWithExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
}
</script>

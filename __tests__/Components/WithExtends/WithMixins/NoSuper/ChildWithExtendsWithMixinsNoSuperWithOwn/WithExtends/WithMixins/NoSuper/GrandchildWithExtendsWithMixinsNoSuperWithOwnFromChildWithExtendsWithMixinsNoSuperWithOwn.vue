<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsNoSuperWithOwn from "../../../../ChildWithExtendsWithMixinsNoSuperWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: ChildWithExtendsWithMixinsNoSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn';
        },
    },
}
</script>

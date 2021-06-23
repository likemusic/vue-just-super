<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsWithSuperWithOwn from "../../../../ChildWithExtendsWithMixinsWithSuperWithOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: ChildWithExtendsWithMixinsWithSuperWithOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn';
        },
    }
}
</script>

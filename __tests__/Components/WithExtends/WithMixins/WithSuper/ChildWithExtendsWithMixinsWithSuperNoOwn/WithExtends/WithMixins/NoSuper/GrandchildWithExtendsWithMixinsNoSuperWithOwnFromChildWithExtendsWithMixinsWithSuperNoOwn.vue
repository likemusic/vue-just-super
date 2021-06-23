<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsWithSuperNoOwn from "../../../../ChildWithExtendsWithMixinsWithSuperNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn",
    extends: ChildWithExtendsWithMixinsWithSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn';
        },
    }
}
</script>

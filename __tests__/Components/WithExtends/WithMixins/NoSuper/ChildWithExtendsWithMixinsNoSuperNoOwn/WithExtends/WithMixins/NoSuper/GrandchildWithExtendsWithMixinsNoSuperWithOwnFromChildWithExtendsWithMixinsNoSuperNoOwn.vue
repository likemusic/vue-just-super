<script>
import GrandchildMixinNoSuper from "../../../../../../../GrandchildMixinNoSuper";
import ChildWithExtendsWithMixinsNoSuperNoOwn from "../../../../ChildWithExtendsWithMixinsNoSuperNoOwn";

export default {
    name: "GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn",
    extends: ChildWithExtendsWithMixinsNoSuperNoOwn,
    mixins: [GrandchildMixinNoSuper],
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn';
        },
    }
}
</script>

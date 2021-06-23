<script>
import ChildWithExtendsWithMixinsNoSuperNoOwn from "../../../ChildWithExtendsWithMixinsNoSuperNoOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn",
    extends: ChildWithExtendsWithMixinsNoSuperNoOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn';
        },
    }
}
</script>

<script>
import ChildWithExtendsWithMixinsNoSuperWithOwn from "../../../ChildWithExtendsWithMixinsNoSuperWithOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: ChildWithExtendsWithMixinsNoSuperWithOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn';
        },
    }
}
</script>

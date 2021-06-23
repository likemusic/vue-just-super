<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../ChildNoExtendsWithMixinsNoSuperWithOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn';
        },
    }
}
</script>

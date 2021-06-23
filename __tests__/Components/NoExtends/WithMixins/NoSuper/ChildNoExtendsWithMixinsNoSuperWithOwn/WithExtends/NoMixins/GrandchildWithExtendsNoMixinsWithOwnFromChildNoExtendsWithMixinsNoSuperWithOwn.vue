<script>
import ChildNoExtendsWithMixinsNoSuperWithOwn from "../../../ChildNoExtendsWithMixinsNoSuperWithOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn",
    extends: ChildNoExtendsWithMixinsNoSuperWithOwn,
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn';
        },
    }
}
</script>

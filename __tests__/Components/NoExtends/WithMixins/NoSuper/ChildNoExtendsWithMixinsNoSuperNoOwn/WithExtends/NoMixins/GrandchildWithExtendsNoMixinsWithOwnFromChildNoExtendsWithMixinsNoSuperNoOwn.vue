<script>
import ChildNoExtendsWithMixinsNoSuperNoOwn from "../../../ChildNoExtendsWithMixinsNoSuperNoOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn",
    extends: ChildNoExtendsWithMixinsNoSuperNoOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn';
        },
    }
}
</script>

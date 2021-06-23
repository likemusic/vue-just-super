<script>
import ChildWithExtendsNoMixinsNoOwn from "../../../ChildWithExtendsNoMixinsNoOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn",
    extends: ChildWithExtendsNoMixinsNoOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn';
        },
    }
}
</script>

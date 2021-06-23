<script>
import ChildWithExtendsWithMixinsWithSuperNoOwn from "../../../ChildWithExtendsWithMixinsWithSuperNoOwn";

export default {
    name: "GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn",
    extends: ChildWithExtendsWithMixinsWithSuperNoOwn,
    methods: {
        helloMessage() {
            return this.$super() + ' > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn';
        },
    }
}
</script>

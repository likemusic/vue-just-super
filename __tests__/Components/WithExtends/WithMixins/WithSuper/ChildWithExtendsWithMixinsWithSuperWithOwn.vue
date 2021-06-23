<script>

import Extends from "../../../Extends";
import ChildMixinWithSuper from "../../../ChildMixinWithSuper";

export default {
    name: "ChildWithExtendsWithMixinsWithSuperWithOwn",
    extends: Extends,
    mixins: [ChildMixinWithSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > ChildWithExtendsWithMixinsWithSuperWithOwn';
        },
    },
}
</script>

<script>

import Extends from "../../../Extends";
import ChildMixinNoSuper from "../../../ChildMixinNoSuper";

export default {
    name: "ChildWithExtendsWithMixinsNoSuperWithOwn",
    extends: Extends,
    mixins: [ChildMixinNoSuper],
    methods: {
        helloMessage() {
            return this.$super() + ' > ChildWithExtendsWithMixinsNoSuperWithOwn';
        },
    },
}
</script>

<script>

import ChildMixinNoSuper from "../../../ChildMixinNoSuper";
import FakeMixin from "./ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/NoMixins/FakeMixin";

export default {
    name: "ChildNoExtendsWithMixinsNoSuperWithOwn",
    mixins: [ChildMixinNoSuper, FakeMixin,],
    methods: {
        helloMessage() {
            debugger;
            return this.$super() + ' > ChildNoExtendsWithMixinsNoSuperWithOwn';
        },
    },
}
</script>

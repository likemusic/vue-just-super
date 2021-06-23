<script>

import Extends from "../../Extends";

export default {
    name: "ChildWithExtendsNoMixinsWithOwn",
    extends: Extends,
    methods: {
        helloMessage() {
            return this.$super() + ' > ChildWithExtendsNoMixinsWithOwn';
        },
    },
}
</script>

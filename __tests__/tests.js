/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/vue';
import Extends from "./Components/Extends";

import ChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";
import GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn";


import ChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";


import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn
    from "./Components/NoExtends/WithMixins/NoSuper/ChildNoExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn";

import ChildWithExtendsNoMixinsNoOwn from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsNoMixinsNoOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn";



import ChildWithExtendsNoMixinsWithOwn from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn";

import GrandchildWithExtendsNoMixinsNoOwnForChildWithExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnForChildWithExtendsNoMixinsWithOwn";

import GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn";


import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn
    from "./Components/WithExtends/NoMixins/ChildWithExtendsNoMixinsWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn";

import ChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn";



import ChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn
    from "./Components/WithExtends/WithMixins/NoSuper/ChildWithExtendsWithMixinsNoSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn";


import ChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperNoOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn";



import ChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/NoMixins/GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/WithMixins/NoSuper/GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn
    from "./Components/WithExtends/WithMixins/WithSuper/ChildWithExtendsWithMixinsWithSuperWithOwn/WithExtends/WithMixins/WithSuper/GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn";

import VueJustSuper from "../index";

function initVue(vue) {
    vue.use(VueJustSuper);
}

// [Base]
// [Base > Extends]
test('[Extends]', async () => {
    const {getByText} = render(Extends, {}, initVue);

    getByText('Extends: Extends');
});

// with/no extends, with/no mixins (with/no super), with/no own


// [Child]

// [Child (no extends)]
// [Child (no extends, no mixins)] - no sense

// [Child (no extends, with mixins)]
// [Child (no extends, with mixins (no super))]
// [Child (no extends, with mixins (no super), no own)]
test('[Child (no extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(ChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('ChildNoExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (no extends)] - no sense

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins)]
// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins)]
// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: GrandchildMixinNoSuper');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildMixinWithSuper');
});

// [Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (no extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperNoOwn');
});


// [Child (no extends, with mixins (no super), with own)]
test('[Child (no extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(ChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('ChildNoExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildNoExtendsWithMixinsNoSuperWithOwn');
});

// [Child (no extends, with mixins (no super), with own)] > [Grandchild (no extends)] - no sense

// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins)]
// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildNoExtendsWithMixinsNoSuperWithOwn');
});

// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildNoExtendsWithMixinsNoSuperWithOwn > GrandchildWithExtendsNoMixinsWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn');
});


// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins)]
// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: GrandchildMixinNoSuper');
});

// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn');
});


// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildNoExtendsWithMixinsNoSuperWithOwn > GrandchildMixinWithSuper');
});

// [Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (no extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildNoExtendsWithMixinsNoSuperWithOwn > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsWithMixinsNoSuperWithOwn');
});

// [Child (no extends, with mixins (with super))] - no sense

// [Child (with extends)]
// [Child (with extends, no mixins)]
// [Child (with extends, no mixins, no own)]
test('[Child (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(ChildWithExtendsNoMixinsNoOwn, {}, initVue);

    getByText('ChildWithExtendsNoMixinsNoOwn: Extends');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (no extends)] - no sense

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, no mixins)]
// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsNoMixinsNoOwn: Extends');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn: Extends > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsNoMixinsNoOwn');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins)]
// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsNoOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsNoOwn');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsNoOwn: Extends > GrandchildMixinWithSuper');
});

// [Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, no mixins, no own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn: Extends > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsNoOwn');
});


// [Child (with extends, no mixins, with own)]
test('[Child (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(ChildWithExtendsNoMixinsWithOwn, {}, initVue);

    getByText('ChildWithExtendsNoMixinsWithOwn: Extends > ChildWithExtendsNoMixinsWithOwn');
});

// [Child (with extends, no mixins, with own] > [Grandchild (no extends)] - no sense

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, no mixins)]
// [Child (with extends, no mixins, with own] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnForChildWithExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnForChildWithExtendsNoMixinsWithOwn: Extends > ChildWithExtendsNoMixinsWithOwn');
});

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn: Extends > ChildWithExtendsNoMixinsWithOwn > GrandchildWithExtendsNoMixinsWithOwnForChildWithExtendsNoMixinsWithOwn');
});

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins)]
// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildNoExtendsNoMixinsWithOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildNoExtendsNoMixinsWithOwn');
});

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildNoExtendsNoMixinsWithOwn: Extends > ChildWithExtendsNoMixinsWithOwn > GrandchildMixinWithSuper');
});

// [Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, no mixins, with own] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn: Extends > ChildWithExtendsNoMixinsWithOwn > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildNoExtendsNoMixinsWithOwn');
});


// [Child (with extends, with mixins)]
// [Child (with extends, with mixins (no super))]
// [Child (with extends, with mixins (no super), no own)]
test('[Child (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(ChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('ChildWithExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (no extends)] - no sense

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins)]
// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins)]
// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildMixinWithSuper');
});

// [Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, with mixins (no super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn: ChildMixinNoSuper > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperNoOwn');
});


// [Child (with extends, with mixins (no super), with own)]
test('[Child (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(ChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('ChildWithExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildWithExtendsWithMixinsNoSuperWithOwn');
});

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (no extends)] - no sense

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins)]
// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildWithExtendsWithMixinsNoSuperWithOwn');
});

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildWithExtendsWithMixinsNoSuperWithOwn > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn');
});

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins)]
// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn');
});


// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildWithExtendsWithMixinsNoSuperWithOwn > GrandchildMixinWithSuper');
});

// [Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, with mixins (no super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn: ChildMixinNoSuper > ChildWithExtendsWithMixinsNoSuperWithOwn > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsNoSuperWithOwn');
});

// [Child (with extends, with mixins (with super))]
// [Child (with extends, with mixins (with super), no own)]
test('[Child (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(ChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('ChildWithExtendsWithMixinsWithSuperNoOwn: Extends > ChildMixinWithSuper');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (no extends)] - no sense

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, no mixins)]
// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: Extends > ChildMixinWithSuper');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: Extends > ChildMixinWithSuper > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins)]
// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: Extends > ChildMixinWithSuper > GrandchildMixinWithSuper');
});

// [Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, with mixins (with super), no own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn: Extends > ChildMixinWithSuper > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperNoOwn');
});


// [Child (with extends, with mixins (with super), with own)]
test('[Child (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(ChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('ChildWithExtendsWithMixinsWithSuperWithOwn: Extends > ChildMixinWithSuper > ChildWithExtendsWithMixinsWithSuperWithOwn');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (no extends)] - no sense

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, no mixins)]
// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, no mixins, no own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, no mixins, no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: Extends > ChildMixinWithSuper > ChildWithExtendsWithMixinsWithSuperWithOwn');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, no mixins, with own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, no mixins, with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: Extends > ChildMixinWithSuper > ChildWithExtendsWithMixinsWithSuperWithOwn > GrandchildWithExtendsNoMixinsWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins)]
// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (no super))]
// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (no super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: GrandchildMixinNoSuper');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (no super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: GrandchildMixinNoSuper > GrandchildWithExtendsWithMixinsNoSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (with super))]
// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (with super), no own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperNoOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: Extends > ChildMixinWithSuper > ChildWithExtendsWithMixinsWithSuperWithOwn > GrandchildMixinWithSuper');
});

// [Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]
test('[Child (with extends, with mixins (with super), with own)] > [Grandchild (with extends, with mixins (with super), with own)]', async () => {
    const {getByText} = render(GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn, {}, initVue);

    getByText('GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn: Extends > ChildMixinWithSuper > ChildWithExtendsWithMixinsWithSuperWithOwn > GrandchildMixinWithSuper > GrandchildWithExtendsWithMixinsWithSuperWithOwnFromChildWithExtendsWithMixinsWithSuperWithOwn');
});

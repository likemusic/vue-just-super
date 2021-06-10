# vue-just-super

Vue 2 plugin that allows you to call `this.$super(arguments)` in vue child component's methods (components composed
by `extends` or `mixins` options).

## Installation

Install plugin by running:

```bash
npm npm i --save vue-just-super
```

or

```
yarn add vue-just-super
```

Then in you app code import and use it as vue plugin:

```javascript
import VueJustSuper from "vue-just-super";

Vue.use(VueJustSuper);
```

## Usage

For example, your base component is:

```
<!-- Base.vue -->
<template>
    <div>{{ wrappedHello() }}</div>
</template>

<script>
    export default {
        name: "Base",
        methods: {
            hello() {
                console.log('Hello from Base!');
            },
            wrappedHello() {
                console.log('--- ' . this.options.name . ' ---');
                this.hello();
            }
        }
    }
</script>
```

Child component that extends base component is:

```
<!-- Child.vue -->
<script>
    import Child from './Base';
    
    export default {
        name: "Child",
        extends: Base,
        methods: {
            hello() {
                this.$super();
                
                console.log('Hello from Child!');
            }
        }
    }
</script>
```

If your app has template:

```xml

<div>
    <base/>
    <child/>
</div>
```

you will see in console:

```
--- Base ---
Hello from Base!

--- Child ---
Hello from Base!
Hello from Child!

```

You could do the same if you compose your component by `mixins` option. Also, you could call grandparent methods in
deep-nested inherited child.

## Implementation details

In `this.$super` parents recursively iterated for lookup method with name given from stacktrace and then call it
with [apply()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).

## Motivation

According
to ["super() in a method overriden via Vue.extend"](https://github.com/vuejs/vue/issues/2977#issuecomment-222878609)
thread [Evan You](https://github.com/yyx990803)  don't want to introduce `this.$super()` (and I still don't understand
why while `extends` and `mixins` options exists).

Unfortunately exists implementation like [vue-super](https://www.npmjs.com/package/vue-super)
/ [vue-super-call](https://www.npmjs.com/package/vue-super-call) / etc. required to pass base component to super-method
and/or not supports deep-nested inheritance.

So to have possibilities to call in child component method from parent component by just call `this.$super(arguments)`
this module has been created.

## TODO

- Share methods cache between instances of the same component;
- Maybe use generator when iterate inheritance tree for lookup method on different level (to skip iteration over already
  found levels). 

import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: "cu-button"
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " button "))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export default script;

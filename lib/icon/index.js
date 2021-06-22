import { defineComponent, openBlock, createBlock, createTextVNode, createVNode } from 'vue';

var script = defineComponent({
    name: 'cu-icon'
});

const _hoisted_1 = /*#__PURE__*/createTextVNode(" icon ");
const _hoisted_2 = /*#__PURE__*/createVNode("i", { class: "cu-icon-jiazai" }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, [
    _hoisted_1,
    _hoisted_2
  ]))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};

export default script;

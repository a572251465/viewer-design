import { defineComponent, openBlock, createBlock, createTextVNode, createVNode } from 'vue';

var script$1 = defineComponent({
    name: "cu-button"
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " button "))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};

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

const components = [
    script$1,
    script
];
const install = (app) => {
    components.forEach(compoennt => {
        app.component(compoennt.name, compoennt);
    });
};
var index = { install };

export default index;

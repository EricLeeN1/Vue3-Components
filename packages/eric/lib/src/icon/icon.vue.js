"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.scss.js");
const _hoisted_1 = { class: "ea-icon" };
const __default__ = vue.defineComponent({ name: "ea-icon" });
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, "Icon");
    };
  }
});
exports.default = _sfc_main;

import React from "react";
import * as _Builtin from "./_Builtin";
import { Close } from "./Close";
import { Save } from "./Save";
import { Expand } from "./Expand";
import * as _utils from "./utils";
import _styles from "./Menu.module.css";

export function Menu({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "menu")}
      id={_utils.cx(
        _styles,
        "w-node-d1190aa0-d8ee-2c9f-239e-a20622595a58-22595a58"
      )}
      tag="div"
    >
      <Close />
      <_Builtin.Block tag="div">
        <Save />
        <Expand />
      </_Builtin.Block>
    </_Component>
  );
}

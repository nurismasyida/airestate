import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PointGreen.module.css";

export function PointGreen({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "bigger-green")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "green")} tag="div" />
    </_Component>
  );
}

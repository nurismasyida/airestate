import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./House.module.css";

export function House({ as: _Component = _Builtin.Block, house }) {
  return (
    <_Component className={_utils.cx(_styles, "house")} tag="div">
      {house}
    </_Component>
  );
}

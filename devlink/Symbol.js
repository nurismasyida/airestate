import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Symbol.module.css";

export function Symbol({ as: _Component = _Builtin.Block, symbol }) {
  return (
    <_Component className={_utils.cx(_styles, "symbol")} tag="div">
      {symbol}
    </_Component>
  );
}

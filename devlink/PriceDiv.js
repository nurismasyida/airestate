import React from "react";
import * as _Builtin from "./_Builtin";
import { PointGreen } from "./PointGreen";
import { Price } from "./Price";
import * as _utils from "./utils";
import _styles from "./PriceDiv.module.css";

export function PriceDiv({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-price")}
      id={_utils.cx(
        _styles,
        "w-node-ce94eb6c-a3e5-4e16-2321-14176b82f097-6b82f097"
      )}
      tag="div"
    >
      <PointGreen />
      <Price />
    </_Component>
  );
}

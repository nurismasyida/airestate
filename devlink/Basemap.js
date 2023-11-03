import React from "react";
import * as _Builtin from "./_Builtin";
import { NavbarTest } from "./NavbarTest";
import { Info } from "./Info";
import * as _utils from "./utils";
import _styles from "./Basemap.module.css";

export function Basemap({
  as: _Component = _Builtin.Block,
  mapbase,
  housing = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "map-container")} tag="div">
      {mapbase ?? (
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          <NavbarTest />
          <Info />
        </_Builtin.Block>
      )}
    </_Component>
  );
}

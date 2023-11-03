import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContainerNone.module.css";

export function ContainerNone({
  as: _Component = _Builtin.BlockContainer,
  fillcon = {},
  map,
  mapLayer,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "map-container")}
      grid={{
        type: "container",
      }}
      tag="div"
      {...fillcon}
    >
      {mapLayer}
    </_Component>
  );
}

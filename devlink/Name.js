import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Name.module.css";

export function Name({ as: _Component = _Builtin.Heading, name }) {
  return (
    <_Component
      className={_utils.cx(_styles, "name")}
      id={_utils.cx(
        _styles,
        "w-node-_8d8979e1-b819-95ce-7d21-fc6e97e6e9a5-97e6e9a5"
      )}
      tag="h3"
    >
      {name ?? "Whispering Oaks"}
    </_Component>
  );
}

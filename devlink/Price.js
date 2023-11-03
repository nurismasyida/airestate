import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Price.module.css";

export function Price({ as: _Component = _Builtin.Paragraph, price }) {
  return (
    <_Component
      className={_utils.cx(_styles, "price")}
      id={_utils.cx(
        _styles,
        "w-node-c73f71ff-44a5-efc1-fbc8-dcafb1ee2b27-b1ee2b27"
      )}
    >
      {price ?? "$3,800,006"}
    </_Component>
  );
}

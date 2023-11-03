import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Detail.module.css";

export function Detail({ as: _Component = _Builtin.Paragraph, detail }) {
  return (
    <_Component
      className={_utils.cx(_styles, "bed")}
      id={_utils.cx(
        _styles,
        "w-node-_5a1fafe9-3ed9-7b39-fb78-7788a00e0232-a00e0232"
      )}
    >
      {detail ?? "3 bed | 2 bath | 3104 sqft"}
    </_Component>
  );
}

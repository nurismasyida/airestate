import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,
  quote = "Buy Property",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-test")}
      button={true}
      options={{
        href: "#",
      }}
    >
      {quote}
    </_Component>
  );
}

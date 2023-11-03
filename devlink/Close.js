import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Close.module.css";

export function Close({
  as: _Component = _Builtin.Link,

  close = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "link-block")}
      id={_utils.cx(
        _styles,
        "w-node-_11fd756e-042c-bee5-d87e-2323becb94b9-becb94b9"
      )}
      button={false}
      options={close}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-2")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/653677b948d5d558fe88d476_icons8-multiply-32.png"
      />
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Expand.module.css";

export function Expand({
  as: _Component = _Builtin.Link,

  expand = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "link-block")}
      id={_utils.cx(
        _styles,
        "w-node-da51e1db-48cd-2fbc-310a-a914b7c1b326-b7c1b326"
      )}
      button={false}
      options={expand}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-4")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/65367813bcdd457c406d517e_icons8-expand-50.png"
      />
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Save.module.css";

export function Save({
  as: _Component = _Builtin.Link,

  save = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "save")}
      id={_utils.cx(
        _styles,
        "w-node-_26017a38-0d54-92e8-cfa5-377294275edc-94275edc"
      )}
      button={false}
      options={save}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-3")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/653677fcd580351e757f6ee2_icons8-bookmark-50.png"
      />
    </_Component>
  );
}

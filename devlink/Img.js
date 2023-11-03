import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Img.module.css";

export function Img({
  as: _Component = _Builtin.Image,
  img = "https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/653675af93cc2615807ec289_Screen%20Shot%202023-10-23%20at%208.30.29%20PM.png",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "img")}
      id={_utils.cx(
        _styles,
        "w-node-beba709e-1333-f9d7-9b2a-3c5e18670373-18670373"
      )}
      loading="lazy"
      width="auto"
      height="auto"
      alt=""
      src={img}
    />
  );
}

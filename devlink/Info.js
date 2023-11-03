import React from "react";
import * as _Builtin from "./_Builtin";
import { Menu } from "./Menu";
import { Img } from "./Img";
import { Name } from "./Name";
import { Detail } from "./Detail";
import { PriceDiv } from "./PriceDiv";
import * as _utils from "./utils";
import _styles from "./Info.module.css";

export function Info({ as: _Component = _Builtin.Block, info }) {
  return (
    <_Component className={_utils.cx(_styles, "info")} tag="div">
      {info ?? (
        <>
          <Menu />
          <Img />
          <Name />
          <Detail />
          <PriceDiv />
        </>
      )}
    </_Component>
  );
}

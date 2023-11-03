import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./ContainerTest.module.css";

export function ContainerTest({
  as: _Component = _Builtin.BlockContainer,
  buttonTestText = "Buy Property",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "container-test")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading-test")} tag="h1">
        {"Real Estate"}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-test")}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
        }
      </_Builtin.Paragraph>
      <Button quote={buttonTestText} />
      <_Builtin.Layout
        className={_utils.cx(_styles, "grid-test")}
        id={_utils.cx(
          _styles,
          "w-node-d5bb563e-45e4-6031-3f41-c918c7195e1b-c7195e14"
        )}
      >
        <_Builtin.Cell>
          <_Builtin.Block className={_utils.cx(_styles, "div-test")} tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-test")}
              tag="h1"
            >
              {"$100.000"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-test")}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Cell>
        <_Builtin.Cell>
          <_Builtin.Image
            className={_utils.cx(_styles, "img-text")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/652646f39c6b8376d30582dc_8.png"
          />
        </_Builtin.Cell>
      </_Builtin.Layout>
      <Button />
    </_Component>
  );
}

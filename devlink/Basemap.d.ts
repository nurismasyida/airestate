import * as React from "react";
import * as Types from "./types";

declare function Basemap(props: {
  as?: React.ElementType;
  mapbase?: Types.Devlink.Slot;
  housing?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

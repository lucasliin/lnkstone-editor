import LnkstoneEditor from "./LnkstoneEditor";

export type ToolbarKeys =
  | "divider"
  | "undo"
  | "redo"
  | "fontSize"
  | "lineHeight"
  | "letterSpacing"
  | "fontColor"
  | "backgroundColor"
  | "bold"
  | "italic"
  | "underLine"
  | "strikeThrough"
  | "subscript"
  | "superscript"
  | "clearFormatting"
  | "emoji"
  | "outdent"
  | "indent"
  | "textAlignLeft"
  | "textAlignCenter"
  | "textAlignRight"
  | "textAlignJustify"
  | "listBullet"
  | "listNumber"
  | "listCheck"
  | "quote"
  | "image"
  | "video"
  | "link"
  | "horizontalRule"
  | "table"
  | "clearUp"
  | "code";

export type ToolbarOverflowType = "fill" | "scroll" | "expand";

export const DEFAULT_TOOLBAR_CONFIG: ToolbarKeys[] = [
  "undo",
  "redo",
  "divider",
  "fontSize",
  "lineHeight",
  "letterSpacing",
  "divider",
  "fontColor",
  "backgroundColor",
  "bold",
  "italic",
  "underLine",
  "strikeThrough",
  "divider",
  "subscript",
  "superscript",
  "clearFormatting",
  "emoji",
  "divider",
  "outdent",
  "indent",
  "textAlignLeft",
  "textAlignCenter",
  "textAlignRight",
  "textAlignJustify",
  "divider",
  "listBullet",
  "listNumber",
  "listCheck",
  "quote",
  "divider",
  "image",
  "video",
  "link",
  "horizontalRule",
  "table",
  "divider",
  "clearUp",
  "code",
];

export default LnkstoneEditor;

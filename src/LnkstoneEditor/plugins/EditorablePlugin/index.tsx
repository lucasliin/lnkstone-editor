import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useEffect } from "react";

import { useSettings } from "../../context/SettingsContext";

interface EditorPluginProps {
  disabled?: boolean;
}

const EditorPlugin: React.FC<EditorPluginProps> = (props) => {
  const { disabled } = props;
  const { setOption } = useSettings();

  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (disabled === undefined) return;
    setOption("disabled", disabled);
    editor.setEditable(!disabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, disabled]);

  return <div></div>;
};

export default EditorPlugin;

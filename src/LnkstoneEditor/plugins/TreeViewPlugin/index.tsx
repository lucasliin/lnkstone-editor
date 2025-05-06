import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";
import "../../themes/TreeViewTheme.css";

export default function TreeViewPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  return (
    <TreeView
      editor={editor}
      timeTravelPanelSliderClassName="lexicaltheme__treeview_travelPanelSlider"
      timeTravelPanelClassName="lexicaltheme__treeview_travelPanel"
      treeTypeButtonClassName="lexicaltheme__treeview_button"
      timeTravelButtonClassName="lexicaltheme__treeview_button"
      timeTravelPanelButtonClassName="lexicaltheme__treeview_travePanelButton"
      viewClassName="lexicaltheme__treeview"
    />
  );
}

import { useState } from "react";

import { createEditor, BaseEditor, Descendant } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initial: Descendant[] = [
  { type: "paragraph", children: [{ text: "a line of text" }] },
];
function RichTextEditor() {
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <div>
      <Slate editor={editor} value={initial}>
        <Editable />
      </Slate>
    </div>
  );
}

export default RichTextEditor;

const createLinkNode = (href: string, text: string) => ({
  type: "link",
  href,
  children: [{ text }],
});
function insertLink(editor: BaseEditor & ReactEditor, url: string) {
  if (!url) return;
  const { selection } = editor;
  const link = createLinkNode(url, "New Link");
}

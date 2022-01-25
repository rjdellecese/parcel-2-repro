import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { defaultHighlightStyle } from "@codemirror/highlight";

const codemirrorDiv = <HTMLElement>document.getElementById("codemirror");

const editorState = EditorState.create({
  extensions: [defaultHighlightStyle.fallback],
});

new EditorView({ state: editorState, parent: codemirrorDiv });

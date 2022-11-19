import React, { useRef } from "react";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import "@draft-js-plugins/static-toolbar/lib/plugin.css";

import createToolbarPlugin, {
  Separator,
} from "@draft-js-plugins/static-toolbar";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from "@draft-js-plugins/buttons";
import { useEffect, useState } from "react";
import {
  EditorContainer,
  HeadlineButton,
  HeadlineButtonWrapper,
} from "./Draft.styled";

const HeadlinesPicker = (props) => {
  useEffect(() => {
    const onWindowClick = () => props.onOverrideContent(undefined);
    setTimeout(() => {
      window.addEventListener("click", onWindowClick);
    });
    return () => {
      window.addEventListener("click", onWindowClick);
    };
  }, [props]);

  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
  return (
    <div>
      {buttons.map((Button, i) => (
        <Button key={i} {...props} />
      ))}
    </div>
  );
};

const HeadlinesButton = (props) => {
  const showHeadLinesPicker = () => {
    props.onOverrideContent(HeadlinesPicker);
  };

  return (
    <HeadlineButtonWrapper>
      <HeadlineButton onClick={showHeadLinesPicker}>H</HeadlineButton>
    </HeadlineButtonWrapper>
  );
};

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

const Draft = (props) => {
  const [editor, setEditor] = useState(
    createEditorStateWithText(
      "In this editor a toolbar shows up once you select part of the text …"
    )
  );
  const editorEl = useRef(null),
    editorContainerEl = useRef(null);

  const editorHanlder = (editorState) => {
    setEditor(editorState);
  };

  const focusHandler = () => {
    editorEl.current.focus();
    editorContainerEl.current.style.background = "#f9f6fe";
    editorContainerEl.current.style.borderColor = "#5d25e7";
  };

  return (
    <EditorContainer
      ref={editorContainerEl}
      onFocus={focusHandler}
      onBlur={() => {
        editorContainerEl.current.style.background = "#f4f4f5";
        editorContainerEl.current.style.borderColor = "#ddd";
      }}
    >
      <Editor
        editorState={editor}
        onChange={editorHanlder}
        plugins={plugins}
        ref={editorEl}
      />
      <Toolbar>
        {(externalProps) => (
          <>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            <Separator {...externalProps} />
            {/* <HeadlinesButton {...externalProps} /> */}
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            {/* <BlockquoteButton {...externalProps} /> */}
            {/* <CodeBlockButton {...externalProps} /> */}
          </>
        )}
      </Toolbar>
    </EditorContainer>
  );
};

export default Draft;

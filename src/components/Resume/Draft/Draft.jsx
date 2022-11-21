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
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
import {
  EditorContainer,
  HeadlineButton,
  HeadlineButtonWrapper,
} from "./Draft.styled";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "~/store/resume-slice";

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
  const {
    achievement,
    summary,
    education,
    experience,
    hobby,
    skill,
    certificate,
  } = useSelector((state) => state.resume);

  const editorStateEntriesSection = (type, value = {}, dHtml = "", idx = 0) => {
    switch (type) {
      case "Education": {
        dispatch(
          resumeActions.setEducationDescriptionHtml({
            index: idx,
            descriptionHtml: dHtml,
          })
        );

        return dispatch(
          resumeActions.setEducationEditorState({
            index: idx,
            editorState: value,
          })
        );
      }
      case "Experience": {
        dispatch(
          resumeActions.setExperienceDescriptionHtml({
            index: idx,
            descriptionHtml: dHtml,
          })
        );
        return dispatch(
          resumeActions.setExperienceEditorState({
            index: idx,
            editorState: value,
          })
        );
      }
      case "Skill": {
        dispatch(
          resumeActions.setSkillDescriptionHtml({
            index: idx,
            descriptionHtml: dHtml,
          })
        );
        return dispatch(
          resumeActions.setSkillEditorState({ index: idx, editorState: value })
        );
      }
      case "Certificate": {
        dispatch(
          resumeActions.setCertificateDescriptionHtml({
            index: idx,
            descriptionHtml: dHtml,
          })
        );
        return dispatch(
          resumeActions.setCertificateEditorState({
            index: idx,
            editorState: value,
          })
        );
      }
      case "Hobby": {
        dispatch(
          resumeActions.setHobbyDescriptionHtml({
            index: idx,
            descriptionHtml: dHtml,
          })
        );
        return dispatch(
          resumeActions.setHobbyEditorState({ index: idx, editorState: value })
        );
      }
      default:
        return null;
    }
  };
  const editorState =
    props.type === "Summary"
      ? summary?.editorState
      : props.type === "Achievements"
      ? achievement?.editorState
      : props.type === "Education"
      ? education?.[props.idx].editorState
      : props.type === "Experience"
      ? experience?.[props.idx].editorState
      : props.type === "Skill"
      ? skill?.[props.idx].editorState
      : props.type === "Hobby"
      ? hobby?.[props.idx].editorState
      : props.type === "Certificate"
      ? certificate?.[props.idx].editorState
      : createEditorStateWithText("");
  const editorEl = useRef(null),
    editorContainerEl = useRef(null);
  const dispatch = useDispatch();

  const editorHanlder = (editorState) => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());

    const html = draftToHtml(rawContentState);
    if (props.isEntriesSection) {
      editorStateEntriesSection(props.type, editorState, html, props.idx);
    } else {
      switch (props.type) {
        case "Summary": {
          dispatch(
            resumeActions.setSummary({
              summary: { descriptionHtml: html, editorState },
            })
          );
          break;
        }
        case "Achievements": {
          dispatch(
            resumeActions.setAchievement({
              achievement: { descriptionHtml: html, editorState },
            })
          );
          break;
        }
        default:
          break;
      }
    }
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
        editorState={editorState}
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

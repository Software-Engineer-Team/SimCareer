import React, { Fragment, useRef } from "react";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import createTextAlignmentPlugin from "@draft-js-plugins/text-alignment";
import createLinkPlugin from "@draft-js-plugins/anchor";
/* import "@draft-js-plugins/static-toolbar/lib/plugin.css"; */
import "@draft-js-plugins/text-alignment/lib/plugin.css";
import "@draft-js-plugins/anchor/lib/plugin.css";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import linkStyles from "./linkStyles.module.css";

/* import createToolbarPlugin, { */
/*   Separator, */
/* } from "@draft-js-plugins/static-toolbar"; */
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from "@draft-js-plugins/buttons";
import {
  convertToRaw,
  EditorState,
  convertFromHTML,
  ContentState,
  CompositeDecorator,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
import {
  EditorContainer,
  HeadlineButton,
  HeadlineButtonWrapper,
} from "./Draft.styled";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "@store/resume-slice";
import { stateToHTML } from "draft-js-export-html";

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

const linkPlugin = createLinkPlugin({
  theme: linkStyles,
  placeholder: "http://…",
});

const { LinkButton } = linkPlugin;

const textAlignmentPlugin = createTextAlignmentPlugin();
const { TextAlignment } = textAlignmentPlugin;

/* const toolbarPlugin = createToolbarPlugin(); */
/* const { Toolbar } = toolbarPlugin; */

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  /* toolbarPlugin, */
  inlineToolbarPlugin,
  linkPlugin,
  textAlignmentPlugin,
];

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

  const editorEl = useRef(null);
  const editorContainerEl = useRef(null);
  const dispatch = useDispatch();

  /* const blockStyleFn = (block) => { */
  /*   let alignment = "left"; */
  /*   console.log(block); */
  /*   block.findStyleRanges((e) => { */
  /*     console.log(e); */
  /*     if (e.hasStyle("center")) { */
  /*       alignment = "center"; */
  /*     } */
  /*     if (e.hasStyle("right")) { */
  /*       alignment = "right"; */
  /*     } */
  /*   }); */
  /*   console.log(alignment); */
  /*   return `editor-alignment-${alignment}`; */
  /* }; */

  const editorHanlder = (editorState) => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    console.log(rawContentState);
    let options = {
      defaultBlockTag: "p",
      blockStyleFn: (block) => {
        let alignment = "left";
        block.findStyleRanges((e) => {
          if (e.hasStyle("center")) {
            alignment = "center";
          }
          if (e.hasStyle("right")) {
            alignment = "right";
          }
        });

        let style = { textAlign: alignment };
        return { style };
      },
      /* entityStyleFn: (entity) => { */
      /*   const entityType = entity.get("type").toLowerCase(); */
      /*   console.log(entityType); */
      /*   if (entityType === "image") { */
      /*     const data = entity.getData(); */
      /*     return { */
      /*       element: "img", */
      /*       attributes: { */
      /*         src: data.src, */
      /*       }, */
      /*       style: { */
      /*         // Put styles here... */
      /*       }, */
      /*     }; */
      /*   } */
      /* }, */
    };
    let html = stateToHTML(editorState.getCurrentContent(), options);
    console.log(html);
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
        /* blockStyleFn={blockStyleFn} */
      />
      {/* <Toolbar> */}
      {/*   {(externalProps) => ( */}
      {/*     <Fragment> */}
      {/*       <BoldButton {...externalProps} /> */}
      {/*       <ItalicButton {...externalProps} /> */}
      {/*       <UnderlineButton {...externalProps} /> */}
      {/*       <LinkButton {...externalProps} /> */}
      {/*       <Separator {...externalProps} /> */}
      {/*       <UnorderedListButton {...externalProps} /> */}
      {/*       <OrderedListButton {...externalProps} /> */}
      {/*       <TextAlignment {...externalProps} /> */}
      {/*     </Fragment> */}
      {/*   )} */}
      {/* </Toolbar> */}

      <InlineToolbar>
        {
          // may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <TextAlignment {...externalProps} />
              <LinkButton {...externalProps} />
            </div>
          )
        }
      </InlineToolbar>
    </EditorContainer>
  );
};

export default Draft;

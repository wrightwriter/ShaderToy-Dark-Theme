// ==UserScript==
// @name         ShaderToy Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  dark theme for shadertoy
// @author       You
// @match        *.shadertoy.com/*
// @grant        none
// ==/UserScript==

// @run-at       document-begin
// @require      https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

(function() {
    'use strict';

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = `
    /* ------------------- DARKMODE THEME ---------------------- */
    body {
        background:#808080 ;
    }
    /* --- EDITOR --- */
    .CodeMirror {
      background-color: #1a1a1a;
    }
    .CodeMirror-scroll {
        color: white;
        background-color:  #1a1a1a;

    }
    .CodeMirror-gutters {
        background-color: #404040;
        border-right: 2px solid #808080;
    }
    .CodeMirror-selected{
      background:#353434 !important;
    }
    /* keywords */
    .cm-builtin {
      color: #758aff !important;
    }

    .cm-s-default .cm-meta {
        color: #afafaf;
    }
    .cm-s-default .cm-number {
        color: #14a86d;
    }
    .cm-s-default .cm-keyword {
      color: #d105ee;
    }


    .CodeMirror-cursor {
        border-left: 2px solid #b3ffd9;
        width: 0;
    }
    .CodeMirror-cursors {
        border-left: 2px solid #b3ffd9;
        width: 0;
    }

    /* --- BARS --- */

    div#editorHeaderBar {
        background-color: #b2b2b2;
    }
    div#editorHeader {
        background-color: #b2b2b2;
    } 
    .playerBar {
        background-color: #b2b2b2;
    }
    .inputSelectorControls {
        background-color: #b2b2b2;
    }
    .inputForm {
        color: white;
        background-color: #191919;
    }
    .inputForm:focus {
        color: white;
        background-color: #191919;
        border: grey;
    }
    div#toolBar {
        background-color: #b2b2b2 ;
    }

    /* --- FORMS --- */
    
    div.inputForm #commentTextArea{
      background-color:#a9a9a9 ;
    }
    #commentTextArea  {
      background-color:#a9a9a9;
    }
    .formButton {
      background-color: #222222;
    }

    /* --- SHADERTOY EXTENSION --- */

    .ste-min-input, .ste-max-input {
      background-color: #404040 !important;
      color: rgb(255, 255, 255);
    }
    .formButton.formButton{
      background-color: #404040 !important;
    }
    .formButton.formButton-extension:hover, .formButtonSmall.formButton-extension:hover {
      background-color: rgb(0, 1, 1) !important;
      color: rgb(255, 255, 255);
      cursor: pointer;
    }

    /* --- Front Page --- */
    .normalText {
      color: #e8e8e8;
    }
    .grayText {
      color #3c3c3c;
    }
    /* --- Various --- */
    .input#mySearch {
      background-color: #b5b5b5;
    }
    .tableRow:nth-child(odd) {
      background-color: #585858;
    }
    .tableRow:nth-child(even) {
      background-color: #717171;
    }
    pageButtonsCurrent {
      background-color: #c5c5c5;
    }
    pageButtons {
      background-color: #848484;
    }
    input#mySearch{
      background-color: #b3b3b3;
    }
    `;
    document.body.appendChild(css);


    // Your code here...
})();

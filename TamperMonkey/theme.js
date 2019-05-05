// ==UserScript==
// @name         ShaderToy Dark Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  dark theme for shadertoy
// @author       You
// @match        *.shadertoy.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = `
    body {
        background: grey;
    }
    .CodeMirror-scroll {
        color: white;
        background-color:  #1a1a1a;

    }
    .CodeMirror-gutters {
        background-color: #404040;
        border-right: 2px solid grey;
    }
    //keywords
    //.cm-s-default .cm-builtin {
    //    color: #da5f37;
    //}
    .cm-s-default .cm-builtin {
        color: #ff8710;
    }

    .cm-s-default .cm-meta {
        color: #afafaf;
    }
    .CodeMirror-cursor {
        border-left: 2px solid #b3ffd9;
        width: 0;
    }
    .CodeMirror-cursors {
        border-left: 2px solid #b3ffd9;
        width: 0;
    }

    // toolbars
    div#toolBar {


    }

    div#editorHeaderBar {

    }

    .playerBar {


    }

    `;
    document.body.appendChild(css);


    // Your code here...
})();


// ------------ GLOBALS ------------ //
const style = document.createElement("style"); // a <style /> which contains the theme. 
const buttonColorOn = "green";
const buttonColorOff = "red";
const buttonColorOn_Hover = "red";
const buttonColorOff_Hover = "orange";
const radioButtonOff =
  '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3.6em" width="3.6em" style="color: rgb(51, 51, 51);"><path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"></path></svg>';
const radioButtonOn =
  '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3.6em" width="3.6em" style="color: rgb(51, 51, 51);"><path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"></path></svg>';
const darkModeButtonOn = `
<span class="darkthemebutton" style="
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 4px;
    font-size: 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 19px;
    cursor: pointer;
">
Dark Mode	
</span>
`;

const darkModeButtonOff = `
<span class="darkthemebutton" style="
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 4px;
    font-size: 10px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-weight: bold;
    margin-right: 19px;
    cursor: pointer;
">
Dark Mode	
</span>
`;

(() => {
  // ------------ Helper Functions ------------ //
  function hideByQuery(targObjQuery) {
    var likeObjArray = document.querySelectorAll(targObjQuery);
    for (var i in likeObjArray) {
      if (
        likeObjArray[i] != undefined &&
        likeObjArray[i].style != undefined &&
        likeObjArray[i].style.display != undefined
      ) {
        likeObjArray[i].style.display = "none";
      }
    }
  }
  function showByQuery(targObjQuery) {
    var likeObjArray = document.querySelectorAll(targObjQuery);
    for (var i in likeObjArray) {
      if (
        likeObjArray[i] != undefined &&
        likeObjArray[i].style != undefined &&
        likeObjArray[i].style.display != undefined
      ) {
        likeObjArray[i].style.display = "block";
      }
    }
  }

  const GM = {
    getValue: (input, callback) => {
        let output = localStorage.getItem(input);
        if (output == "true") {
            output = true;
        } else {
            output = false;
        }
        callback(output);
    },
    setValue: (input, value) => {
        if (value == true){
            value = "true";
        } else {
            value = "false";
        }
        localStorage.setItem(input, value);
      }
    }
  // vars...
  let darkModeIsEnabled;
  // ------------------- BUTTON ---------------------- //
  function showButtonMouseOver(button) {
    button.style.cursor = "pointer";
    button.style.transform = "scale(1.1)";
    button.style.transition = "100ms all ease-out";
    if (darkModeIsEnabled) {
      button.style.color = buttonColorOn_Hover;
    } else {
      button.style.color = buttonColorOff_Hover;
      button.style.transform = "scale(0.9)";
    }
  }
  // initial button style
  function showButtonMouseOut(button) {
    if (darkModeIsEnabled) {
      button.innerHTML = darkModeButtonOn;
    } else {
      button.innerHTML = darkModeButtonOff;
    }
    button.style.transition = "100ms all ease-out";
    button.style.transform = "scale(1.1)";
  }
  async function onMouseDown(button) {
    GM.getValue("darkModeIsEnabled", value => {
      darkModeIsEnabled = value;
    });
    darkModeIsEnabled = !darkModeIsEnabled;
    GM.setValue("darkModeIsEnabled", darkModeIsEnabled);
    if (darkModeIsEnabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
  function showButton() {
    // create button
    var button = document.createElement("span");
    // initialize button
    showButtonMouseOut(button);
    // add event listeners to button
    button.addEventListener("mouseenter", event => {
      showButtonMouseOver(button);
    });
    button.addEventListener("mouseleave", event => {
      showButtonMouseOut(button);
    });
    button.addEventListener("mousedown", event => {
      if (event.which == 1) {
        onMouseDown(button);
      }
    });
    // add button to html
    if (document.getElementsByClassName("darkthemebutton").length <= 0) {
      const header = document.getElementById("headerLogin");
      header.insertBefore(button, header.childNodes[0]);
    }
  }
  // ------------------- DARK LOGIC ---------------------- //
  function enableDarkMode() {
        style.innerHTML = theme;
  }
  function disableDarkMode() {
        style.innerHTML = "";
        GM.setValue("darkModeIsEnabled", false);
  }
  // ------------------- INIT ---------------------- //
  window.onload = async e => { // fetches isEnabled state from storage
    darkModeIsEnabled = false; 
    GM.getValue("darkModeIsEnabled", value => {
      if (value) {
        darkModeIsEnabled = value;
      } else {
        GM.setValue("darkModeIsEnabled", false);
        darkModeIsEnabled = false;
      }
      if (darkModeIsEnabled == true) {
        enableDarkMode();
      }
      document.body.appendChild(style);
      // style.classList.add("darkStyle");
      showButton();
      
      
    });
  };
})();



// ------------------- THEME ---------------------- //

const theme = `
    
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

`;

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './css/style_markdown_previewer.min.css';
import styled from "styled-components";
import EditorArray from "./components/editorArray";
import PreviewArray from "./components/previewArray"
import EditorContext from './editorContext';

const placeholder=
` # H1 : Visualiseur Markdown
  ## H2 : Ceci est un TP pour freecodecamp.org
  [Cliquez-ici pour le descriptif de ce TP ](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
   
  - **Inline HTML :** \`<div></div>\`

  - **Blockquotes :**
  > On peut écrire des blockquotes ici.
  > Ils sont très pratiques dans les e-mails pour émuler le texte de réponse.

  - **Blocks of code :**
  \`\`\`javascript
  var s = "JavaScript syntax highlighting";
  alert(s);
  \`\`\`  
  
  ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

  ` 

const AppContainer = styled.div`  
  background-color:#6c757d; 
  display:flex;
  flex-direction:row;
 `  


function App() {

  const [markdownText, setMarkdownText]= useState(placeholder);

  const contextValue = {
      markdownText,
      setMarkdownText
  };
  
  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>  
        <EditorArray></EditorArray>      
        <PreviewArray></PreviewArray>   
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;

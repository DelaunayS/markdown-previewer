import React, {useContext} from"react";
import styled from "styled-components";
import EditorContext from '../editorContext';
import marked from 'marked';

const PreviewContainer =styled.div`
    width:50%;
    height:100%;
    padding:1%;
`
const PreviewTitle=styled.div`
    width:100%;
    font-size:20px;    
    background-color:black;
    border: 1px solid black;
    text-align: center;
`
const PreviewText=styled.div`
    width:100%;
    height:90vh;
    background-color:white;
    font-size:15px;
    color:black;    
    word-break: break-word;
    overflow:auto;
    padding:1%;    
    `

 function PreviewArray(props){

    const {markdownText} = useContext(EditorContext); 
    marked.setOptions({
        breaks: true
      }) 

    return <PreviewContainer>
        <PreviewTitle>Previewer</PreviewTitle>
        <PreviewText id="preview" dangerouslySetInnerHTML={{__html:marked(markdownText)}}>            
        </PreviewText>
    </PreviewContainer>
}

export default PreviewArray
import React, {useContext} from"react";
import styled from "styled-components";
import EditorContext from '../editorContext';

const EditorContainer =styled.div`
    width:50%;
    height:100%;
    padding:1%;
`
const EditorTitle=styled.div`
    width:100%;
    font-size:20px;    
    background-color:black;
    border: 1px solid black;
    text-align: center;
`
const EditorText=styled.textarea`
    width:100%;    
    height:90vh;
    background-color:white;
    font-size:15px;
    color:black;  
    resize:none;   
    padding:1%;
`
 function EditorArray(props){
    
    const {markdownText} = useContext(EditorContext);
    const { setMarkdownText } = useContext(EditorContext);

    const onInputChange = e=>{
        const newValue=e.currentTarget.value;
        setMarkdownText(newValue)        
    }

    return <EditorContainer>
        <EditorTitle>Editor</EditorTitle>
        <EditorText id="editor" name="description" value={markdownText} onChange={onInputChange}>
            
        </EditorText>
    </EditorContainer>
}

export default EditorArray
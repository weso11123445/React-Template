import styled from "styled-components";


export const DropSection = styled.div`
    padding: 50px 0;
    text-align: center
`

export const DropTitle = styled.h2`
     font-size: 60px;
    margin-bottom: 30px
`

export const Span = styled.span`
    font-weight: normal
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    
`

export const FromInputDiv = styled.div`
    overflow: hidden
`

export const FormInput = styled(Input)`
    width: 49%;
`

export const TextInput = styled(FormInput)`
    float: left;
    width: ${props => props.sub ? '100%' : ''};

`



export const EmailInput = styled(FormInput)`
    float: right; 
`




export const TextArea = styled.textarea`
     width: 100%;
    outline: 0;
    background: #ccc
`


export const Submit = styled.input.attrs({type:'submit'})`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`


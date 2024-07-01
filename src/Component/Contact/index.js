import React from "react";
import {DropSection, DropTitle,TextInput, EmailInput , Submit,Span, Form, FromInputDiv,FormInput,Input,TextArea} from "./style.js"; 

const Contact = () => {
    return(
    <DropSection>
        <div className="container">
            <DropTitle><Span>Drop </Span>Me A line</DropTitle>
            <Form>
                <FromInputDiv>
                    <TextInput type="text" placeholder="Your Name"/>
                    <EmailInput type="email" placeholder="Your Email"/>
                </FromInputDiv>
                <TextInput type="text" sub placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <Submit type="submit" value="Send Message"/>
            </Form>
        </div>
    </DropSection>
    )
}

export default Contact ; 
import React,{useState, useEffect} from "react";
import {SocialSection, Social,SocialIcon, SocialParagrpah, Span,SpanInfo} from "./style.js"; 
import axios from "axios";
const Socialmedia = () => {

    const [social, setSocial] = useState([]);

    useEffect(()=>{
        axios.get('js/data.json').then(res => setSocial(res.data.social))
    },[]); 

    const SocialList = social.map((item) => {
        return(
            <Social key = {item.id}  id={item.id}>
            <SocialIcon className={item.icon}></SocialIcon>
            <SocialParagrpah>
                <Span>{item.title}</Span>
                <SpanInfo>{item.body}</SpanInfo>
            </SocialParagrpah>
        </Social>
        )
    }) 

    return(
        <SocialSection>
            
        {SocialList}
        
    </SocialSection>
    )
}

export default Socialmedia; 
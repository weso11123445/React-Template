import React, {Component} from "react";
import {WorkSection, WorkTitle, Span, WorkPart, WorkIcon, WorkPartTitle, WorkLine, WorkDesc} from "./style.js"
import axios from 'axios' ; 

class Work extends Component {

    state = {
        works: [],
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                works:res.data.works,
            })
        })
    }

    render(){

        console.log(this.state)
        const {works} = this.state;

        const WorksList = works.map((item) => {
            return(
                <WorkPart first = {item.id} key={item.id}>
                    <WorkIcon className={item.icon_name}></WorkIcon>
                    <WorkPartTitle>{item.title}</WorkPartTitle>
                    <WorkLine/>
                    <WorkDesc>
                        {item.body}
                    </WorkDesc>
                </WorkPart>
            )
        })

        return(
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {WorksList}
                
            </div>
        </WorkSection>
        )

    }
    
}

export default Work ; 
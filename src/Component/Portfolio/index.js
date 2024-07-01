import React, {useState, useEffect} from "react";
import "./style.css" ; 
import { useFetcher } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then(res => {
            setImages(res.data.portfolio) ;
        })
    },[])

    const PortfolioImages = images.map(item => {
        return(
            <div key={item.id}>
                    <img src={item.image} alt="" />
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
        )
    })  


    return(
        <div class="portfolio">
            <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
            <ul class="portfolio-list">
                <li class="portfolio-item active">All</li>
                <li class="portfolio-item">HTML</li>
                <li class="portfolio-item">Photoshop</li>
                <li class="portfolio-item">Wordpress</li>
                <li class="portfolio-item">Mobile</li>
            </ul>
            
            <div class="box">
                
                {PortfolioImages}
                                    
            </div>
            
        </div>
    )
}

export default Portfolio;
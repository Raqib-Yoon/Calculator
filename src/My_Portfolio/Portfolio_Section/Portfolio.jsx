import star from './portfolio_images/star.png'
import img from "./portfolio_images/correct.png"
// import img_1 from "./portfolio_images/img.jpg"
import PortfolioData from './PortfolioData'
import { useState } from 'react'

const Portfolio = () => {

    let [index ,setIndex]= useState(4);

    const next = () =>{
        if(index===PortfolioData.length-1){
            return setIndex(0)
        }
        setIndex(++index)
        console.log(index);
    }

    const prev = () =>{
        if(index===0){
            return setIndex(PortfolioData.length-1)
        }
        setIndex(--index)
        console.log('prev function');
        console.log(index);

    }


    return (
        <>
            <div class="portfolio_container" id="portfolio">
                <h1>Portfolio</h1>
                <div class="portfolio_parent">
                    <img class="portfolio_left_img" src={img} alt="NextImage" onClick={prev} />

                    <div class="portfolio_row">
                        <div class="portfolio_left_col">
                            <h1>{PortfolioData[index].project_name}</h1>
                            <div class="stars_div">
                                <img src={star} alt="Star" />
                                <img src={star} alt="Star" />
                                <img src={star} alt="Star" />
                                <img src={star} alt="Star" />
                                <img src={star} alt="Star" />
                            </div>
                            <p>{PortfolioData[index].project_description}</p>
                        </div>


                        <div class="portfolio_right_col">
                            <img src={PortfolioData[index].img_src} alt="" />
                        </div>
                    </div>

                    <img src={img} alt="portfolio"  onClick={next}/>

                </div>
                <div class="slide_container">
                    <span class="slide"></span>
                    <span class="slide"></span>
                    <span class="slide"></span>
                    <span class="slide"></span>
                    <span class="slide"></span>
                </div>
            </div>

        </>
    )
}


export default Portfolio;
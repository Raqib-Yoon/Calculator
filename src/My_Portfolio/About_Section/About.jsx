import about from "../My photos/about.jpg"
import download from "../images/download.png"

import AboutCardData from  './AboutCardData'


const About = () => {
    return (
        <>

            <div class="about" id="about">
                <h1>My Introduction</h1>
                <figure><img src={about} alt="aboutImage" /></figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae cum maxime quae asperiores sunt? Vitae
                    sapiente maiores veritatis nisi odit accusantium, facilis quae dolores animi architecto suscipit aut
                    doloremque!</p>

                    {/* cards  */}
                <div class="bio_container">
                    {
                        AboutCardData.map((value) => {

                            return< div class="bio">
                                <h1>{value.number}</h1>
                                <p> {value.text_1} <br /> {value.text_2} </p>
                            </div>

                        })
                    }
                </div>
                <a class="cv_btn" href="./My photos/raqib yoon cv.pdf" download="">
                    <h3>Download CV</h3><img src={download} alt='download' />
                </a>
            </div>
        </>
    )
}

export default About;
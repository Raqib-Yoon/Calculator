
import profile from './My photos/Yoon.png';

import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import facebook from "./images/whatsapp.png"
import whatsapp from "./images//facebook.png"
import scroll from "./images//scroll.png"

const Hero = () => {

    return (
        <>
            <div class="hero_row">

                <div class="hero_col_left">
                    <div class="social_media">
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                        <img src={whatsapp} alt="whatsapp" />
                    </div>

                    <div class="left_col_content">
                        <h6>Hello!</h6>
                        <h1>I'm Raqib Yoon</h1>
                        <p>a front end web developer, i can create and develope best design's and layout's</p>
                        <div class="scroll_btn"><a href="#about"> Scroll Down</a> <img src={scroll} alt="scroll" /></div>

                    </div>


                </div>

                <div class="hero_col_right">
                    <figure>
                        <img src={profile} alt="profile" />
                    </figure>
                </div>
            </div>

        </>
    )
}


export default Hero;
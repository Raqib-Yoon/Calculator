const Footer = () =>{
    return(
        <>
        
        <div class="footer_container">
            <div class="footer_row">
                <div class="footer_left_col">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consora voluptates quidem nemo rem? Nesciunt reiciendis quis
                        praesentium, ipsam quas non placeat!</p>
                        <div class="footer_social_media">
                            <img src="./images//facebook.png" alt=""/>
                            <img src="./images//twitter.png" alt=""/>
                            <img src="./images//instagram.png" alt=""/>
                            <img src="./images//whatsapp.png" alt=""/>
                        </div>
                </div>
               
                <div class="footer_right_col">
                    <h1>Quick Links</h1>
                    <ul class="footer_list">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">My Skill</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default Footer;
import contactImage from './My photos/contact.png'
const Contact = () => {
    return (
        <>
            <div class="contact_container" id="contact">
                <h1>Contact Me</h1>
                <div className="contact_row">
                    <form action="" class="form">
                        <input type="text" name="name" id="name" placeholder="First Name" />
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                        <input type="email" name="email" id="email" placeholder="What's Your Email?" />
                        <textarea name="textarea" id="" cols="30" rows="10" placeholder='Write a message...'></textarea>
                        <button class="message_btn">Send Message</button>
                    </form>
                    <figure>
                        <img src={contactImage} alt="conatctImage" />
                    </figure>
                </div>
            </div>


        </>
    )
}

export default Contact;

const ServicesCard = ({ img_src, service_name, skills,id}) => {
    return (
        <>
            <div class="service_card" id={id}>
                <img src={img_src} alt="service_image" />

                <div class="card_content">

                    <h2>{service_name}</h2>

                    {
                        skills.map((value) => {
                            return <div class="skill_div">
                                <span></span>
                                <p>{value}</p>
                            </div>
                        })

                    }

                </div>
            </div>
        </>
    )

}


export default ServicesCard;
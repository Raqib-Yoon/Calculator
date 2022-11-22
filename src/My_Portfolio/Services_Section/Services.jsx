import ServicesCard from './ServicesCard';
import ServicesData from './ServicesData'
const Services = () => {
    return (
        <>



            <div class="service_container" id="services">
                <h1>Services</h1>
                <div class="service_row">
                    {
                        ServicesData.map((value,i) => {
                            if (i === 1) {
                                return <ServicesCard
                                    img_src={value.img_src}
                                    service_name={value.service_name}
                                    skills={value.skills}
                                    id={value.backend_id}
                                />
                            }
                            return <ServicesCard
                                img_src={value.img_src}
                                service_name={value.service_name}
                                skills={value.skills}
                            />


                        })
                    }
                </div>
            </div>



        </>
    )
}

export default Services;
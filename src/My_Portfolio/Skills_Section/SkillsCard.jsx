import Skills_Data from "./Skills_Data";
import { useEffect, useState } from "react";

const Skills_Card = () => {

    const [addClass, setAddClass] = useState(false)

    const getScrollValue = () => {

        let scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(scrollValue);

        if (scrollValue >= 1100) {
            setAddClass(true)
        }
        
        if(scrollValue<=800) {
            setAddClass(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getScrollValue)
    }, [])

    return (
        <>
            {
                Skills_Data.map((value) => {

                    return <div class={`skills ${value.Skill_class}`}>
                        <span class="skill "> {value.skill_name} </span>
                        <span class="percent">{`${value.Skill_percent}%`}</span>
                        <div class="progress"></div>
                        <div class={addClass ? "progress progress_2" : "progress"}></div>
                    </div>

                })
            }



        </>
    )
}

export default Skills_Card;
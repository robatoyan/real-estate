import { useContext, useEffect, useState } from "react"
import { ModernHous } from "./Modern-Hous"
import { useParams } from "react-router-dom"
import { MyContex } from "../../component/MyContext"
import { SwiperSlider } from "./SwiperSlider"
import { Details } from "./Details"
import { Description } from "./Description"
import { SliderSee } from "./SliderSee"
import { Footer } from "../YourHome/Footer"

export const SeeMoreHome = () => {
    return (
        <div>
            <ModernHous />
            <SwiperSlider />
            <Details />
            <Description />
            <SliderSee />
            <Footer />
        </div>
    )
}
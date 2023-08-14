import { useState } from "react"
import { MyContex } from "../../component/MyContext"
import { HomeMedeForYou } from "./HomeMede_ForYou"
import { MaltoHouse } from "./Malto-House"
import { YourInGoodHands } from "./You’re-in-GoodHands"
import { YourHands } from "./You’re-in-GoodHands/yourHenads"
import { MyWord } from "./My-word"
import { DescriptonClient } from "./Descripton-Client"
import { Footer } from "./Footer"

export const YourHome = () => {

    return (
        <div>
            <HomeMedeForYou />
            <YourInGoodHands />
            <MaltoHouse />
            <YourHands />
            <MyWord />
            <DescriptonClient />
            <Footer />
        </div>
    )
}
import React from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <NavBar></NavBar>
            <SideBar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>As melhores Pizzas da Cidade</HeroH1>
                    <HeroP>Prontas em 20 Minutos ou menos!</HeroP>
                    <HeroBtn>Peça Já</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );

}
export default Hero
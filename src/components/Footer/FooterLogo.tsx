import React from 'react'
import * as S from './styles';
import logo from "../../assets/img/lg-elias.png";


export const FooterLogo: React.FC = () =>{
    return(
        <S.BottomImage 
        src={logo}     
        alt="Logo Elias Mello Planejados"
        style={{ width: "250px", height: "auto" }}
    />
    )
}   

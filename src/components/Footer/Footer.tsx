import React from 'react'
import * as S from "./styles";
import { FooterColumn } from "./FooterColumn";
import { footerData, FooterColumnData } from "./footerData";
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <>  
    <S.Container>
      {footerData.map((col: FooterColumnData) => (
        <FooterColumn
          key={col.title}
          title={col.title}
          links={col.links}
        />
      ))}

    </S.Container>

    <FooterBottom />
    </>
  );    
}



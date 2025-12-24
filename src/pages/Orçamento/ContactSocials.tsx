import React from 'react';
import * as S from './styles';

interface ContactSocialsProps {
  children: React.ReactNode;
}

export const ContactSocials: React.FC<ContactSocialsProps> = ({ children }) => {
  return <S.ContactSocials>{children}</S.ContactSocials>;
};

export default ContactSocials;

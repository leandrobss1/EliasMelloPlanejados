import React from 'react';
import * as S from './ContactItemStyle';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value }) => (
  <S.ContactItem>
    <S.ContactHeader>
      {icon}
      {title}
    </S.ContactHeader>

    <S.ContactValue>{value}</S.ContactValue>
  </S.ContactItem>
);

export default ContactItem;

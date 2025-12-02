import * as S from "./styles";
import { FooterColumnData } from "./footerData";

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <S.Column>
      <S.Title>{title}</S.Title>

      <S.LinkList>
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <S.LinkItem key={link.label}>
              <S.Link
                href={link.href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </S.Link>
            </S.LinkItem>
          );
        })}
      </S.LinkList>
    </S.Column>
  );
}

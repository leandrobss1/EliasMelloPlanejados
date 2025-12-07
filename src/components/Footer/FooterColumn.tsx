import * as S from "./styles";
import { FooterColumnData } from "./footerData";

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <S.Column>
      <S.Title>{title}</S.Title>

      <S.LinkList>
        {links.map((link) => {
          const hasHref = link.href && link.href.trim() !== "";
          const isExternal = hasHref && link.href.startsWith("http");

          if (!hasHref) {
            return (
              <S.LinkItem key={link.label}>
                <S.Text noHover={link.noHover}>{link.label}</S.Text>
              </S.LinkItem>
            );
          }

          return (
            <S.LinkItem key={link.label}>
              <S.Link
                href={link.href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                noHover={link.noHover}

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

import React, { useState } from 'react';
import * as S from './styles';
import LogoIcon from '../../assets/img/lg-elias.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>
          <S.StyledIcon
            src={LogoIcon}
            alt="EliasMelloLogo"
            title="EliasMello InnovationInDesign"
          />
        </S.HeaderTitle>

        <S.HamburgerIcon
          onClick={toggleMenu}
          className={isMenuOpen ? 'active' : ''}
        >
          <div />
          <div />
          <div />
        </S.HamburgerIcon>

        <S.Menu isMenuOpen={isMenuOpen}>
          <S.Button as={Link} to="/" onClick={closeMenu}>
            Home
          </S.Button>

          <S.Button as={Link} to="/produtos" onClick={closeMenu}>
            Projetos
          </S.Button>

          <S.Button as={Link} to="/servicos" onClick={closeMenu}>
            Serviços
          </S.Button>

          <S.Button as={Link} to="/quemsomos" onClick={closeMenu}>
            Quem Somos
          </S.Button>

          <S.OrçButton as={Link} to="/orcamento" onClick={closeMenu}>
            Orçamento
          </S.OrçButton>
        </S.Menu>
      </S.Wrapper>
    </S.StyledHeader>
  );
};

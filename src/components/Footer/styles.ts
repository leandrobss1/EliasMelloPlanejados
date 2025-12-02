import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #0d0d0d;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  color: #fff;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: .5rem;
`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: #ccc;
`;

export const Link = styled.a`
  font-size: 0.95rem;
  color: #bbb;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const LinkItem = styled.li`
  margin: 0;
  padding: 0;
`;

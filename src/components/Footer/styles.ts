import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: #0d0d0d;
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

  @media (max-width: 768px) {
    width: auto;
    align-items: center;
    text-align: center; 
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: #ccc;
`;

export const Link = styled.a`
  display: inline-block;

  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: #ea8a01;
    font-weight: bold;
  }
`;


export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`;

export const LinkItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const BottomContainer = styled.div`
  width: 100%;
  background-color: #0d0d0d;
  position: relative;
  padding: 2rem 0 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40px;      
    right: 40px;     
    height: 1px;
    background-color: #ffffff;
    opacity: 0.3;    
  }

  display: flex;
  text-align: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;

    &::before {
      left: 20px;  
      right: 20px;
    }
  }

`;

export const BottomImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
`;



export const Copy = styled.p`
  display: flex;
  color: white; 
  font-size: 14px;
  line-height: 1.4;

  margin: 0rem;
  padding-top: 7rem;

  @media (max-width: 768px) {
    max-width: auto;
    margin: 0 auto;
    padding: 1rem 0 1rem 0;
  }
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

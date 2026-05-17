import styled from 'styled-components';
import * as HeaderStyles from '../../components/Header/styles';

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 20%;
  padding: 1rem;
  height: auto;
  border: 1px solid #f5f4f4;
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2);
  gap: 0.8rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 8rem 0 8rem;
`;

export const LoginInput = styled.input`
  resize: none;
  outline: none;
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px;
  transition: all 0.2s ease;
  background-color: #f5f5f5ff;

  &:focus {
    border-color: #ea8a01;
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25);
  }
`;

export const CustomButton = styled(HeaderStyles.OrçButton)`
  width: 100%;
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  margin-bottom: 0.5rem;
  border-radius: 0;
  background-color: #ffff;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    font-weight: 700;
    border-bottom: 4px solid #000000;
    border-right: 4px solid #000000;
  }
`;

export const DashboardTitle = styled.h1``;

export const DashboardSubTitle = styled.h3``;

export const DashboardInput = styled.input`
  resize: none;
  outline: none;
  width: 20%;
  border: 1px solid #ccc;
  padding: 12px;
  transition: all 0.2s ease;
  background-color: #f5f5f5ff;

  &:focus {
    border-color: #ea8a01;
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25);
  }
`;

export const LoginIcon = styled.img`
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  width: 230px;
  height: auto;
  padding: 1rem 0 1rem 0;
`;

export const DashboardWrapper = styled.div``;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4e50; /* Rojo de la marca */
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50; /* Verde de la marca */
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff4e50; /* Rojo de la marca */
    transform: scale(1.1);
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  border-top: 1px solid #4caf50; /* Línea verde separadora */
  padding-top: 1rem;
  text-align: center;
`;

export const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
`;

export const LinkedInLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4e50; /* Cambia a rojo en hover */
  }
`;

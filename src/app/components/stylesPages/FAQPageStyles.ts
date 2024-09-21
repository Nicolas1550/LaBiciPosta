import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

export const FAQTitle = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.5px;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100px;
    height: 3px;
    background-color: #ff4e50;
    margin: 1rem auto 0;
  }
`;

export const FAQSection = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const FAQItem = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  margin-bottom: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FAQQuestion = styled.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const FAQAnswer = styled(motion.p)`
  font-size: 1.3rem;
  color: #555;
  padding-left: 15px;
  border-left: 4px solid #ff4e50;
  margin-top: 15px;
  line-height: 1.6;
`;

export const IconWrapper = styled.span`
  font-size: 1.4rem;
  color: #ff4e50;
  transition: transform 0.3s ease;

  ${FAQItem}:hover & {
    transform: scale(1.1);
  }
`;

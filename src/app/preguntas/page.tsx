"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MainContainer,
  FAQAnswer,
  FAQItem,
  FAQQuestion,
  FAQSection,
  FAQTitle,
  IconWrapper
} from "../components/stylesPages/FAQPageStyles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "¿Cómo puedo agendar una reparación de bicicleta?",
    answer: "Puedes agendar una reparación a través de nuestro WhatsApp o llamándonos directamente. También puedes visitarnos en nuestro local.",
  },
  {
    question: "¿Cuánto tiempo toma una reparación promedio?",
    answer: "El tiempo promedio para una reparación depende del tipo de servicio, pero la mayoría de las reparaciones se completan en un día hábil.",
  },
  {
    question: "¿Ofrecen garantía en las reparaciones?",
    answer: "Sí, todas nuestras reparaciones están garantizadas por un período de 3 meses. Si tienes algún problema durante este tiempo, estaremos encantados de ayudarte.",
  },
  {
    question: "¿Tienen servicios de mantenimiento preventivo?",
    answer: "Ofrecemos servicios de mantenimiento preventivo para mantener tu bicicleta en óptimas condiciones. Esto incluye limpieza, lubricación y ajuste de los componentes principales.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos en efectivo, tarjetas de crédito y débito, así como transferencias bancarias y pagos a través de aplicaciones móviles.",
  },
];

const FAQPage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false); 
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 

  useEffect(() => {
    setHasMounted(true); 
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!hasMounted) {
    return null; 
  }

  return (
    <MainContainer>
      <FAQTitle>Preguntas Frecuentes</FAQTitle>
      <FAQSection>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <FAQQuestion>
              {faq.question}
              <IconWrapper>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </IconWrapper>
            </FAQQuestion>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </motion.div>
          </FAQItem>
        ))}
      </FAQSection>
    </MainContainer>
  );
};

export default FAQPage;

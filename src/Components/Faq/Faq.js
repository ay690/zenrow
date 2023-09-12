import React, { useState } from "react";
import {
  FaqWrapper,
  FaqAccordian,
  Item,
  Title,
  Question,
  Icon,
  Content,
  ContentShow,
  FaqSection,
} from "./FaqStyles";
import { data } from "../../data/FaqData";
import { MainHeading, Heading } from "../../globalStyles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"


const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
       setSelected(null);
    }else{

        setSelected(i);
    }

  };

  return (
    <FaqSection inverse  >
      <Heading style={{color: "black"}} >Frequent Questions</Heading>
      <FaqWrapper>
        <FaqAccordian>
          {data.map((item, idx) => (
            <Item>
              <Title onClick={() => toggle(idx)}>
                <Question> {item.question}</Question>
                <Icon> {selected === idx ? <AiOutlineMinus/> : <AiOutlinePlus/>} </Icon>
              </Title>
              {selected === idx ? (
                <ContentShow>{item.answer}</ContentShow>
              ) : (
                <Content>{item.answer}</Content>
              )}
            </Item>
          ))}
        </FaqAccordian>
      </FaqWrapper>
    </FaqSection>
  );
};

export default Faq;

import styled from "styled-components";
import { Section } from "../../globalStyles";

export const FaqSection = styled(Section)`
  /* padding: clamp(70px, 25vh, 220px); */
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  /* background-color: #312e81; */
`;

export const FaqWrapper = styled.div`
 display: flex;
 height: 60vh;
 width: 100vw;
 justify-content: center;
 align-items: center;
`;

export const FaqAccordian = styled.div`
 width: 500px;
`;

export const Item = styled.div`
 background-color: #f0eb1;
 margin-bottom: 5px;
 padding: 10px 20px;
`;

export const Title = styled.div`
color: #85662b;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;

export const Content = styled.div`
 color: #8b7f75;
 max-height: 0;
 overflow: hidden;
 transition: all 0.5s cubic-bezier(0, 1, 0, 1);
`;

export const ContentShow = styled.div`

    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
`;

export const Question = styled.h2``;
export const Icon = styled.span``;
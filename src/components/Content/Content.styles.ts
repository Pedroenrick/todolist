import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60vh;
  margin: 5rem auto;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p {
    font-weight: bold;
    color: #8285fb;
    margin: 0;
    padding: 0.5rem 0;
  }

  p:nth-last-child(2n) {
    color: #458db8;
  }

  span {
    background-color: gray;
    color: #fff;
    border-radius: 999999px;
    padding: 0.2rem 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentEmpty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #808080;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;

  span:first-child {
    font-weight: bold;
    color: #808080;
  }

  span {
    color: #808080;
  }
`;

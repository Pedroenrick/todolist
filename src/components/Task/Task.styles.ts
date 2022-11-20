import styled from "styled-components";

export const TaskContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  background: #262626;

  span {
    margin: 0.5rem;
    width: 100%;
    font-size: 1rem;
  }

  button {
    border: none;
    background-color: transparent;

    svg {
      color: #808080;
      &:hover {
        color: #e25858;
      }
    }
  }
`;

export const StyledSpan = styled.span`
  margin: 0.5rem;
  color: #808080;
  width: 100%;
  font-size: 1rem;
  text-decoration: line-through;
`;

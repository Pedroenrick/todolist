import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  margin-top: -25px;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  width: 46rem;
  border-radius: 8px;
  background: #262626;
  border: 0;
  font-size: 1.2rem;
  color: #fff;

  &:active {
    border: 0px solid #8284fa;
  }
`;

export const NewTaskButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 0.5rem;
  border: 0;
  background: #1e6f9f;
  border-radius: 8px;
  font-size: 1rem;
  color: #fff;
  transition: 0.2s;

  svg {
    margin-left: 0.2rem;
  }

  &:not(:disabled):hover {
    background: #4ea8de;
  }

  &:disabled{
    opacity: 0.7;
  }
`;

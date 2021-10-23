import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--brightBlue);
  width: 80%;
  min-width: 200px;
  height: 60px;
  border-radius: 15px;
  color: var(--paleBlue);
  border: 0;
  font-size: 16px;
  font-weight: var(--fontMed);
  margin: 20px auto;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  background: url(${({image})=>image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
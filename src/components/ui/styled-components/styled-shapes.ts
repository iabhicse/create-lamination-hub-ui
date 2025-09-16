import styled from "styled-components";

export const ProfileBackgroundShape = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 2vw 2vw 1vw 1vw;
  border: 0 solid white;
  clip-path: polygon(
    6% 0%,
    0 0,
    0 100%,
    50% 100%,
    100% 100%,
    100% 0,
    94% 0%,
    50% 40%
  );

  @media (max-width 768px) {
    border-radius: 5vw 5vw 2vw 2vw;
    clip-path: polygon(
      10% 0%,
      0 0,
      0 100%,
      50% 100%,
      100% 100%,
      100% 0,
      90% 0%,
      50% 40%
    );
  }

  transition: all 0.3s ease;
`;

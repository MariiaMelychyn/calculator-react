import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 80px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.801);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button<{
  gridSpan?: number;
  operation?: boolean;
  equal?: boolean;
  control?: boolean;
  period?: boolean;
}>`
  pointer: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  /* Expanded Form example */
  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}
  ${({ operation }) => operation && `background-color: grey;`}
  ${({ control }) => control && `background-color: #87e8eb;`}
  ${({ equal }) =>
    equal && `border-bottom-right-radius: 10px; background-color: #808080c1;`}
    ${({ period }) =>
    period && `border-bottom-left-radius: 10px; background-color: #87d7eb;`}
`;
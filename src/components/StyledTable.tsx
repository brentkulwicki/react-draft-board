import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  thead:first-of-type {
    max-width: 50px;
  }
  thead {
    border: 1px solid black;
    background-color: #e6e6e6;
    color: black;
  }

  tbody {
    tr {
      padding-top: 5px;
      td {
        margin: 0;
        border: 1px solid black;
        font-weight: 700;
        font-size: 24px;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;

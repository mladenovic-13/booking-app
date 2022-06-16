import styled from "styled-components";

export const Options = styled.div`
  position: absolute;
  top: ${(p) => p.top};
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.7);
  padding: 10px;
  .option {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .counterBtn {
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid ${(p) => p.theme.color["primary-light"]};
    border-radius: 3px;
    outline: none;
  }
`;

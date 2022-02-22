import React from "react";
import styled from "styled-components";

const AddDataStyle = styled.div`
  & input,
  & textarea {
    display: block;
    width: 60%;
    margin: 1rem auto;
  }
`;

const AddData = (props) => {
  return (
    <AddDataStyle>
      <input type="text" />
      <textarea type="text" />
      <input type="text" />
      <button onClick={props.onAdd}>ADD</button>
    </AddDataStyle>
  );
};

export default AddData;

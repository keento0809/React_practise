import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

const ModalOverlayStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 2rem 4rem;
  background: #fff;
  z-index: 10;
`;

const Modal = (props) => {
  const Backdrop = (props) => {
    return <BackdropStyle onClick={props.onClose}></BackdropStyle>;
  };

  const ModalOverlay = (props) => {
    return (
      <ModalOverlayStyle onClose={props.onClose}>
        {props.children}
      </ModalOverlayStyle>
    );
  };

  const portalElement = document.getElementById("modals");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

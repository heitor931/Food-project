import React from 'react'
import  ReactDOM  from 'react-dom'
import { Fragment } from 'react'
import classes from "./Modal.module.scss"


const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} />
  );
}


const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlay")

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal
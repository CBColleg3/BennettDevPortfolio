import React from 'react';
import "./Modal.scss";
import { useModalStore } from '../../Experience/stores/modalStore';
import { useZoomStore } from '../../Experience/stores/zoomStore';

const Modal = () => {

  const { isModalOpen, modalTitle, modalContent, modalType, closeModal } = useModalStore();
  const {zoom, focus, setFocus, setZoom} = useZoomStore();

  //console.log("isModalOpen: ", isModalOpen);
  if(!isModalOpen) return;

  return ( 
    <>
        <div className='overlay'>
          <div className='modal'>
              <div className='modal-header'>
                <div className='modal-header-wrapper'>
                  <h1 className='modal-title'>{modalTitle}</h1>
                  <button onClick={(e) => {closeModal(); setZoom(false)}} className='modal-close-button'>Exit</button>
                </div>    
              </div>
              <div className='modal-body'>{modalContent}</div>
          </div>
        </div>
    </>
  );

}

export default Modal
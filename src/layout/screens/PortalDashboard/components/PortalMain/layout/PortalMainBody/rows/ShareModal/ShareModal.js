import React from "react";
import Modal from "../../../../../../../../../components/shared/Modal/Modal";
import { ReactComponent as Cross } from "../../../../../../../../../assets/svgs/cross.svg";
import "./ShareModal.css";

const ShareModal = (props) => {
  return (
    <Modal id="share-modal" onCancel={props.onCancel} show={true}>
      <div className="inner-wrapper">
        <div className="modal__header">
          <div className="header-content-area">
            <h2>Share Form</h2>
            <p>
              Share this link if you need to have a Credit Authorization filled
              out by another person.
            </p>
          </div>
        </div>

        <section id="main-content-area">
          <div className="modal__body">
            <div className="url-preview-container">
              <div className="preview-box">
                portal.flatironrealtycapital.com/26dfsdf30ssdf39JFkff
              </div>
              <button className="copy-url">
                <span>Copy Url</span>
                <div className="icon-wrapper">{copy}</div>
              </button>
            </div>
          </div>
          <div className="modal__footer"></div>
        </section>
      </div>
    </Modal>
  );
};

export default ShareModal;
const copy = (
  <svg viewBox="0 0 24 24">
    <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
  </svg>
);

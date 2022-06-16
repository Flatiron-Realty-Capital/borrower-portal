import React, { useState } from "react";
import Modal from "../../../../../../../../../components/shared/Modal/Modal";
import { ReactComponent as CheckMark } from "../../../../../../../../../assets/svgs/checkMark.svg";
import { ReactComponent as CopyLink } from "../../../../../../../../../assets/svgs/copyLink.svg";
import { ReactComponent as UrlLink } from "../../../../../../../../../assets/svgs/urlLink.svg";
import "./ShareModal.css";

const ShareModal = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(
    "portal.flatironrealtycapital.com/26dfssdf30ssdfsdf30ssdf3939df30ssdf39JFkff"
  );
  const copyHandler = async (text) => {
    if ("clipboard" in navigator) {
      setIsCopied(true);
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  return (
    <Modal id="share-modal" onCancel={props.onCancel} show={true}>
      <div className="inner-wrapper">
        <div className="modal__header">
          <div className="header-content-area">
            <h2>Share Credit Authorization</h2>
            <p>
              Send this Credit Authorization form to another borrower to fill
              out.
            </p>
          </div>
        </div>

        <section id="main-content-area">
          <div className="modal__body">
            <p className="preview-title">Share Invite Link</p>
            <div className="url-preview-container">
              <div className="preview-box">
                <div id="link" className="icon-wrapper">
                  <UrlLink />
                </div>
                <div className="url-wrapper">
                  <span className="url">{shareUrl}</span>
                </div>
                <button
                  onClick={() => copyHandler(shareUrl)}
                  className={`copy-url ${isCopied && "is-copied"}`}
                >
                  <span> {isCopied ? "Copied!" : "Copy Url"}</span>
                  <div id="copy" className="icon-wrapper">
                    {isCopied ? <CheckMark /> : <CopyLink />}
                  </div>
                </button>
              </div>
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

const link = (
  <svg viewBox="0 0 24 24">
    <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
    <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
  </svg>
);

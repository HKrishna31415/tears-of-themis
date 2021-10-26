import React from "react";

export default function Modal(props) {
  const { hideModal } = props;
  return (
    <div onClick={hideModal} className="modal-container">
      <div
        className="disclaimer-modal m-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="disclaimer-modal-content p-2">
          <div onClick={hideModal} className="close-button"></div>
          <h2>Disclaimer</h2>
          <p>
            I am not affiliated with Mihoyo, all assets in this application were
            taken from third party websites and some screenshotted from the game
            itself.
          </p>

          <p>
            This is forked from the Genshin Impact{" "}
            <a
              href="https://github.com/uzair-ashraf/genshin-impact-wish-simulator"
              target="_blank"
            >
              here
            </a>
            </p>
        </div>
      </div>
    </div>
  );
}

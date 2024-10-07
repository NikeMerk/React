function Modal(props) {
	return (
    <div className={`modal ${props.open ? "show-modal" : ""}`}>
      <div className="modal-content">
        <h3 className="modal__title">Some title</h3>
        <p className="modal__text">Some text</p>
        <div className="modal__block-button">
          <button className="btn modal__button-done">done</button>
          <button className="btn modal__button-exit" onClick={() => props.setOpen(false)}>exit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import "./WarehouseModal.scss";

export default function Modal({ show, onClose, onConfirm, setWarehouse }) {
  //will do handclick on cancel to close the modal - must change state in parent
  //will do handleclick on confirm, run the fuction to delete warehouse.

  if (!show) {
    return null;
  }
}

return (
  <section className="modal">
    <article className="modal__content">
      <div className="modal__header">
        <h2 className="modal__title">Delete {warehouse.name}?</h2>
      </div>
      <div className="modal__body">
        <p className="modal__message">
          Please confirm that you’d like to delete the {warehouse.name} from the
          list of warehouses. You won’t be able to undo this action.
        </p>
      </div>
      <div className="modal__footer">
        <button className="modal__cancel">Cancel</button>
        <button className="modal__delete">Delete</button>
      </div>
    </article>
  </section>
);

import "./WarehouseModal.scss";
import closeIcon from "../../Assets/Icons/close-24px.svg";

export default function Modal({
  show,
  onClose,
  onDelete,
  onConfirm,
  warehouse,
}) {
  const handleDelete = () => {
    onDelete(warehouse.id)
      .then(() => onClose())
      .catch((error) => {
        console.error("Deletion failed:", error);
      });
  };

  if (!show) {
    return null;
  }

  return (
    <section className="modal">
      <article className="modal__content">
        <div className="modal__closebox">
          <img
            className="modal__close--mobile"
            onClick={onClose}
            src={closeIcon}
          />
        </div>
        <div className="modal__header">
          <h2 className="modal__title">Delete {warehouse.warehouse_name}?</h2>
          <img
            className="modal__close--tablet"
            onClick={onClose}
            src={closeIcon}
          />
        </div>
        <div className="modal__wrapper">
          <div className="modal__body">
            <p className="modal__message">
              Please confirm that you’d like to delete the{" "}
              {warehouse.warehouse_name} from the list of warehouses. You won’t
              be able to undo this action.
            </p>
          </div>
          <div className="modal__footer">
            <button className="modal__button modal__cancel" onClick={onClose}>
              Cancel
            </button>
            <button
              className="modal__button modal__delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

import "./InventoryModal.scss";
import closeIcon from "../../Assets/Icons/close-24px.svg";

export default function InventoryModal({
  show,
  onClose,
  onDelete,
  //onConfirm,
  inventory,
}) {
  const handleDelete = () => {
    onDelete(inventory.id)
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
          <h2 className="modal__title">
            Delete {inventory.item_name} inventory item?
          </h2>
          <img
            className="modal__close--tablet"
            onClick={onClose}
            src={closeIcon}
          />
        </div>
        <div className="modal__wrapper">
          <div className="modal__body">
            <p className="modal__message">
              Please confirm that you'd like to delete the {inventory.item_name}{" "}
              from the inventory list. You won't be able to undo this action.
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

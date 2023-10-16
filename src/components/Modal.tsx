const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal">
      <div style={{ marginBottom: "24px" }}>Ini contoh modal</div>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export default Modal;
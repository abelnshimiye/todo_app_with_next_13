
interface ModalPropos{
    modalOpen: boolean,
    setModelOpen : (open: boolean) => boolean | void;
    children : React.ReactNode

}

const Modal: React.FC<ModalPropos> = ({modalOpen, setModelOpen, children }) => {
  return (
<dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box">
    <button onClick={() => setModelOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

    <div className="py-4">
        {children}
    </div>

  </div>
</dialog>
  )
}

export default Modal
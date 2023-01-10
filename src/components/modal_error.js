import { Button, Modal } from "react-bootstrap"

function ModalError({style, show, msj, onHide}) {
    return(
        <Modal show={show} centered className='shadow' contentClassName={'shadow border-0 ' + style[0]} onHide={onHide} backdrop="static">
          <Modal.Header className='bg-danger bg-gradient' closeButton>
            <Modal.Title className=''>Error</Modal.Title>
          </Modal.Header>
    
          <Modal.Body className='text-center'>
            <div>{msj}</div>
          </Modal.Body>
    
          <Modal.Footer className='bg-danger bg-gradient'>
            <Button className='bg-gradient btn-purple'>Contact</Button>
          </Modal.Footer>
        </Modal>
    )
}

export default ModalError
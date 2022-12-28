import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';



const List = (props) => {

  const [checked ,setChecked] = useState(false)
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


const id = props.key;
const txt =props.text;

const handleChange = (e) => {
  setChecked({...checked , [e.target[id]] : e.target.checked}) 
  
}



  return (
<>

<div className='center'> 
    
    <div className='remove'>




    <label className="container">
      <input 
      type="checkbox"
      id={id}
      name='checkbox1'
      value={checked[id]}
      onClick = {handleChange}
      />
      
    </label>

        <li className='list_item' style={{textDecoration : (checked[id]===true) ? 'line-through' :' '}}>{txt} {id} 
        </li>
        
        <span >
        
        
    {/* modal start */}
    <Button>
    <DeleteIcon  variant="primary" onClick={handleShow} />
      </Button>

        <Modal className='Modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body ><p className='ModalBody'>Are You Want To Delete?</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick = {(e) => props.onClick(e.target.value) }>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    

        
        </span>

    </div>

    </div>
    </>

  )
}

export default List


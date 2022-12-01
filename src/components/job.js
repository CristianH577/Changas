import { useEffect } from 'react';
import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FilesImg from './files_img';

import occsList from "../json/occsList.json";

function Job(props) {
  const options = occsList.map( (item) => <option key={item} value={item} >{item}</option> )

  const occ = useRef()
  const name = useRef()
  const price = useRef()
  const description = useRef()

  var showOcc = false
  if(props.occ) showOcc = true

  var showName = false
  if(props.name) showName = true

  var showImgs = false
  if(props.imgs) showImgs = true

  useEffect(() => {
    if(props.occ) occ.current.value = props.data.occ
    if(props.name) name.current.value = props.data.name
    price.current.value = props.data.price
    description.current.value = props.data.description
  })

  const onChange = (e) => {
    props.updateJob(props.id, e)
  }
    
  return(
    <div className="mb-4">
      <InputGroup className="mb-1">
        {
          showOcc &&
          <Form.Select 
            aria-label="Categoria" 
            className="select-occ" 
            data-type="occ" 
            onChange={onChange} 
            required
            ref={occ}
          >
            <option value="">Categoria*</option>
            {options}
          </Form.Select>
        }

        {
          showName &&
          <Form.Control 
            ref={name}
            aria-label="Nombre del trabajo" 
            placeholder="Nombre*"
            data-type="name"
            onChange={onChange}
            required
          />
        }

        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          type="number"
          ref={price}
          placeholder="Precio"
          aria-label="Precio" 
          data-type="price"
          onChange={onChange}
        />

        <Button variant="danger" type="button" 
        onClick={() => props.deleteJob(props.id)}>
          -
        </Button>
      </InputGroup>
      
      <Form.Control 
        as="textarea"
        ref={description}
        placeholder="Descripcion*"
        rows="3"
        style={{resize: "none"}}
        aria-label="Descripcion"
        className="mb-1"
        data-type="description"
        onChange={(e) => props.updateJob(props.id, e)}
        required
      />

      {
        showImgs &&
        <FilesImg 
          onChange={onChange}
          ariaLabel={"Imagenes de muestra"}
          max={3}
        />
      }
    </div>
  );
}

export default Job;
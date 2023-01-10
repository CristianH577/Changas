import { useEffect, useContext } from 'react';
import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FilesImg from './files_img';

import occsList from "../json/occsList.json";
import { configContext } from '../context/config_context';

function Job(props) {
  const config = useContext(configContext)
  // const style = config.style.value

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
    <div className="p-2">
      <InputGroup>
        {
          showOcc &&
          <Form.Select 
            className='' 
            data-type="occ" 
            onChange={onChange} 
            required
            ref={occ}
            style={{borderEndStartRadius: 0}}
          >
            <option value="">{config.text.signup.category}*</option>
            {options}
          </Form.Select>
        }

        {
          showName &&
          <Form.Control 
            ref={name}
            placeholder={config.text.signup.name + "*"}
            data-type="name"
            onChange={onChange}
            required
            style={{borderEndStartRadius: 0}}
          />
        }

        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          type="number"
          ref={price}
          placeholder={config.text.signup.price}
          data-type="price"
          onChange={onChange}
        />

        <Button variant="danger" type="button" style={{borderEndEndRadius: 0}}
        onClick={() => props.deleteJob(props.id)}>
          -
        </Button>
      </InputGroup>
      
      <Form.Control 
        as="textarea"
        ref={description}
        placeholder={config.text.signup.desc + "*"}
        rows="3"
        style={{resize: "none"}}
        className='rounded-0 rounded-bottom mb-2'
        data-type="description"
        onChange={(e) => props.updateJob(props.id, e)}
        required
      />

      {
        showImgs &&
        <FilesImg 
          onChange={onChange}
          max={3}
        />
      }
    </div>
  );
}

export default Job;
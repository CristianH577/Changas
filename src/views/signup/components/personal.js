import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import SelectLocation from '../../../components/select_location';
import { configContext } from '../../../context/config_context'
import { useContext } from 'react';

function Personal(props) {
  const config = useContext(configContext)

  return (
    <fieldset disabled={props.disabled} className={props.class}>
      <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>Personal</legend>

      <div>
        <div className="mb-3 row">
          <Form.Label>{config.text.signup.name}*</Form.Label>
          <InputGroup>
              <Form.Control type="text" placeholder={config.text.signup.name} name="cognomen" onChange={(e) => props.updateData(e)} required />
              <Form.Control type="text" placeholder={config.text.signup.surname} name="surname" onChange={(e) => props.updateData(e)} required />
          </InputGroup>
        </div>

        <SelectLocation 
          class="mb-3"
          label={config.text.signup.location}
          required={true}
          onChange={props.updateData}
        />
        
        <div className="mb-3">
          <Form.Label>{config.text.signup.phone}*</Form.Label>
          <InputGroup>
            <Form.Control type="number" name="prefix" placeholder="(381)" className="w-25" onChange={(e) => props.updateData(e)} required />
            <Form.Control type="number" name="phone" placeholder="(697 0498)" className="w-75" onChange={(e) => props.updateData(e)} required />
          </InputGroup>
        </div>
      </div>
    </fieldset>
  );
}
  
  export default Personal;
  
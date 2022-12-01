import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import SelectLocation from '../../../components/select_location';

function Personal(props) {
  return (
    <fieldset disabled={!props.show} className={props.show ? null : 'd-none'}>
      <div className="mb-3 row">
        <Form.Label>Nombre*</Form.Label>
        <InputGroup>
            <Form.Control type="text" placeholder="Nombre" name="cognomen" onChange={(e) => props.updateData(e)} required />
            <Form.Control type="text" placeholder="Apellido" name="surname" onChange={(e) => props.updateData(e)} required />
        </InputGroup>
      </div>

      <SelectLocation 
        className="mb-3"
        label='Localidad*'
        required={true}
        onChange={props.updateData}
      />
      
      <div className="mb-3">
        <Form.Label>Telefono*</Form.Label>
        <InputGroup>
          <Form.Control type="number" aria-label="Prefijo" name="prefix" placeholder="(381)" className="w-25" onChange={(e) => props.updateData(e)} required />
          <Form.Control type="number" aria-label="Numero" name="phone" placeholder="(697 0498)" className="w-75" onChange={(e) => props.updateData(e)} required />
        </InputGroup>
      </div>
    </fieldset>
  );
}
  
  export default Personal;
  
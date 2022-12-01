import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import SelectExp from '../../../../../components/select_exp';
import SelectOcc from '../../../../../components/select_occ';

function Occupation({ id, deleteOcc, updateOcc, disabled }) {

    return(
        <InputGroup className="mb-3">
            <SelectOcc 
                required={true}
                disabled={disabled}
                onChange={(e) => updateOcc(id, e)}
            />
            <SelectExp 
                required={true}
                onChange={(e) => updateOcc(id, e)}
            />
            {
                id !== "main" && 
                <Button 
                    variant="danger" 
                    type="button" 
                    onClick={() =>  deleteOcc(id) }
                >-</Button>
            }
        </InputGroup>
    );
}

export default Occupation;
import { Form } from "react-bootstrap";
import SelectExp from "../../../components/select_exp";
import SelectLocation from "../../../components/select_location";
import SelectOcc from "../../../components/select_occ";

function Filters(props) {
    return(
        <div>
            <Form.Select 
                aria-label="Ordenar por" 
                name="orderBy" 
                className="mb-2" 
                onChange={(e) => props.onChange(e)}
            >
                <option value="">Ordenar</option>
                <option value="latest">Mas recientes</option>
                <option value="oldest">Mas antiguos</option>
                <option value="occ">Oficio</option>
                <option value="exp">Experiencia</option>
                <option value="department">Departamento</option>
                <option value="ngb">Municipalidad</option>
            </Form.Select>
            
            <Form.Select 
                aria-label="Busco" 
                name="want" 
                className="mb-2" 
                onChange={(e) => props.onChange(e)}
            >
                <option value="">Busco</option>
                <option value="work">Trabajar</option>
                <option value="employ">Emplear</option>
            </Form.Select>
            
            <SelectOcc 
                className={"mb-2"} 
                onChange={props.onChange} 
                name={"occ"}
            />

            <SelectExp 
                className={"mb-2"} 
                onChange={props.onChange} 
            />

            <SelectLocation 
                onChange={props.onChange} 
                onChangeDpt={props.onChangeDpt} 
                onChangeNgb={props.onChangeNgb} 
            />
        </div>
    );
}

export default Filters;
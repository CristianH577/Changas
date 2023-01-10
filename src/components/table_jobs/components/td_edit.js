import { Form } from "react-bootstrap"
import { configContext } from '../../../context/config_context'
import { useContext } from "react"
import { IconContext } from "react-icons";
import { FiEdit, FiSave } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { CiUndo } from "react-icons/ci";

function TdEdit(props) {
    
    const handleEdit = () => {
        if(props.edit) props.edit()
    }
    const handleDelete = () => {
        if(props.delete) props.delete()
    }
    const handleSave = () => {
        if(props.save) props.save()
    }
    const handleCancel = () => {
        if(props.cancel) props.cancel()
    }

    return(
        props.active === false
        ?
        <>
            <IconContext.Provider value={{ color: "blue" }}>
                <FiEdit onClick={handleEdit} />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "1em" }} onClick={handleDelete}>
                <ImCancelCircle />
            </IconContext.Provider>
        </>
        :
        <>
            <IconContext.Provider value={{ size: "1em" }} onClick={handleSave}>
                <FiSave />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "1em" }}>
                <CiUndo onClick={handleCancel} />
            </IconContext.Provider>
        </>
    )
}

export default TdEdit
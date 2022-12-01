import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

function Account(props) {
  const defaultProfileImg = require(`../../../assets/imgs/profile.png`)
  const [profileImg, setProfileImg] = useState(defaultProfileImg);

  const preview = (e) => {
    const reader = new FileReader()
    if(e.target.files[0]){
      console.log(e.target.files)
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () =>{
        if(reader.readyState === 2){
          setProfileImg(reader.result)
        }
      }
    }else{
      setProfileImg(defaultProfileImg)
    }
    props.updateData(e)
  }

  const [zoom, setZoom] = useState(false);

  const confirmEmail = async(e) => {
    var bool = false
    const email = e.target.value

    if(email !== ""){
      const formData = new FormData()

      formData.append('email', email)
      await axios.post('http://localhost:50/ChangasAPI/signup/validateEmail', formData)
      .then(answer => {
        console.log(answer)
        if(answer.data === false) bool = true
  
        console.log(bool)
        props.setValidations({
          ...props.validations,
          email: !bool
        })
        
        return bool
      })
      .catch(error => console.log(error))
    }
  }

  return (
    <fieldset disabled={!props.show} className={props.show ? null : 'd-none'}>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Busco" name="accType" onChange={props.updateData} required>
          <option value="">Busco*</option>
          <option value="work">Trabajar</option>
          <option value="employ">Emplear</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email*</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="example@domain.com" 
          name="email" 
          onChange={props.updateData} 
          onBlur={confirmEmail}
          isInvalid={props.validations.email}
          required 
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Contraseña*</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="********" 
          autoComplete="off" 
          name="password" 
          onChange={props.updateData} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control 
          type="password" 
          placeholder="********" 
          autoComplete="off" 
          name="passwordC" 
          onChange={props.updateData} 
          required 
          isInvalid={props.validations.passC}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen de perfil</Form.Label>

        <Form.Control type="file" accept="image/*" name="profileImg" onChange={(e) => preview(e)} />

        <div className="d-flex justify-content-center">
          <img src={profileImg} alt="Imagen de perfil" className="img-thumbnail mt-2" style={{width: "200px"}} onClick={() => setZoom(!zoom)} />

          <Modal centered show={zoom} onHide={() => setZoom(!zoom)}>
            <img src={profileImg} alt="Imagen de perfil" />
          </Modal>
        </div>

      </Form.Group>
    </fieldset>
  );
}
  
export default Account;
  
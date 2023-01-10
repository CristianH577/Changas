import Form from 'react-bootstrap/Form';
import { useState, useContext, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { configContext } from '../../../context/config_context'

function Account(props) {
  const config = useContext(configContext)

  /* */
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

  const [zoom, setZoom] = useState(false)
  const email = useRef(null)
  const password = useRef(null)
  const passwordC = useRef(null)

  const confirmEmail = () => {
    var bool = true
    const emailV = email.current.value

    if(emailV !== ""){
      const formData = new FormData()

      formData.append('email', emailV)
      axios.post('http://localhost:50/ChangasAPI/signup/validateEmail', formData)
      .then(answer => {
        console.log(answer)
        if(answer.data === false) bool = false
  
        props.setValidations({
          ...props.validations,
          email: bool
        })
      })
      .catch(error => console.log(error))
    }
    else{
      bool = null
    }

    props.setValidations({
      ...props.validations,
      email: bool
    })

  }

  const confirmPassword = () => {
    const passC = passwordC.current.value
    const pass = password.current.value

    var bool = true
    if(passC !== ''){
      if(pass === passC){
        bool = false
      }
    }
    else{
      bool = null
    }
    
    props.setValidations({
      ...props.validations,
      passC: bool
    })

  }

  return (
    <fieldset disabled={props.disabled} className={props.class}>
      <legend className={props.styleLegend} style={{float: "unset", width: "unset"}}>Cuenta</legend>
      
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Busco*</Form.Label>
          <Form.Select aria-label="Busco" name="accType" onChange={props.updateData} required>
            <option value="">{config.text.signup.want}</option>
            <option value="work">{config.text.signup.want1}</option>
            <option value="employ">{config.text.signup.want2}</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control 
            type="email" 
            placeholder={config.text.signup.emailPh} 
            name="email" 
            onChange={props.updateData} 
            onBlur={confirmEmail}
            isInvalid={props.validations.email}
            required 
            ref={email}
          />
          <Form.Control.Feedback type="invalid">
          {props.validations.email && 'Ya existe una cuenta con este email.'}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>{config.text.signup.password}*</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="********" 
            autoComplete="off" 
            name="password" 
            onChange={props.updateData} 
            required 
            ref={password}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
            type="password" 
            placeholder="********" 
            autoComplete="off" 
            name="passwordC" 
            onChange={props.updateData} 
            onBlur={confirmPassword}
            required 
            ref={passwordC}
            isInvalid={props.validations.passC}
          />
          <Form.Control.Feedback type="invalid">
          {props.validations.passC && 'Las contraseñas no coinciden.'}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{config.text.signup.profileImg}</Form.Label>

          <Form.Control type="file" accept="image/*" name="profileImg" onChange={(e) => preview(e)} />

          <div className="d-flex justify-content-center">
            <img src={profileImg} alt={config.text.signup.profileImg} className="img-thumbnail mt-2" style={{width: "200px"}} onClick={() => setZoom(!zoom)} />

            <Modal centered show={zoom} onHide={() => setZoom(!zoom)}>
              <img src={profileImg} alt={config.text.signup.profileImg} />
            </Modal>
          </div>

        </Form.Group>

      </div>
    </fieldset>
  );
}
  
export default Account;
  
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import { configContext } from '../../context/config_context';

function Login() {
  const config = useContext(configContext)
  // const style = config.style.value

  const [validation, setValidation] = useState(false)
  const [time, setTime] = useState(60*60)
  const [dataLog] = useState({})
  const cookies = new Cookies()

  const handleSubmit = (e) => {
    const form = e.currentTarget

    e.preventDefault()
    e.stopPropagation()

    if (form.checkValidity() === false) {
      setValidation(true)
    }
    else{
      setValidation(false)
      login()
    }
  }

  const login = async() => {
    const formData = new FormData()

    Object.entries(dataLog).forEach((item) => {
      formData.append(item[0], item[1])
    })

    await axios.post('http://localhost:50/ChangasAPI/login/authenticate', formData)
    .then( answer => {
      console.log(answer)
      if(answer.data){
        // console.log("log")
        cookies.set('user', answer.data, { path: '/', maxAge: time })
        config.user.set(true)
      }
      else{
        console.log("Error: no se pudo ingresar")
      }
    })
    .catch( error => {
      console.log(error)
    })
  }

  const handleChange = (e) => {
    dataLog[e.target.name] = e.target.value
  }

  return (
    <Form noValidate validated={validation} onSubmit={handleSubmit} method="POST" className='mt-5'>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" required onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" name="password" autoComplete="off" onChange={handleChange} required />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Mantener sesion abierta" onChange={(e) => e.target.checked ? setTime(60*60*24*30) : setTime(60*60)} />
      </Form.Group>

      <div className="center">
        <Button type="submit" className={'fs-5 btn-purple'}>
          Ingresar
        </Button>
      </div>
    </Form>
  );
}

export default Login;

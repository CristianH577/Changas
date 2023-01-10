import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineClear } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import Previews from './previews'
import './files_img.css'

function FilesImg(props) {
     const [imgs, setImgs] = useState([])

     // props.default && setImgs(props.default)
     useEffect(() => {
          props.default && setImgs(props.default)
     }, [])

     const updatePreviews = (e) => {
          var array = e.target.files

          if (array.length <= props.max) {
               var newImgs = []
               for (let i = 0; i < array.length; i++) {
                    var k = URL.createObjectURL(array[i]);
                    newImgs.push(k);
               }
               setImgs(newImgs)
          }
          else{
               e.target.value = ""
               setImgs([])
               console.log("Maximo: " + props.max)
          }

          if(props.onChange) props.onChange(e)
     }

     const inputFilesRef = useRef(null)
     const resetFiles = () => {
          inputFilesRef.current.value = null
          setImgs([])
     }

     //const deleteImg = (idx) => {
       //idx === 0 ? imgs.splice(idx, 1) : imgs.splice(idx, idx)
     //   updateView()
       //inputFilesRef.current.files[idx] = null
     //   const files = inputFilesRef.current.files
     //   console.log(files[idx])
     //   var a = {}
     //   for (let i = 0; i < files.length; i++) {
     //      if(i !== idx) a[i] = files[i]
     //   }
     //   console.log(a)
       //inputFilesRef.current.value = a[0]
       //var b = a.splice(idx, 1)
       //console.log(b)
       //inputFilesRef.current.files = a
       //console.log(inputFilesRef.current.files)
     //}

     /* MODAL */
     const [show, setShow] = useState(false);
     const [showTo, setShowTo] = useState();

     const changeShowTo = img => {
          setShowTo(img)
          setShow(!show)
     }

     return(
          <div>
               { props.label && <Form.Label>{props.label}</Form.Label> }
               <InputGroup>
                    <Form.Control 
                         type="file" 
                         multiple accept="image/*" 
                         onChange={updatePreviews} 
                         onEmptied={updatePreviews}
                         ref={inputFilesRef} 
                         name={props.name} 
                         data-type="imgs"
                    />
                    
                    <Button variant="info" type="button" 
                    onClick={resetFiles}>
                         <IconContext.Provider value={{ size: "1.5em" }}>
                              <AiOutlineClear />
                         </IconContext.Provider>
                    </Button>
               </InputGroup>

               <Previews 
                    directory = {props.directory}
                    imgs={imgs} 
                    //deleteImg={deleteImg}
                    changeShowTo={changeShowTo}
               />
               
               <Modal centered show={show} size="xl" onHide={() => setShow(!show) }>
                    <img src={showTo} alt="" className='rounded' />
               </Modal>
          </div>
     );
}

export default FilesImg;
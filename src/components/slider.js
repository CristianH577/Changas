
import './slider.css'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from "react-icons/gr";

function Slider(props) {
    const [directory, setDirectory] = useState()
    const [imgs, setImgs] = useState([])
    const [size] = useState({
        width: '300px',
        height: '300px',
        maxWidth: '',
        maxHeight: ''
    })
    const [bg, setBg] = useState('secondary')

    useEffect(() => {
        setDirectory(props.directory)
        setImgs(props.imgs)
        props.width && (size.width = props.width)
        props.height && (size.height = props.height)
        props.maxWidth && (size.maxWidth = props.maxWidth)
        props.maxHeight && (size.maxHeight = props.maxHeight)
        props.bg && (setBg(props.bg))
    // eslint-disable-next-line
    }, [props])

    /* CONSOLE */
    const [active, setActive] = useState(0)
    const prev = () => {
        active === 0 
        ? setActive(imgs.length - 1)
        : setActive(active-1)
    }
    const next = () => {
        active === (imgs.length - 1) 
        ? setActive(0)
        : setActive(active+1)
    }

    const styleBtn = 'border-0 rounded opacity-0 p-1'
    /* */

    /* MODAL */
    const [show, setShow] = useState(false);
    const [showTo, setShowTo] = useState();

    const changeShowTo = img => {
        setShowTo(directory+img)
        setShow(!show)
    }

    return(
        <div className={'slider bg-' + bg + ' bg-opacity-75 rounded-md ' + props.className} style={{ width: size.width, height: size.height ,maxHeight: size.maxHeight, maxWidth: size.maxWidth}}>
          { imgs.length > 1 &&
            <div className='slider-console w-100 h-100 center'>
              <div className='w-100 d-flex justify-content-between mx-2'>
                <button className={styleBtn} onClick={prev}>
                  <IconContext.Provider value={{ size: "" }}>
                    <GrPrevious />
                  </IconContext.Provider>
                </button>
                <button className={styleBtn} onClick={next}>
                  <IconContext.Provider value={{ size: "" }}>
                    <GrNext />
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          }
    
          <div className='slider-inner d-flex'>
            {imgs.map((img, i) => 
              <div key={i} className={'slider-item w-100 h-100 center opacity-0 ' + (i === active && 'active')}>
                <div className='w-100 h-100 m-2' style={{backgroundImage: 'url('+directory+img+')'}} onClick={() => changeShowTo(img)} />
              </div>
            )}
          </div>
          
            <Modal centered show={show} className='zoom-out' size="xl" onHide={() => setShow(!show) }>
                <img src={showTo} alt="" className='rounded' onClick={() => setShow(!show) } />
            </Modal>
        </div>
    )
}

export default Slider
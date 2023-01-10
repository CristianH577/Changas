import { useState } from 'react'

import { IconContext } from 'react-icons'
import { BsArrowBarLeft, BsArrowBarRight, BsCameraFill, BsTools } from 'react-icons/bs'
import { GiAnvil, GiHandSaw, GiPartyPopper, GiTrowel, GiCook } from 'react-icons/gi'
import { FaBabyCarriage, FaCarAlt } from 'react-icons/fa'
import { IoMdSchool, IoMdFootball } from 'react-icons/io'

import './wheel_category.css'

function WheelCategory(props) {
    const icons = [
      <BsTools />,
      <GiCook />,
      <IoMdSchool />,
      <GiPartyPopper />,
      <BsCameraFill />, 
      <IoMdFootball />,
      <FaCarAlt />,
      <FaBabyCarriage />,
      <GiHandSaw />,
      <GiAnvil />,
      <GiTrowel />
    ]
  
    const [x, setX] = useState(0)

    const handleClick = (e) => {
        const name = e.target.dataset.name
        // console.log(e)
        switch (name) {
            case 'next':
                x > -1000 && setX(x-100)
                break;
            case 'next-md':
                x > -900 && setX(x-100)
                break;
            case 'next-lg':
                x > -700 && setX(x-100)
                break;
            case 'next-xl':
                x > -500 && setX(x-100)
                break;
            case 'prev':
                x < 0 && setX(x+100)
                break;
        
            default:
                break;
        }
    }

    const handleResize = () => {
        setX(0)
    }
    window.addEventListener('resize', handleResize)

    const btnClass = 'wheel-btn center col-4 col-md-3 col-lg-2 col-xl-1 border-0 bg-transparent '

    return(
        <div className={'row bg-gradient wheel center w-100 ' + props.class}>
            <button 
                onClick={handleClick} 
                className={btnClass}
            >
                <IconContext.Provider value={{ size: "5em" }} >
                    <BsArrowBarLeft data-name='prev' className='d-xxl-none' />
                </IconContext.Provider>
            </button>
        
            <div className='py-2 col-4 col-md-6 col-lg-8 col-xl-10 wheel-inner row'>
            {
                icons.map((icon, i) =>
                <div 
                    key={i} 
                    style={{transform: 'translateX('+x+'%)'}} 
                    className={'wheel-item center py-3 col-12 col-md-6 col-lg-3 col-xl-2 col-xxl-1'}
                >
                    <IconContext.Provider value={{ size: "5em" }} >
                    {icon}
                    </IconContext.Provider>
                </div>
                )
            }
            </div>

            <button 
                onClick={handleClick} 
                className={btnClass}                
            >
                <IconContext.Provider value={{ size: "5em" }} >
                    <BsArrowBarRight data-name='next' className='d-md-none' />
                    <BsArrowBarRight data-name='next-md' className='d-none d-md-flex d-lg-none' />
                    <BsArrowBarRight data-name='next-lg' className='d-none d-lg-flex d-xl-none' />
                    <BsArrowBarRight data-name='next-xl' className='d-none d-xl-flex d-xxl-none' />
                </IconContext.Provider>
            </button>
        </div>
    )
}

export default WheelCategory;
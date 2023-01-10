import { Card } from "react-bootstrap";
import { useEffect, useRef, useState } from 'react'

function CardHome({props}) {

  /* EFECTO */
  const outerRef = useRef(null);
  const [x, setX] = useState([0,100]);

  useEffect(() => {
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === outerRef.current) {
          entry.isIntersecting
          ? setX([1,0])
          : setX([0,100])
        }
      })
    }
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current)
  }, [outerRef]);
  /* /EFECTO */  

    return(
      <div ref={outerRef} id='card_home'>
        <Card 
          bg={props.bg} 
          className="mb-3 bg-gradient d-lg-flex flex-lg-row"
          style={{
            transform: 'translateX('+x[1]+'%)',
            opacity: x[0],
            transition: '.2s linear'
          }}
        >
          <div className='col-12 col-lg-6'>
              <Card.Img src={props.img} alt={props.alt} />
          </div>
          <Card.Body className='col-12 col-lg-2'>
            <Card.Title className='fs-1'>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CardHome;
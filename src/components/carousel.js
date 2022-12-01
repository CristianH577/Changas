import { Carousel } from "react-bootstrap";

function CarouselConstruct(props) {
     const items = props.imgs.map((img, idx) =>
          <Carousel.Item key={idx}>
               <img
               className="d-block w-100"
               src={require(`../assets/imgs/${img[0]}`)}
               alt="First slide"
               />
               <Carousel.Caption>
               <h3>{img[1]}</h3>
               <p>{img[2]}</p>
               </Carousel.Caption>
          </Carousel.Item>
     )

     return(
     <Carousel fade interval={null}>
          {items}
     </Carousel>
     );
}

export default CarouselConstruct;
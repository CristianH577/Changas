import { useContext } from 'react'
import { configContext } from '../../context/config_context'
import text from '../../lang/views/home.json'

import headerImg from '../../assets/imgs/home_header0.webp'
import cardImg1 from '../../assets/imgs/card1.webp'
import cardImg2 from '../../assets/imgs/card2.webp'
import cardImg3 from '../../assets/imgs/card3.webp'
import cardImg4 from '../../assets/imgs/card4.webp'

import WheelCategory from './components/wheel_category'
import CardHome from './components/card_home'

function Home() {
  const config = useContext(configContext)
  const style = config.style.value
  const lang = config.lang.value

  const cards = [
    {
      bg: 'primary',
      img: cardImg1,
      title: text[lang].title_card1,
      text: text[lang].text_card1
    },
    {
      bg: 'success',
      img: cardImg2,
      title: text[lang].title_card2,
      text: text[lang].text_card2
    },
    {
      bg: 'warning',
      img: cardImg3,
      title: text[lang].title_card3,
      text: text[lang].text_card3
    },
    {
      bg: 'info',
      img: cardImg4,
      title: text[lang].title_card4,
      text: text[lang].text_card4
    }
  ]

  
  return (
    <>
    <img src={headerImg} alt='Home header' className="w-100" />

    <WheelCategory style={style} class={'mb-3 element ' + style[0]} />

    <h1 className='fw-bold rounded text-center py-2 px-5 rounded-0 rounded-lg w-100 w-lg-auto' style={{ transition: '.5s linear'}}>{text[lang].title_page}</h1>

    <section className={'center flex-column mx-5 text-' + style[1]} >
      <div style={{ maxWidth: '1200px'}}>
        { cards.map((card, i) =>
          <CardHome key={i} props={card} />
        )}
      </div>
    </section>
    </>
  );
}

export default Home;

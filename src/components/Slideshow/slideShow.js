import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import SlideshowStyles from "./slideShow.module.css"

import Image from "../image"

const Slideshow = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel
      mouseDragEnabled
      dotsDisabled={false}
      buttonsDisabled={true}
      autoPlay={true}
      autoPlayInterval={5000}
    >
      <div className={SlideshowStyles.slideshowWrapper}>
        <div className={SlideshowStyles.slideshowImageWrapper}>
          <Image src="slide1.png" onDragStart={handleOnDragStart} />
        </div>{" "}
        <div>
          <h2>Защитить лучше</h2>
          <p>
            EAS-compact — идеальная предохранительная муфта для надежной защиты
          </p>
        </div>
      </div>
      <div className={SlideshowStyles.slideshowWrapper}>
        <div className={SlideshowStyles.slideshowImageWrapper}>
          <Image src="slide2.png" onDragStart={handleOnDragStart} />
        </div>{" "}
        <div>
          <h2>Безопасность 4.0</h2>
          <p>
            ROBA-topstop — сертифицированная тормозная система для вертикальных
            осей с мониторингом тормоза
          </p>
        </div>
      </div>
      <div className={SlideshowStyles.slideshowWrapper}>
        <div className={SlideshowStyles.slideshowImageWrapper}>
          <Image src="slide3.png" onDragStart={handleOnDragStart} />
        </div>{" "}
        <div>
          <h2>Восстановление зацепления реверсом</h2>
          <p>
            EAS-reverse — предохранительная разделяющая нагрузку муфта от лидера
            рынка, также подходит для ситуаций, где затруднен доступ к приводу
          </p>
        </div>
      </div>
      <div className={SlideshowStyles.slideshowWrapper}>
        <div className={SlideshowStyles.slideshowImageWrapper}>
          <Image src="slide4.png" onDragStart={handleOnDragStart} />
        </div>{" "}
        <div>
          <h2>Они нужны каждому</h2>
          <p>
            Сервомуфты для всех конфигураций привода
            <br />
            - хорошая цена
            <br />
            - широкий ассортимент продукции
            <br />
            - короткое время поставки
            <br />
          </p>
        </div>
      </div>
      <div className={SlideshowStyles.slideshowWrapper}>
        <div className={SlideshowStyles.slideshowImageWrapper}>
          <Image src="slide5.png" onDragStart={handleOnDragStart} />
        </div>{" "}
        <div>
          <h2>Максимальная безопасность</h2>
          <p>
            ROBA-stop-M с управляющем модулем ROBA-brake-checker — Технология
            тормоза 4.0 от лидера рынка для тормозов угла тангажа и рыскания
            ветряков
          </p>
        </div>
      </div>
    </AliceCarousel>
  )
}

export default Slideshow

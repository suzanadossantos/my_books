import React from 'react'

import { Header } from '../../components/Header';
import styles from './home.module.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

//images
import Image1_slider from '../../assets/home/slider/image1.png';
import Image2_slider from '../../assets/home/slider/image2.png';
import Image3_slider from '../../assets/home/slider/image3.png';
import book1 from '../../assets/home/books/book1.png';
import book2 from '../../assets/home/books/book2.png';
import book3 from '../../assets/home/books/book3.png';
import book4 from '../../assets/home/books/book4.png';
import book5 from '../../assets/home/books/book5.png';
import book6 from '../../assets/home/books/book6.png';
import book7 from '../../assets/home/books/book7.png';
import book8 from '../../assets/home/books/book8.png';

const Home = () => {
  return (<>
    <Header />

    <Carousel className={styles.carousel}>
      <Carousel.Item>
      <img src={Image1_slider} alt="logo"/>
        <Carousel.Caption>
          <h3>The best books for <span>you</span></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image2_slider} alt="logo"/>
        <Carousel.Caption>
          <h3>All the <span>Authors</span></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image3_slider} alt="logo"/>
        <Carousel.Caption>
          <h3><span>Start reading now</span></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className={styles.newbooks}>
      <h3>New Books</h3>
      <div>
        <img src={book1} alt="book 1" />
        <img src={book2} alt="book 2" />
        <img src={book3} alt="book 3" />
        <img src={book4} alt="book 4" />
      </div>
      <div>
        <img src={book5} alt="book 5" />
        <img src={book6} alt="book 6" />
        <img src={book7} alt="book 7" />
        <img src={book8} alt="book 8" />
      </div>
    </div>

    
  </>)
}

export {Home}
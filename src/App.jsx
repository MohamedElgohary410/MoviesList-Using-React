import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cards from './components/cards'
import ControlledCarousel from './components/slider' //Slider component
import Navbars from './components/navBar'
export default function App() {

  let movie = [
    {
      id: 1,
      title: 'The Godfather',
      year: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      quantity: 1,
      price: 99.99,
      imgSrc: '../../public/images/father.jpg'
    },
    {
      id: 2,
      title: 'The dark knight',
      year: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      quantity: 4,
      price: 79.99,
      imgSrc: '../../public/images/knight1.jpg'
    },
    {
      id: 3,
      title: 'Interstellar',
      year: 2014,
      rating: 8.6,
      genre: 'Adventure, Drama, Sci-Fi',
      quantity: 0,
      price: 69.99,
      imgSrc: '../../public/images/interstellar1.jpg'
    },
    {
      id: 4,
      title: 'The Lord of the Rings',
      year: 2003,
      rating: 8.9,
      genre: 'Action, Adventure',
      quantity: 8,
      price: 89.99,
      imgSrc: '../../public/images/ring.jpg'
    }, {
      id: 5,
      title: 'The Godfather',
      year: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      quantity: 5,
      price: 99.99,
      imgSrc: '../../public/images/father.jpg'
    },
    {
      id: 6,
      title: 'The dark knight',
      year: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      quantity: 4,
      price: 79.99,
      imgSrc: '../../public/images/knight.jpg'
    },
    {
      id: 7,
      title: 'Interstellar',
      year: 2014,
      rating: 8.6,
      genre: 'Adventure, Drama, Sci-Fi',
      quantity: 2,
      price: 69.99,
      imgSrc: '../../public/images/intersteller.jpg'
    },
    {
      id: 8,
      title: 'The Lord of the Rings',
      year: 2003,
      rating: 8.9,
      genre: 'Action, Adventure',
      quantity: 8,
      price: 89.99,
      imgSrc: '../../public/images/ring1.jpg'
    }, {
      id: 9,
      title: 'The Godfather',
      year: 1972,
      rating: 9.2,
      genre: 'Crime, Drama',
      quantity: 5,
      price: 99.99,
      imgSrc: '../../public/images/father.jpg'
    },
    {
      id: 10,
      title: 'The dark knight',
      year: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      quantity: 4,
      price: 79.99,
      imgSrc: '../../public/images/knight1.jpg'
    },
    {
      id: 11,
      title: 'Interstellar',
      year: 2014,
      rating: 8.6,
      genre: 'Adventure, Drama, Sci-Fi',
      quantity: 2,
      price: 69.99,
      imgSrc: '../../public/images/interstellar1.jpg'
    },
    {
      id: 12,
      title: 'The Lord of the Rings',
      year: 2003,
      rating: 8.9,
      genre: 'Action, Adventure',
      quantity: 8,
      price: 89.99,
      imgSrc: '../../public/images/ring.jpg'
    }]
  const movies = movie.map((movie) => {
    {
      return (
        <Cards
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          genre={movie.genre}
          quantity={movie.quantity}
          price={movie.price}
          imgSrc={movie.imgSrc}
        />
      )
    }
  })
  return (
    <section className=' Container text-white'>
      <Navbars />
      <ControlledCarousel />
      <h1 className='text-center text-dark'>Movies</h1>
      <section className='row col-12 justify-content-center'>
        {movies}
      </section>
      <footer className='text-center text-dark'>All rights reserved</footer>
    </section>
  )
}

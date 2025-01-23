import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cards from './components/cards'
import ControlledCarousel from './components/slider' //Slider component
import Navbars from './components/navBar'
import { ButtonCategories } from './components/buttonCategories.jsx'
import { useFetch } from './CustomHooks/useFetch.js'
import { IoReloadSharp } from "react-icons/io5";

export default function App() {

  // let movie = [
  //   {
  //     id: 1,
  //     title: 'The 40-Year-Old Virgin',
  //     year: 2005,
  //     rating: 8.0,
  //     genre: 'Comedy',
  //     quantity: 1,
  //     price: 99.99,
  //     imgSrc: '../../public/images/father.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Get Out',
  //     year: 2017,
  //     rating: 8.3,
  //     genre: 'Horror',
  //     quantity: 4,
  //     price: 79.99,
  //     imgSrc: '../../public/images/knight1.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'Mad Max: Fury Road',
  //     year: 2015,
  //     rating: 8.1,
  //     genre: 'Action',
  //     quantity: 0,
  //     price: 69.99,
  //     imgSrc: '../../public/images/interstellar1.jpg'
  //   },
  //   {
  //     id: 4,
  //     title: 'The Shawshank Redemption',
  //     year: 1994,
  //     rating: 9.2,
  //     genre: 'Thriller',
  //     quantity: 8,
  //     price: 89.99,
  //     imgSrc: '../../public/images/ring.jpg'
  //   }, {
  //     id: 5,
  //     title: 'The Hangover',
  //     year: 2009,
  //     rating: 8.0,
  //     genre: 'Comedy',
  //     quantity: 5,
  //     price: 99.99,
  //     imgSrc: '../../public/images/father.jpg'
  //   },
  //   {
  //     id: 6,
  //     title: 'The Babadook',
  //     year: 2014,
  //     rating: 8.1,
  //     genre: 'Horror',
  //     quantity: 4,
  //     price: 79.99,
  //     imgSrc: '../../public/images/knight.jpg'
  //   },
  //   {
  //     id: 7,
  //     title: 'The Dark Knight',
  //     year: 2008,
  //     rating: 9.0,
  //     genre: 'Action',
  //     quantity: 2,
  //     price: 69.99,
  //     imgSrc: '../../public/images/intersteller.jpg'
  //   },
  //   {
  //     id: 8,
  //     title: 'The Silence of the Lambs',
  //     year: 1991,
  //     rating: 8.6,
  //     genre: 'Thriller',
  //     quantity: 8,
  //     price: 89.99,
  //     imgSrc: '../../public/images/ring1.jpg'
  //   }, {
  //     id: 9,
  //     title: 'The Big Lebowski',
  //     year: 1998,
  //     rating: 8.1,
  //     genre: 'Comedy',
  //     quantity: 5,
  //     price: 99.99,
  //     imgSrc: '../../public/images/father.jpg'
  //   },
  //   {
  //     id: 10,
  //     title: 'The Exorcist',
  //     year: 1973,
  //     rating: 8.0,
  //     genre: 'Horror',
  //     quantity: 4,
  //     price: 79.99,
  //     imgSrc: '../../public/images/knight1.jpg'
  //   },
  //   {
  //     id: 11,
  //     title: 'The Avengers',
  //     year: 2012,
  //     rating: 8.1,
  //     genre: 'Action',
  //     quantity: 2,
  //     price: 69.99,
  //     imgSrc: '../../public/images/interstellar1.jpg'
  //   },
  //   {
  //     id: 12,
  //     title: 'Seven',
  //     year: 1995,
  //     rating: 8.6,
  //     genre: 'Thriller',
  //     quantity: 8,
  //     price: 89.99,
  //     imgSrc: '../../public/images/ring.jpg'
  //   }]
  const { data, isLoading, errors } = useFetch("https://www.freetestapi.com/api/v1/movies")
  const [category, setCategory] = useState('All')
  let movieCategory = data.filter((movie) => category === 'All' ? movie : movie.genre[0] === category || movie.genre[1] === category || movie.genre[2] === category)
  const List = movieCategory.map((movie) => {
    {
      return (
        <Cards
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          genre={movie.genre}
          quantity={movie.quantity}
          price={movie.runtime}
          imgSrc={movie.imgSrc}
        />
      )
    }
  })
  //=========================================================================//
  const testing = <section className='row col-12 justify-content-center'>
    {isLoading && <div className='text-center m-5'>
      <IoReloadSharp className=' fs-1 text-dark animate-spin-slow' />
    </div>}
    {errors && <div className='alert alert-danger mt-5'>
      <h2>Errors occurs : {errors.message}</h2>
    </div>}
    {!isLoading && !errors && List}
  </section>
  //=========================================================================//
  return (
    <section className=' Container text-white'>
      <Navbars />
      <ControlledCarousel />
      <ButtonCategories setCategory={setCategory} />
      {testing}

      <footer className='text-center text-dark'>All rights reserved</footer>
    </section>
  )
}

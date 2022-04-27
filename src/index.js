import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL906_SR906,600_.jpg',
    title: 'Atomic Habits: An Easy and Proven Way To Build Habits',
    author: 'James Clear',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Brho5G+BL._AC_UL906_SR906,600_.jpg',
    title: 'Verity',
    author: 'Coleen Hoover',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL906_SR906,600_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
]

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
//Time tag- 2:54:23

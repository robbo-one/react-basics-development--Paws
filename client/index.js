import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const dogs = [{ name: 'Desmodina', breed: 'Bulldog', superpower: 'Heat vision', image: './images/bulldog.png' },
{ name: 'Hans', breed: 'Dachshund', superpower: 'Sausage Materialisation', image: './images/dachshund.png' },
{ name: 'Chad', breed: 'Bull-Terrier', superpower: 'Chewing through anything', image: './images/bull-terrier.png' },
{ name: 'Slowpoke', breed: 'Greyhound', superpower: 'Turtle Speed', image: './images/greyhound.png' },
{ name: 'Prince Phillip', breed: 'Hound', superpower: 'immortality', image: './images/hound.png' },
{ name: 'Brave Heart', breed: 'Scottie', superpower: 'Granting freedom', image: './images/scottie.png' },
{ name: 'Bill Clinton', breed: 'Jack Russel Terrier', superpower: 'Coercion', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/220px-Bill_Clinton.jpg' },
{ name: 'Lassie', breed: 'Rough Collie', superpower: 'Finding anything', image: 'https://images.moviefit.me/t/b/19285-lassie.webp'}]


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App dogs={dogs} />,
    document.getElementById('app')
  )
})

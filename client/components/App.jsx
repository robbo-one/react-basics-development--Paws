import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from "./Subtitle.jsx"

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='Canines using supercanine abilities for social good.' />
    <Dog name='savannah' breed='greyhound' superpower='detroying the damn couch' />
    <Dog breed='bulldog' name='shadow' superpower='getting attention' />

  </div>
)

export default App

import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from "./Subtitle.jsx"

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='Canines using supercanine abilities for social good.' />
    <Dog name='savannah' breed='huntaway' superpower='detroying the damn couch' />
  </div>
)

export default App

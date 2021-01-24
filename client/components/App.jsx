import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
    <Subtitle text='Canines using supercanine abilities for social good.' />
  </div>
)

export default App

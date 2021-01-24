import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'
const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='Canines using supercanine abilities for social good.' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' image='/images/bulldog.png' />
    <Dog name='Othello' breed='Mastiff' superpower='sleep' />
    
  </div>
)

export default App

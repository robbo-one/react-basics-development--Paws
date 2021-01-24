import React from 'react'
import ReactDOM from 'react-dom'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <h2>
    <Subtitle text='Canines using supercanine abilities for social good.' />
    </h2>
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
    
  </div>
)


export default App
  
 
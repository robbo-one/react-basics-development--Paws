import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='taters'/>
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision'/>
    <Dog name='Ignatio' breed='Rotweiler' image='/images/bulldog.png'/>
    <Dog name='mike' breed='scottie' superpower='flying' image='/images/scottie.png'/>
  </div>
)

export default App

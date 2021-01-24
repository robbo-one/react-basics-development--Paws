import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text='He like cheese.' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
    <Subtitle text='He like cheese.' />
    <Dog name='Chloe' breed='Jack-russel schnauzer' superpower='Sausage detection'/>
    <Subtitle text='She dont like cheese.' />
    <Dog name='Naga' breed='Tabby' superpower='Chonker' />
  </div>
)

export default App

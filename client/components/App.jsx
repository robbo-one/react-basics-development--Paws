import React from 'react'
import Dog from './Dog.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
    <Dog name='Chloe' breed='Jack-russel schnauzer' superpower='Sausage detection'/>
    <Dog name='Naga' breed='Tabby' superpower='Chonker' />
  </div>
)

export default App

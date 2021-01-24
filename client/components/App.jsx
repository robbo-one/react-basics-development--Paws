import React from 'react'
import Dog from './Dog.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='savannah' breed='huntaway' superpower='detroying the damn couch' />
  </div>
)

export default App

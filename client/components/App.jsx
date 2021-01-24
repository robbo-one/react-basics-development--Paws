import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'
import Images from './Images.jsx'



const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Subtitle text="Super hero dogs"/>
    <Images src='/images/bulldog.png'/>
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
    <Images src='/images/greyhound.png'/>
    <Dog name='Dragon' breed='greyhound' superpower='Fire breath' />
  </div>
)

export default App

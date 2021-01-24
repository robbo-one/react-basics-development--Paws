import React from 'react'
import Dog from './Dog.jsx'
import Subtitle from './Subtitle.jsx'


const App = (props) => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    {props.dogs.map(aDog => {
      return (
        <div>
          <Dog props={aDog} />
        </div>)
    })}
    <Subtitle text='Canines using supercanine abilities for social good.' />
  </div>
)

export default App



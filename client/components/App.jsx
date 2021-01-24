import React from 'react'
import ReactDOM from 'react-dom'
import Dog from './Dog.jsx'

const App = () => (
  <div className='container'>
    <img className='spinner' src='/images/paw.png' />
    <Dog name='Desdemona' breed='Bulldog' superpower='Heat vision' />
  </div>
)

// ReactDOM.render(
//   <Dog name={data.name}/>, 
//   document.getElementById('root')
// )


export default App

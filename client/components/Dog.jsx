import React from 'react'

const Dog = (props) => {
  //console.log(props)
  return (
    <div className='dog-wrapper'>
      <div className='dog'>
        <div className='dog-name-plate'>
          <span className='dog-name'>{props.props.name}</span>
          <span className='dog-breed'>{props.props.breed}</span>
        </div>
        <span className='dog-superpower'>{props.props.superpower}</span>
      </div>
      
        <img className="dog-pic" src={props.props.image}></img>
     
    </div>
  )
}

export default Dog


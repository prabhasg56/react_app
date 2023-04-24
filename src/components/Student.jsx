import { useRef } from 'react';
import Comp from './Comp';
import propTypes from 'prop-types'
const Student = (props) => {
  const sample = useRef([])
  
  sample.style.color('blue')
  return (
    <div>
        <h1 ref={sample}>{props.name}</h1>
        <h1>{props.age}</h1>
        <Comp name = {props.name}/>

    </div>
  )
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number
}

Student.defaultProps = {
  name: "Name",
  age: 0
}

export default Student
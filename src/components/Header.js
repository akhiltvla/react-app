import React, {useState} from 'react'
import headerCss from './Header.module.css'
import {Button, Table, Nav, Accordion, Card, Container} from 'react-bootstrap';


const Header = () => {
  const [colour,setColour]=useState('Green')
  const changeColour=()=>{
  setColour('Red')
  }
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  return (
    <>
    <h1 className='bg-success text -white'>Change colur to {colour}</h1>
   <button onClick={changeColour}>Change colour</button>
 
   <h1>Counter is {count}</h1>
   <Button onClick={increment} className = 'm-2 bg-success'>+</Button>
   <Button onClick={decrement}  className = 'm-2 bg-danger'>-</Button>
    </>
  )
}  



export default Header 
import React from 'react'

const Inputcolor = ({colorValue,hexValue,isDark}) => {
  return (
    <section 
    className='square'
    style={{backgroundColor:colorValue,
    color:isDark? '#000':'#fff'}} 
    
    >
        <p >{colorValue? colorValue:"Empty  Value"}</p>
        <p >{hexValue? hexValue:null}</p>
    </section>
  )
}


export default Inputcolor

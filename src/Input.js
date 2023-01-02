import React from 'react'
import colorNames from 'colornames'

const Input = ( {colorValue,setColorValue,setHexValue,isDark,setIsDark}) => {
  return (
      <form onSubmit={(e)=>e.preventDefault()}
        >
            <label> Add Color Name</label>
            <input 
            autoFocus
            type='text'
            placeholder='Add color'
            required
            value={colorValue}
            onChange={(e)=>
            {setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))

            }}
          
            />
            <button type='button'
            onClick={()=> setIsDark(!isDark)}>
                toggle color
            </button>

        </form>
  )
}

export default Input

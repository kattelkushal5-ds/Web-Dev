import React from 'react'
import Options from '../Starter/Options'

const WholeOptions = ({label,id,options,selectedValue,onSelectedValueChange}) => {
    return (
        <section style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <label htmlFor={id}> {label} </label>
            <Options 
                    id={id} 
                    options={options}
                    selectedValue={selectedValue}
                    onSelectedValueChange={onSelectedValueChange}
            />
        </section>
    )
}

export default WholeOptions

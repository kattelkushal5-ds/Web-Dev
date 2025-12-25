import React from 'react'

const Options = ({options,id, onSelectedValueChange,selectedValue}) => {
    return (
        <div className="menuContainer">
            <select onChange={e=>onSelectedValueChange(e.target.value)} id={id} className="menu">
                {options.map(({label,value},index)=>(
                    <option key={index} selected={value === selectedValue} value={value}>{label}</option>
                ))}
            </select>
        </div>
    )
}

export default Options

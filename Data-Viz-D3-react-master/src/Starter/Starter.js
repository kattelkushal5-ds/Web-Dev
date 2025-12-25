import React from 'react'
import "./starter.css"
import Options from './Options'

const Starter = () => {
    const options =[
        {value:"dog", label:"Dog"},
        {value:"cat", label:"Cat"},
        {value:"hamaster", label:"Hamaster"},
        {value:"horse", label:"Horse"},
        {value:"catfish", label:"Cat Fish"},
        {value:"rabbit", label:"Rabbit"},
        {value:"owl", label:"Owl"},
    ]
    const initialValue = 'hamaster'
    const [selectedValue, setSeclectedValue] =React.useState(initialValue)
    console.log(selectedValue)
    return (
        <div >
            <label htmlFor="pet-select">Choose Something</label>
            <Options selectedValue={selectedValue} options={options} id={"pet-select"} onSelectedValueChange={setSeclectedValue}/>
        </div>
    )
}

export default Starter
   
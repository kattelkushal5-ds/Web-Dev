import { json } from 'd3'
import React from 'react'
import { feature, mesh } from 'topojson'

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json"
const useData = () => {
    const [data, setData] =React.useState(null)
    console.log(data)
    React.useEffect(()=>{
        json(jsonUrl).then(topology =>{ 
            const {countries, land} = topology.objects
            setData({
                land:feature(topology,land),
                interiors: mesh(topology, countries,(a,b)=> a!==b)
            }
            )})
    },[])
    
    return data
}

export default useData

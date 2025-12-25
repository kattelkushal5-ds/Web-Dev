import { csv } from "d3";
import React from "react";

const csvUrl ="https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv"

export const useLineData =() =>{
    const [data,setData] =React.useState(null)

    React.useEffect(()=>{
        const row = (d) =>{
            d.temperature = +d.temperature
            d.timestamp = ((new Date(d.timestamp).getTime()))
            return d
        }
        csv(csvUrl,row)
            .then(setData)
    },[])
    return data
}

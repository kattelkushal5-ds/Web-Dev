import { csv } from "d3"
import React from "react"

const csvUrl = "https://gist.githubusercontent.com/K0KAa/3246c0d4a4253c38d93b185b71832331/raw/fbfa6d2951f353e10b723333ba2fe0ac26eb54d0/MeatInMetricTon.csv"
export const useData = () =>{
    const [data, setData] = React.useState(null)
    React.useEffect(()=>{
        const row =d=>{
            d.MeatData = +d.MeatData*1000
            return d
        }
        csv(csvUrl, row).then(data=>{
            setData(data.slice(-10).reverse())
        })
    },[])
    return data
}


// const xValue =d=> d.MeatData
// const yValue = d=>d.Time
// const yScale =scaleBand()
//     .domain(data.map(yValue))
//     .range([0,height])
// const xScale = scaleLinear()
//     .domain([0,max(data,d=>d.MeatData)])
//     .range([0,width])
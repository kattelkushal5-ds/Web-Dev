import React from 'react'
import { csv } from 'd3-fetch'

const csvUrl ="https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv"
const useScatteredData = () => {
    const [data,setData] =React.useState(null)
    React.useEffect(()=>{
        csv(csvUrl).then(setData)
    }, [])
    return data
}

export default useScatteredData 

import "./Axis.css"

const Marks =({data,xScale,yScale, xValue,yValue,tickFormat})=>{
    return(
    data.map(d=>{
        console.log(xValue(d))
        return(
        <>
            <rect className="marks" key={yValue(d)} x={0} 
                y={yScale(yValue(d))} 
                width={xScale(xValue(d))} 
                height={yScale.bandwidth()} 
            />
            <title>{tickFormat(xValue(d))} kg</title>
                
        </>)
    })
    )
}

export default Marks
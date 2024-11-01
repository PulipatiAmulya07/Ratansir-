function BrightText({color}){
    const textstyle={
        color:color

    }
    return(
        <>
        <p style={textstyle}>This is {color} text</p>
        </>
    )

}
export default BrightText;
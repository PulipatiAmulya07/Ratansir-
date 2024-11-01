function DataDisplay(){
    const now = new Date();
    const date=now.getDate();
    const dayIndex= now.getDay();
    const monthIndex= now.getMonth();
    const year=now.getFullYear();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    const months=["Jan","Feb","March","April","May","June","July","Aug","sep","oct","Nov","Dec"];
    return(
        <>
        <p>Day:{days[dayIndex]}</p>
        <p>Date:{date}</p>
        <p>Month:{months[monthIndex]}</p>
        <p>year:{year}</p>
        </>
    )

}
export default DataDisplay;
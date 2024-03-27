import React from "react";

export default function Dates(props){
    
    const startDate = props.startDate           // Дата начала
    const setStartDate = props.setStartDate     // Устанавливает дату начала

    const endDate = props.endDate               // Дата конца
    const setEndDate = props.setEndDate         // Устанавливает дату конца


    return(
        <div>
            <div>
                <label>Дата начала</label>
                <input type='date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            </div>
            <div>
                <label>Дата окончания</label>
                <input type='date' value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
        </div>
    )
}
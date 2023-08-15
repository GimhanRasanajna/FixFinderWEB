import { useEffect, useState } from "react"

import { ServiceRequestTable } from "../Sub/ServiceReq"
const ReservationPage = (props)=>{
    const  [pageLoad,setPageLoad]= useState(false)
    useEffect(()=>{
        // console.log(pageLoad + "test")
    },[pageLoad])
    return(
        <>
        <h1>Normal Reservations</h1>
            <h2>Upcoming</h2>
            <ServiceRequestTable status="Pending"  sc_id={props.sc_id} pageLoad={pageLoad} setPageLoad={setPageLoad} />
            <h2>Accepted</h2>
            <ServiceRequestTable status="Accept" sc_id={props.sc_id}  pageLoad={pageLoad}   setPageLoad={setPageLoad}/>
            <h2>Finished</h2>
            <ServiceRequestTable status="Done" sc_id={props.sc_id}  pageLoad={pageLoad}  setPageLoad={setPageLoad}/>
        </>
     )
}

export default ReservationPage
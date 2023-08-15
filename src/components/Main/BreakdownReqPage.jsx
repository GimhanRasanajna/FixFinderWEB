import { useEffect, useState } from "react"

import  BreakdownReqTable  from "../Sub/ServiceReq"

const BreakdownReqPage = (props)=>{
    const  [pageLoad,setPageLoad]= useState(false)
    useEffect(()=>{
        console.log(pageLoad)
    },[pageLoad])
    return(
        <><h1>Breakdown Request</h1>
            <h2>Upcoming</h2>
            <BreakdownReqTable status="Pending" sc_id={props.sc_id} pageLoad={pageLoad} setPageLoad={setPageLoad} />
            <h2>Accepted</h2>
            <BreakdownReqTable status="Accept" sc_id={props.sc_id} pageLoad={pageLoad}   setPageLoad={setPageLoad}/>
            <h2>Finished</h2>
            <BreakdownReqTable status="Done" sc_id={props.sc_id} pageLoad={pageLoad}  setPageLoad={setPageLoad}/>
        </>
    )
}

export default BreakdownReqPage
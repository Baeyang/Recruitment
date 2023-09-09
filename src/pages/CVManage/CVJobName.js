import { useEffect, useState } from "react"
import { getJobDetail } from "../../utils/request"

function CVJobName(props){
    const {record} = props
    const [job,setJob] = useState()

    useEffect(()=>{
        const fetchApi = async () => {
            const response = await getJobDetail(record.idJob)
            if(response){
                setJob(response)
            }
        }

        fetchApi();
    },[])
    return(
        <>
            {job && job.name}
        </>
    )
}
export default CVJobName
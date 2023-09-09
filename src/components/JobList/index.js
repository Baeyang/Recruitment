import { useEffect, useState } from "react"
import { getAllJobs, getAllcompany, getListJobs } from "../../utils/request"
import JobItem from "../JobItem"

function JobList(){
    const [jobs , setJobs] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            const response = await getAllJobs()
            const company = await getAllcompany()
            if(response && company){
                const newJobs = (response.reverse().splice(0,8)).map((item)=>{
                    const infoCompany = company.find((itemCompany)=>{
                        return itemCompany.id == item.idCompany
                    })
                    return{
                        infoCompany: infoCompany,
                        ...item
                    }
                })
                console.log(newJobs)
                setJobs(newJobs)
            }
        }

        fetchApi()
    },[])
    return(
        <>
            <h4 className="mt-20">
                Danh sách công việc mới nhât
            </h4>
            {
                jobs.length > 0 && (
                    <div className="ListJobs">
                        <div className="row">
                            {jobs.map((item,index)=>{
                                return(
                                    <JobItem item={item} key={index}></JobItem>
                                )
                            })}
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default JobList
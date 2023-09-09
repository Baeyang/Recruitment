import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllcompany, getDetailCompany, getListJobs } from "../../utils/request"
import JobItem from "../../components/JobItem"

function CompanyDetail(){
    const param = useParams()
    const [infoCompany,setInfoCompany] = useState()
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            const res = await getDetailCompany(param.id)
            if(res){
                setInfoCompany(res)
            }
        }
        fetchApi();
    },[])

    useEffect(()=>{
        const fetchApi = async () => {
            const res = await getListJobs(param.id)
            const company = await getAllcompany()
            const statusOnRes = res.filter(item=>(
                item.status == true
            ))
            const jobs = statusOnRes.map((item)=>{
                const infoCompany = company.find(
                    itemCompany => itemCompany.id == item.idCompany
                ) 
                return{
                    infoCompany: infoCompany,
                    ...item
                }
            })
                setJobs(jobs)
        }
        fetchApi();
    },[])
    console.log(infoCompany)
    console.log(jobs)
    return(
        <>
        {infoCompany && (
            <>
                <h2>{infoCompany.companyName}</h2>
                <div className="mb-20">
                    <strong> Địa chỉ :</strong> {infoCompany.address}
                </div>
                <div className="mb-20">
                    <strong> Liên hệ :</strong> {infoCompany.phone}
                </div>
                <div className="mb-20">
                    <strong> Email :</strong> {infoCompany.email}
                </div>
                <div className="mb-20">
                    <strong>Nhân sự :</strong> {infoCompany.quantityPeople}
                </div>
                <div className="mb-20">
                    <strong> Thời gian làm việc :</strong> {infoCompany.workingTime}
                </div>
                <div className="mb-20">
                    <strong> Website :</strong> {infoCompany.website}
                </div>
                <div className="mb-20">
                    <strong>Giới thiệu :</strong><p> {infoCompany.description} </p> 
                </div>
                <div className="mb-20">
                    <strong>Mô tả chi tiết :</strong><p>  {infoCompany.detail}</p>
                </div>
                <div className="mb-20">
                    <div className="row">
                        {jobs.map((item,index)=>{
                            return(
                                <JobItem item={item} key={index}></JobItem>
                            )
                        })}
                    </div>
                </div>
            </>
        )}
        </>
    )
}
export default CompanyDetail
import { useEffect, useState } from "react"
import { getAllcompany } from "../../utils/request"
import './CompanyList.css'
import { Link } from "react-router-dom"
function CompanyList () {
    const [company,setCompany] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            const res = await getAllcompany()
            if(res){
                setCompany(res)
            }
        } 
        fetchApi()
    },[])
    console.log(company)
    return(
        <>
            <h4 className="mt-20 mb-20">Danh sách một số công ty</h4>
            <div className="CompanyList">
                <div className="row">
                {company.slice(0,4).map((item,index)=>{
                    return(
                    <div className="col-xl-3 col-lg-3 col-3" key={index}>
                        <Link to= {`/company/${item.id}`}>
                        <div className="CompanyList__Item">
                            <div className="mb-10">
                               <strong> Tên: </strong>{item.companyName}
                            </div>
                            <div className="mb-10">
                               <strong> Địa chỉ: </strong>{item.address }
                            </div>
                            <div className="mb-10">
                               <strong> Contact: </strong>{item.email}
                            </div>
                            <div className="mb-10">
                               <strong> Website: </strong>{item.website }
                            </div>
                        </div>
                        </Link>
                    </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}
export default CompanyList
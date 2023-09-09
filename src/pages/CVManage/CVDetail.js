import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { changeStatusCV, getDetailCV, getJobDetail } from "../../utils/request"
import GoBack from "../../components/GoBack"
import { Card, Tag } from "antd"

function CVDetail(){
    const param = useParams()
    const [cv,setCv] = useState()
    const [job, setJob] = useState()

    useEffect(()=>{
        const fetchApi = async () => {
            const response = await getDetailCV(param.id)
            if(response){
                const responseJob = await getJobDetail(response.idJob)
                if(responseJob){
                setCv(response)
                setJob(responseJob)
                }
            }
            changeStatusCV(param.id, {statusRead: true})

        }

        fetchApi()
    },[])
    return(
        <>
            <div className="mb-20"><GoBack></GoBack></div>
            {cv && job && (
                <>
                <Card title={`Ứng viên: ${cv.name}`} className='mb-20'>
                    <div className="mb-20">
                        <strong>Ngày gửi:</strong> {cv.createAt}
                    </div>
                    <div className="mb-20">
                        <strong>Số điện thoại:</strong> {cv.phone}
                    </div>
                    <div className="mb-20">
                        <strong>Email:</strong> {cv.email}
                    </div>
                    <div className="mb-20">
                        <strong>Thành phố ứng tuyển:</strong> {cv.city}
                    </div>
                    <div className="mb-20">
                        <strong className="mb-10">Giới thiệu bản thân:</strong> <div> {cv.description}</div>
                    </div>
                    <div className="mb-20">
                        <strong className="m-10">Link các Project:</strong>
                        <div>{cv.linkProject}</div>
                    </div>
                </Card>
                <Card title={`Thông tin Job: ${job.name}`} className="mb-20">
                    <div className="mb-20">
                        <strong className="mr-20">Tags:</strong>
                        {job.tags.map((item,index)=>(
                            <Tag color="blue" key={index}>
                                {item}
                            </Tag>
                        ))}
                    </div>

                    <div className="mb-20">
                        <strong>Mức lương:</strong> {job.salary}$
                    </div>
                    <div className="mb-20">
                        <div className="mb-10"><strong>Mô tả:</strong>
                            <div>{job.description}</div>
                        </div>
                    </div>
                </Card>
                </>
            )

            }
        </>
    )
}
export default CVDetail
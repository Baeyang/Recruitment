import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJobDetail } from "../../utils/request"
import { Tag } from "antd"
import GoBack from "../../components/GoBack"
function Job() {
    const jobId = useParams()
    const [job, setJob] = useState()
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getJobDetail(jobId.id)
            if (response) {
                setJob(response)
            };
        }

        fetchApi();
    }, [])

    console.log(job)
    return (
        <>
            {job && (
                <>
                    <div className="mb-20"><GoBack></GoBack></div>
                    <h5 className="mb-20">JOB: {job.name}</h5>
                    <div className="mb-20"><strong>Trạng thái: </strong>{job.status ? <Tag color="green">Đang bật</Tag> : <Tag color="red">Đang tắt</Tag> }</div>
                    <div className="mb-20"><strong>Tags:</strong> {(job.tags).map((item,index)=>{
                        return(
                                <Tag color="blue" key={index}>{item}</Tag>
                        )
                    })}</div>
                    <div className="mb-20"><strong>Mức lương:</strong> {job.salary}$</div>
                    <div className="mb-20"><strong>Ngày tạo:</strong> {job.createAt}</div>
                    <div className="mb-20"><strong>Ngày tạo:</strong> {job.updateAt}</div>
                    <div className="mb-20"><strong>Thành phố: </strong> {(job.city).map((item,index)=>{
                        return(
                            <Tag color="orange" key={index}>{item}</Tag>
                        )
                    })}</div>
                    <div className="mb-20">
                        <strong>Mô tả:</strong>    
                        <div>{job.description}</div>
                    </div>

                </>
            )
            }
        </>
    )
}
export default Job
import { Button } from "antd"
import CreateJob from "./CreateJob"
import JobList from "./JobList"
import { Link } from "react-router-dom"

function JobManage(){
    return(
        <>
            <h3 className="mb-20">Danh sách công việc</h3>
           <div className="mb-20">
            <Link to='/createJob'>
                <Button type="primary">Tạo mới</Button>
            </Link>
           </div>
            <JobList></JobList>
            
        </>
    )
}
export default JobManage
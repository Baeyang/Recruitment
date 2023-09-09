import { Tag } from "antd"
import { Link } from "react-router-dom"
import './JobItem.css'
function JobItem(props) {
    const { item } = props
    console.log(item)
    return (
        <div className="col-xl-3 col-md-3 col-lg-3 col-xs-3 col-sm-3">
            <Link to = {`/job/${item.id}`}>
            <div className="ListJobs__Item mt-20">
                <div className="Item__title">
                    {item.name}
                </div>
                <hr></hr>
                {/* <div className="Item__tags"> <strong>Ngôn ngữ:</strong>
                    {item.tags.map((item, index) => {
                        return (
                            <Tag color='blue' key={index} className="ml-10">
                                {item}
                            </Tag>
                        )
                    })}
                </div> */}
                <div className="Item__cities"> <div><strong>Thành phố:</strong></div>
                    {item.city.map((item, index) => {
                        return (
                            <Tag color='green' key={index}>
                                {item}
                            </Tag>
                        )
                    })}
                </div>
                <div className='Item__salary'>
                   <strong>Mức lương:</strong>  {item.salary}$
                </div>
                <div className='Item__createDay'>
                   <strong>Ngày tạo: </strong> {item.createAt}
                </div>
                <div className='Item__company'>
                    <strong>Công ty:</strong> {item.infoCompany?.companyName}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default JobItem
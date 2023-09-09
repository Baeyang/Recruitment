import { useEffect, useState } from "react"
import { getListJobs } from "../../utils/request"
import { getCookie } from "../../helper/Cookie"
import { Card,Badge } from "antd"


function Jobstatistic(){
    const [dataJobs,setDataJobs] = useState()
    const idCompany = getCookie('id')
    useEffect(()=>{
        const fetchApi = async () => {
            const dataJobs = await getListJobs(idCompany)
            if(dataJobs){
                let object = {
                    total : 0,
                    statusOn : 0,
                    statusOff: 0,
                };
                object.total = dataJobs.length
                dataJobs.forEach(item=>{
                    switch (item.status) {
                        case true:
                            object.statusOn+=1
                            break;
                        case false:
                            object.statusOff+=1
                            break;
                        default:
                            break;
                    }
                });
                console.log(object)
                setDataJobs(object);
            }
        }
        fetchApi()
    },[])
    return(
        <>
        {dataJobs &&
            <Card title='Thống kê công việc' hoverable={true} headStyle={{background: '#d34127', color: 'white'}}>
                <div>
                  <strong>Số lượng công việc : {dataJobs.total}</strong>
                </div>
                <div>
                    <Badge color="blue" text={`Đang mở: ${dataJobs.statusOn}`}></Badge>
                </div>
                <div>
                    <Badge color="red" text={`Đang tắt: ${dataJobs.statusOff}`}></Badge>
                </div>
            </Card>
        }
        </>
    )
}
export default Jobstatistic
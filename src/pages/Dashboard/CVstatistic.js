import {useEffect, useState} from 'react';
import {Card,Badge} from 'antd';
import { getAllCV, getListCity, getListCv } from '../../utils/request';
import { getCookie } from '../../helper/Cookie';
function CVstatistic () {
    const [data,setData] = useState()
    const idCompany = getCookie('id')
    useEffect(()=>{
        const fetchApi = async () => {
            const CVdata = await getListCv(idCompany);
            if(CVdata){
                let object = {
                    total : 0,
                    statusRead : 0,
                    statusNotRead : 0,
                }    
                object.total = CVdata.length
                CVdata.forEach(item => {
                    switch (item.statusRead) {
                        case true:
                            object.statusRead+=1
                            break
                        case false:
                            object.statusNotRead+=1
                            break
                        default:
                            break;
                    }
                })
            setData(object)
            }
        }
        fetchApi()
    },[])

    
    return(
        <>
        {data && 
            <Card title='Thống kê CV' hoverable={true}  headStyle={{background: '#d34127', color: 'white'}}>
                <div>
                   <strong>Số lượng CV : {data.total}  </strong>
                </div>
                <div>
                    <Badge color='green' text={`Đã đọc : ${data.statusRead}`}></Badge>
                </div>
                <div>
                <Badge color='red' text={`Chưa đọc : ${data.statusNotRead}`}></Badge>
                </div>
            </Card>
        }
        </>
    )
}
export default CVstatistic
import { useEffect, useState } from "react"
import { getCookie } from "../../helper/Cookie"
import { getListCv } from "../../utils/request"
import { Button, Table, Tag, Tooltip } from "antd"
import { Link } from "react-router-dom"
import {EyeOutlined} from '@ant-design/icons'
import CVJobName from "./CVJobName"

function CVList(){
    
    const [cvList, setCvList] = useState([])
    const idCompany = getCookie('id')

    const fetchApi = async () => {
        const response = await getListCv(idCompany)
        if(response){
            setCvList(response.reverse())
        }
    }
    useEffect(()=>{
        fetchApi()
    },[])

    const handleReload = () => {
        fetchApi()
    }

    const columns = [
        {
            title: 'Tên Job ứng tuyển',
            dataIndex: 'idJob',
            key: 'idJob',
            render:(_,record)=> (
                <CVJobName record={record}></CVJobName>
            )
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Ngày gửi',
            dataIndex: 'createAt',
            key: 'time'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'statusRead',
            key: 'statusRead',
            render: (_,record) => {
                return(
                    <>
                        {record.statusRead ? <Tag color="green">Đã đọc</Tag> : <Tag color="gray">Chưa đọc</Tag>}
                    </>
                )
            }
        },
        {
            title: 'Hành động',
            dataIndex: 'actions',
            render: (_,record) => (
                <>
                    <Link to={`/cvDetail/${record.id}`}>
                        <Tooltip title='Xem chi tiết'>
                            <Button icon={<EyeOutlined></EyeOutlined>}></Button>
                        </Tooltip>
                    </Link>
                </>
            )
        },
    ]
    console.log(cvList)
    return(
        <>
            <Table dataSource={cvList} columns={columns} rowKey='id'></Table>
        </>
    )
}
export default CVList
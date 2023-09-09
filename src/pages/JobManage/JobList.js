import { useEffect, useState } from "react"
import { getCookie } from "../../helper/Cookie"
import { getListJobs } from "../../utils/request"
import { Table, Tag, Tooltip, Button } from "antd"
import {EyeOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import EditJob from "./EditJob"
import DeleteJob from "./DeleteJob"

function JobList() {
    const idCompany = getCookie('id')
    const [jobs, setJobs] = useState()

    const fetchApi = async () => {
        const response = await getListJobs(idCompany)
        if (response) {
            setJobs(response.reverse())
        };
    }
    const handleReload = () => {
        fetchApi()
    }
    useEffect(() => {
        fetchApi();
    }, [])



    const columns = [
        {
            title: 'Tên Job',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: (_, record) =>
                (record.tags).map((item, index) => {
                    return (
                        <Tag color="blue" key={index}>
                            {item}
                        </Tag>
                    )
                })

        },
        {
            title: 'Mức lương ($)',
            dataIndex: 'salary',
            key: 'salary'
        },
        {
            title: 'Thời gian',
            key: 'time',
            render: (_, record) => {
                return (
                    <>
                        <small>Ngày tạo: {record.createAt}</small>
                        <br></br>
                        <small>Cập nhật: {record.updateAt}</small>
                    </>)
            }

        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (_, record) => {
                return (
                    <>
                        {(record.status) ? (
                            <Tag color="green"> Đang bật </Tag>
                        ) : (
                            <Tag color="red">Đang tắt</Tag>
                        )}
                    </>
                )
            }
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Link to={`/jobDetail/${record.id}`}>
                        <Tooltip title='Xem chi tiết' >
                            <Button icon={<EyeOutlined></EyeOutlined>}></Button>
                        </Tooltip>
                    </Link>
                    <EditJob record={record} onReload={handleReload}></EditJob>
                    <DeleteJob record={record} onReload={handleReload}></DeleteJob>
                </>
            )
        }
    ]
    return (
        <>
            <div>

                <Table dataSource={jobs} columns={columns} rowKey='id'></Table>
            </div>
        </>
    )
}
export default JobList
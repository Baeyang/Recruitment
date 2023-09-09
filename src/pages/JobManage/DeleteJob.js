import { Button, Popconfirm, Tooltip } from "antd"
import {DeleteOutlined} from '@ant-design/icons'
import { deleteJob } from "../../utils/request"
function DeleteJob(props){
    const {record, onReload} = props
    const handleDelete = async() => {
        const response = await deleteJob(record.id)
        if(response){
            onReload()
        }
    }
    return(
        <>
        <Tooltip title='Xóa'>
                <Button className="ml-10" danger ghost icon={<DeleteOutlined></DeleteOutlined>} onClick={handleDelete}></Button>
        </Tooltip>
        </>
    )
}
export default DeleteJob
import { Tooltip,Button,Modal,Form,Input, Select, Switch, message} from "antd";
import { EditOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { rules } from "../../components/rules";
import { getListCity, getListTags, updateJob } from "../../utils/request";
import { getTimeCurrent } from "../../helper/getTime";
const {TextArea} = Input

function EditJob(props){
    const {record, onReload} = props
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [tags,setTags] = useState([])
    const [city,setCity] = useState([])
    const [mess, contextHolder] = message.useMessage()

    const showModal = () =>{
        setIsModalOpen(true)
    }
    const handleCancel = () =>{
        setIsModalOpen(false)
    }
    useEffect(()=>{
        const fetchApi = async () => {
            const response = await getListTags()
            if(response){
                setTags(response)
            }
        }

        fetchApi();
    },[])

    useEffect(()=>{
        const fetchApi = async () => {
            const response = await getListCity()
            if(response){
                setCity(response)
            }
        }

        fetchApi();
    },[])

    const handleFinish = async (values) => {
        console.log(values)
        values.updateAt = getTimeCurrent()
        const response = await updateJob(record.id, values)
        if(response){
            setIsModalOpen(false)
            onReload()
            mess.open({
                type: 'success',
                content: 'Cập nhật thành công!',
                duration: 3,
            })
        } else {
            mess.open({
                type: 'error',
                content: 'Cập nhật không thành công!',
                duration: 3,
            })
        }

    }
    
    return(
        <>
            {contextHolder}
            <Tooltip title='Chỉnh sửa'>
                <Button className="ml-10" onClick={showModal} icon={<EditOutlined/>}></Button>
            </Tooltip>

            <Modal title='Chỉnh sửa công việc' open={isModalOpen} onCancel={handleCancel} footer={null} width={1000}>
                <Form layout="vertical" onFinish={handleFinish} initialValues={record}>
                    <Form.Item label='Tên job' rules={rules} name='name'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='Tags' rules={rules} name='tags'>
                        <Select mode="multiple" options={tags}>
                        </Select>
                    </Form.Item>
                    <Form.Item label='Thành phố' rules={rules} name='city'>
                        <Select mode="multiple" options={city}></Select>
                    </Form.Item>
                    <Form.Item label='Mức lương' rules={rules} name='salary'>
                        <Input addonAfter='$'></Input>
                    </Form.Item>
                    <Form.Item label='Mô tả' rules={rules} name='description'>
                        <TextArea rows={16}></TextArea>
                    </Form.Item>
                    <Form.Item label='Trạng thái' name='status' valuePropName="checked">
                        <Switch checkedChildren='Bật' unCheckedChildren='Tắt'></Switch>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">Lưu</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default EditJob;
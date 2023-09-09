import { Button,Form,Input, Select, message} from "antd";
import { useEffect, useState } from "react";
import { rules } from "../../components/rules";
import { createJob, getListCity, getListTags } from "../../utils/request";
import { getCookie } from "../../helper/Cookie";
import { getTimeCurrent } from "../../helper/getTime";
import GoBack from "../../components/GoBack";

const {TextArea} = Input

function CreateJob() {
    const [tags, setTags] = useState([])
    const [city, setCity] = useState([])
    const [form] = Form.useForm()
    const [mess, contextHolder] = message.useMessage()
    const idCompany = getCookie('id')

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTags()
            if (response) {
                setTags(response)
            }
        }

        fetchApi();
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListCity()
            if (response) {
                setCity(response)
            }
        }

        fetchApi();
    }, [])

    const handleFinish = async (values) => {
        console.log(values)
        values.idCompany = idCompany
        values.createAt = getTimeCurrent()
        values.status = true
        const response = await createJob(values);
        if(response){
            form.resetFields()
            mess.open({
                type:'success',
                content:'Tạo mới thành công',
                duration:3
            })
        }
        else{
            mess.open({
                type:'error',
                content:'Tạo mới thất bại',
                duration:3
            })
        }
    }
    return (
        <>
            {contextHolder}
            <div className="mb-20"><GoBack></GoBack></div>
            <h3>Tạo mới việc làm</h3>
            <Form form={form} layout="vertical" onFinish={handleFinish}>
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
                <Form.Item>
                    <Button htmlType="submit" type="primary">Lưu</Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default CreateJob
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {createCV, getDetailCompany, getJobDetail } from "../../utils/request"
import {Col, Form, Tag, Row, Input, Modal, Select, Button, notification} from 'antd'
import {rules} from '../../components/rules' 
import { getTimeCurrent } from "../../helper/getTime"
const {Option} = Select
const {TextArea} = Input
function JobDetail(){
    const Param = useParams()
    const [jobDetail,setJobDetail] = useState()
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [noti,contextHolder] = notification.useNotification()
    useEffect(()=>{
        const fetchApi = async () => {
            const detail = await getJobDetail(Param.id) 
            const infoCompany = await getDetailCompany(detail.idCompany)
            const finalDetailJob = {
                ...detail,
                infoCompany:infoCompany
            }
            setJobDetail(finalDetailJob)
        }
        fetchApi()
    },[])

    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const onFinish = async (values) => {
        values.idJob = jobDetail.id
        values.idCompany = jobDetail.infoCompany.id
        values.createAt = getTimeCurrent()
        values.statusRead = false
        const response = await createCV(values)
        if(response) {
            form.resetFields()
            noti.success({
                message:`Gửi CV thành công!`,
                description:`Chúng tôi sẽ liên hệ với bạn sớm nhất.`,
                style:{
                    marginTop: '10vh'
                }
            })
            setIsModalOpen(false)
            // navigate("/")
        }
        else {
            noti.error({
                message:`Gửi không thành công!`,
                description:`Vui lòng thử lại sau.`,
                style:{
                    marginTop:'10vh'
                }
            })
        }
    }
    return(
        <>
        {contextHolder}
        {jobDetail && 
            (
            <>
                <h2>
                    {jobDetail.name}
                </h2>
                <button className="button mb-20" onClick={showModal}>Ứng tuyển ngay</button>
                <div className="JobDetail__tags mb-20"> <strong>Ngôn ngữ:</strong>
                    {jobDetail.tags.map((item, index) => {
                        return (
                            <Tag color='blue' key={index} className="ml-10">
                                {item}
                            </Tag>
                        )
                    })}
                </div>
                <div className="JobDetail__cities mb-20"> <strong>Thành phố:</strong>
                    {jobDetail.city.map((item, index) => {
                        return (
                            <Tag color='green' key={index} className="ml-10">
                                {item}
                            </Tag>
                        )
                    })}
                </div>
                <div className='JobDetail__salary mb-20'>
                   <strong>Mức lương:</strong>  {jobDetail.salary}$
                </div>
                <div className='JobDetail__createDay mb-20'>
                   <strong>Ngày tạo: </strong> {jobDetail.createAt}
                </div>
                <div className='JobDetail__company mb-20'>
                    <strong>Công ty:</strong> {jobDetail.infoCompany.companyName}
                </div>
                <div className='JobDetail__address mb-20'>
                    <strong>Địa chỉ:</strong> {jobDetail.infoCompany.address}
                </div>
                <div className='JobDetail__contact mb-20'>
                    <strong>Liên hệ:</strong> {jobDetail.infoCompany.email}
                </div>
                <div className='JobDetail__Company-description mb-20'>
                    <strong>Giới thiệu công ty:</strong><p>{jobDetail.infoCompany.description}</p>
                </div>
                <div className='JobDetail__description mb-20'>
                    <strong>Mô tả:</strong> <p>{jobDetail.description}</p>
                </div>
                <Modal open={isModalOpen} onCancel={handleCancel} footer={null} title={`CV Ứng tuyển`}>
                <Form 
                    name="form_apply"
                    form={form}
                    layout="vertical"
                    id="formApply"
                    onFinish={onFinish}
                >
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Họ và tên:" name='name' rules={rules}>
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Số điện thoại:" name="phone" rules={rules}>
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Email:" name='email' rules={rules}>
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Thành Phố :" name='city' rules={rules}>
                                <Select>
                                    {jobDetail.city.map((item,index)=>(
                                        <Option value ={item} label={item} key={index}>
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Giới thiệu bản thân :" name='description' rules={rules}>
                                <TextArea rows={6}></TextArea>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Link các project/github... :" name='linkProject' rules={rules}>
                                <TextArea rows={4}></TextArea>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                    <Button htmlType="submit" className="button">Gửi</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                </Modal>
            </>
            ) 
        }           
        </>
    )
}

export default JobDetail
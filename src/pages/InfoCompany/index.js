import { useEffect, useState } from "react"
import { getCookie } from "../../helper/Cookie"
import { Card, Button, Form, Input, InputNumber, message, Row, Col } from "antd"
import { rules } from '../../components/rules'
import { editCompany, getDetailCompany } from "../../utils/request"
const { TextArea } = Input
function InfoCompany() {
    const idCompany = getCookie('id')
    const [info, setInfo] = useState()
    const [edit, setEdit] = useState(false)
    const [mess, contextHolder] = message.useMessage()

    const fetchApi = async () => {
        const res = await getDetailCompany(idCompany)
        console.log(res)
        if (res) {
            setInfo(res)
        }
    };
    useEffect(() => {
        fetchApi();
    }, [])

    const handleEdit = () => {
        setEdit(true)
    }
    const handleCancel = () => {
        setEdit(false)
    }
    const handleFinish = async (values) => {
        console.log(values)
        const res = await editCompany(idCompany, values)
        if (res) {
            mess.success("Cập nhật thông tin thành công")
            fetchApi(); //tải lại info mới
            setEdit(false)
        }
        else {
            mess.error("Cập nhật thông tin không thành công")
        }
    }
    return (
        <>
            {contextHolder}
            {info &&
                <Card
                    title='Thông tin công ty'
                    extra={
                        !edit ? (<Button onClick={handleEdit} type="primary">Chỉnh sửa</Button>) : (<Button onClick={handleCancel} type="primary">Hủy</Button>)
                    }>

                    <Form disabled={!edit} layout="vertical" onFinish={handleFinish} initialValues={info} >
                        <Row gutter={20}>
                            <Col span={24}>
                                <Form.Item label='Tên công ty' name='companyName' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Email' name='email' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Số điện thoại' name='phone' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Địa chỉ' name='address' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Nhân sự' name='quantityPeople' rules={rules}>
                                    <InputNumber />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Thời gian làm việc' name='workingTime' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label='Link website' name='website' rules={rules}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Mô tả ngắn' name='description' rules={rules}>
                                    <TextArea rows={6} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Mô tả chi tiết' name='detail' rules={rules}>
                                    <TextArea rows={10} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Gửi</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            }
        </>
    )
}
export default InfoCompany
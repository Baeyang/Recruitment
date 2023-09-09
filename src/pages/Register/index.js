import { Row,Col, Card, Form,Input, Button, message } from "antd"
import { rules } from "../../components/rules"
import { useNavigate } from "react-router-dom"
import { generateToken } from '../../helper/GenerateToken'
import { checkExist, createCompany } from "../../utils/request"

function Register(){
    const [mess,contextHolder] = message.useMessage()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        values.token = generateToken()
        const checkExistEmail = await checkExist('email',values.email)
        const checkExistPhone = await checkExist('phone',values.email)

        if(checkExistEmail.length > 0) {
            mess.error("Email đã tồn tại!")

        }else if(checkExistPhone.length > 0) {
            mess.error("Số điện thoại đã tồn tại")
        }
        else{
            const response = await createCompany(values)
            if(response){
                mess.success('Đăng ký thành công')
                navigate('/login')
            }
        }
    }
    return(
        <>
        {contextHolder}
            <Row justify={"center"}>
                <Col span={12}>
                    <Card title='Đăng ký tài khoản'>
                        <Form onFinish={onFinish} layout="vertical">
                            <Form.Item label='Tên công ty' name='companyName' rules={rules}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label='Số điện thoại' name='phone' rules={rules}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label='Email' name='email' rules={rules}>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label='Password' name='password' rules={rules}>
                                <Input.Password></Input.Password>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">Đăng ký</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Register
import CVstatistic from "./CVstatistic"
import {Row,Col} from 'antd'
import Jobstatistic from "./Jobstatistic"

function Dashboard(){
    return(
        <>
            <h4>TRANG DASHBOARD</h4>
            <Row>
                <Col span={11}>
                <CVstatistic></CVstatistic>
                </Col>
                <Col span={11} offset={2}>
                <Jobstatistic></Jobstatistic>
                </Col>
            </Row>
            
        </>
    )
}

export default Dashboard
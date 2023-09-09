import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function GoBack (){
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return(
        <Button onClick={back}>Trở lại</Button>
    )
}
export default GoBack
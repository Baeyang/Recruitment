import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getCookie } from "../../helper/Cookie"

function PrivateRouter(){
    const token = getCookie('token')
    const navigate = useNavigate()
    return(
        <>
            {token ? (<Outlet/>) : (<Navigate to ='login' />)}
        </>
    )
}
export default PrivateRouter
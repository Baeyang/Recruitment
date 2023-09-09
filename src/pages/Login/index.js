import { login } from '../../utils/request'
import { getCookie, setCookie } from '../../helper/Cookie'
import { useDispatch } from 'react-redux'
import { checkLogin } from '../../actions/login'
import { useNavigate } from 'react-router-dom'
import './login.css'
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e)
        var email = e.target[0].value
        var password = e.target[1].value
        const user = await login(email, password)
        console.log(user.data)
        if (user.data.length > 0) {
            setCookie("id", user.data[0].id, 1)
            setCookie("email", user.data[0].email, 1)
            setCookie("password", user.data[0].password, 1)
            setCookie("token", user.data[0].token, 1)
            dispatch(checkLogin(true))
            navigate(`/admin`)
        }
        else {
            alert('Sai tai khoan hoac mat khau')
        }

    }
    return (
        <>
            <div className='Login'>
                <form onSubmit={handleSubmit} className='Login__form'>
                    <div className='Login__form-inner'>
                        <div className='Login__form-input'>
                            <input type='email' name='email' placeholder='email' required></input>
                        </div>
                        <div className='Login__form-input'>
                            <input type='password' name='password' placeholder='password' required></input>
                        </div>
                        <div className='Login__form-button'>
                            <button type='submit'>Login</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
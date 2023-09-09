import { Button } from "antd"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="LayoutDefault__header">
                <div className="container">
                    <div className="LayoutDefault__header-inner">
                        <div className="LayoutDefault__logo">
                            <Link to='/'>
                                IT JOBS
                            </Link>
                        </div>
                        <div className="LayoutDefault__icon">
                            <Link to='login'>
                                <Button>  Đăng nhập </Button>
                            </Link>

                            <Link to='register'>
                                <Button> Đăng ký </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
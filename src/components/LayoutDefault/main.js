import { Outlet } from "react-router-dom";

function Main() {
    return(
        <div className="LayoutDefault__main">
            <Outlet></Outlet>
        </div>
    )
}

export default Main
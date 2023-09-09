import Header from "./header"
import Main from "./main"
import './LayoutDefault.css'
function LayoutDefault (){
    return(
        <div className="LayoutDefault">
            <Header></Header>
            <div className="container">
            <Main></Main>
            </div>
        </div>
    )
}

export default LayoutDefault
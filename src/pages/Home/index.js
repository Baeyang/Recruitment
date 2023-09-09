import CompanyList from "../../components/CompanyList"
import JobList from "../../components/JobList"
import Search from "../../components/Search"
import SkillList from "../../components/SkillList"
function Home(){
    return(
        <>
            <Search></Search>
            <SkillList></SkillList>
            <CompanyList></CompanyList>
            <JobList></JobList>
        </>
    )
}

export default Home
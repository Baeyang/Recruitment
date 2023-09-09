import axios from "axios"
import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom"
import ListSearchResult from "./ListSearchResult"
import './SearchResult.css'
import {Tag} from 'antd'
import { getAllJobs } from "../../utils/request"

function SearchResult(){
    const [param,setParam] = useSearchParams()
    const cityParam = param.get('city') || ""
    const keywordParam = param.get('keyword') || ""   
    const [data,setData] = useState()
    useEffect(()=>{
        const fetch = async () => {
            // const res = await axios.get(`http://localhost:3002/jobs`)
            // const result =  await res.data
            const jobs = await getAllJobs() 
            console.log(jobs)
            if(jobs){
            const newData = jobs.filter((item)=>{
                const city = cityParam ? item.city?.includes(cityParam) : true
                const tags = item.tags.map((item)=>{
                    return item.toLowerCase()
                })
                const keyword = keywordParam ? tags.some(tag=> tag.includes(keywordParam.toLowerCase())) : true
                return  item.status && city  && keyword
            })
            setData(newData.reverse())
            }
        }
        fetch()
    },[])

    return(
        <>
        <strong>Kết quả tìm kiếm:</strong>
        {cityParam && <Tag className="ml-10">{cityParam}</Tag>}
        {keywordParam && <Tag className="ml-10">{keywordParam }</Tag>}
        {data && <ListSearchResult data = {data}></ListSearchResult>}
        </>
    )
}
export default SearchResult
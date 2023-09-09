import './search.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Search(){
    const navigate = useNavigate()
    const [cities,setCities] = useState()
    useEffect(()=>{
        const fetch = async () => {
            const res = await axios.get(`http://localhost:3002/city`)
            const result  = await res.data
            const objectAll = {key: 0 , value:"Tất cả"}
            setCities([objectAll, ...result])
        }
        fetch()
    },[])
    console.log(cities)

    const handleSubmit = (e) => {
        e.preventDefault()
        let city = e.target[1].value
        city = e.target[1].value === "Tất cả" ? "" : city    
        let keyword = e.target[0].value
        navigate(`search?city=${city}&keyword=${keyword}`)
    }

    return(
        <>
            <form className = 'Search__Form' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12'>
                            <div className = 'Search__Form-Input'>
                                <input name = 'search' placeholder="Nhập từ khóa tìm kiếm theo kỹ năng" required></input>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3'>
                            <div className = 'Search__Form-Input'>
                                <select>
                                {cities && (cities.map((item)=>{
                                    return(
                                        <option value={item.value} key={item.key}>{item.value}</option>
                                    )
                                }))}
                                </select>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
                            <div className='Search__Form-Button'>
                                <button type='submit' className='button'>
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>  
                    </div>
            </form>
        </>
    )
}

export default Search
import { useEffect, useState } from 'react'
import JobItem from '../../components/JobItem'
import { getAllcompany } from '../../utils/request'
function ListSearchResult(props) {
    const { data } = props
    const [finalData, setFinaldata] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const company = await getAllcompany()
            console.log(company)
            const newData =  data.map((item) => {
                const infoCompany = company.find(
                    (itemCompany) => itemCompany.id == item.idCompany
                );
                return{
                    infoCompany: infoCompany,
                    ...item,
                }
            })  
            setFinaldata(newData)
        }
        fetchApi()
    }, [])
    console.log(finalData)
    
    return (
        <>
            {finalData.length > 0 ? (
                <div className="ListJobs">
                        <div className="row">
                            {finalData.map((item, index) => {
                                return (
                                    <JobItem item={item} key={index}></JobItem>
                                )
                            })}

                        </div>
                </div>
            ) : (<p className='mt-20'>không tìm thấy kết quả.</p>)}
        </>
    )
}
export default ListSearchResult
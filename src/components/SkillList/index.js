import { useEffect, useState } from 'react'
import { Tag } from 'antd'
import { Link } from 'react-router-dom'
import { getListTags } from '../../utils/request'
function SkillList() {
    const [tags, setTags] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const res = await getListTags()
            if(res){
                setTags(res)
            }
        }
        fetch()
    }, [])
     return (
        <>
            <div className='mt-20'>
                <span className='mr-10'>
                    Mọi người đang tìm kiếm:
                </span>
                    {tags.map((item) => {
                        return (
                            <Link to={`search?keyword=${item.value || ""}`} key={item.key}>
                                <Tag color='blue'>{item.value}</Tag>
                            </Link>
                        )
                    })}
            </div>
        </>
    )
}

export default SkillList
import { useState } from 'react';

function Test() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleKeywordClick = (keyword) => {
        if(selectedKeywords.includes(keyword)){
            return 
        }
        else{
        setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
        }
    };
  const handleSearch = () => {
    // Xử lý tìm kiếm dựa trên selectedKeywords
    // ...
  };
  const handleDel = (item) => {
    const newSelectedKeywords = selectedKeywords.filter(select=>select!==item)
    console.log(newSelectedKeywords)
    setSelectedKeywords(newSelectedKeywords)
}
  
    
  return (
    <div>
      <ul>
        <li onClick={() => handleKeywordClick('ReactJS')}>ReactJS </li>
        <li onClick={() => handleKeywordClick('Node.js')}>Node.js</li>
        <li onClick={() => handleKeywordClick('JavaScript')}>JavaScript</li>
      </ul>


      {selectedKeywords.map((item,index)=>{
        return(
            <div key={index}>
            <div className='keywords'>
                <span onClick={()=>{handleDel(item)}}>x</span>
                <p>{item}</p>
            </div>
          </div>
        )
      })}

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Test;
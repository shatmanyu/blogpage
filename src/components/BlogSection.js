import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BlogItem from './BlogItem';
import { useRef } from 'react';



const json = require('../asset/sampleOutput.json');
const types = ['Most-Viewed','Most-Popular','Most-Liked','Trending','Top-Topics']
const BlogSection = () => {
  const SectionList = json.articles
  const data = [{},{},{},{},{}] 
  const refer = useRef([])

  // Arranging data in form of types and blogs in objects
  for (let i = 0; i < 5; i++) {
    data[i]['type'] = types[i]
    data[i]['blogs'] = SectionList
  }
  
 const sectionName = useSelector(state=>state)
//  console.log("fg",sectionName)

 console.log("hey refer",sectionName)
 useEffect(() => {
   refer.current[sectionName].scrollIntoView();
 }, [sectionName])

console.log("the clicked ref is",refer);
return (
   <div className="section">
     {
       data.map((item1,index) => ( 
        <div ref={(ref) => {
          refer.current[item1.type] = ref

          
      }} className ={item1.type}>
            <h2 >{item1.type.split('-').join(" ")}</h2>
            <div className="blogs">
              {item1.blogs.map(item => <BlogItem {...item}/>)}
            </div>
        </div>
       ))
      }  
      
    </div>

)
}
export default BlogSection; 
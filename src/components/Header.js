import React from 'react';
import { useDispatch } from 'react-redux';
import BlogSection from './BlogSection';
import { setSectionName } from './redux/action'; 
 const Header =(props)=>{
   const dispatch = useDispatch();

   const onClickOption = (section)=>{
     dispatch(setSectionName(section))
   }
  return (
  <div className = "header">
        <h2>MagicBlogs.com</h2>
        <div className = "menu">
            <a className="option"  onClick={()=>onClickOption('Top-Topics')}>Top-Topics</a>
            <a className="option"  onClick={()=>onClickOption('Most-Viewed')}>Most Viewed</a>
            <a className="option"  onClick={()=>onClickOption('Most-Popular')}>Most Popular</a>
            <a className="option"  onClick={()=>onClickOption('Trending')}>Trending</a>
            <a className="option"  onClick={()=>onClickOption('Most-Liked')}>Most Liked </a>

    </div>
  </div>
  );
}
export default Header;
// console.log("from header",props.data);
  // Targeting sections for auto scrolling using plain js
  // function onClickOption(op){
  //   const cls = '.' + op
  //   const def = document.querySelector(cls);
  //   def.scrollIntoView();
  // }
  

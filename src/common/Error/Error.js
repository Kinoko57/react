import React from 'react';
import './Error.css'
const Error=(props)=>(
   <div>
      <div style={{"height":"1rem"}}></div>
      <mark className="notFound">对不起页面未找到！</mark>
      <div style={{"height":"1.2rem"}}></div>
   </div>
);
export default Error;
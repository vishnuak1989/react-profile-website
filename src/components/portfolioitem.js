import React from 'react'
import Career from './career.js';
import Projects from './projects.js';

const PortfolioItem=(props)=>(
 
  <div>
    {props.match.params.id=="career"?<div><Career /></div>:props.match.params.id=="projects"?<div><Projects /></div>:<div>Nothing Found</div> }
  </div>
)

export default PortfolioItem

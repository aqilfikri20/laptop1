import React from "react"; 
function ProcessorList() {
 return (
   <div className="processor-list">
    <ul>
        <li><Link to="/amd">AMD</Link></li>
        <li><Link to="/celeron">CELERON</Link></li>
        <li><Link to="/core3">Core i3</Link></li>
        <li><Link to="/core5">Core i5</Link></li>
        <li><Link to="/core7">Core i7</Link></li>
        <li><Link to="/core9">Core i9</Link></li>
    </ul>
  </div>
);
}

export default ProcessorList;
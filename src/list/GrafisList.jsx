import React from "react"; 
function ProcessorList() {
 return (
   <div className="grafis-list">
    <ul>
        <li><Link to="/vga-intel">VGA Intel HD</Link></li>
        <li><Link to="/vga-nvidia">VGA Nvidia</Link></li>
        <li><Link to="/vga-amd">VGA AMD</Link></li>
        <li><Link to="/layarr11">Layar 11"</Link></li>
        <li><Link to="/layar13">Layar 13"</Link></li>
        <li><Link to="/layar14">Layar 14"</Link></li>
        <li><Link to="/layar15">Layar 15"</Link></li>
    </ul>
  </div>
);
}

export default ProcessorList;
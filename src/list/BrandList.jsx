import React from "react"; 
import { SiAcer, SiAsus,SiApple,SiDell,SiHp,SiLenovo,SiSamsung,SiToshiba } from "react-icons/si";
function BrandList() {
 return (
   <div className="brand-list">
    <ul>
        <li><Link to="/acer"><SiAcer /></Link></li>
        <li><Link to="/asus"><SiAsus /></Link></li>
        <li><Link to="/apple"><SiApple /></Link></li>
        <li><Link to="/dell"><SiDell /></Link></li>
        <li><Link to="/hp"><SiHp /></Link></li>
        <li><Link to="/lenovo"><SiLenovo /></Link></li>
        <li><Link to="/samsung"><SiSamsung /></Link></li>
        <li><Link to="/toshiba"><SiToshiba /></Link></li>
    </ul>
  </div>
);
}

export default BrandList;
import React, { useContext } from 'react'
import Context from '../context/Context';


const RightNav = () => {
    const { open } = useContext(Context)
    return (
        <div className="side__mobile-menu">
            <div className={`right__nav ${open ? 'open' : 'close' }`}>
                <a href="#" className="logo"><span className="text_primary">PRAMA</span>KIT</a>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}


export default RightNav
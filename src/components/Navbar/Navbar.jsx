import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logos/logo.svg"
import { NavEl } from '../../utils/utils'
export default function Navbar() {
    return (
        <nav>
            <div className="img_logo">
                <img src={logo} alt="" className="logo" />
            </div>
            <ul className="list">
               {NavEl.map((elem)=>{
                return(
                    <React.Fragment>
                        <Link to={elem.path}><li className="list_item">{elem.pagename}</li></Link>
                    </React.Fragment>
                )
               })} 
               
            </ul>
            <div className="btn">
                <button className="btnClick">Terms and Conditions</button>
            </div>
        </nav>
    )
}

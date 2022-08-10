import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import PopoverCart from "../PopoverCart/PopoverCart";
import './styles.css'
const Navbar: React.FC = ()=>{
    return(
        <Menu inverted fixed='top' size='massive' className="Shcart">
            <Menu.Item/>
            <Menu.Item>
                <NavLink  to='/' className='nav' >
                    <b>Dress Shopping</b>
                </NavLink>
            </Menu.Item>
            <Menu.Item position='right'>
              <PopoverCart/>
            </Menu.Item>
        </Menu>
    )
}
export default Navbar
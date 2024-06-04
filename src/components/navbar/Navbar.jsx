// router dom
import { Link } from 'react-router-dom'
// icons
import {AiOutlineSearch} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'
// images
import img from '../../assets/images/nav_img/nav_user.png';
// css
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar' id='navbar'>
        <div className="container">
            <div className="navbar_main">
                <div className="nav_logo">
                    <Link to='/'>LOGO</Link>
                </div>
                <div className="nav_form">
                    <form action="">
                        <input type="text" placeholder='Search'/>
                        <button><AiOutlineSearch/></button>
                    </form>
                </div>
                <div className="nav_user">
                    <div className="nav_user_img">
                        <img src={img} alt="" />
                    </div>
                    <p>John Doe</p>
                    <button><IoIosArrowDown/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
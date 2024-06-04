// React
import { useState } from 'react'
// router dom
import { Link } from 'react-router-dom'
// icons
import { AiFillHome, AiOutlineBgColors } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { IoNotifications } from 'react-icons/io5'
// css
import './sidebar.css'
// images
import img from '../../assets/images/saidbar_img/twitter.png'

const Sidebar = () => {

    const [sidenav, setSidenav] = useState();

    const handleSidenav = () => setSidenav(!sidenav);

    return (
        <div className={sidenav ? 'sidebar sidebar_none' : 'sidebar'} id='sidebar'>
            <div className='fixed' onClick={handleSidenav}>
                {
                    sidenav ? 
                    <FiArrowLeft/>:
                    <FiArrowRight/>
                }
            </div>
            <div className="sidebar_links">
                <Link to='/' className="sidebar_link">
                    <i><AiFillHome /></i>
                    <p>Home</p>
                </Link>
                <Link to='/' className="sidebar_link">
                    <i><FaFacebookMessenger /></i>
                    <p>Messages</p>
                </Link>
                <Link to='/' className="sidebar_link">
                    <i><IoNotifications /></i>
                    <p>Notifications</p>
                </Link>
                <Link to='/' className="sidebar_link">
                    <i><BsBookmarksFill /></i>
                    <p>Bookmarks</p>
                </Link>
                <Link to='/change-color' className="sidebar_link">
                    <i><AiOutlineBgColors /></i>
                    <p>Change Colors</p>
                </Link>
            </div>
            <hr className='sidebar_hr' />
            <div className="sidebar_fallowings">
                <p className='sidebar_fallowings_p'>Followings</p>
                <div className="sidebar_fallowings_group">
                    <p className='sidebar_fallowings_group_p'>Groups</p>
                    <Link to='/' className="sidebar_group">
                        <div className='sidebar_div'>
                            <div className="sidebar_group_img">
                                <img src={img} alt="" />
                            </div>
                            <div className="sidebar_group_txt">
                                <p className='sidebar_group_txt_title'>Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter</p>
                                <p className='sidebar_group_txt_subtitle'>Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter Twitter</p>
                            </div>
                        </div>
                        <p className='sidebar_group_number'>2</p>
                    </Link>
                    <Link to='/' className="sidebar_group">
                        <div className='sidebar_div'>
                            <div className="sidebar_group_img">
                                <img src={img} alt="" />
                            </div>
                            <div className="sidebar_group_txt">
                                <p className='sidebar_group_txt_title'>Twitter</p>
                                <p className='sidebar_group_txt_subtitle'>Twitter</p>
                            </div>
                        </div>
                        <p className='sidebar_group_number'>2</p>
                    </Link>
                </div>
                <div className="sidebar_fallowings_group">
                    <p className='sidebar_fallowings_group_p'>Users</p>
                    <Link to='/' className="sidebar_group">
                        <div className='sidebar_div'>
                            <div className="sidebar_group_img">
                                <img src={img} alt="" />
                            </div>
                            <div className="sidebar_group_txt">
                                <p className='sidebar_group_txt_title'>Twitter</p>
                                <p className='sidebar_group_txt_subtitle'>Twitter</p>
                            </div>
                        </div>
                        <p className='sidebar_group_number'>2</p>
                    </Link>
                    <Link to='/' className="sidebar_group">
                        <div className='sidebar_div'>
                            <div className="sidebar_group_img">
                                <img src={img} alt="" />
                            </div>
                            <div className="sidebar_group_txt">
                                <p className='sidebar_group_txt_title'>Twitter</p>
                                <p className='sidebar_group_txt_subtitle'>Twitter</p>
                            </div>
                        </div>
                        <p className='sidebar_group_number'>2</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
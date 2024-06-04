// Hook react
import { useState } from 'react';
// router
import { Link } from 'react-router-dom';
// icons
import { AiFillHeart, AiFillEye } from 'react-icons/ai'
import { HiShare } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
// img
import img from '../../assets/images/nav_img/nav_user.png'
import img1 from '../../assets/images/post_img/dragon.avif'
// css
import './home_body.css'



const data = [
  {
    id: 1,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 2,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 3,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 4,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 5,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 6,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },
  {
    id: 7,
    user_img: img,
    user_name: 'John Doe',
    user_data: '2023 03 23',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos! ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos!',
    img: img1,
  },

]





const Home_body = () => {
  const [noOfElement, setNoOfElement] = useState(3);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  }

  const slice = data.slice(0, noOfElement);

  return (
    <div className='home_body'>
      <div className="home_body_posts">
        {
          slice.map((item, index) => {
            return (
              <div className="home_body_post" key={index}>
                <div className="home_body_post_bottom_user">
                  <div className="home_body_post_bottom_user_img">
                    <img src={item.user_img} alt="" />
                  </div>
                  <div>
                    <p>{item.user_name}</p>
                    <small>{item.user_data}</small>
                  </div>
                </div>
                <div className="home_body_post_txt">
                  <p className="home_body_post_title">{item.title}</p>
                  <p className="home_body_post_tags">
                    <span>
                      <i>#</i>
                      <p>dragon</p>
                    </span>
                    <span>
                      <i>#</i>
                      <p>dragons</p>
                    </span>
                  </p>
                </div>
                <Link to='/' className="home_body_post_img">
                  <img src={item.img} alt="" />
                </Link>
                <div className="home_body_post_bottom">
                  <div className="home_body_post_bottom_heart">
                    <i><AiFillHeart /></i>
                    <p>100</p>
                  </div>
                  <div className="home_body_post_bottom_message">
                    <i><FaFacebookMessenger /></i>
                    <p>100</p>
                  </div>
                  <div className="home_body_post_bottom_message">
                    <i><AiFillEye /></i>
                    <p>100</p>
                  </div>
                  <div className="home_body_post_bottom_message">
                    <i><HiShare /></i>
                    <p>100</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <button 
        className='home_body_btn'
        onClick={() => loadMore()}
      >
        Load More
      </button>
    </div>
  )
}

export default Home_body;
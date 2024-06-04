// Router dom
import { Route, Routes } from 'react-router-dom'
// components
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
// pages
import ChangeColor from '../pages/ChangeColor'
import Home from '../pages/Home'

const MainRoute = () => {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex_width'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/change-color' element={<ChangeColor />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default MainRoute
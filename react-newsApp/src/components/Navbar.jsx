import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const [showLogout, setShowLogout] = useState(false)
    const { toggleSidebar, token, user, setUser, setToken } = useAppContext()

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])



    const handleLogout = () => {

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
                toast.success('User Loged Out successfully.');
            })

    }

    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>


                {token ? (
                    <div className='btn-container'>
                        <button
                            type='button'
                            className='btn'
                            onClick={() => setShowLogout(!showLogout)}
                        >
                            <FaUserCircle />
                            {user.name}
                            <FaCaretDown />
                        </button>
                        <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                            <button type='button' className='dropdown-btn' onClick={handleLogout}>
                                logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link type='button' className='btn' to='/register'>
                        LogIn
                    </Link>
                )}

            </div>
            <ToastContainer />
        </Wrapper>
    )
}

export default Navbar

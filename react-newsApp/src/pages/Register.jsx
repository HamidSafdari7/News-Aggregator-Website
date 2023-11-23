import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/RegisterPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};

const Register = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)

    const { setUser, setToken, token } = useAppContext();

    useEffect(() => {
        if (token) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [token, navigate]);


    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please provide all the values');
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Provide a valid email');
        } else if (password.length < 6) {
            toast.error('Password must be more than 6 digits');
        }

        const currentUser = { name, email, password };
        if (isMember) {

            axiosClient.post('/login', currentUser)
                .then(({ data }) => {
                    setUser(data.user);
                    setToken(data.token);
                    toast.success('Loged In successfully.');
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {

                        toast.error('Invalid Credentials !!')
                    }
                })
        } else {
            axiosClient.post('/register', currentUser)
                .then(({ data }) => {
                    setUser(data.user);
                    setToken(data.token);
                    toast.success('Account created successfully.');
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                    })
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        console.log(response.data.errors)
                        toast.error(response.data.errors.email[0])
                    }
                })
        }

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    };


    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {/* name input */}
                {!values.isMember && (
                    <FormRow
                        type='text'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}

                {/* email input */}
                <FormRow
                    type='text'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password input */}
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    {isLoading ? 'Please Wait...' : 'Submit'}
                </button>

                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>

                <Link to='/' className='member-btn'>
                    Home...
                </Link>
            </form>
            <ToastContainer />
        </Wrapper>
    );
};
export default Register;

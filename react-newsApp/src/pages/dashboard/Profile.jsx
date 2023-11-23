import FormRow from "../../components/FormRow"
import { useAppContext } from "../../context/appContext"
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import axiosClient from '../../axios-client'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {

  useEffect(() => {
    axiosClient.get('/user')
      .then(({ data }) => {
        setUser(data)
      })
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  const { user, setUser } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !email) {
      toast.error('Please provide all the values');
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Provide a valid email');
    }

    axiosClient.put(`/user/${user.id}`, { name, email })
      .then(() => {
        toast.success('User Updated successfully.');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {

          toast.error('Something Went Wrong...')
        }
      })


    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }



  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />

          <FormRow
            type='text'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </Wrapper>
  )
}

export default Profile

import Background from '../images/login-background.png';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-image: url(${Background});
  display: grid;
  align-items: center;
  .logo {
    display: block;
    /* margin: 0 auto; */
    margin-left: 70px;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  @media (max-width: 376px) {
    .logo{
      margin-left: 20px;
    }
  }
`
export default Wrapper

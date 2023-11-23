import styled from 'styled-components'

const Wrapper = styled.section`
  .grid-container {
        display: grid;
        gap: 20px 20px;
        grid-template-columns: auto auto auto;
    }

    .news-title {
        font-size: 16px;
        font-weight: bolder;
        font-style: italic;
    }

    .news-author{
        background-color: var(--primary-500);
        color: #ffff;
        text-align: center;
    }

button{
  cursor: pointer;
}

.cta {
 position: relative;
 margin: auto;
 padding: 6px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.cta:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: #b1dae7;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.cta span {
 position: relative;
 font-family: "Ubuntu", sans-serif;
 font-size: 18px;
 font-weight: 700;
 letter-spacing: 0.05em;
 color: #234567;
}

.cta svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #234567;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.cta:hover:before {
 width: 100%;
 background: #b1dae7;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active {
 transform: scale(0.95);
}


@media (max-width: 1290px) {
    .grid-container {
        grid-template-columns: auto auto;
    }
  }

  @media (max-width: 660px) {
    .grid-container {
        grid-template-columns: auto ;
    }
  }


  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`
export default Wrapper

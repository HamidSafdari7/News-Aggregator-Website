import styled from 'styled-components'

const Wrapper = styled.section`
  .spinner {
 height: 50px;
 width: max-content;
 font-size: 18px;
 font-weight: 600;
 font-family: monospace;
 letter-spacing: 1em;
 color: rgba(0, 77, 255, 0.7);
 filter: drop-shadow(0 0 10px);
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: auto;
 margin-right: auto;
}

.spinner span {
 animation: loading6454 1.75s ease infinite;
}

.spinner span:nth-child(2) {
 animation-delay: 0.25s;
}

.spinner span:nth-child(3) {
 animation-delay: 0.5s;
}

.spinner span:nth-child(4) {
 animation-delay: 0.75s;
}

.spinner span:nth-child(5) {
 animation-delay: 1s;
}

.spinner span:nth-child(6) {
 animation-delay: 1.25s;
}

.spinner span:nth-child(7) {
 animation-delay: 1.5s;
}

@keyframes loading6454 {
 0%, 100% {
  transform: translateY(0);
 }

 50% {
  transform: translateY(-10px);
 }
}
`
export default Wrapper

import styled from 'styled-components'

const Wrapper = styled.section`

.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 80px auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
}

.modal-img{
    max-width: 450px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-infoes{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 600px) {
    .modal-content{
        width:100%;
    }
  }
`
export default Wrapper
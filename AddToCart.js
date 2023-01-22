import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";
import CartAmount from "./CartAmount";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [state , setState] = useState(colors[0]); 
  const [count , setCount  ] = useState(1);

  const setDecrease = ()=> {
    count > 1 ? setCount(count - 1) : setCount(1)  
  }
  const setIncrease = () => {
    count < stock ? setCount(count + 1) : setCount(stock) 
  }

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button /*0 */
                key={index}
                style={{
                    backgroundColor:curColor,
                  }} 
                  onClick={()=> {
                    setState(curColor) 
                  }}
                  className={state === curColor ? "btnStyle active" : "btnStyle"}
                  >
                  { state === curColor ? <FaCheck className="checkStyle"/> : null }
              </button>                         
            );
          })}
        </p>
      </div> 

      <CartAmount 
        amount={count}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />    

      <NavLink  to="/cart">
        <Button className="btn">Add To Cart</Button>
      </NavLink>      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .buttons{
    display:flex;
    gap:2rem;
    align-items:center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
  button{
    position:relative;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
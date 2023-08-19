import { useState } from 'react'
import './index.css'
import data from './data'
import {
  BsPhone,
  BsCaretLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'; 
import { AiOutlineReload } from 'react-icons/ai';
function App() {
  const [count, setCount] = useState(3)
  const {id, name,company, img, price, desc} = data[count]
  // console.log(name);
  const nextPhone = () => {
    setCount((count+1)%data.length)
  }
  const prevPhone = () => {
    setCount((count-1)%data.length)
  }
  const setRandPhone = () => {
    const random = Math.floor((Math.random)* data.length)
    if (random === count) {
      prevPhone
    }
    setCount(random)
  }
  return (
    <main>
      <article className="smartphone">
        <div className="img-container">
          <img src={img} alt={name} className="img" />
          <span className="phone-icon">
            <BsPhone />
          </span>
        </div>
        <div className="text">
          <h2>Name: {name}</h2>
          <h3>Manufacturer: {company}</h3>
          
             <div className="price"><p>Market Price: </p> <p className='price1'>£{price}</p></div>
          <p>{desc}</p>
          <div className="btn-bar">
            <button className="btn" onClick={prevPhone}>
              <BsCaretLeftSquareFill />
            </button>
            <button className="btn" onClick={nextPhone}>
              <AiOutlineReload />
            </button>
            <button className="btn" onClick={nextPhone}>
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App

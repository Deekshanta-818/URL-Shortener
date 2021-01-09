import './App.css';
import img from './text.png'
import {useState} from 'react';


const App = () => {

const [query, setQuery] = useState('');
const [link1, setLink1] = useState('')
const [link2, setLink2] = useState('')

const fetchData = async () => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${query}`);
  const data = await response.json();
  setLink1(data.result.full_short_link)
  setLink2(data.result.full_short_link2)
}

const change = (e) => {
  if(e.key==='Enter') {
    fetchData();
    setQuery('')
  }
}


  return (
    <div className='App'>

      <img src={img} alt="" className='title'/>

    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='input' onKeyPress={change} placeholder='Enter Your Long URL'/>
    
    <div className="container">
      <h2 className="link-title">Here Are Your Short Links</h2>
      <div className="links">
      <a href={link1} target='_blank' rel="noreferrer"> {link1} </a>
      <a href={link2} target='_blank' rel="noreferrer"> {link2} </a>
      </div>
    </div>
    </div>
  )
}

export default App

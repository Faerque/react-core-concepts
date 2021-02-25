import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  const nayoks = ['Anowar','Jafor','Sakib','Salman','Bappi','Shuvo','Bobi'];
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'Pdf Reader', price:'$69.99'},
    {name: 'Premiere el', price:'$69.99'}
    
  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>
        <Users>  </Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li> {product.name} </li>)
          }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>
        {
          products.map(product => <Product product={product}> </Product>)
        }
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price} ></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person name= {nayoks[0]} naiyka="Moushumi" food="fuska"> </Person>
        <Person name={nayoks[1]} naiyka="beka" > </Person>
        <Person name="Bappa Raj" naiyka="cheka">  </Person>
        <Person name="Eliyas Khancchan" naiyka="teka" > </Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count +1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={ () => setCount(count - 1) }> Decease </button>
      <button onMouseMove={ () => setCount(count + 1)}> Increase </button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
    <h3>Dynamic User: {users.length} </h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}

function Product(props){
  const ProductStyle={
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightGrey',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={ProductStyle} >
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  console.log(props)
  return (
  <div style= {{border: '2px solid red', margin: '10px'}}>
  
  <h1 style= {{padding: '20px'}} > Nayok: {props.name} </h1>
  <h2> Hero of {props.naiyka} </h2>
  
  </div>
  )
}

export default App;

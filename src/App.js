import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman'];
  const products = [
      {name: 'Photoshop',price:'$90.99'},
      {name: 'Illustrator', price: '$60.99'},
      {name: 'PDF Reader', price: '$6.99'},
      {name: 'Premier Elements', price: '$249.99'},
      ];

  const person = {
    name: 'Dr. Mahfuzur Rahman',
    job: 'Singer'
  };
  var styles = {
    color: 'red',
    backgroundColor: 'yellow'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        <h1 style={styles}>My heading: {person.name + " Job: "+person.job}</h1>
        <h1 style={{color: 'white', backgroundColor: 'black'}}>My heading: {person.name + " Job: "+person.job}</h1>

        {
          products.map(product => <Product product={product}></Product>)
        }

        <Person name="Rubel" nayika="Moyuri"></Person>
        <Person name={nayoks[1]} nayika="Moysumi"></Person>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  };

  const {name, price} = props.product;

  return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy now</button>
      </div>
  );
}


function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px'
  };
  return (
      <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h3>Name: {props.nayika}</h3>
      </div>
  )

}

export default App;

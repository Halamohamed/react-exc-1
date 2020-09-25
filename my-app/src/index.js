import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// exc 3
class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          id: 2,
        name: "Hammare B2",
        price: 123,
        },
        {
          id: 3,
        name: "Fisk B14",
        price: 124,
        },
        {
          id: 4,
        name: "Bread 23",
        price: 87,
        },
        
      ],
    };
  
  }
  sortProducts(){
    let tempProducts = this.state.products;
    tempProducts.sort((a,b) => {
      return b.price - a.price;
    });
    this.setState({
      products: tempProducts,
    });
  }

  deleteProduct(index){
    let tempProducts = this.state.products;
    tempProducts.splice(index,1);
    this.setState({
      products: tempProducts,
    });
  }
  
  render(){
    return (
      <div>
        <h2>Excersice 3</h2>
        <ul>
          {this.state.products.map((product) => (
            <Productinfo
            key={product.id} 
            product = {product}
            klick= {() => this.deleteProduct(index)} />
          ))}
        </ul>
        <button onClick={() => this.sortProducts()}>
          Sortera efter pris
        </button>
      </div>
    );
  }
}
function Productinfo(props) {
  return (
      <article className="produkt">
          <h3>{props.product.name}</h3>
          <p>{props.product.price} inkl moms</p>
          <button onClick={() => props.klick()}> Ta bort</button>
      </article>
  );
}
ReactDOM.render(<Product />, document.getElementById('root'));




/* exc 2
class Citylister extends React.Component {
  constructor(){
    super();
    this.state = {
      sweCities : ["Stockholm", "Göteborg", "Lund", "Växjö"],
      money : 100,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let sweCities = [...this.state.sweCities];
    sweCities.push(event.target.newCity.value);

    this.setState({sweCities: sweCities});
  }

  render() {
    return (<div>
      <ul>
        {this.state.sweCities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
      <ShowMoney money={this.state.money} />
      <form onSubmit={this.handleSubmit}>
        <input name="newCity" type="text" />
        <input type="submit" value="lägg till stad"/>
      </form>
    </div>)
  };
}
function ShowMoney(props){
  return <p>{props.money -5}</p>
}

ReactDOM.render(<Citylister />, document.getElementById('root')); */
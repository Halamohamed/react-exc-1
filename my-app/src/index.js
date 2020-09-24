import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

ReactDOM.render(<Citylister />, document.getElementById('root'));
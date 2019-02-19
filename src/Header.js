    import React, { Component } from 'react';
import image from './sim.png';
import img from './mastercard-e-visa-png.png';
import InputMask from 'react-input-mask';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {cardNumber: ' ' , name:' ', date:' '};
  }
 
  cardNumber = (event) => {
    this.setState({cardNumber: event.target.value});
  }
  name = (event) => {

    // if (event.target.value.length <= 20) {
    //   return this.setState({name: event.target.value.toUpperCase().replace(/[0-9]/g, '')})
    // }
    // return alert('hahahaha')
    this.state.name.length <= 20 ? this.setState({name: event.target.value.toUpperCase().replace(/[0-9]/g, '')}) : alert("something is wrong")
  }
  date = (event) => {
    if ((event.target.value.slice(0,2)<= 12) && (event.target.value.slice(0,2)>0) )
    this.setState({date: event.target.value});
    else {
      this.setState({date : ""})
    }
  }
  render() { 
    return (
      <div>
      <div className="card">
      <h1 className="title">Company name</h1>
      <img src ={image} className="sim"></img> 
      <p className="number" >{(this.state.cardNumber).padEnd(19, '*')}</p>
      <p className="name">{(this.state.name).padEnd(10, '*')}</p>
      <div className="date">
      <p className="num">{(this.state.date).padEnd(5, '*')}</p>
       <img src={img}  className="mastercard"></img>
       </div>
       
      </div>
      <div className="inputes">
      <InputMask placeholder="**** **** **** **** " onChange={this.cardNumber} mask="9999 9999 9999 9999" maskChar="" />
      <InputMask placeholder="************"onChange={this.name} mask="aaaaaaaaaaaaaaaaaaaa" maskChar="" />
      <InputMask placeholder="**/**" onChange={this.date} mask="99/99" maskChar="" value={this.state.date} />
      </div>
      </div>
    );
  }
}

export default Header;
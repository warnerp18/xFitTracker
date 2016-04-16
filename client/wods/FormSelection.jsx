import React, { Component } from 'react';

import ReactToolTip from 'react-tooltip';

import WodForm from './WodForm.jsx';
import HeroForm from './HeroForm.jsx';
import GirlForm from './GirlForm.jsx';

export default class FormSelection extends Component {
  constructor(props){
    super(props);
    this.state = {
      girlform: false,
      heroform: false,
      wodform: false,
    }
  }
  showGirls(){
    this.setState({
      girlform: true,
      heroform: false,
      wodform: false,
   })
  }
  showHeros(){
    this.setState({
      heroform: true,
      girlform: false,
      wodform: false,
   })
  }
  showWodForm(){
    this.setState({
      wodform: true,
      girlform: false,
      heroform: false,
   })
  }

  render(){
    return(
      <div>
      <div>
        <p>Chose the type of WOD you are recording</p>
        <a href='' onClick={this.showGirls.bind(this)}>
          <img src="/images/TheGirls.png" className='icon wodType theGirls' data-tip="The Girls"/>
          <ReactToolTip effect='solid' place='bottom' />
        </a>
        <a href='' onClick={this.showHeros.bind(this)}>
          <img src="/images/TheHeros.png" className='icon wodType theHeros' data-tip="The Heros"/>
          <ReactToolTip effect='solid' place='bottom' />
        </a>
        <a href='' onClick={this.showWodForm.bind(this)}>
          <img src="/images/Custom.png" className='icon wodType custom' data-tip="Custom"/>
          <ReactToolTip effect='solid' place='bottom' />
        </a>
        </div>
        {this.state.girlform ? <GirlForm /> : ''}
        {this.state.heroform ? <HeroForm /> : ''}
        {this.state.wodform ? <WodForm /> : ''}
      </div>
    )
  }
}

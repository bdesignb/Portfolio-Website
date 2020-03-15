import React, { Component } from 'react';
import Portfolio  from './components/Portfolio';
import Header from './components/Header';
import Service from './components/Service';
import Facts from './components/Facts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import NewProject from './components/NewProject';
import Clients from './components/Clients';
import './App.css'; 
import { data } from './data';
import Typer from './components/Typer';




class App extends Component {
  
//   state = {
//     data: [...data]   
// };

constructor(props){
  super(props);
  this.state = {
    
    data: {...data}
  }}
  

 
 
    render() {
           
      return (
        <div>         
           
            <Header /> 
            <Service data={this.state.data.service}/>
           
            

            <Facts />
            <Portfolio data={this.state.data.portfolio} />
            <NewProject /> 
            <Skills data={this.state.data.skills}/>             
            <Testimonials data={this.state.data.testimonials}/>        
           
            <Clients data={this.state.data.clients} />   
            <Contact />       
            <Footer data={this.state.data.social}/>
        </div>       
      
    )}}


export default App;
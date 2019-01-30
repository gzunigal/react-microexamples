import React, {Component} from 'react'
import Modal from './components/Modal/Modal'

import './App.css'

class App extends Component{
  state ={
    modalOpen: false,
    title: '',
    message: '',
  }

  closeModal(){
    this.setState({
      modalOpen: false,
    })
  }

  openModal(){
    this.setState({
      modalOpen: true,
    })
  }

  updatefield(event){
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render(){
    return(
      <div className="App">
        {this.state.modalOpen &&
          <Modal title={this.state.title} message={this.state.message} close={this.closeModal.bind(this)} />
        }

        <div className="App-container">
          <div className="App-title">
            <span>Title</span>
            <input type="text" name="title" value={this.state.title} onChange={this.updatefield.bind(this)} />
          </div>
          <div className="App-message">
            <span>Message</span>
            <textarea className='App-message' name="message" value={this.state.message} onChange={this.updatefield.bind(this)} />
          </div>
          <button className='App-button' onClick={this.openModal.bind(this)} >Open Modal</button>
        </div>

      </div>
    )
  }

}

export default App
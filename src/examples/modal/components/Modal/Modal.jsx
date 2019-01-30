import React, {PureComponent} from 'react'

import './Modal.css'

class Modal extends PureComponent{
  /* 
    Accepts props:
      title
      message
      close()
  */

  render(){
    return(
      <div className="Modal">
        <div className="Modal-overlay" onClick={this.props.close}/>
        <div className="Modal-container">
          <h2>{this.props.title}</h2>
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

export default Modal
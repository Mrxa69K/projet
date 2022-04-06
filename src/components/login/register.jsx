import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Inscrire</div>
        <div className="content">
          
          <div className="form">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="mp">Mot de passe</label>
              <input type="text" name="mp" placeholder="Mot de passe" />
              
            </div>
            <div className="form-group">
              <label htmlFor="rmp">Répéter le mot de passe</label>    
              <input type="text" name="rmp" placeholder="Mot de passe" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Inscription
          </button>
        </div>
      </div>
    );
  }
}
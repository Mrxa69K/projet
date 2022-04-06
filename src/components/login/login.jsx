import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
        
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Adresse E-mail</label>
              <input type="text" name="Email" placeholder="mail@provider.com" />
            </div>
            <div className="form-group">
              <label htmlFor="Mot de passe">Mot de passe</label>
              <input type="Mot de passe" name="Mot de passe" placeholder="password" />
            </div>
            <div className="form-group">
              <a href="J’ai oublié mon mot de passe" onClick={this.handleClick}>J’ai oublié mon mot de passe</a>
              
            </div>
            <div className="form-group">
              <a href="Pas encore de compte ? Inscrivez-vous ! " onClick={this.handleClick}>Pas encore de compte ? Inscrivez-vous ! </a>
            </div>
            

          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            
            Connexion
          </button>
        </div>
      </div>
    );
  }
}
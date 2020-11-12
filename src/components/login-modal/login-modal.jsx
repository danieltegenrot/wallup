import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import React from 'react'

import './login-modal.css'

firebase.initializeApp({
  apiKey: 'AIzaSyChd-Cann15-fNy97RoWPlfFk_TFyChqlY',
  authDomain: 'wallup-9ddcf.firebaseapp.com'
})

// Configure FirebaseUI.
const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      callbacks: {
        signInSuccess: () => true
      }
    }
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
            <div className="logout-button-container">
              <button className="logout-button" onClick={()=>firebase.auth().signOut()}>Sign Out</button>
            </div> ) : (
          <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> 
          </div> )
        }      
      </div>
    )
}
  
}

export default LogIn;
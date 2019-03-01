import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCouNuIR6Ozv5wM7JLzgqdAsxToSb4f6jU",
  authDomain: "catchofthedayrc.firebaseapp.com",
  databaseURL: "https://catchofthedayrc.firebaseio.com"
});
const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;

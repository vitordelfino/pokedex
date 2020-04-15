import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

import firebaseConfig from './firebase-config.json';

const app = firebase.initializeApp(firebaseConfig);

const reduxSaaFirebase = new ReduxSagaFirebase(app);
export default reduxSaaFirebase;

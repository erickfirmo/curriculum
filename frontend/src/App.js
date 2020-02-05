import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter  } from 'react-router-dom';


// Import css
import './css/pe-icon-7-stroke.css';
import './css/materialdesignicons.min.css';
import './css/waves.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/colors/red.css';

const Index1 = React.lazy(() => import('./pages/index-1'));
const Index2 = React.lazy(() => import('./pages/index-2'));
const Index3 = React.lazy(() => import('./pages/index-3'));
const Index4 = React.lazy(() => import('./pages/index-4'));
const Index5 = React.lazy(() => import('./pages/index-5'));
const Index6 = React.lazy(() => import('./pages/index-6'));
const Index7 = React.lazy(() => import('./pages/index-7'));
const Index8 = React.lazy(() => import('./pages/index-8'));
const Index9 = React.lazy(() => import('./pages/index-9'));

const Login = React.lazy(() => import('./pages/Auth/login'));
const Register = React.lazy(() => import('./pages/Auth/register'));
const ForgetPassword = React.lazy(() => import('./pages/Auth/password-forget'));

class App extends Component {
 
  render() {

    return (
      <React.Fragment>

        <Router>
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Switch>
              <Route path="/index1" component={Index1} />   
              <Route path="/index2" component={Index2} />   
              <Route path="/index3" component={Index3} />   
              <Route path="/index4" component={Index4} />   
              <Route path="/index5" component={Index5} />   
              <Route path="/index6" component={Index6} />   
              <Route path="/index7" component={Index7} />   
              <Route path="/index8" component={Index8} />   
              <Route path="/index9" component={Index9} />   
              
              <Route path="/login" component={Login} />  
              <Route path="/register" component={Register} />  
              <Route path="/password-forget" component={ForgetPassword} /> 

              <Route path="/" component={Index1} /> 

           </Switch>
           </React.Suspense>
        </Router>        
      </React.Fragment>
    );
  }
}



export default withRouter(App);



import ScrollToTop from "./components/scrollToTop";
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from './screens/Home'
import Services from './screens/Services'
import ScheduleSession from './screens/ScheduleSession'
import Join from "./screens/Join";
import Partner from "./screens/Partner";
import About from './screens/About'
import DigitalContent from './screens/DigitalContent'
import MobileAppDevelopment from "./screens/MobileAppDevelopment";
import IdeaMapping from "./screens/IdeaMapping";
import EcommerceDevelopment from "./screens/EcommerceDevelopment";
import PaymentIntegration from "./screens/PaymentIntegrationSystem";
import SecurityServices from "./screens/SecurityServices";
import WebApplication from './screens/WebApplicationDevelopment';
import WebDesign from "./screens/WebDesignServices";
import CoorporateDesign from "./screens/CoorporateDesignServices";
import ValueAdded from "./screens/ValueAddedService";
import './App.css';


function App() {
  return (
      <Router>
        <ScrollToTop />
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/schedule_session' component={ScheduleSession} />
        <Route path='/about_us' component={About} />
        <Route path='/digital_content' component={DigitalContent} />
        <Route path='/mobile_app_development' component={MobileAppDevelopment} />
        <Route path='/idea_mapping' component={IdeaMapping} />
        <Route path='/ecommerce_development' component={EcommerceDevelopment} />
        <Route path='/payment_integration_services' component={PaymentIntegration} />
        <Route path='/security_services' component={SecurityServices} />
        <Route path='/web_application_development' component={WebApplication} />
        <Route path='/web_design_services' component={WebDesign} />
        <Route path='/coorporate_design_services' component={CoorporateDesign} />
        <Route path='/value_added_services' component={ValueAdded} />
        <Route path='/join' component={Join} />
        <Route path='/partner' component={Partner} />
      </Router>
  );
}

export default App;
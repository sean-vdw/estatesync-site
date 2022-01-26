import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Cta from './components/Cta';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Security from './components/Security';
import Resources from './components/Resources';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import About from './components/About';
import Alert from './components/Alert';

// Resources page posts
import EstatePlanning101 from './components/posts/EstatePlanning101';
import UnderstandTrusts from './components/posts/UnderstandTrusts';
import CorpTrustee from './components/posts/CorpTrustee';
import FivePOA from './components/posts/FivePOA';
import HealthCareDirectives from './components/posts/HealthCareDirectives';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={Hero} />
      <Route exact path='/' component={Content} />
      <Route exact path='/' component={Pricing} />
      <Route exact path='/pricing' component={Pricing} />
      <Route path='/pricing' component={Features} />
      <Route path='/testimonials' component={Testimonials} />
      <Route path='/FAQs' component={Faq} />
      <Route path='/security' component={Security} />
      <Route exact path='/resources' component={Resources} />
      <Route exact path='/privacy' component={PrivacyPolicy} />
      <Route exact path='/terms' component={TermsOfService} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />

      <Route path='/resources/estate-planning-101' component={EstatePlanning101} />
      <Route path='/resources/understanding-living-trusts-25-questions' component={UnderstandTrusts} />
      <Route path='/resources/corporate-trustees-explained' component={CorpTrustee} />
      <Route exact path='/resources/5-types-of-POA' component={FivePOA} />
      <Route exact path='/resources/health-care-directives' component={HealthCareDirectives} />

      <Route path='/' component={Cta} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;

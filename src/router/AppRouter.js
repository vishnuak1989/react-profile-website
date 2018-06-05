import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react'
import Home from './../components/home'
import Portfolio from './../components/portfolio'
import Contact from './../components/contact'
import Header from './../components/header'
import PageNotFound from './../components/pagenotfound'
import PortfolioItem from './../components/portfolioitem'
import Footer from './../components/footer.js';

const AppRouter=() =>(
  <BrowserRouter>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>

);
export default AppRouter;
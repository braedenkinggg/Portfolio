import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Header/Header';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import { Dropdown, DropdownItem, DropdownLink } from '../Dropdown/Dropdown';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Work from '../../pages/Work';
import Contact from '../../pages/Contact';
import PageNotFound from '../../pages/404';
import '../../_global.scss';

function App() {
    const [open, setOpen] = useState(false);
    const toggleSidenav = () => setOpen(!open);
    const closeSidenav = () => setOpen(false);

    return (
        <div className='max-width'>
            <Router>
                <Navbar>
                    <Logo logoSize='logo--md' onClick={ closeSidenav } />
                    <Hamburger onClick={ toggleSidenav } />
                </Navbar>

                <Dropdown style={open ? {height: 100 + '%'} : {height: 0}}>
                    <DropdownItem>
                        <DropdownLink path='/' name='Home' onClick={closeSidenav} />
                    </DropdownItem>

                    <DropdownItem>
                        <DropdownLink path='/about' name='About' onClick={ closeSidenav } />
                    </DropdownItem>

                    <DropdownItem>
                        <DropdownLink path='/work' name='Work' onClick={ closeSidenav } />
                    </DropdownItem>

                    <DropdownItem>
                        <DropdownLink path='/contact' name='Contact' onClick={ closeSidenav } />
                    </DropdownItem>
                </Dropdown>
            
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    <Route path='/work'>
                        <Work />
                    </Route>

                    <Route path='/contact'>
                        <Contact />
                    </Route>

                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav
     } from 'reactstrap'

import Posts from './components/posts/Posts'
import Authors from './components/authors/Authors'
import PostInfo from './components/posts/PostInfo'
import AuthorInfo from './components/authors/AuthorInfo'
import Home from './Home'

function App(props){
        return (
            <BrowserRouter>
                <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                <NavbarBrand color="white" href="/">Blog UI</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                <Link className="nav-link text-light" to="/">Home</Link>
                </NavItem>
                <NavItem>
                <Link className="nav-link text-light" to = "/posts">Posts</Link>
                </NavItem>
                <NavItem>
                <Link className="nav-link text-light" to = "/authors">Authors</Link>
                </NavItem>
                </Nav>
                </Navbar>


                <div className="container">
    
                <Route path="/posts" component={Posts} exact={true}/>
                <Route path="/authors" component={Authors} exact={true}/>
    
                <Route path="/posts/:id" component={PostInfo}/>
                <Route path="/authors/:id" component={AuthorInfo}/>
               <Route path="/" component={Home} exact={true}/>
               </div>
       
            </div>
    
        </BrowserRouter>
        )
    }

export default App
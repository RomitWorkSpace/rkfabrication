import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductMenu from './ProductMenu.jsx';
import Logo from 'imgPath/rk.png';
import PhoneIcon from 'imgPath/phone-icon.png';

class Navbar extends Component{
	state = { clicked: false }
	handleClick = ()=>{
		this.setState({clicked:!this.state.clicked})
	}
	// handleDropdown = ()=>{
	// 	this.setState({clicked: true})
	// }
	render(){
    return(
        <>
           <header id="header1">
		  		<div className="header-top">
		  			<div className="container mob-p">
				  		<div className="row m-0 d-flex flex-direction">
				  			<div className="col-lg-3 col-sm-12 col-12 header-top-left no-padding">
								<div id="">
									<Link to="/">
									<img src={Logo} alt="logo" style={{width:220}} />
									</Link>
								</div>					  
				  			</div>
							<div className="row search-wrap col-lg-9 col-sm-12 m-0 col-12 header-top-left no-padding">
							    <div id="clip-header">
                                   <div className="row align-items-center mt-2">
									<div className="col-md-2"></div>
									<div className="col-md-5 col-6 mb-2">
											<img src={PhoneIcon} alt="icon" width="30" />
											<span className="top-text"> Call Us: 9792338480</span>
									</div>
									<div className="col-md-4 col-4">
                                        <div className="rk-btn" id="top-btn">
											Login
										</div>
									</div>
									<div className="col-md-1 col-2">
									   <div id="mob-control" onClick={this.handleClick}>
									   <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
									   </div>
									</div>
								   </div>
								</div>
								<div className="main-menu" id={this.state.clicked ? "menu-active" : "menu"} onClick={this.handleClick}>
									
									  
									  <nav id="nav-menu-container">
										<ul className="nav-menu">
										  <li className="menu-active"><Link to="/">Home</Link></li>
										  <li><Link to="/about">About</Link></li>
										  <li><Link to="/blog">Blog</Link></li>
										  <li><Link to="/contact">Contact</Link></li>
										  <li className="menu-has-children"><Link to="">Products</Link>
											<ul>
												  <ProductMenu />               		
											</ul>
										  </li>	
										  <li><Link to="/our-products">Our Product</Link></li>
										  
										  {/* <li className="menu-has-children"><Link to="/">Pages</Link>
											<ul>
												  <li><Link to="/">Project Details</Link></li>		
												<li><Link to="/">Elements1</Link></li>
												  <li className="menu-has-children"><Link to="/">Level 2 </Link>
													<ul>
													  <li><Link to="/">Item One</Link></li>
													  <li><Link to="/">Item Two</Link></li>
													</ul>
												  </li>					                		
											</ul>
										  </li>					          					          		           */}
						
										</ul>
									  </nav>		    		
									
								</div>
							</div>
				  		</div>			  					
		  			</div>
				</div>
			    
			  </header>
        </>
    );
}
}

export default Navbar;
import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
    result = ''
    state = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkValidation = async (e) =>{
        e.preventDefault();
        if(this.state.first_name.length === 0 || this.state.last_name.length === 0 || this.state.email.length === 0 || this.state.phone.length === 0 || this.state.message.length === 0){
            this.msg = "All Fields are required";
            this.data = <div><sapn className="alert alert-danger form-control">{this.msg}</sapn></div>
        }
        else{
            const res = await axios.post('https://rkfabrication.in/api/submit-detail', this.state);
            if(res.data.status === 200)
            {
                this.result = <div><sapn className="alert alert-success form-control">{res.data.message}</sapn></div>
                this.data = null;
                this.setState({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }
        }
    }

    // saveContact = async (e) => {
    //     e.preventDefault();
    
        
    // }
    render(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                            {this.data}
                            {this.result}
                        
                        <div className="contact-form-bg">
                            <form onSubmit = {this.checkValidation}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for = "fname">First Name</label>
                                            <input type="text" name="first_name" onChange={this.handleInput} value={this.state.first_name} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-groupvmb-3">
                                            <label for = "lname">Last Name</label>
                                            <input type="text" name="last_name" onChange={this.handleInput} value={this.state.last_name} className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="email">E-mail</label>
                                    <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control"></input>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="phone">Phone</label>
                                    <input type="number" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" name="message" onChange={this.handleInput} value={this.state.message} rows="4"></textarea>
                                </div>
                                <button type="submit" className="rk-btn mt-3">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}
}

export default ContactForm;
import React, {Component} from 'react';
import ContactBG from 'imgPath/contact-bg.png';
import axios from 'axios';

class HomeContact extends Component {

    result = ''
    state = {
        first_name: '',
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
        if(this.state.first_name.length === 0 || this.state.email.length === 0 || this.state.phone.length === 0 || this.state.message.length === 0){
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
                    email: '',
                    phone: '',
                    message: ''
                });
            }
        }
    }

    render(){
    return(
        <>
           <div className="container-fluid mt-4">
            <div className="container contact-bg pt-4 pb-4" style={{backgroundImage: `url(${ContactBG})`}}>
               <div className="row">
                <div className="col-md-7">

                </div>
                <div className="col-md-5" style={{backgroundColor:"#C90110", borderRadius:"5px"}}>
                            {this.data}
                            {this.result}
                    <div className="contact-form">
                        <h2 style={{color:"#fff"}}>GET IN TOUCH</h2>
                        <form onSubmit = {this.checkValidation}>
                             <label for="name">Name</label>
                             <input type="text" name="first_name" onChange={this.handleInput} value={this.state.first_name} className="form-control"></input>
                             <label for="email">Email</label>
                             <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control"></input>
                             <label for="phone">Phone</label>
                             <input type="number" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control"></input>
                             <label for="name">Message</label>
                             <textarea class="form-control" rows="3" name="message" onChange={this.handleInput} value={this.state.message}></textarea>
                             <button type="submit" className="rk-btn mt-3 mb-3" value="submit">SUBMIT</button>
                        </form> 
                    </div>
                </div>
               </div>
            </div>
           </div>
        </>
    );
    }
}

export default HomeContact;
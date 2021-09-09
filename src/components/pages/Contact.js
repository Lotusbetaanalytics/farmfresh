import React from 'react'
import ProductPage from '../ProductPage';
import Banner from '../Banner';
import Footer from '../Footer';
import product from '../../assets/farmfresh3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <>
        <Banner Title="Contact US"  />
       <ProductPage name="Contact US" img={product}>
       <form>
                
                <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="Contact Number" />
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                    </div>
                    <div className="col-md-3 form-group">
                    <input type="submit" className="form-control btn-info" value="Send Message" />
                    </div>
                </div>
            </form>
        </ProductPage>
        <Footer />
        </>
    )
}

export default Contact

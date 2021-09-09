import React from 'react'
import ProductPage from '../ProductPage';
import Banner from '../Banner';
import Footer from '../Footer';
import product from '../../assets/farmfresh8.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <>
        <Banner Title="Login"  />
       <ProductPage name="Login" img={product}>
       <form>
                
                <div className="row">
                    <div className="col-md-12 form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-md-12 form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-md-3 form-group">
                    <input type="submit" className="form-control btn-info" value="Login" />
                    </div>
                </div>
            </form>
        </ProductPage>
        <Footer />
        </>
    )
}

export default Login

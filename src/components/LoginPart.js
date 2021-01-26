import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Link} from 'react-router-dom'
import Registration from "./Registration";

class LoginPart extends Component {
    render() {
        return (
            <div id="Login">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Tizimga kirish</h5>
                                </div>
                                <div className="card-body">
                                    <AvForm>

                                        <AvField name="name" type="text" placeholder="Ismingiz.." errorMessage="Ismingizni kiriting" required/>
                                        <AvField name="password" type="password" placeholder="Parol.." errorMessage="Parol kiritilmadi" required/>

                                        <button className="btn btn-block btn-primary mt-4">Kirish</button>

                                    </AvForm>
                                </div>
                                <div className="card-footer">
                                    <p className="text-secondary text-center">Yangi foydalanuvchimisiz?</p>
                                    <Link to="/registration"><h5 className="text-center text-primary">Ro`yxatdan o`tish</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPart;
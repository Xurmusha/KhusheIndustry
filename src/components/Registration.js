import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import ReactPhoneInput from './ReactPhoneInput'



class Registration extends Component {

    constructor(props) {
        super(props);
        this.state ={
            phoneNumber: ""
        }
    }


    render() {

        const handleOnChange = (value,country) => {
            this.setState({phoneNumber: value});
        }

        return (
            <div id="registration">
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Ro`yxatdan o`tish</h5>
                                </div>
                                <div className="card-body">
                                    <AvForm>
                                        <AvField type="text" label="Ismingiz:" name="name" required />
                                        <AvField type="text" label="Familiyangiz:" name="surname" required/>
                                        <AvField type="email" label="Email:" name="email" required/>
                                        <AvField type="password" label="Parol:" name="password" required/>


                                        <ReactPhoneInput
                                            className="phoneNumber"
                                            defaultCountry={"uz"}
                                            inputExtraProps={{
                                                name: 'phoneNumber',
                                                required: true,
                                                autoFocus: false,
                                                autoComplete: 'off',
                                            }}
                                            countryCodeEditable={true}
                                            enableSearchField={true}
                                            value={this.state.phoneNumber}
                                            onChange={handleOnChange}
                                        />

                                        <button className="btn btn-success d-block ml-auto mt-3" type="submit">Yuborish
                                        </button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
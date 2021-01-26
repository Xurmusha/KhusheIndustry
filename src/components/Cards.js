import React, {Component} from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="col-12 col-xl-3 col-sm-6 col-md-4 mb-3" id="cards">
                <div className="card">
                    <div className="card-body p-0">
                        <img src="card-img.jpg" alt="" className="w-100 card-img"/>
                        <p className="px-3 mb-0">Televizor ekrani 90sm, eng ommabop model. Platina asosida</p>
                    </div>
                    <div className="card-footer bg-white border-top-0">
                        <div className="bg-light py-2 text-center">
                            <h5>$99,99</h5>
                        </div>
                        <a href="" className="d-flex align-items-center mt-2">
                            <img src="dostavka.png" alt="" className=""/>
                            <p className="text-dark mb-0 ml-2 font-weight-bold">Buyurtma berish</p>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;
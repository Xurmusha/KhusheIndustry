import React, {Component} from 'react';
import CarouselInHeader from "./CarouselInHeader";

class Header extends Component {
    render() {
        return (
            <div>
                <header>

                    <div className="container-fluid mt-3 px-0 shadow px-5">

                        <CarouselInHeader/>

                    </div>

                </header>
            </div>
        );
    }
}

export default Header;
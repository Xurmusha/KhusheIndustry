import React, {Component} from 'react';
import Cards from "./Cards";

class MainPart extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container-fluid px-5">
                        <div className="row mt-5">
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MainPart;
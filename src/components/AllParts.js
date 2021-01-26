import React, {Component} from 'react';
import Nav from "./Nav";
import Header from "./Header";
import MainPart from "./MainPart";
import CardColOlti from "./CardColOlti";

class AllParts extends Component {
    render() {
        return (
            <div>

                <Header/>
                <MainPart/>
                <CardColOlti/>

            </div>
        );
    }
}

export default AllParts;
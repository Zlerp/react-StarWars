import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PlanetCards from '../CardList/PlanetCards';
import 'react-tabs/style/react-tabs.css';


class RelatedPlanet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            planet: []
        };
        this.requestApi = this.requestApi.bind(this);

    }



    requestApi(url) {
        console.log(url);
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    planet:  [data],
                });
                console.log(this.state.planet);
            })
    }



    componentDidMount() {
        let self = this;
        this.requestApi(this.props.planetUrl)
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <PlanetCards planets={this.state.planet} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedPlanet;

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PlanetCards from '../CardList/PlanetCards';


class RelatedPlanets extends Component {

    constructor(props) {
        super(props);

        this.state = {
            planets: []
        };
        this.requestApi = this.requestApi.bind(this);

    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    planets:  this.state.planets.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.planetUrls.map(function(planet, index){
            self.requestApi(planet)
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <PlanetCards planets={this.state.planets} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedPlanets;

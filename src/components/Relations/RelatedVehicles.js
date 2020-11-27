import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StarshipCards from '../CardList/StarshipCards';
import VehicleCards from "../CardList/VehicleCards";


class RelatedVehicles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vehicles: []
        };
        this.requestApi = this.requestApi.bind(this);

    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    vehicles:  this.state.vehicles.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.vehiclesUrl.map(function(vehicle, index){
            self.requestApi(vehicle)
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <VehicleCards vehicles={this.state.vehicles}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedVehicles;

import React, {Component} from 'react';
import axios from 'axios';

import PlanetCards from "../components/CardList/PlanetCards";


class Planets extends Component {

    state = {
        planets : [],
        count: 0,
        loading: true,
    };


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    planets:  this.state.planets.concat(data.results),
                    count: data.count,
                }));
                if (data.next) {
                    this.requestApi(data.next);
                } else {
                    this.setState({
                        loading: false
                    })
                }
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/planets/`);
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Planets of Starwars</h1>
                    { this.state.loading &&
                        <h3>LOADING</h3>
                    }
                    {
                        !this.state.loading &&
                            <React.Fragment>
                                <h5 className="mb-4">Results: {this.state.count}</h5>
                                <div className="row">
                                    <PlanetCards planets={this.state.planets}/>
                                </div>
                            </React.Fragment>
                    }
                </div>


            </div>
        );
    }

}

export default Planets;

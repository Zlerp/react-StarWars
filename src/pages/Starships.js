import React, {Component} from 'react';
import axios from 'axios';

import StarshipCards from "../components/CardList/StarshipCards";


class Starships extends Component {

    state = {
        starships : [],
        count: 0,
        loading: true,
    };


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    starships:  this.state.starships.concat(data.results),
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
        this.requestApi(`${this.props.apiUrl}/starships/`);
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Starships of Starwars</h1>
                    { this.state.loading &&
                        <div className="loader">
                            <div className="inner one" />
                            <div className="inner two" />
                            <div className="inner three" />
                        </div>
                    }
                    {
                        !this.state.loading &&
                            <React.Fragment>
                                <h5 className="mb-4">Results: {this.state.count}</h5>
                                <div className="row">
                                    <StarshipCards starships={this.state.starships}/>
                                </div>
                            </React.Fragment>
                    }
                </div>


            </div>
        );
    }

}

export default Starships;

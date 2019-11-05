import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import FilmCards from "../components/CardList/FilmCards";


class Films extends Component {

    state = {
        films : [],
        count: 0,
        loading: true,
    };


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    films:  this.state.films.concat(data.results),
                    count: data.count,
                }));
                if (data.next) {
                    this.requestApi(data.next);
                } else {
                    this.setState({
                        loading: false
                    })
                }
                console.log(this.state.films);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/films/`);
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Films of Starwars</h1>
                    { this.state.loading &&
                        <h3>LOADING</h3>
                    }
                    {
                        !this.state.loading &&
                            <React.Fragment>
                                <h5 className="mb-4">Results: {this.state.count}</h5>
                                <div className="row">
                                    <FilmCards films={this.state.films}/>
                                </div>
                            </React.Fragment>
                    }
                </div>


            </div>
        );
    }

}

export default Films;

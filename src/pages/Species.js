import React, {Component} from 'react';
import axios from 'axios';
import SpeciesCards from "../components/CardList/SpeciesCards";

// import PeopleCards from "../components/CardList/PeopleCards";


class Species extends Component {

    state = {
        species : [],
        count: 0,
        loading: true,
    };


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    species:  this.state.species.concat(data.results),
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
        this.requestApi(`${this.props.apiUrl}/species/`);
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Species of Starwars</h1>
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
                                    <SpeciesCards species={this.state.species}/>
                                </div>
                            </React.Fragment>
                    }
                </div>


            </div>
        );
    }

}

export default Species;

import React, {Component} from 'react';
import axios from 'axios';

import PeopleCards from "../components/CardList/PeopleCards";


class People extends Component {

    state = {
        people : [],
        count: 0,
        loading: true,
    };


    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState(prevState => ({
                    people:  this.state.people.concat(data.results),
                    count: data.count,
                }));
                if (data.next) {
                    let nextUrl = data.next.replace(/^http:\/\//i, 'https://');
                    this.requestApi(nextUrl);
                } else {
                    this.setState({
                        loading: false
                    })
                }
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/people/`);
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>People of Starwars</h1>
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
                                    <PeopleCards people={this.state.people}/>
                                </div>
                            </React.Fragment>
                    }
                </div>


            </div>
        );
    }

}

export default People;

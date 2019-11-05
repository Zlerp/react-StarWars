import React, {Component} from 'react';
import axios from 'axios';
import FilmCards from '../CardList/FilmCards';


class RelatedFilms extends Component {

    constructor(props) {
        super(props);


        this.requestApi = this.requestApi.bind(this);
        this.state = {
            films: [],
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    films:  this.state.films.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.filmUrls.map(function(film, index){
            self.requestApi(film);
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <FilmCards films={this.state.films} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedFilms;

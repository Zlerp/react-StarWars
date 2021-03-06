import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StarshipCards from '../CardList/StarshipCards';


class RelatedStarships extends Component {

    constructor(props) {
        super(props);

        this.state = {
            starships: []
        };
        this.requestApi = this.requestApi.bind(this);

    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    starships:  this.state.starships.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.starshipsUrl.map(function(starship, index){
            self.requestApi(starship)
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <StarshipCards starships={this.state.starships} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedStarships;

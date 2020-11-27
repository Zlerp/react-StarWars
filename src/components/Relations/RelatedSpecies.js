import React, {Component} from 'react';
import axios from 'axios';
import SpeciesCards from "../CardList/SpeciesCards";


class RelatedSpecies extends Component {

    constructor(props) {
        super(props);


        this.requestApi = this.requestApi.bind(this);
        this.state = {
            species: [],
        };
    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    species:  this.state.species.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.specimenUrls.map(function(specimen, index){
            self.requestApi(specimen);
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <SpeciesCards species={this.state.species} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedSpecies;

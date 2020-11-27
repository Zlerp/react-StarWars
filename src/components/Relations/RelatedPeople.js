import React, {Component} from 'react';
import axios from 'axios';
import PeopleCards from '../CardList/PeopleCards';


class RelatedPeople extends Component {

    constructor(props) {
        super(props);


        this.requestApi = this.requestApi.bind(this);
        this.state = {
            people: [],
        };
    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    people:  this.state.people.concat(data),
                });
            })
    }



    componentDidMount() {
        let self = this;
        this.props.peopleUrls.map(function(person, index){
            self.requestApi(person);
        });
    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <PeopleCards people={this.state.people} />
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedPeople;

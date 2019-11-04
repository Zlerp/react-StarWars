import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PeopleCards from '../CardList/PeopleCards';
import 'react-tabs/style/react-tabs.css';


class RelatedPeople extends Component {

    constructor(props) {
        super(props);


        this.requestApi = this.requestApi.bind(this);
        this.state = {
            peopleUrls : props.peopleUrls,
            people: [],
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    people:  this.state.people.concat(data),
                });
                console.log(this.state.people);
            })
    }



    componentDidMount() {
        let self = this;
        this.state.peopleUrls.map(function(person, index){
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

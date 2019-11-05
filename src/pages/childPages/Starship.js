import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import RelatedPlanet from "../../components/Relations/RelatedPlanet";
import RelatedPeople from "../../components/Relations/RelatedPeople";


class Starship extends Component {

    constructor(props) {
        super(props);


        this.state = {
            starship : {},
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    starship:  data,
                });
                console.log(this.state.starship);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/starships/${this.props.id}`);
        console.log(`${this.props.apiUrl}/starships/${this.props.id}`);


    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Starship: {this.state.starship.name}</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Pilots</Tab>
                            <Tab>Films</Tab>
                        </TabList>

                        <TabPanel>
                            <React.Fragment>
                                <div>  Cargo Capacity: {this.state.starship.cargo_capacity}</div>
                                <div>  Consumables: {this.state.starship.consumables}</div>
                                <div>  Cost in Credits: {this.state.starship.cost_in_credits}</div>
                                <div>  Crew: {this.state.starship.crew}</div>
                                <div>  Hyperdrive Rating: {this.state.starship.hyperdrive_rating}</div>
                                <div>  Length: {this.state.starship.length}</div>
                                <div>  Manufacturer: {this.state.starship.manufacturer}</div>
                                <div>  Max Atmosphering Speed: {this.state.starship.max_atmosphering_speed}</div>
                                <div>  Model: {this.state.starship.model}</div>
                                <div>  Passengers: {this.state.starship.passengers}</div>
                                <div>  Startship Class: {this.state.starship.starship_class}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPeople peopleUrls={this.state.starship.pilots}/>
                        </TabPanel>
                        <TabPanel>
                            <h2>Films</h2>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Starship;

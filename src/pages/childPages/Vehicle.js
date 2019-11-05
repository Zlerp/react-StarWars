import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedPeople from "../../components/Relations/RelatedPeople";
import RelatedFilms from "../../components/Relations/RelatedFilms";
import './childPages.scss';

class Vehicle extends Component {

    constructor(props) {
        super(props);


        this.state = {
            vehicle : {},
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    vehicle:  data,
                });
                console.log(this.state.vehicle);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/vehicles/${this.props.id}`);
        console.log(`${this.props.apiUrl}/vehicles/${this.props.id}`);


    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Starship: {this.state.vehicle.name}</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Pilots</Tab>
                            <Tab>Films</Tab>
                        </TabList>

                        <TabPanel>
                            <React.Fragment>
                                <div>  Cargo Capacity: {this.state.vehicle.cargo_capacity}</div>
                                <div>  Consumables: {this.state.vehicle.consumables}</div>
                                <div>  Cost in Credits: {this.state.vehicle.cost_in_credits}</div>
                                <div>  Crew: {this.state.vehicle.crew}</div>
                                <div>  Hyperdrive Rating: {this.state.vehicle.hyperdrive_rating}</div>
                                <div>  Length: {this.state.vehicle.length}</div>
                                <div>  Manufacturer: {this.state.vehicle.manufacturer}</div>
                                <div>  Max Atmosphering Speed: {this.state.vehicle.max_atmosphering_speed}</div>
                                <div>  Model: {this.state.vehicle.model}</div>
                                <div>  Passengers: {this.state.vehicle.passengers}</div>
                                <div>  Vehicle Class: {this.state.vehicle.vehicle_class}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPeople peopleUrls={this.state.vehicle.pilots}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedFilms filmUrls={this.state.vehicle.films}/>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Vehicle;

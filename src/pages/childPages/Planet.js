import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedPeople from "../../components/Relations/RelatedPeople";
import RelatedFilms from "../../components/Relations/RelatedFilms";
import './childPages.scss';


class Planet extends Component {

    constructor(props) {
        super(props);


        this.state = {
            planet : {},
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    planet:  data,
                });
                console.log(this.state.planet);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/planets/${this.props.id}`);
        console.log(`${this.props.apiUrl}/planets/${this.props.id}`);


    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Planet {this.state.planet.name}</h1>


                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Residents</Tab>
                            <Tab>Films</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Details</h2>
                            <React.Fragment>
                                <div>Rotation Period: {this.state.planet.rotation_period}</div>
                                <div>Orbital Period: {this.state.planet.orbital_period}</div>
                                <div>Diameter: {this.state.planet.diameter}</div>
                                <div>Climate: {this.state.planet.climate}</div>
                                <div>Gravity: {this.state.planet.gravity}</div>
                                <div>Terrain: {this.state.planet.terrain}</div>
                                <div>Surface Water: {this.state.planet.surface_water ? 'yes':'no'}</div>
                                <div>Population: {this.state.planet.population}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPeople peopleUrls={this.state.planet.residents}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedFilms filmUrls={this.state.planet.films}/>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Planet;

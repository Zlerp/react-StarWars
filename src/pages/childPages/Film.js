import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedPlanets from "../../components/Relations/RelatedPlanets";
import RelatedStarships from "../../components/Relations/RelatedStarships";
import RelatedPeople from "../../components/Relations/RelatedPeople";
import './childPages.scss';
import RelatedVehicles from "../../components/Relations/RelatedVehicles";

class Film extends Component {

    constructor(props) {
        super(props);


        this.state = {
            film : {},
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    film:  data,
                });
                console.log(this.state.film);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/films/${this.props.id}`);
        console.log(`${this.props.apiUrl}/films/${this.props.id}`);


    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Title: {this.state.film.title}</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Characters</Tab>
                            <Tab>Planets</Tab>
                            <Tab>Species</Tab>
                            <Tab>Starships</Tab>
                            <Tab>Vehicles</Tab>
                        </TabList>

                        <TabPanel>
                            <React.Fragment>
                                <div >Director: {this.state.film.director}</div>
                                <div >Episode: {this.state.film.episode_id}</div>
                                <div >Release Date: {this.state.film.release_date}</div>
                                <div >Producer/s: {this.state.film.producer}</div>
                                <div >Opening Crawl: {this.state.film.opening_crawl}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPeople peopleUrls={this.state.film.characters}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPlanets planetUrls={this.state.film.planets}/>
                        </TabPanel>
                        <TabPanel>
                            <h2>Species</h2>
                        </TabPanel>
                        <TabPanel>
                            <RelatedStarships starshipsUrl={this.state.film.starships}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedVehicles vehiclesUrl={this.state.film.vehicles}/>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Film;

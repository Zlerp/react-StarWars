import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedPlanets from "../../components/Relations/RelatedPlanets";
import RelatedStarships from "../../components/Relations/RelatedStarships";
import RelatedFilms from "../../components/Relations/RelatedFilms";
import './childPages.scss';

class Person extends Component {

    constructor(props) {
        super(props);


        this.state = {
            person : {},
        };
    }



    requestApi(url) {
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({
                    person:  data,
                });
                console.log(this.state.person);
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/people/${this.props.id}`);
        console.log(`${this.props.apiUrl}/people/${this.props.id}`);


    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Person: {this.state.person.name}</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Home World</Tab>
                            <Tab>Films</Tab>
                            <Tab>Species</Tab>
                            <Tab>Starships</Tab>
                            <Tab>Vehicles</Tab>
                        </TabList>

                        <TabPanel>
                            <React.Fragment>
                                <div>  Birth Year: {this.state.person.birth_year}</div>
                                <div>Height: {this.state.person.height}</div>
                                <div>Mass: {this.state.person.mass}</div>
                                <div>Hair Color: {this.state.person.hair_color}</div>
                                <div>Eye Color: {this.state.person.eye_color}</div>
                                <div>Gender: {this.state.person.gender}</div>
                                <div>Skin Color: {this.state.person.skin_color}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPlanets planetUrls={[this.state.person.homeworld]}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedFilms filmUrls={this.state.person.films}/>
                        </TabPanel>
                        <TabPanel>
                            <h2>Species</h2>
                        </TabPanel>
                        <TabPanel>
                            <RelatedStarships starshipsUrl={this.state.person.starships}/>
                        </TabPanel>
                        <TabPanel>
                            <h2>Vehicles</h2>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Person;

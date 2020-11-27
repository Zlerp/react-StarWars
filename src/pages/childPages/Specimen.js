import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedPlanets from "../../components/Relations/RelatedPlanets";
import RelatedFilms from "../../components/Relations/RelatedFilms";
import './childPages.scss';
import RelatedPeople from "../../components/Relations/RelatedPeople";


class Specimen extends Component {

    constructor(props) {
        super(props);


        this.state = {
            specimen : {},
        };
    }



    requestApi(url) {
        let httpsUrl = url.replace(/^http:\/\//i, 'https://');
        axios.get(httpsUrl).then(response => response.data)
            .then((data) => {
                this.setState({
                    specimen:  data,
                });
            })
    }


    componentDidMount() {
        this.requestApi(`${this.props.apiUrl}/species/${this.props.id}`);

    }


    render(){
        return (
            <div className="">
                <div className="container">
                    <h1>Person: {this.state.specimen.name}</h1>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Homeworld</Tab>
                            <Tab>People</Tab>
                            <Tab>Films</Tab>
                        </TabList>

                        <TabPanel>
                            <React.Fragment>

                                <div>Language: {this.state.specimen.language}</div>
                                <div>Designation:  {this.state.specimen.designation}</div>
                                <div>Average Height: {this.state.specimen.average_height}</div>
                                <div>Average Lifespan: {this.state.specimen.average_lifespan}</div>
                                <div>Classification: {this.state.specimen.classification}</div>
                                <div>Eye Colors: {this.state.specimen.eye_colors}</div>
                                <div>Hair Colors: {this.state.specimen.hair_colors}</div>
                                <div>Skin Colors: {this.state.specimen.skin_colors}</div>
                            </React.Fragment>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPlanets planetUrls={[this.state.specimen.homeworld]}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedPeople peopleUrls={this.state.specimen.people}/>
                        </TabPanel>
                        <TabPanel>
                            <RelatedFilms filmUrls={this.state.specimen.films}/>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>
        );
    }

}

export default Specimen;

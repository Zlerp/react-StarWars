import React, {Component} from 'react';
import './CardList.scss';
import {  Link } from "react-router-dom";
import {getIdFromURL} from '../../helpers/helpers';



class SpeciesCards extends Component {

    renderCard() {

        if (!this.props.species.length) {
            return <div className="col text-center"><h2>No Species</h2></div>
        }
        return this.props.species.map(function(specimen, index){
            return (
            <div key={index} className="col-sm-6 col-md-4 col-xl-3 mb-4">
                <div className="card">
                    {/*<img height="200" src="https://www.boxofficepro.com/wp-content/uploads/2019/10/star-wars-rise-of-skywalker-poster.jpg" className="card-img-top" alt="something" />*/}
                    <div className="card-body">
                        <h5 className="card-title">{specimen.name}</h5>
                        {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                        <ul className="list-group list-group-flush">
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Language: <div>{specimen.language}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Designation:  <div>{specimen.designation}</div> </li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Average Height: <div>{specimen.average_height}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Average Lifespan: <div>{specimen.average_lifespan}</div></li>
                        </ul>
                        <Link className="btn btn-primary btn-sm" to={`/species/${getIdFromURL(specimen.url)}`}>
                            Go somewhere
                        </Link>
                    </div>
                </div>
            </div>

            );
        });

    }

    render() {
        return (
            <React.Fragment>
                {this.renderCard()}
            </React.Fragment>

        );
    }
}

SpeciesCards.propTypes = {};

export default SpeciesCards;

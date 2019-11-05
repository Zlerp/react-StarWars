import React, {Component} from 'react';
import './CardList.scss';
import {getIdFromURL} from "../../helpers/helpers";
import {  Link } from "react-router-dom";



class StarshipCard extends Component {

    renderCard() {
        return this.props.starships.map(function(starship, index){
            return (
            <div key={index} className="col-sm-6 col-md-4 col-xl-3 mb-4">
                <div className="card">
                    {/*<img height="200" src="https://www.boxofficepro.com/wp-content/uploads/2019/10/star-wars-rise-of-skywalker-poster.jpg" className="card-img-top" alt="something" />*/}
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                        <ul className="list-group list-group-flush">
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Crew Size:  <div>{starship.crew}</div> </li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Length: <div>{starship.length}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Passengers: <div>{starship.passengers}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Hyperdrive Rating: <div>{starship.hyperdrive_rating}</div></li>
                        </ul>
                        <Link className="btn btn-primary btn-sm" to={`/starships/${getIdFromURL(starship.url)}`}>
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

StarshipCard.propTypes = {};

export default StarshipCard;

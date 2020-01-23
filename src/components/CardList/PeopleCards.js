import React, {Component} from 'react';
import './CardList.scss';
import {  Link } from "react-router-dom";
import {getIdFromURL} from '../../helpers/helpers';



class PersonCard extends Component {

    renderCard() {

        if (!this.props.people.length) {
            return <div className="col text-center"><h2>No People</h2></div>
        }
        return this.props.people.map(function(person, index){
            return (
            <div key={index} className="col-sm-6 col-md-4 col-xl-3 mb-4">
                <div className="card">
                    {/*<img height="200" src="https://www.boxofficepro.com/wp-content/uploads/2019/10/star-wars-rise-of-skywalker-poster.jpg" className="card-img-top" alt="something" />*/}
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                        <ul className="list-group list-group-flush">
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Birth Year: <div>{person.birth_year}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Hair Color: <div>{person.hair_color}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Eye Color: <div>{person.eye_color}</div></li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Gender:  <div>{person.gender}</div> </li>
                            <li className="py-1 px-0 list-group-item d-flex justify-content-between">Height:  <div>{person.height}</div> </li>
                        </ul>
                        <Link className="btn btn-outline-warning btn-sm" to={`/people/${getIdFromURL(person.url)}`}>
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

PersonCard.propTypes = {};

export default PersonCard;

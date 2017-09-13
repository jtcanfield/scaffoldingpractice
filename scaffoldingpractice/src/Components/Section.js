import React, { Component } from 'react';
import actors from '../data/actors.js';



class Actors extends Component {
  render() {
    let listof = actors.map((actor) => {
      return (
        <li className="list-group-item" key={actor.id}>
         <ul>
           <li>
             <div>Name: {actor.name} </div>
           </li>
           <li>
             <div>Alias: {actor.also_known_as}</div>
           </li>
           <li>
             <div>Popularity (?/10): {actor.popularity}</div>
           </li>
           <li>
             <div>Birthday: {actor.birthday} </div>
           </li>

           <li>
             <div>Date of Death: {actor.deathday === null ? "Still Alive" :  actor.deathday } </div>
           </li>
           <li>
             <div>Gender: {actor.gender === 1 ? "Female" : "Male" }</div>
           </li>
           <p>Biography: {actor.biography}</p>
         </ul>
       </li>
      )
    });
    return (
      <div className="Actors">
        {listof}
      </div>
    );
  }
}

export default class Section extends Component {
  render() {
    return (
      <section>
        <img src="https://fillmurray.com/300/300" alt="Bill Murray"/>
        <Actors />
      </section>
    )
  }
}

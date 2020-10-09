import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";



class Control extends Component{
  render(){
    return(
        <div className="search--sort--content">
            {/* Search */}
            <Search />

            {/* Sort */}
            <Sort />
        </div>
    );
  }
}

export default Control;
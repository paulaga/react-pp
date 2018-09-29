import {SearchBar} from './SearchBar'
import {ProductTable} from './ProductTable'

import React, { Component } from 'react';

//import products from '../data';



export class FilterableProductTable extends Component {
  // constructor(){
  //   super();
  //   this.state = {

  //   }
  // }
  render(){
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
}
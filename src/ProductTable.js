import React from 'react'
import {ProductCategoryRow} from './ProductCategoryRow'
import {ProductRow} from './ProductRow'

//React.component porque solo importamos React y no {Component}
export class ProductTable extends React.Component{
  render(){
    return(
      <div>      
      <p><ProductCategoryRow /></p>
      <ul>
        <ProductRow />
        </ul>
    </div>
     )
  }
}
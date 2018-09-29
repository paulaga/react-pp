import React, {Component} from 'react'
import products from '../data'


export class ProductRow extends Component{
  render(){
    // let items = products.data.map( (e, i)=> <li key={i}> {e.name}</li>)
    return (
      products.data.map( (e, i)=> <li key={i}> {e.name}</li>)
    )
  }
}
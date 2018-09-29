import React, {Component} from 'react' 

export class SearchBar extends Component{
render(){
  return (
    <div className="searchbar">
    <input type="text" placeholder="Seach..." />
    <input type="checkbox" />Only show products in stock
    </div>
  )
}
}
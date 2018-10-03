import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner'

export default class Author extends Component {
  constructor(props){
    super(props);
    this.state = {authorlist : []}
  }
  async findOne(){
    let authorslist =[]
    const authorname = unescape(window.location.href).split("author/")[1]
    const photolist = await axios.get("http://localhost:3000/")
    photolist.data.forEach((element)=>{
      if(element.author === authorname){
        authorslist.push(element.id)
      }
    })
    this.setState({authorlist : authorslist})
  }

  componentDidMount(){
    this.findOne();
  }

  render() {
    if(this.state.authorlist.length!==0){   
      const photos = this.state.authorlist.map((element)=>{
      const url =  "https://picsum.photos/g/200/300/?image="+element

      return (
          <img src = {url} alt="photo"></img>
        )  
      })
        return (
            <div>
             {photos}      
            </div> 
        );
  }
  else {
    return( 
      <div>
        <Spinner/>
      </div>  
    )
  }
}


}
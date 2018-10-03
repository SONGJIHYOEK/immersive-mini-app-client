import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Spinner'
import {Link} from 'react-router-dom';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {photo: null , isClicked: false};
  }
  
  async componentDidMount(){
    const photolist = await axios.get("http://localhost:3000")
    console.log(photolist)
    setTimeout(()=> this.setState({photo : photolist.data}) ,100)  
  }

  render() {
   if(this.state.photo){ 
    let path = null;  
    const photos = this.state.photo.map((element)=>{
    const url =  "https://picsum.photos/g/200/300/?image="+element.id
    path = "/photo/"+ element.id +"/"+element.author  
    return (
      <Link to={{pathname:path}}>
        <img src = {url} alt="photo"></img>
      </Link>
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


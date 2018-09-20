import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Photo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const id = window.location.href.split("photo/")[1].split("/")[0]
    const authorname = unescape(window.location.href).split("photo/")[1].split("/")[1]
    const imgsrc = "https://picsum.photos/g/200/300?image="+id
    return (
      <div>
         <img src={imgsrc} ></img>
         <Link to={{pathname : "/author/"+authorname}}>
          <p>{authorname}</p>
         </Link>
      </div>
    );
  }
}
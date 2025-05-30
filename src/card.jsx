import React from "react";
import "./card.css";
 
function Card({movies,y,showmovie}){
    const {title,year,genre,image,isFavourite}=movies;
    return(
        <div onClick={()=>showmovie(title)} className="card">
          
           <img classname="photo" src={image} alt="" />
           
           
           <div className="text"> <h1>{title}</h1>
            <h2>{year}</h2>
            <h3>{genre}</h3>
           </div>
            <div className="isfav" onClick={()=>{
                y(title)
            }}>
            <img classname="ccc" src={isFavourite?"favriotmarked.png":"unfav.png"} alt="" />
            </div>
            
        </div>
    )

}
export default Card ;
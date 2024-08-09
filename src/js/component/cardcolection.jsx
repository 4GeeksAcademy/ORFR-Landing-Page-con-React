import React from "react";
import Card from "./card";

function CardColection() {
    let datos = [{cardtitle:"titulo1",carddescription:"lorem1",cardimg:"https://picsum.photos/id/32/325/300"},
        {cardtitle:"titulo2",carddescription:"lorem2",cardimg:"https://picsum.photos/id/24/325/300"},
        {cardtitle:"titulo3",carddescription:"lorem3",cardimg:"https://picsum.photos/id/144/325/300"},
        {cardtitle:"titulo4",carddescription:"lorem4",cardimg:"https://picsum.photos/id/74/325/300"},
    ]

    return (
    <div className="container justify-content-center text-center p-0 mt-4">    
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {datos.map((item,index)=>(<Card key={index} cardimg={item.cardimg} cardtitle={item.cardtitle} carddescription={item.carddescription}/>))}
        </div>
    </div>    
    )   
}

export default CardColection;
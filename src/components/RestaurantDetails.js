import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Rate } from 'antd'


export default function RestaurantDetails(){
    const [restaurant, setRestaurant] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://bocacode-intranet-api.web.app/restaurants/${params.id}`)
            .then(response => response.json())
            .then(data => setRestaurant(data))
            .catch(alert)
        },[])
    
        if(!restaurant.photoUrl){
            return <p>Loading</p>;
        }

    return (
        <section>
        <img src={restaurant.photoUrl} alt={`Photo of ${restaurant.name}`} />
        <h1 style={{fontSize: 42, fontWeight: 800}}> {restaurant.name}</h1>
        <h2> {restaurant.address}</h2>
        <Rate disabled defaultValue={restaurant.rating}/>
        </section>
    )

    }
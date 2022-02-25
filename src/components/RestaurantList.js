import React, { useState, useEffect } from "react";
import { Card, Rate, Col, Row } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);


  return (
    <div className="cards-wrapper">
      <Row gutter={16}>
        {restaurants?.map((restaurant) => {
          return (
            <Col span={8}  key={restaurant.id}>
                <Link to={`/details/${restaurant.id}`}>
              <Card
               
                hoverable
                style={{ width: 240, margin: 20 }}
                cover={<img alt={`pictures of ${restaurant.name}`} src={restaurant.photoUrl}/>}
              >
                <Meta title={restaurant.name} />
                <Rate disabled defaultValue={restaurant.rating} />
              </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
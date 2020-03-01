import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Modal from "../Modal";
import ImgUrl from "../Data";

import "./Card.scss";

const CatCard = ({ catData }) => {
  return (
    <div className="card-img mt-5">
      {catData.map((item, index) => (
        <Card key={index} className="cat-card">
          <CardImg
            top
            width="100%"
            src={ImgUrl[Math.floor(Math.random() * ImgUrl.length + 1)].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <span className="catName">Name: </span> {item.name}
            </CardTitle>
            <CardSubtitle>
              <span className="catTemparament">Temparament: </span>
              {item.temperament}
            </CardSubtitle>
            <CardText>
              {/* <span>Description: </span> {item.description} */}
            </CardText>
            <div className="catLifeSpan">
              {" "}
              <span>Life Span: </span> {item.life_span}
            </div>
            <div className="catShedding">
              <span>Shedding Level: </span>
              {item.shedding_level}
            </div>
            <div className="catDog">
              <span>Dog friendly: </span>
              {item.dog_friendly}
            </div>
            <div className="catChild">
              <span>Child friendly: </span>
              {item.child_friendly}
            </div>
            <Modal item={item} />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CatCard;

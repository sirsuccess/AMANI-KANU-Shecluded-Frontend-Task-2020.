import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Modal from "../Modal";

import "./Card.scss";

const CatCard = ({ catData }) => {
  // console.log(cats);

  return (
    <div className="card-img mt-5">
      {catData.map((item, index) => (
        <Card key={index} className="cat-card">
          <CardImg
            top
            width="100%"
            src="data:image/jpeg;base64,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"
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
              <span>Description: </span> {item.description}
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
            <Modal />
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CatCard;

import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Example = ({ cats }) => {
  return (
    <div className=" d-flex flex-wrap align-self-center justify-content-center">
      {cats.map((character, index) => (
        <Card key={index} className="mb-5 ml-2 mt-3 mr-2 col-md-3">
          <CardHeader>{character.name}</CardHeader>
          <CardBody>
            <CardTitle>{character.race}</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter>
            Link:{" "}
            <a href={character.wikiUrl} target="_blank">
              {character.name}
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Example;

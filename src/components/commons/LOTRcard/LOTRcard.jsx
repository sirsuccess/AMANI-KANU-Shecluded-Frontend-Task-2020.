import React from "react";
import { Card, CardHeader, CardFooter, CardBody, CardText } from "reactstrap";
import InViewMonitor from "react-inview-monitor";

const LOTRcard = ({ cats }) => {
  return (
    <div className=" d-flex flex-wrap align-self-center justify-content-between">
      {cats.map((character, index) => (
        <div className="mb-5  mt-3  col-md-4" key={index}>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView={`animated fadeInUp`}
          >
            <Card>
              <CardHeader>{character.name}</CardHeader>
              <CardBody>
                <CardText>
                  <div>
                    <b>Race:</b> {character.race}
                  </div>
                  <div>
                    <b>Gender:</b> {character.gender}
                  </div>
                  <div>
                    <b>Birth:</b> {character.birth}
                  </div>
                  <div>
                    <b>Spouse:</b> {character.spouse}
                  </div>
                  <div>
                    <b>Death:</b> {character.death}
                  </div>
                  <div>
                    <b>Realm:</b> {character.realm}
                  </div>
                </CardText>
              </CardBody>
              <CardFooter>
                <b>Link: </b>{" "}
                <a href={character.wikiUrl} target="_blank">
                  {character.wikiUrl}
                </a>
              </CardFooter>
            </Card>
          </InViewMonitor>
        </div>
      ))}
    </div>
  );
};

export default LOTRcard;

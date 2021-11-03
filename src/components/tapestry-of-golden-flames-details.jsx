import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DetailsBox from "./details-components/details-box";
import StarsBar from "./details-components/stars-bar";
import SubheadingSeparator from "./details-components/subheading-separator";
import EventDurationHeading from "./details-components/event-duration-heading";
import TapestryOfGoldenFlames from "../models/tapestry-of-golden-flames";
import Table from "./details-components/table";
import Title from "./details-components/title";

export default function TapestryOfGoldenFlamesDetails() {
  const tapestry = new TapestryOfGoldenFlames();
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| Christmas Partyland</h1>
        </Title>
        <SubheadingSeparator
          content="Increased Drop Rates!"
        />
        <StarsBar
          starCount={5}
          content="Percentage of SSR Drops：100.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={'One Step Away'}
            isWeapon={true}
            src={'one-step-away.png'}
          />
          <DetailsBox
            title={'Bright All Night'}
            isWeapon={true}
            src={'bright-all-night.png'}
          />
        </Row>
        <StarsBar
          starCount={4}
          content="Percentage of SR Card Drops：50.000%"
          bgColor="#b6abbf"
        />
        <Row>
          <DetailsBox
            title={"Light in Palms"}
            isWeapon={true}
            src={"sr.png"}
          />
          <DetailsBox
            title={"Snowy Pines Fairytales"}
            isWeapon={true}
            src={"sr.png"}
          />
        </Row>
        <SubheadingSeparator content="Wish Details" />
        <EventDurationHeading content="Limited Time Event" />
        <Row>
          <Col xs="12">
            <p className="my-3">
              "<span className="orange">Christmas Partyland</span>" is
              now available. <br />

              1. Tears of Themis are used to obtain Visions (draw cards) from
              this Shadow of Themis. <br />
              2. Draw rates for designated cards will be increased for the duration
              of the event. <br />
              3. One card of SR or higher is guaranteed within 10 Visions. Once an
              SR card is drawn, the guaranteed count will reset. <br />
              4. One SSR card is guaranteed within 100 Visions. <br />

              During this event wish, the event-exclusive SSR
              cards{" "}
              <span className="brass">One Step Away (Artem)</span> {" "}
              or <span className="brass">Bright All Night (Marius)</span> as well as
              the event-exclusive SR cards{" "}
              <span className="purple">Light in Palms (Luke)</span>,{" "}
              <span className="purple">Snowy Pines Fairytales (Vyn)</span> will get a{" "}
              <span className="orange">huge drop-rate boost</span>!
              <br />
            </p>
            <p className="my-3">〓Rules〓</p>
            <p className="my-3">SSR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Christmas Partyland</span>{" "}
            ": Base probability of winning an SSR ={" "}
            <span className="orange">1.600%</span>;
            guaranteed to win an SSR at least once per{" "}
            <span className="orange">100</span> attempts. <br />
            There is a{" "}
            <span className="orange">100%</span> chance the SSR will be the
            promotional SSR{" "}
            <span className="brass">
              {" "}
              <span className="brass">One Step Away (Artem)</span>
            </span>{" "}
            or <span className="brass">Bright All Night (Marius)</span>.
            </p>
            <p className="my-3">SR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Christmas Partyland</span>{" "}
            ": Base probability of winning an SR card ={" "}
            <span className="orange">11.740%</span>; base probability of
            winning any specific SR character = <span className="orange">0.419%</span>,
            <br />
            The first time you win an SR card in this event wish, there is
            a <span className="orange">50%</span> chance that it will be one
            of the featured cards:{" "}
            <span className="purple">Light in Palms (Luke)</span>, and{" "}
            <span className="purple">Snowy Pines Fairytales (Vyn)</span>.
            </p>
            <p className="my-3">
            SSR characters won come with{" "}
            fully voiced <span className="orange">Character Stories</span>; SR
            characters come with{" "}
            unvoiced <span className="orange">Character Stories</span>; or with{" "}
            voiced <span className="purple">Private Messages</span>.
            </p>
            <p className="my-3">〓Duplicate Characters〓</p>
            <p className="my-3">
            On obtaining an SR character that you already own (whether
            obtained in the gacha, farmed from anomaly stages, or awarded by the game):
            the 2nd – 6th time you obtain the character, it will be converted
            into that card's{" "}
            <span className="purple">Card Fragment</span> ×100
            which can be used to upgrade a character's influence
            and defense.
            From the 7th time onwards it will be converted into{" "}
            <span className="purple">Gift I</span> ×1000.
            This can be used to buy {" "}
            <span className="orange">Vision Stars</span> of either R or SR rarity.
            Four vision stars of the same type can allow you to upgrade any card's
            influence and defense just as you would with x100 {" "}
            <span className="purple">Card Fragment</span>. 7th copy R cards will
            be converted into {" "}
            <span className="purple">Gift I</span> ×100. <br />

            The 7th copy of an SSR card (you whale) will be converted into {" "}
            <span className="orange">Gift II</span> ×100
            which can be redeemed for {" "}
            <span className="brass">SSR Vision Stars</span>.

            </p>
            <h4 className="my-3 brass">Items to wish for:</h4>
          </Col>
        </Row>
        <StarsBar
          starCount={5}
          content="Base Probability for SSR: 1.600%"
          bgColor="#dcbba5"
        />
        <Table items={tapestry.getDrops(5)} />
        <StarsBar
          starCount={4}
          content="Base Probability for SR: 11.740%"
          bgColor="#b6abbf"
        />
        <Table items={tapestry.getDrops(4)} />
        <StarsBar
          starCount={3}
          content="Base Probability for R: 88.760%"
          bgColor="#a5bacc"
        />
        <Table items={tapestry.getDrops(3)} />
      </Container>
    </div>
  );
}

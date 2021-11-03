import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DetailsBox from "./details-components/details-box";
import StarsBar from "./details-components/stars-bar";
import SubheadingSeparator from "./details-components/subheading-separator";
import EventDurationHeading from "./details-components/event-duration-heading";
import Table from "./details-components/table";
import Title from "./details-components/title";
import EpitomeInvocation from "../models/epitome-invocation";

export default function EpitomeInvocationDetails() {
  const epitome = new EpitomeInvocation();

  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>
            | Event "<span className="orange">Secrets of the Tomb</span>"
          </h1>
        </Title>
        <SubheadingSeparator content="Increased Drop Rates!" />
        <StarsBar
          starCount={5}
          content="Percentage of SSR Card Drops：100.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={"Faint Light"}
            isWeapon={true}
            src={"faint-light.png"}
          />
          <DetailsBox
            title={"Crackling Flames"}
            isWeapon={true}
            src={"crackling-flames.png"}
          />
          <DetailsBox
            title={"Moonlight Chaser"}
            isWeapon={true}
            src={"moonlight-chaser.png"}
          />
          <DetailsBox
            title={"Wishes Between Day and Night"}
            isWeapon={true}
            src={"wishes-between-day-and-night.png"}
          />
        </Row>

        <SubheadingSeparator content="Wish Details" />
        <EventDurationHeading content="Limited Time Event" />
        <Row>
          <Col xs="12">
            <p className="my-3">
              "<span className="orange">Secrets of the Tomb</span>" is
              now available. <br />
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . . . . . . . . . . . . . . . . . . . . . . .<br />
              In the real event, each male lead has his own banner. I am combining them into one banner. <br />
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . . . . . . . . . . . . . . . . . . . . . . .<br />

              1. Tears of Themis are used to obtain Visions (draw cards) from
              this Shadow of Themis. <br />
              2. Draw rates for designated cards will be increased for the duration
              of the event. <br />
              3. One card of SR or higher is guaranteed within 10 Visions. Once an
              SR card is drawn, the guaranteed count will reset. <br />
              4. One SSR card is guaranteed within 100 Visions. <br />

              During this event wish, the event-exclusive SSR
              cards{" "}
              <span className="brass">Faint Light (Marius)</span> {" "}
              or <span className="brass">Crackling Flames (Artem)</span> {" "}
              or <span className="brass">Moonlight Chaser (Vyn)</span>{" "}
              or <span className="brass">Wishes Between Day and Night (Luke)</span> will
              be available.
            </p>
            <p className="my-3">〓Rules〓</p>
            <p className="my-3">SSR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Secrets of the Tomb</span>{" "}
            ": Base probability of winning an SSR ={" "}
            <span className="orange">1.600%</span>;
            guaranteed to win an SSR at least once per{" "}
            <span className="orange">100</span> attempts. <br />
            There is a{" "}
            <span className="orange">100%</span> chance the SSR will be the
            promotional SSR.
            </p>
            <p className="my-3">SR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Secrets of the Tomb</span>{" "}
            ": Base probability of winning an SR card ={" "}
            <span className="orange">11.740%</span>; base probability of
            winning any specific SR character = <span className="orange">0.419%</span>,
            <br />
            
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
            <StarsBar
              starCount={5}
              content="Base Probability for SSR Drops: 1.600%"
              bgColor="#dcbba5"
            />
            <Table items={epitome.getDrops(5)} />
            <StarsBar
              starCount={4}
              content="Base Probability for SR Drops: 11.740%"
              bgColor="#b6abbf"
            />
            <Table items={epitome.getDrops(4)} />
            <StarsBar
              starCount={3}
              content="Base Probability for R Drops: 88.760%"
              bgColor="#a5bacc"
            />
            <Table items={epitome.getDrops(3)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import DetailsBox from './details-components/details-box';
import StarsBar from './details-components/stars-bar';
import SubheadingSeparator from './details-components/subheading-separator';
import EventDurationHeading from './details-components/event-duration-heading'
import GentryOfHermitage2 from '../models/gentry-of-hermitage-2'
import Table from './details-components/table'
import Title from './details-components/title'


export default function GentryOfHermitage2Details() {
  const gentry = new GentryOfHermitage2()
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| Kiss of Fervor: <span className="brass">Adjudicator</span> </h1>
        </Title>
        <SubheadingSeparator
          content="Increased Drop Rates!"
        />
        <StarsBar
          starCount={5}
          content="Percentage of SSR Drops：80.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={'Unchanging'}
            isWeapon={true}
            src={'unchanging.png'}
          />
        </Row>
        <StarsBar
          starCount={5}
          content="Percentage of SSR Card Drops：20.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={"Near and Far"}
            isWeapon={true}
            src={"near-and-far.png"}
          />
          <DetailsBox
            title={"Medieval Suspense"}
            isWeapon={true}
            src={"medieval-suspense.png"}
          />
        </Row>
        <SubheadingSeparator content="Banner Details" />
        <EventDurationHeading content="Limited Time Event" />
        <Row>
          <Col xs="12">
            <p className="my-3">
              "<span className="brass">Kiss of Fervor: Adjudicator</span>" is
              now available. <br />

              1. Tears of Themis are used to obtain Visions (draw cards) from
              this Shadow of Themis. <br />
              2. Draw rates for designated cards will be increased for the duration
              of the event. <br />
              3. One card of SR or higher is guaranteed within 10 Visions. Once an
              SR card is drawn, the guaranteed count will reset. <br />
              4. One SSR card is guaranteed within 100 Visions. <br />

              During this event banner, the event-exclusive SSR
              cards{" "}

              <span className="brass">Unchanging (Vyn)</span> as well as
              the SSR cards{" "}
              <span className="brass">Near and Far (Vyn)</span>,{" "}
              <span className="brass">Medieval Suspense (Vyn)</span> will be available.
              <br />
            </p>
            <p className="my-3">〓Rules〓</p>
            <p className="my-3">SSR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="brass">Kiss of Fervor: Adjudicator</span>{" "}
            ": Base probability of winning an SSR ={" "}
            <span className="orange">1.600%</span>;
            guaranteed to win an SSR at least once per{" "}
            <span className="orange">100</span> attempts. <br />
            There is a{" "}
            <span className="orange">80%</span> chance the SSR will be the
            promotional SSR{" "}
            <span className="brass">
              {" "}
              <span className="brass">Unchanging (Vyn)</span>
            </span>{" "}
            or a 20% chance it will be one of the non featured SSR cards:{" "}
            <span className="brass">Near and Far (Vyn)</span> or {" "}
            <span className="brass">Medieval Suspense (Vyn)</span>

            </p>
            <p className="my-3">SR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="brass">Kiss of Fervor: Adjudicator</span>{" "}
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
            <h4 className="my-3 brass">
              Items to wish for:
            </h4>
          </Col>
        </Row>
        <StarsBar
          starCount={5}
          content="Base Probability for SSR: 1.600%"
          bgColor="#dcbba5"
        />
        <Table
          items={gentry.getDrops(5)}
        />
        <StarsBar
          starCount={4}
          content="Base Probability for SR: 11.740%"
          bgColor="#b6abbf"
        />
        <Table
          items={gentry.getDrops(4)}
        />
        <StarsBar
          starCount={3}
          content="Base Probability for R: 88.760%"
          bgColor="#a5bacc"
        />
        <Table
          items={gentry.getDrops(3)}
        />
      </Container>
    </div>
  )
}

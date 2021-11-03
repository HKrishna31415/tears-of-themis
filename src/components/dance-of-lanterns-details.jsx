import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import DetailsBox from './details-components/details-box';
import StarsBar from './details-components/stars-bar';
import SubheadingSeparator from './details-components/subheading-separator';
import EventDurationHeading from './details-components/event-duration-heading'
import DanceOfLanterns from '../models/dance-of-lanterns'
import Table from './details-components/table'
import Title from './details-components/title'


export default function DanceOfLanternsDetails() {
  const dance = new DanceOfLanterns()
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| Bewitching Night <span className="orange">Rave</span></h1>
        </Title>
        <div>
        <p className="my-3">Changes from Normal</p>
        <p className="my-3">
        For Shadow of Themis "<span className="orange">Bewitching Night Rave</span>{" "}
        ": there are no featured SSRs. Instead, SSRs are replaced with MRs that are normally farmed in{" "}
        <span className="orange">Field Work</span>. <br />
        There is no chance I'm implementing that even though it wouldn't be too hard. <br />
        SRs here are the ones normally farmed via anomaly stages. I also added the SSR {" "}
        <span className="brass">Looming Nightmare (Luke)</span>.
        </p>
        </div>
        <SubheadingSeparator
          content="Increased Drop Rates!"
        />
        <StarsBar
          starCount={5}
          content="Percentage of MR Drops：80.000%"
          bgColor="#ffbba5"
        />
        <Row>
          <DetailsBox
            title={'Counterflowing Night'}
            isWeapon={true}
            src={'counterflowing-night.png'}
          />
          <DetailsBox
            title={'Pseudoheart'}
            isWeapon={true}
            src={'pseudoheart.png'}
          />
          <DetailsBox
            title={'Imprisoning Moon'}
            isWeapon={true}
            src={'imprisoning-moon.png'}
          />
          <DetailsBox
            title={'Dilirium Sin'}
            isWeapon={true}
            src={'dilirium-sin.png'}
          />
        </Row>
        <StarsBar
          starCount={5}
          content="Percentage of SSR Drops：20.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={'Looming Nightmare'}
            isWeapon={true}
            src={'looming-nightmare.png'}
          />
        </Row>
        <SubheadingSeparator content="Banner Details" />
        <EventDurationHeading content="Limited Time Event" />
        <Row>
          <Col xs="12">
            <p className="my-3">
              "<span className="orange">Bewitching Night Rave</span>" is
              now available. <br />

              1. Tears of Themis are used to obtain Visions (draw cards) from
              this Shadow of Themis. <br />
              2. Draw rates for designated cards will be increased for the duration
              of the event. <br />
              3. One card of SR or higher is guaranteed within 10 Visions. Once an
              SR card is drawn, the guaranteed count will reset. <br />
              4. One SSR card is guaranteed within 100 Visions. <br />

              During this event wish, the event-exclusive MR
              cards{" "}
              <span className="orange">Counterflowing Night (Vyn)</span>, {" "}
              <span className="orange">Pseudoheart (Artem)</span>,{" "}
              <span className="orange">Imprisoning Moon (Luke)</span>,{" "}
              <span className="orange">Dilirium Sin (Marius)</span> as well as the SSR {" "}
              <span className="brass">Looming Nightmare (Luke)</span> will get a{" "}
              <span className="orange">huge drop-rate boost</span>!
              <br />
            </p>
            <p className="my-3">〓Rules〓</p>
            <p className="my-3">SSR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Bewitching Night Rave</span>{" "}
            ": Base probability of winning any featured card above is{" "}
            <span className="orange">1.600%</span>;
            guaranteed to win at least once per{" "}
            <span className="orange">100</span> attempts. <br />
            
            </p>
            <p className="my-3">SR Cards</p>
            <p className="my-3">
            For Shadow of Themis "<span className="orange">Bewitching Night Rave</span>{" "}
            ": Base probability of winning an SR card ={" "}
            <span className="orange">11.740%</span>; base probability of
            winning any specific SR character = <span className="orange">0.419%</span>,
            <br />
            The first time you win an SR card in this event wish, there is
            a <span className="orange">50%</span> chance that it will be one
            of the featured cards:{" "}
            <span className="purple">Once Upon a Time (Luke)</span>,{"   "}
            <span className="purple">Together With You (Luke)</span>,{" "}
            <span className="purple">Staying Humble (Artem)</span>,{" "}
            <span className="purple">Together With You (Artem)</span>,{" "}
            <span className="purple">Spilling Light (Vyn)</span>,{" "}
            <span className="purple">Entrapped (Vyn)</span>,{" "}
            <span className="purple">Butterflies (Marius)</span> and{" "}
            <span className="purple">Falling Into You (Marius)</span>.
            </p>
            <p className="my-3">
            SSR characters won come with{" "}
            fully voiced <span className="orange">Character Stories</span>; SR
            characters come with{" "}
            unvoiced <span className="orange">Character Stories</span>; or with{" "}
            voiced <span className="purple">Private Messages</span>. MR cards come
            voiced with <span className="purple">Private Messages</span>.
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
          content="Base Probability for 5-Star Item Drops: 0.600% (Incl. guarantee: 1.600%)"
          bgColor="#dcbba5"
        />
        <Table
          items={dance.getDrops(5)}
        />
        <StarsBar
          starCount={4}
          content="Base Probability for 4-Star Item Drops: 5.100% (Incl. guarantee: 13.000%)"
          bgColor="#b6abbf"
        />
        <Table
          items={dance.getDrops(4)}
        />
        <StarsBar
          starCount={3}
          content="Base Probability for 3-Star Item Drops: 94.300% (Incl. guarantee: 85.400%)"
          bgColor="#a5bacc"
        />
        <Table
          items={dance.getDrops(3)}
        />
      </Container>
    </div>
  )
}

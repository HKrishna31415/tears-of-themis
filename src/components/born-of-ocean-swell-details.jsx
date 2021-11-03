import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import DetailsBox from './details-components/details-box';
import StarsBar from './details-components/stars-bar';
import SubheadingSeparator from './details-components/subheading-separator';
import EventDurationHeading from './details-components/event-duration-heading'
import BornOfOceanSwell from '../models/born-of-ocean-swell'
import Table from './details-components/table'
import Title from './details-components/title'


export default function BornOfOceanSwellDetails() {
  const born = new BornOfOceanSwell()
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| <span className="orange">Love</span> in the Air</h1>
        </Title>
        <div>
        <p className="my-3">Changes from Normal</p>
        <p className="my-3">
        For Shadow of Themis "<span className="orange">Love in the Air</span>{" "}
        ": there are no featured SSRs. Instead, SSRs are replaced with MRs that are normally farmed in{" "}
        <span className="orange">Field Work</span>. <br />
        There is no chance I'm implementing that even though it wouldn't be too hard. <br />
        SRs here are the ones normally farmed via anomaly stages. I also added the SSR {" "}
        <span className="brass">Matching Tattoos (Marius)</span> and <span className="brass">Shock (Artem)</span>.
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
            title={'Agreement'}
            isWeapon={true}
            src={'agreement.png'}
          />
          <DetailsBox
            title={'Color of Morning'}
            isWeapon={true}
            src={'color-of-morning.png'}
          />
          <DetailsBox
            title={'Locked in Your Eyes'}
            isWeapon={true}
            src={'locked-in-your-eyes.png'}
          />
          <DetailsBox
            title={'Bright Warmth'}
            isWeapon={true}
            src={'bright-warmth.png'}
          />
          <DetailsBox
            title={'Company'}
            isWeapon={true}
            src={'company.png'}
          />
          <DetailsBox
            title={'Delivered Thoughts'}
            isWeapon={true}
            src={'delivered-thoughts.png'}
          />
          <DetailsBox
            title={'Comfortable Stretch'}
            isWeapon={true}
            src={'comfortable-stretch.png'}
          />
          <DetailsBox
            title={'Longing Admiration'}
            isWeapon={true}
            src={'longing-admiration.png'}
          />
          <DetailsBox
            title={'Mind of the Heart'}
            isWeapon={true}
            src={'mind-of-the-heart.png'}
          />
          <DetailsBox
            title={'Throbbing'}
            isWeapon={true}
            src={'throbbing.png'}
          />
          <DetailsBox
            title={'Special Letter'}
            isWeapon={true}
            src={'special-letter.png'}
          />
        </Row>
        <StarsBar
          starCount={5}
          content="Percentage of SSR Drops：20.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={'Matching Tattoos'}
            isWeapon={true}
            src={'matching-tattoos.png'}
          />
          <DetailsBox
            title={'Shock'}
            isWeapon={true}
            src={'shock.png'}
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
              <span className="orange">Agreement (Vyn)</span>, {" "}
              <span className="orange">Color of Morning (Vyn)</span>,{" "}
              <span className="orange">Locked in Your Eyes (Vyn)</span>,{" "}
              <span className="orange">Bright Warmth (Luke)</span>, {" "}
              <span className="orange">Company (Luke)</span>,{" "}
              <span className="orange">Delivered Thoughts (Luke)</span>,{" "}
              <span className="orange">Comfortable Stretch (Artem)</span>, {" "}
              <span className="orange">Longing  Admiration (Artem)</span>,{" "}
              <span className="orange">Mind of the Heart (Luke)</span>,{" "}
              <span className="orange">Throbbing (Marius)</span>,{" "}
              <span className="orange">Special Letter (Marius)</span> as well as the SSRs {" "}
              <span className="brass">Matching Tattoos (Marius)</span> and {" "}
              <span className="brass">Shock (Artem)</span> will get a{" "}
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
            For Shadow of Themis "<span className="orange">Love in the Air</span>{" "}
            ": Base probability of winning an SR card ={" "}
            <span className="orange">11.740%</span>;
            <br />
            The first time you win an SR card in this event wish, there is
            a <span className="orange">50%</span> chance that it will be one
            of the featured cards:{" "}
            <span className="purple">Make a Choice (Artem)</span>,{" "}
            <span className="purple">Under Silence (Marius)</span>,{" "}
            <span className="purple">Thin Veil (Artem)</span> and{" "}
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
            <h4 className="my-3 brass">Items to wish for:</h4>
          </Col>
        </Row>
        <StarsBar
          starCount={5}
          content="Base Probability for 5-Star Item Drops: 0.600% (Incl. guarantee: 1.600%)"
          bgColor="#dcbba5"
        />
        <Table items={born.getDrops(5)} />
        <StarsBar
          starCount={4}
          content="Base Probability for 4-Star Item Drops: 5.100% (Incl. guarantee: 13.000%)"
          bgColor="#b6abbf"
        />
        <Table items={born.getDrops(4)} />
        <StarsBar
          starCount={3}
          content="Base Probability for 3-Star Item Drops: 94.300% (Incl. guarantee: 85.400%)"
          bgColor="#a5bacc"
        />
        <Table items={born.getDrops(3)} />
      </Container>
    </div>
  );
}

import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import StarsBar from './details-components/stars-bar';
import SubheadingSeparator from './details-components/subheading-separator';
import EventDurationHeading from './details-components/event-duration-heading'
import WanderlustInvocation from '../models/wanderlust-invocation'
import Table from './details-components/table'
import Title from './details-components/title'

export default function WanderlustInvocationDetails() {
  const wanderlust = new WanderlustInvocation()
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| Standard Banner <span className="blue">Shadows of Themis</span>"</h1>
        </Title>
        <SubheadingSeparator
          content="Banner Details"
        />
        <EventDurationHeading
          content="Permanent"
        />
        <Row>
          <Col xs="12">
          <p className="my-3">
          Only in the permanent banner is it possible to get one of the sports cards. All permanent SSR and SR cards are available.
          </p>
          <p className="my-3">〓Rules〓</p>
          <p className="my-3">
          SSR characters won come with{" "}
          fully voiced <span className="orange">Character Stories</span>; SR
          characters come with{" "}
          unvoiced <span className="orange">Character Stories</span>; or with{" "}
          voiced <span className="purple">Private Messages</span>. MR cards come
          voiced with <span className="purple">Private Messages</span>. There are no MR cards in this banner.
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
          items={wanderlust.getDrops(5)}
        />
        <StarsBar
          starCount={4}
          content="Base Probability for 4-Star Item Drops: 5.100% (Incl. guarantee: 13.000%)"
          bgColor="#b6abbf"
        />
        <Table
          items={wanderlust.getDrops(4)}
        />
        <StarsBar
          starCount={3}
          content="Base Probability for 3-Star Item Drops: 94.300% (Incl. guarantee: 85.400%)"
          bgColor="#a5bacc"
        />
        <Table
          items={wanderlust.getDrops(3)}
        />
      </Container>
    </div>
  )

}

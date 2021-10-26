import React, { Component } from 'react'
import { Container, Row, Col, Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterBanner: this.props.getFormattedCharacterEventWish('kebabCase'),
      language: 'English'
    }
    this.banners = {
      'gentry-of-hermitage': 'Mo Yi Birthday (both)',
      'ballad-in-goblets': 'Xia Yan Birthday (both)',
      'farewell-of-snezhnaya': 'Zuo Ran Birthday',
      'sparkling-steps': 'Lu Jinghe Birthday',
      'gentry-of-hermitage-2': 'Kiss of Fervor: Adjudicator',
      'ballad-in-goblets-2': 'Kiss of Fervor: Raven',
      'farewell-of-snezhnaya-2': 'Kiss of Fervor: Libra',
      'sparkling-steps-2': 'Kiss of Fervor: King',
      'the-herons-court': 'Summer Breeze, Qixi Festival',
      'invitation-to-mundane-life': 'Mysteries of the Lost Gold',
      'reign-of-serenity': 'Symphony of the Night',
      'tapestry-of-golden-flames': 'Christmas Partyland',
      'leaves-in-the-wind': 'A Love Poem to Skadi',
      'born-of-ocean-swell': 'Love In The Air',
      'adrift-in-the-harbor': 'Romantic Rail Getaway',
      'secretum-secretorum': 'Romantic Rail Getaway Part II',
      'moment-of-bloom': 'Electrifying Night',
      'dance-of-lanterns': 'Bewitching Night Rave',
      'shadows-of-themis': 'Shadows of Themis (placeholder)',


    }
    this.onChange = this.onChange.bind(this)
  }
  onChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  submitChanges(e) {
    e.preventDefault()
    const {
      closeSettings,
      updateCharacterEventWish,
    } = this.props
    const { characterBanner } = this.state
    updateCharacterEventWish(characterBanner)
    closeSettings()
  }
  renderBannerOptions() {
    const bannerArray = []
    for(const banner in this.banners) {
      bannerArray.push((
        <option
          key={banner}
          value={banner}
        >
          {this.banners[banner]}
        </option>
      ))
    }
    return bannerArray
  }

  render() {
    const {
      reset,
      updateCharacterEventWish,
      closeSettings
    } = this.props
    return (
      <div
        onClick={closeSettings}
        className="modal-container">
        <div
          onClick={e => e.stopPropagation()}
          className="settings-modal">
          <div className="settings-modal-content p-2">
            <div
              onClick={closeSettings}
              className="close-button"></div>
            <h2>Settings</h2>
            <Form
            onSubmit={this.submitChanges.bind(this)}
            >
              <Container>
                <Row>
                  <Col xs="12">
                    <FormGroup className="text-left">
                      <Label for="characterBanner" className="pb-1 pl-1 h5">Character Banner</Label>
                      <Input
                        type="select"
                        name="characterBanner"
                        id="characterBanner"
                        defaultValue={this.state.characterBanner}
                        onChange={this.onChange}
                      >
                        {
                          this.renderBannerOptions()
                        }
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <div className="button-container justify-content-around my-2">
                      <button
                      onClick={() => {
                          reset()
                          closeSettings()
                      }}
                      type="button">Reset Inventory</button>
                      <button>Apply Changes</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

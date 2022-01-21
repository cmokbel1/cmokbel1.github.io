// important shit
import React, { Component } from 'react';
import { Carousel, CarouselIndicators, CarouselCaption, CarouselItem, CarouselControl } from 'reactstrap';
import './Carousel.css';

// images n shit
import image1 from './images/4uWorkout.png';
import image2 from './images/chore-door.png';
import image3 from './images/CW.png';
import image4 from './images/dayplanner.png';
import image5 from './images/employee-tracker.png';
import image6 from './images/pwgen.png';
import image7 from './images/tbl.png';
import image8 from './images/weatherAPI.png';

const items = [
  {
    src: image1,
    altText: 'Workout Generator',
    caption: '4uWorkout'
  },
  {
    src: image2,
    altText: 'Find a Robot',
    caption: 'Chore Door Game'
  },
  {
    src: image3,
    altText: 'Real Time Chat Rooms',
    caption: 'Chat Wallet'
  },
  {
    src: image4,
    altText: 'Use Your Time Wisely',
    caption: 'Day Planner'
  },
  {
    src: image5,
    altText: 'Create and Store Employee Data',
    caption: 'Employee Tracker'
  },
  {
    src: image6,
    altText: 'Random Password Generator',
    caption: 'Password Generator'
  },
  {
    src: image7,
    altText: 'Blog for Coders',
    caption: 'Tech-Blog'
  },
  {
    src: image8,
    altText: '5-day Weather Forecast',
    caption: 'Weather Forecaster'
  }
];

export class Carouseller extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


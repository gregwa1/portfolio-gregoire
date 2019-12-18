import React, { Component } from 'react';
import beer_just_beer from '../assets/images/beer_just_beer.png';
import wishapedia from '../assets/images/wishapedia.png';
import art_block_to_block from '../assets/images/art_block_to_block.png';
import Card from '.  /Card';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Beer-Just-Beer',
          subTitle: 'Viewing bars per state',
          imgSrc: beer_just_beer,
          link: 'http://beer-just-beer.surge.sh/',
          selected: false
        },

        {
          id: 1,
          title: 'Wishapedia',
          subTitle: 'Creating a member wish list',
          imgSrc: wishapedia,
          link: 'http://wishapedia.surge.sh/',
          selected: false
        },

        {
          id: 3,
          title: 'Art-Block-To-Block',
          subTitle: 'Viewing street art murials',
          imgSrc: art_block_to_block,
          link: 'http://art-block-to-block.surge.sh/',
          selected: false
        },


        
      ]

    }
  }


  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });

    makeItems = (items) => {
      return items.map(item => {
        return <Card item = {item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
      }

      )
       
    }

  }


  render() {
    return (
      <p>Carousel Works!</p>
    )
  }
}

export default Carousel;
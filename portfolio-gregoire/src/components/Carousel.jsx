import React from "react";
import beer_just_beer from "../assets/images/beer_just_beer.png";
import wishapedia from "../assets/images/wishapedia.png";
import art_block_to_block from "../assets/images/art_block_to_block.png";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Beer-Just-Beer",
          subTitle: "Viewing bars per state",
          imgSrc: beer_just_beer,
          link: "http://beer-just-beer.surge.sh/",
          selected: false
        },

        {
          id: 1,
          title: "Wishapedia",
          subTitle: "Creating a member wish list",
          imgSrc: wishapedia,
          link: "http://wishapedia.surge.sh/",
          selected: false
        },

        {
          id: 2,
          title: "Art-Block-To-Block",
          subTitle: "Viewing street art murials",
          imgSrc: art_block_to_block,
          link: "http://art-block-to-block.surge.sh/",
          selected: false
        }
      ]
    };
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
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={(e => this.handleCardClick(item.id, e))}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;

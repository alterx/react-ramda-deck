// Import React
import React from "react";
import locales from "./locales";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.setLocale = this.setLocale.bind(this);
    this.setLocaleES = this.setLocale.bind(this, "es");
    this.setLocaleEN = this.setLocale.bind(this, "en");
  }

  setLocale(locale) {
    this.setState({ locale });
  }

  render() {
    const messages = (this.state && this.state.locale) ?
        locales.getMessages(this.state.locale) : locales.getMessages("en");

    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="black" textSize="2.5em">
              { messages.presentationName }
            </Heading>
            <Text size={1} caps textColor="white">
              { messages.presenter }
            </Text>
            <Text textSize="0.5em"><p style={{cursor: "pointer"}} onClick={this.setLocaleES}>Ver en Español</p></Text>
            <Text textSize="0.5em"><p style={{cursor: "pointer"}} onClick={this.setLocaleEN}>Watch in English</p></Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textSize="1em">{ messages.slides[0].quote }</Quote>
              <Cite>{ messages.slides[0].author }</Cite>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

// Import React
import React from "react";
import locales from "./locales";
import CodeSlide from "spectacle-code-slide";

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
        locales.getMessages(this.state.locale) : locales.getMessages("es");

    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="black" textSize="2.5em">
              { messages.presentationName }
            </Heading>
            <Text size={1} caps textColor="white">
              { messages.presenter }
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textSize="1em">{ messages.slides[0].quote }</Quote>
              <Cite>{ messages.slides[0].author }</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fill caps lineHeight={1} textColor="black" textSize="2.5em">
              ¿Qué es la programación funcional?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Text lineHeight={1} textColor="primary" textSize="1em">
              La programación funcional es un paradigma de programación declarativa que se basa en el 
              uso de funciones matemáticas, evitando mutar el estado y provocar efectos secundarios
              a diferencia de la programación imperativa.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="black" textSize="2.5em">
              Imperativa vs. Declarativa
            </Heading>
            <Text lineHeight={1} textColor="primary" textSize="1em">
              La programación declarativa le describe a la computadora el resultado esperado (qué hacer),
              la imperativa, como llegar a ese resultado (cómo hacerlo).
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/imperative.example")}
            ranges={[
                { loc: [0, 8], title: "Imperativa" }
            ]}
          />
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/declarative.example")}
            ranges={[
                { loc: [0, 6], title: "Declarativa" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="black">
            <Image fill src="https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif" />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Conceptos básicos
            </Heading>
            <List>
              <ListItem>Pureza</ListItem>
              <ListItem>Efectos secundarios</ListItem>
              <ListItem>Funciones de orden superior</ListItem>
              <ListItem>Aplicación parcial</ListItem>
              <ListItem>Currying</ListItem>
              <ListItem>Composición</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Pureza
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Una función es considerada pura cuando su valor de retorno es determinado
              únicamente por sus parámetros y no produce efectos secundarios.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/purity.example")}
            ranges={[
                { loc: [0, 2], title: "Pureza" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Efectos secundarios
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Cualquier función que interactua con el exterior (IO) produce efectos secundarios.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/sideeffects.example")}
            ranges={[
                { loc: [0, 2], title: "Efectos Secundarios" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Funciones de orden superior
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Cualquier función que reciba una función como argumento y retorne una nueva función.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/hof.example")}
            ranges={[
                { loc: [0, 9], note: "Funcion de orden superior" },
                { loc: [9, 11], note: "Aplicación" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Aplicación parcial
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Significa crear una nueva función que contenga una parte de los argumentos que 
              la función original recibía.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/partial.example")}
            ranges={[
                { loc: [0, 4], note: "Helper" },
                { loc: [4, 8], note: "Aplicacion parcial" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Currying
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Describe el proceso de convertir una función que recibe multiples argumentos en 
              una función que recibe un argumento a la vez. Cada vez que esta recibe un argumento
              retorna una función nueva que recibe el siguiente. 
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/currying.example")}
            ranges={[
                { loc: [0, 5], title: "Currying" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Composición
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              El acto de juntar dos funciones de tal forma que el valor de retorno de una
              constituya la entrada de la siguiente.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/compose.example")}
            ranges={[
                { loc: [0, 3], title: "Composición" }
            ]}
          />

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Programación tácita
            </Heading>
            <Text lineHeight={1} textColor="black" textSize="1em">
              Describe un estilo de programación en donde la definición no identifica
              explícitamente los argumentos utilizados.
            </Text>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/pointfree.example")}
            ranges={[
                { loc: [3, 4], title: "No tácita" },
                { loc: [5, 6], title: "Tácita" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Ramda
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Características de Ramda
            </Heading>
            <List>
              <ListItem>Todas las funciones son auto-curried</ListItem>
              <ListItem>Inmutabilidad y cero efectos secundarios</ListItem>
              <ListItem>Los parámetros de las funciones se reacomodan para permitir el currying</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              React
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Características de React
            </Heading>
            <List>
              <ListItem>Declarativo (con ciertas excepciones)</ListItem>
              <ListItem>Permite componer interfaces</ListItem>
              <ListItem>Permite crear componentes de orden superior</ListItem>
              <ListItem>Permite crear componentes usando funciones</ListItem>
            </List>
          </Slide>
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/dumb.example")}
            ranges={[
                { loc: [5, 9], title: "Contenedor" },
                { loc: [10, 11], title: "Lista" },
                { loc: [12, 15], title: "Item" },
                { loc: [3, 4], title: "Wrap Children" },
                { loc: [3, 4], note: "Para respetar el contrato de react" }
            ]}
          />
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/smart.example")}
            ranges={[
                { loc: [18, 29], note: "Markup del componente" },
                { loc: [10, 17], note: "Acción" }
            ]}
          />
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/main.example")}
            ranges={[
                { loc: [3, 7], note: "Estado de la aplicación por separado" },
                { loc: [8, 13], note: "Inicialización de estado y componentes" },
                { loc: [14, 17], note: "Actualizar aplicación con nuevo estado" }
            ]}
          />
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/render.example")}
            ranges={[
                { loc: [3, 6], note: "Curried render" }
            ]}
          />
          <CodeSlide transition={[]}
            lang="js"
            code={require("raw!../assets/examples/action.example")}
            ranges={[
                { loc: [3, 6], note: "Curried connect" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2em">
              ¿A dónde ir después?
            </Heading>
            <List>
              <ListItem>
                <Link href="https://www.gitbook.com/book/drboolean/mostly-adequate-guide/details">
                    Mostly adequate guide to functional programming
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/hemanth/functional-programming-jargon">
                    Functional Programming Jargon
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://ramdajs.com/0.21.0/index.html">
                    Ramda
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://facebook.github.io/react/">
                    React
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/alterx/functional-react">
                    Functional react - Aplicación de ejemplo
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://elm-lang.org/">
                    Elm
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps lineHeight={1} textColor="primary" textSize="2.5em">
              Carlos Vega
            </Heading>
            <List>
              <ListItem>
                <Link href={messages.github}>Github</Link>
              </ListItem>
              <ListItem>
                <Link href={messages.email}>Email</Link>
              </ListItem>
              <ListItem>
                <Link href={messages.web}>carlosve.ga</Link>
              </ListItem>
              <ListItem>
                <Link href={messages.blog}>Blog: Unhandled Exception</Link>
              </ListItem>
              <ListItem>
                <Link href={messages.twitter}>Twitter</Link>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

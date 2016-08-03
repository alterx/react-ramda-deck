import en from "./en";
import es from "./es";

const getMessages = (locale) => {
  if (locale === "en") {
    return en;
  } else if (locale === "es") {
    return es;
  } else {
    return en;
  }
};

export default {
  getMessages
};

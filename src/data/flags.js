const flags = [
  {
    name: "Afghanistan",
    code: "AF",
    black: true,
    blue: false,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: false,
    stripes: 3,
    direction: "vertical",
    emblem: true,
    object: ["mosque"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Egypt",
    code: "EG",
    black: true,
    blue: false,
    green: false,
    orange: false,
    red: true,
    white: true,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["eagle of Saladin"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Albania",
    code: "AL",
    black: true,
    blue: false,
    green: false,
    orange: false,
    red: false,
    white: false,
    yellow: false,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["two-headed eagle"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Algeria",
    code: "DZ",
    black: true,
    blue: false,
    green: true,
    orange: false,
    red: false,
    white: true,
    yellow: false,
    stripes: 2,
    direction: "vertical",
    emblem: true,
    object: ["crescent", "star"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Andorra",
    code: "AD",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: true,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "vertical",
    emblem: true,
    object: ["coat of arms"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Angola",
    code: "AO",
    black: true,
    blue: false,
    green: false,
    orange: false,
    red: true,
    white: false,
    yellow: false,
    stripes: 2,
    direction: "horizontal",
    emblem: true,
    object: ["gear wheel", "machete", "star"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    black: true,
    blue: true,
    green: false,
    orange: false,
    red: true,
    white: true,
    yellow: true,
    stripes: 0,
    direction: null,
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    black: false,
    blue: true,
    green: true,
    orange: false,
    red: true,
    white: true,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["coat of arms"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: true,
    pall: false,
    saltire: false,
  },
  {
    name: "Argentina",
    code: "AR",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: true,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["sun"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Armenia",
    code: "AM",
    black: false,
    blue: true,
    green: false,
    orange: true,
    red: true,
    white: false,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    black: false,
    blue: true,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["crescent", "star"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Ethiopia",
    code: "ET",
    black: false,
    blue: true,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["star"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Australia",
    code: "AU",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: false,
    yellow: false,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["crux"],
    border: false,
    canton: true,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: true,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Bahamas",
    code: "BS",
    black: true,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "horizontal",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: true,
    pall: false,
    saltire: false,
  },
  {
    name: "Bahrain",
    code: "BH",
    black: false,
    blue: false,
    green: false,
    orange: false,
    red: true,
    white: true,
    yellow: false,
    stripes: 2,
    direction: "vertical",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Bangladesh",
    code: "BD",
    black: false,
    blue: false,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: false,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["full circle"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Barbados",
    code: "BB",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "vertical",
    emblem: true,
    object: ["trident head"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Belgium",
    code: "BE",
    black: true,
    blue: false,
    green: false,
    orange: false,
    red: true,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "vertical",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Belize",
    code: "BZ",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: true,
    white: false,
    yellow: false,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["coat of arms"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Benin",
    code: "BJ",
    black: false,
    blue: false,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: true,
    stripes: 2,
    direction: "horizontal",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Bhutan",
    code: "BT",
    black: false,
    blue: false,
    green: false,
    orange: true,
    red: false,
    white: false,
    yellow: true,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["dragon"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Bolivia",
    code: "BO",
    black: false,
    blue: false,
    green: true,
    orange: false,
    red: true,
    white: false,
    yellow: true,
    stripes: 3,
    direction: "horizontal",
    emblem: true,
    object: ["coat of arms"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    black: false,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: false,
    yellow: true,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["stars"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Botswana",
    code: "BW",
    black: true,
    blue: true,
    green: false,
    orange: false,
    red: false,
    white: true,
    yellow: false,
    stripes: 5,
    direction: "horizontal",
    emblem: false,
    object: [],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
  {
    name: "Brazil",
    code: "BR",
    black: false,
    blue: true,
    green: true,
    orange: false,
    red: false,
    white: true,
    yellow: true,
    stripes: 0,
    direction: null,
    emblem: true,
    object: ["rhombus", "starry sky", "national motto"],
    border: false,
    canton: false,
    quadrisection: false,
    greekCross: false,
    symmetricCross: false,
    nordicCross: false,
    unionJack: false,
    bend: false,
    chevron: false,
    pall: false,
    saltire: false,
  },
]

export default flags
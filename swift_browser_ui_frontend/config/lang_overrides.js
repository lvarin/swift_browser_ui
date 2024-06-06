// Parameterized text override example file
let lang_overrides = {
  en: {
    message: {
      index: {
        formName: "CSC Account",
        loginmethods: [
          {
            msg: "Log In using Haka",
            href: "/login",
          },
          {
            msg: "Log in with CSC Account",
            href: "/loginpassword",
          },
        ],
      },
      program_name: "Allas Web UI",
      program_description: "Allas Web UI provides a simple-to-use web user " +
          "interface for CSC Object Storage service, Allas.",
      helplink: "https://docs.csc.fi/data/Allas/",
      dashboard: {
        default_notify: "The information on consumed billing units and " +
                          "available quota is derived from the default CSC " +
                          "values. Default quota can be increased, and the " +
                          "increase will not reflect here.",
        links: [
          {
            msg: "Allas User Guide",
            href: "https://docs.csc.fi/data/Allas/",
          },
          {
            msg: "Billing Unit Calculator",
            href: "https://research.csc.fi/pricing#buc",
          },
        ],
      },
    },
  },
  fi: {
    message: {
      formName: "CSC Käyttäjä",
      index: {
        loginmethods: [
          {
            msg: "Kirjaudu Haka:lla",
            href: "/login",
          },
          {
            msg: "Kirjaudu CSC käyttäjällä",
            href: "/loginpassword",
          },
        ],
      },
      program_name: "Allas Web UI",
      program_description: "Allas Web UI tarjoaa yksinkertaisen " +
          "web-käyttöliittymän CSC:n Object Storage -palveluun, Altaaseen.",
      helplink: "https://docs.csc.fi/data/Allas/",
      dashboard: {
        default_notify: "Tieto laskutusyksiköiden kulutuksesta ja " +
                          "käyttörajasta on laskettu CSC:n Allas-palvelun " +
                          "oletusarvojen mukaan. Mahdollinen korotettu " +
                          "käyttöraja ei näy käyttöliittymässä.",
        links: [
          {
            msg: "Allas User Guide",
            href: "https://docs.csc.fi/data/Allas/",
          },
          {
            msg: "Billing Unit Calculator",
            href: "https://research.csc.fi/pricing#buc",
          },
        ],
      },
    },
  },
};

export default lang_overrides;

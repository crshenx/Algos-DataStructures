const TEST2 = {
  customtest1: {
    candidates: [
      {
        id: "llzcxu4",
        name: "jon",
        email: "jon@acme.com",
        company: "acme",
      },
      {
        id: "elc459x",
        name: "jane",
        email: "jane@google.com",
        company: "goolge",
      },
      {
        id: "uRZaads2",
        name: "peter",
        email: "peter@microsoft.com",
        company: "microsoft",
      },
    ],
    developers: [
      {
        name: "jonathan",
        email: "jon@acme.com",
      },
      {
        name: "jane",
        company: "google",
        email: "jane@gmail.com",
      },
      {
        name: "peter",
        email: "peter@netflix.com",
        company: "netflix",
      },
    ],
  },
  customtest2: {
    candidates: [
      {
        id: "aaaa",
        name: "shawn",
        email: "snaquin@themorangroup.net",
        company: "TMG",
      },
      {
        id: "bbbb",
        name: "peter",
        email: "peter@netflix.com",
        company: "netflix",
      },
    ],
    developers: [
      {
        name: "Shawn",
        company: "google",
        email: "SNaquin@Themorangroup.net",
      },
      {
        name: "peter",
        email: "peter@netlify.com",
        company: "netlify",
      },
    ],
  },
};

const custom1 = TEST2.customtest1;
const custom2 = TEST2.customtest2;

function matchCandidates(candidates, developers) {
  const obj = {};

  for (let cand of candidates) {
    if (cand.email) {
      obj[cand.email] = cand.id;
    }
    if (cand.name && cand.company) {
      obj[cand.name + cand.company] = cand.id;
    }
  }

  //   for (let dev of developers) {
  //     let devValues = Object.values(dev);
  //     let val0 = devValues[0];
  //     let val1 = devValues[1];
  //     let val2 = devValues[2];
  //     console.log(devValues);
  //     c = obj[val0] ?? obj[val1] ?? obj[val2];
  //     dev.id = c ?? null;
  //   }
  for (let dev of developers) {
    let devValues = Object.values(dev);
    devValues.forEach((val) => {
      if (obj[val]) {
        dev.id = obj[val];
      } else {
        dev.id = null;
      }
    });
  }

  return developers;
}

function matchCandidates2(candidates, developers) {
  const obj = {};

  for (let cand of candidates) {
    if (cand.email) {
      obj[cand.email] = cand.id;
    }
    if (cand.name && cand.company) {
      obj[cand.name + cand.company] = cand.id;
    }
  }

  for (let [key, val] of developers.entries()) {
    if (obj[val.email]) {
      val.id = obj[val.email];
    } else if (obj[val.name + val.company]) {
      val.id = obj[val.name + val.company];
    } else {
      val.id = null;
    }
  }

  return developers;
}

// console.log(
//   performance.now(matchCandidates(custom1.candidates, custom1.developers))
// );
// console.log(
//   performance.now(matchCandidates2(custom1.candidates, custom1.developers))
// );
// // console.time(matchCandidates2(custom1.candidates, custom1.developers));
// console.log(matchCandidates(custom1.candidates, custom1.developers));
// console.log(matchCandidates2(custom1.candidates, custom1.developers));

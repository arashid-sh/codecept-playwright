# sidecar_e2e_web

User manual;

- install nodejs (https://nodejs.org/en/download/)
- clone the repository (git clone <url> )
- navigate to project repository using terminal and type;
  `npm install`

  DONE!!

How to run steps;
- For smoke test cases; 
`npm run test:smoke`
- For regression test cases;
`npm run test:regression`
- For a specific test to run;
`npm run test -- --grep "Scenario Name"`

How to use prettier to format your codes;
- once you are done with your PR, run:
 `npx prettier --write .`
- State in react
  - State represent the local data relevant to a component
  - State changes throughout the life of an application
  - State can respond to user input and events

- Why you should write tests:
  - Tests boost your own and your team's confidence in quality code.
  - Tests help us update previous work and locate new bugs.

- Unit tests cover the smallest possible parts of an app
- Jest will pick all the test cases and will run them individually.
- Enzyme will be used to test the components, allows us to mock the creation of these component in our application.


Unit tests test the smallest possible parts of an application in order to check their proper operation.

Enzyme is a React testing library built by Airbnb to test mounted components.

Jest is a test runner built by Facebook to automatically pick up tests. It provides many features such as the running of individual tests and coverage ports

describe() groups together individual tests.

it() runs an individual test.

beforeEach() runs before each individual test in a `describe` block.

afterEach() runs after each individual test in a `describe` block.

simulate() allows to test user events on components such as typing or clicking.

Test coverage reporting gives a percentage output of how well tests capture written components by checking their line coverage and various possibilities in state.

Overall, testing is such a vital part of the software engineering process. It can be easy to overlook when starting out. But the ability to write tests with thorough coverage separates the learning engineer from a true professional.

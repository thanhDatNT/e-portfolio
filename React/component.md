### JSX

- JSX is JavaScript XML, a syntax extension
- Rules:
  - Return a single root element
  - Close all the tags
  - camelCase all of the things
  
### Barbel
Can convert the latest version of JavaScript code into the one that the browser understands. 

### Component

- Container
  - Stateful
  - Manage data and pass them to the presentational components
- Presentational component
  - Stateless
  - Render UI

### Component Life cycle

- 3 phases: Mounting -> Updating -> Unmounting
- Mounting: Constructor -> Render -> React update DOM and refs -> ComponentDidMount
- Updating: new props/new state/force update -> Render -> React update DOM and refs -> ComponentDidMount
- Unmounting: componentWillUnmount

### Props & State
- Props:
  - Cannot modify
  - Passed through parent to children
- States:
  - Managed by current component
  - Can be changed -> Rerender component

### Pure component/ Pure function
- Pure functions only perform a calculation and nothing more.
- Pure function **Minds its own business** + **Same inputs, same output**

### Virtual DOM
- The DOM is represented as a tree data structure. DOM is updated -> re-render the App UI -> Slow performance.
- Virtual DOM: like a lightweight copy of the actual DOM. Every time the state of our application changes, the virtual DOM gets updated first instead of the real DOM. If the state of any of elements changes, a new virtual DOM tree is created. This tree is then compared or “diffed” with the previous virtual DOM tree.
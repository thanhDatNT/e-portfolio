### JSX

- JSX is JavaScript XML, a syntax extension
- Rules:
  - Return a single root element
  - Close all the tags
  - camelCase all of the things

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
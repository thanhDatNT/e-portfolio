**Hooks don’t work inside classes.**
- Rules:
    - Don’t call Hooks inside loops, conditions, or nested functions
    - Call Hooks from custom Hooks and React function components
1. UseState

```js
function useState(initialState) {
    // do something
    return [state, setState];
}
```
- useState use REPLACING instead of MERGING
```js
const [person, setPerson] = useState({name: "Dat", age: 24})
setPerson({age: 25}) // {age: 25}
```
2. UseEffect
- Side effects: Call API, DOM event, Subscription, setTimeOut, setInterval
- 2 types: need to cleanup and no need to cleanup
- UseEffect:
    - Execute after each render
    - Cleanup function is executed before the next render or unmount
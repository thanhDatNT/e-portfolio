### Type conversion and Type coercion

```js
// Type coercion: auto and implicit conversion of values ( tu dong / ngam)

const a = 1 + "2"; // 12, auto convert from number to string

const b = 1 - "2"; // -1, auto convert from string to number

const text = "message";
if (text) {
  // text is converted into boolean
}
```

```js
// Type conversion: like type coercion, but can be implicit or explicit (ngam / tuong minh)

const error = "Error";
const hasError = Boolean(error);

const mark = 3;
const markString = mark.toString();
// Number.parseInt(markString);
```

### Value type and Reference type

```js
// Value type: A variable that is one of the primitive types (number, string, boolean) has a value
const mark = 10;

// Reference type: object and array save **ADDRESS** where the value is stored
const a = { name: "Dat" };
const b = a;
a.name = "David";
// b = {name: "David"}
```

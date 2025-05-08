## How does TypeScript help in improving code quality and project maintainability?

TypeScript is a strongly typed version of JavaScript that helps you write better code. It adds types to your variables and functions, which helps catch errors early and keeps your code easier to manage.

### Improves Code Quality
- **Checks for Mistakes**: Finds problems before your code runs.
- **Smart Suggestions**: Your editor helps you write code faster and with fewer errors.
- **Safer Changes**: You can rename or update code more safely.

### Helps with Bigger Projects
- **Easier to Understand**: Type information helps others (and future you) read your code.
- **Better for Teams**: Makes it easier to work with others.
- **Works Well with Tools**: Great support in editors like VS Code.

---

## What is Type Inference in TypeScript?

Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically deduce the types of variables, parameters, and return values based on the context in which they are used. This means that you don't always have to specify types, as TypeScript can infer them for you.

### Example

```typescript
let message = "Hello, TypeScript!";
// TypeScript understands this is a string

message = 42; // Error: You can't assign a number to a string
```

### Why is it Helpful?
- **Less Code**: You don’t need to write types everywhere.
- **Still Safe**: TypeScript still checks for mistakes.
- **Better Suggestions**: Your code editor can still help you with autocomplete and warnings.

---

## What is the use of the keyof keyword in TypeScript? Provide an example

The `keyof` keyword is used to get the names of all properties in a type or interface as a union of strings. This is useful when you want to work with property names in a safe, type-checked way.

### Example

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
// PersonKeys is now: "name" | "age"

function logProperty(obj: Person, key: PersonKeys) {
  console.log(obj[key]);
}

const user: Person = { name: "Alice", age: 30 };
logProperty(user, "name"); // OK
logProperty(user, "email"); // Error: "email" is not a key of Person
```

### Why is it Helpful?
- **Avoids Typos**: Only allows property names that exist on the object.
- **Better Type Safety**: Prevents runtime errors by checking keys at compile time.
- **Useful in Generic Code**: Works great when writing reusable functions.

---

## What is the use of enums in TypeScript? Provide an example of a numeric and string enum

Enums (short for "enumerations") let you define a list of named values. This makes your code easier to read and less error-prone.

### Numeric Enum Example

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 1
```

If you don’t set the values, TypeScript will count them starting from 0 (or the first number you provide).

### String Enum Example

```typescript
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: "SUCCESS"
```

String enums are useful when you want readable values in logs or API calls.

---

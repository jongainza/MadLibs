### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a Javascript library for building user interfaces, particularly single-page applications where the content updates dynamically.
  I will use it because is a powerfull tool for building modern, efficient and scalable user interfaces, making it popular choice for web development projects
- What is Babel?
  Babel is a JavaScript compiler that allows to use the latest JavaScript features even if the enviropment where the code runs don't support those features yet.
  Babel is commonly used with React projects to transpite JSX.

- What is JSX?
  Is a syntax extension for JavaScript that is commonly used with React.It allows to write HTML-like code directly within JavasCript files.
- How is a Component created in React?
  In React, components are the building blocks of user interface, and they can be created in two main ways:functional components and class components.
  Functional components are simplier and more concise.They are esentially JavaScript functions that take in props(properties) and return JSX
- What are some difference between state and props?
  Props are passed to a component from its parent component, can no be modified by the component receiving them.
  And State is defined and managed within a component, therefor represents the internal state of a component. It can be updated using 'setState()'. Is used for data that can change over time.

- What does "downward data flow" refer to in React?
  "Downward data flow" refers to the pattern of passing data from a parent component to its child components through props. In a React application, data typically flows in a unidirectional manner, starting from higher-level or parent component and tickling down to child components in the component tree.

- What is a controlled component?
  Is a component whose behavior is controlled entirely by the React state. The state of the component is handeled by React and any changes to the component's state are reflected in the component's rendered output.
- What is an uncontrolled component?
  Is a component that does not store its state in the React state.Instead, the component relies on the DOM itself to manitain and manage its state.
  Refs are commonly used to interact directly with the DOM to get or ser values of elements.
- What is the purpose of the `key` prop when rendering a list of components?
  The 'key' prop is special attribute that is used to give a unique identity to each element in the list of components or elements.When rendering a dynamic list of items, React uses the 'key' prop to efficiently update and re-render only the components that have changed, rather than rendering the entire list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Becouse the list can be modified and whit it, the index of the elements on it can change aswell, no making this value a secure unique identifier.

- Describe useEffect. What use cases is it used for in React components?
  'useEffect' is a React Hook that enables side effects in functional components.It is used to perform operations in a React component that are not directly related to rendering such as data, fetching, subscriptionsm manual DOM manipulation, or setting up or cleaning up timers.
- What does useRef do? Does a change to a ref value cause a rerender of a component?

- When would you use a ref? When wouldn't you use one?
  'useRef' is a React Hook that provides a way to create a mutable object that persists across renders of a component. Unlike the state, changes to the 'ref' value do not cause the component to re-render.
  The primary use, is to access and interact with the DOM directly or to persists values between renders without triggering re-renders.

- What is a custom hook in React? When would you want to write one?
  Is a function that encapsulates reusable logic, state or side effects, allowing to abstract and share logic across components.
  You want to use it when you have repeated code(functionality) across components.

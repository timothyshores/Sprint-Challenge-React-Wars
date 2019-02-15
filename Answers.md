# Answers

1.  What is React JS and what problems does it try and solve?

A: React is a Javascript library for creating user interfaces. It will on render the changes only on a website. Also it can handle various states of components.

1.  What does it mean to _think_ in react?

A: Thinking in react is thinking component based. Let's say that you're looking at the homepage of a social media website. At the top of the page there might be a navbar with a search bar, an icon that shows yor notifications and a dropdown menu to change your user settings. In a react app each of these elements could be written as a stand alone component.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is a regular pure JavaScript function that accepts props as its argument, and returns some JSX. A class based component is a JavaScript class that extends React.Component. Although its only required method is render() it also provides lifecycle hooks which are methods that are called at certain points in the component's lifecycle and every class based component has its own internal state.

1.  Describe state.

State is an object that is created in the component and is mutable. When a component needs to keep track of information between renderings the component itself can create, update, and use state. A component's state changes based on mostly user events.

1.  Describe props.

Props are properties that are passed into a component's input. Props should not be changed by the component itself since it is an input that is passed into a component. A Component cannot change its own props, but it is responsible for putting together the props of its child Components.
// The following line of code is a JavaScript expression or a HTML expression? 
const h1 = <h1>Hello world</h1>;

// JSX element: the JSX's basic unit
<p>Hello world</p>;

// Manipulating JSX elements in JavaScript
const myArticle = <article></article>;

// JSX elements' attributes
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nested JSX elements
const myDiv = (
	<div>
	  <h1>
		Hello world
	  </h1>
	</div>
);

// Outer JSX Elements
const blog = (
	<div>
	  <img src="pics/192940u73.jpg" />
	  <h1>
		Welcome to Dan's Blog!
	  </h1>
	  <article>
		Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
	  </article>
	</div>
);

// Rendering JSX expressions
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>,
	document.getElementById('app'));

// ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, 
	document.getElementById('app'));

// Passing a variable to ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
  </ul>
);

ReactDOM.render(myList, 
	document.getElementById('app'));
# Age calculator app solution

The code does not handle any errors that may occur during the date calculation or input validation. It would be beneficial to include appropriate error handling and provide user-friendly feedback when invalid inputs are detected.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Mobile View](./screenshorts/mobile-design.jpg)
![Desktop View](./screenshorts/desktop-design.jpg)


### Links

- Solution URL: [Github](https://github.com/AJstyles903/age-calculator)
- Live Site URL: [Netlify](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Tailwind CSS

### What I learned

The isInvalidDate variable contains a complex logical expression to check for invalid date inputs. While it seems to cover different scenarios, it could be simplified and made more readable.

To see how you can add code snippets, see below:

```js
let today = new Date();
const calculateAge = () => {
  const { years, months, days } = intervalToDuration({
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    end: new Date(birthYear, birthMonth, birthDay),
  });
  return { years, months, days };
};
```

## Author

- Frontend Mentor - [@AJstyles903](https://www.frontendmentor.io/profile/AJstyles903)
- Twitter - [@aryanjay903](https://www.twitter.com/aryanjay903)
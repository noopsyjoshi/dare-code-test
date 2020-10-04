# Code Test

## Overview
The exercise was to build a simple website with 5 pages and a navigation bar, that is fully responsive, cross-browser compatible and matches the supplied Invision designs. The total time spent on the exercise was 2.5 hours. The body of each page is made of one or several components including:
- Text + image
- Form (on submit nothing should happen)
- Accordion (only one section can be open at a time)

## Technologies Used
- Vue.js (front-end)
- NPM package manager
- Javascript
- HTML
- SCSS (BEM format)
- Bootstrap
- Visual Studio Code (software of choice)
- Git (MacOS)

## How to use
To run the project, please navigate to the sub folder 'dare-code-test', clone the repo and run the following commands


```
npm install
```

```
npm run serve
```

## Approach Taken
I decided to use Vue CLI for the exercise as it provides the ability to quickly set up a project without too much bloated code. I included Vue Router during initiation which allows the user to navigate between the site without refreshing the page. The hot module reloading feature that comes along with the set up is useful in automatically updating the site without a manual refresh after code edits.

My approach was to create the HTML first, add styling and any required functionality in a corresponding JS file within the utils folder. The JS file was imported into main.js and the function initiated on Vue's mounted hook.

Before starting the project, I checked I was using the latest npm packages.

1. I checked out to a separate branch to complete the exericse on. In any given project, I'd usually name the branch based on the description in the Jira ticket, for instance I'd create a separate branch to build the navigation. Given the time restrictions, I worked on one branch to save time.
2. I created the different pages in the 'Views' folder, the Vue Router in the 'index.js' file and added links to the Navigation component.
3. Downloaded Bootstrap through npm and set up a folder structure for the styles. I used two main folders to hold the scss files, a folder for component based styles, and the other for global ones.
4. I created the hero component first and imported it into each view as per the design.
5. Next I targeted the second most used component which was the 'Image Copy'. In addition I created another version of this component with a slight variation where the image sits on the left side instead of the right.
6. The navigation came next, and took the most time because of the functionality and responsiveness.
7. Finally, I started working on the accordion for the 'Blusher' page but didn't finish it as I went over the given time.

I made sure to push my code periodically after a component was built.

## Challenges and improvements
The challenge was to see how far I could get through the pages in the given time. I used Bootstrap and reusable mixins to save time on the layout and images. Next steps:
- finish styling the accordion and add touch event listeners for both the navigation and accordion to ensure it works on touch-screen devices (30 minutes)
- build the form and style them in the _gen-forms.scss file so they are reusable (~30 - 40 minutes)
- tidy up styles by paying close attention to the design in Invision (30 minutes)
- break down the accordion and use a loop to display the content, this will minimise the HTML syntax and make it more readable.
- use BrowserStack to test the site on the devices within scope
- to make the website more interactive, I could add AOS scroll and Splitting.js plugins to animate images and text on scroll

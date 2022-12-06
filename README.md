# MindFul - Meditation Website 2.0:

## Overview

### Primary Goal:

The Goal of this project is to improve upon my previous verion of the meditation website. In my previous version I made a single page website,
using HTML, CSS, Bootstrap, JavaScript and some JQuery. The Goal of this project is build out multiple pages and replicate other meditation e-commerce websites.

### Secondary Mindful Website Goal:

The Secondary goal of this website is to also inform the user about the benefits of practicing meditation to reduce stess and anxiety.

## Learnin Objectives:

- Building an e-commerce website
- Breaking Down each Page into Separate Components in React
- Maintain Single Source of truth with Forms
- Using React Router to build multiple pages in React
- How to use Reacstrap Components to style and layout pages

### Updates:

#### 12/6/22

- Custom Fetch Hook:
  - Set up json-server to create fake server and created fetch request to server
  - Since fetch request is a side effect in react I used the useEffect Hook to tell react when to re-render when fetch request is made.
  - create a separate component just to make fetch request, further down the line I can update and use the custom hook to make fetch request's in other react components by importing <useFetch> component and
    passing the specifil url end point as a parameter to the useFetch hook.

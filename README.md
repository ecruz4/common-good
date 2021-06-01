<br />
<p align="center">
  <h1 align="center">Adriatic Common Good</h1>

  <p align="center">
    A website that connects charities to donors.
    <br />
    <h3 align="center">
     <strong>Contributors »</strong>
    <br />
    <br />
    <a href="https://github.com/ChrisRPeterson">Christian Peterson</a>
    ·
    <a href="https://github.com/ppattamasaevi">Pongsak Pattamasaevi</a>
    ·
    <a href="https://github.com/amandaklein1">Amanda Klein</a>
    ·
    <a href="https://github.com/dylanreid7">Dylan Reid</a>
    ·
    <a href="https://github.com/ecruz4">Eric Cruz</a>
     </h3>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#home-page---amanda-klein">Home Page</a></li>
    <li><a href="#profile-page---eric-cruz">Profile Page</a></li>
    <li><a href="#donations-and-charities-lists---pongsak-pattamasaevi">Listings and Search Feature</a></li>
    <li><a href="#details-page---dylan-reid">Details Page</a></li>
    <li><a href="#chat---christian-peterson">Chat</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
      <li><a href="#google-maps-api-key">Google Maps API Key</a></li>
     </ul>
    </li>
  </ol>
</details>

# About

The objective of the Common Good website was to make a site that allowed charity organizations to connect with prospective donors in order to exchange donated goods. Our team of software engineers was given one week to create the application. It is comprised of the features and pages detailed below.

## Home Page --[Amanda Klein](https://github.com/amandaklein1)

**Features:**

- _Nav Bar_
- _Charity Information_
- _Charity Feature Cards_
- _Footer_
- _Routing_

![](https://media.giphy.com/media/sfsgh7c7HZuJyUmQhS/giphy.gif)

## Profile Page -- [Eric Cruz](https://github.com/ecruz4)

**Features:**

- _Profile Picture_: Created using the Material UI Avatar component and also has an added Edit Icon using Material UI Badges if the user is viewing their own profile.
- _Profile Information_: Displays the user's basic contact information and location.
- _Offer Detail Cards Display_: The Card Display/Profile Feed is a list of all the offers/requests made by that particular user.
- _Editable Information_: By clicking on the Edit Icon, a modal will appear for the user to modify any of their profile information. These changes occur real-time.

![](https://media.giphy.com/media/G3BnuZbinL4YfMFMsc/giphy.gif)

## Listings and Search -- [Pongsak Pattamasaevi](https://github.com/ppattamasaevi)

**Features:**

- _Charitable requests & donations listing_: User is able to toggle between an interface displaying all requests from organizations, sorted by urgency, and one showing all charitable donations, sorted by time to expiration. Data is paginated and fetched as needed to improve performance, and presented on animated, interactive Material-UI cards. From within each card, the user can view more details about the listing, its owner, or initiate a live chat with the associated account.
- _Search Feature_: A case-insensitive search by item name, allowing the user to quickly find relevant donations or requests on the listings page. On the "Charities" page, more criteria is available for search, including by name, city, state, and charitable theme.

![](https://media.giphy.com/media/vLcXs7vLscfDvj68Iu/giphy.gif)

## Details Page -- [Dylan Reid](https://github.com/dylanreid7)

**Features:**

- _Details_: renders the item picture, title, description, quantity, and time stamp dynamically.
- _Map_: a map of the approximate location is shown using the google maps api. The marker shown is the user's profile picture.
- _Profile_: the donor or organization's profile is listed at the bottom of the page with their profile picture, title, and bio.
- _Other Features_: links to the chat application and profile pages. If the item is listed as urgently needed, an alert is conditionally rendered.

![](https://media.giphy.com/media/35Ymi4CExwpON31OV6/giphy.gif)

## Chat -- [Christian Peterson](https://github.com/ChrisRPeterson)

**Features:**

- Makes full use of user authentication and sessions.
- Designed to be fast and easy to understand.
- Persists messages via a firebase database.
- Renders a dynamic notification icon when new messages are recieved.

![](https://media.giphy.com/media/vM3TbhQthPscHnS30J/giphy.gif)

# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Material-UI" src="https://img.shields.io/badge/-Material--UI-%230081CB?&style=for-the-badge&logo=material-ui&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Backend Languages</th>
      <td>
        <img alt="Firebase" src="https://img.shields.io/badge/firebase%20-%23323330.svg?&style=for-the-badge&logo=firebase&logoColor=%039BE5" />
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="Docker" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow

Our team used Agile workflow for this sprint.

## Trello

A Trello board was used to create and track tickets. We held daily scrum meetings to discuss accomplishments, challenges, and upcoming tickets. To effectively collaborate remotely while allowing for quick communication if needed, we utilized Discord, Slack, and Zoom.

## Version Control

We implemented Git Feature Branch Workflow. All pull requests in Github were reviewed by another team member before being merged into the main branch.

# Development

## Repo

`git clone https://github.com/hratx-blue-ocean/adriatic-common-ground`

## Install

`npm install`

## Start Scripts

```
npm start
npm run build
```

## Google Maps API Key

To properly render the map in the details page, you must create a Google Maps API token and place it into config.js within the src directory.

To create an API key:

1. Go to: https://console.cloud.google.com/project/_/apiui/credential
2. On the credentials page, click Create credentials > API Key.
   The API key created dialog displays your newly created API key.
3. Click Close.
   The new API key is listed on the Credentials page under API keys.
   (Remember to restrict the API key before using it in production.)

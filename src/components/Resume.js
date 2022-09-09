import React from 'react';
import '../styles/Resume.css'

export default function Resume() {
  return (
    <div className='Resume'>
      <h1>Resume Page</h1>
      <div className='frontEnd'>
        <h4>Front-End Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
          </div>
          <div class="slider">
    <div class="container">
      <div class="slide x"></div>
      <div class="slide y"></div>
      <div class="slide z"></div>
    </div>
    <div class="shadow"></div>
  </div>
  <div className='backEnd'>
  <h4>Back-End Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
          </div>
          
    </div>
  );
}

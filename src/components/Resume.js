import React from 'react';
import '../styles/Resume.css'

export default function Resume() {
  return (
    <div className='Resume'>
      <h1>Resume Page</h1>
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
  );
}

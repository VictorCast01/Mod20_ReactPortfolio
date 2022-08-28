import React from 'react';
import '../styles/Footer.css'

function Footer({ currentPage, handlePageChange }) {
    return (
      <footer>
        <div class="foot">
            <ul><a href="https://github.com/VictorCast01"><img src="GitHub.png" alt="GitHub"/></a></ul>
            <ul><a href="https://www.linkedin.com/feed/"><img src="linkedIn.png" alt="LinkedIn"/></a></ul>
            <ul><a href="https://stackoverflow.com/users/19310361/victor-castellon"><img src="stackOF.png" alt="stackOF"/></a></ul>
            </div>
      </footer>
    );
  }
  
  export default Footer;
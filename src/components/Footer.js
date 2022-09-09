import React from 'react';
import '../styles/Footer.css'

function Footer({ currentPage, handlePageChange }) {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <div className='text-center'>
      <a href='https://www.linkedin.com/in/victor-castellon-3486a9241/' class="fa fa-linkedin"></a>
      <a href="https://stackoverflow.com/users/19310361/victor-castellon" class="fa fa-stack-overflow"></a>
      <a href="https://github.com/VictorCast01" class="fa fa-github"></a>
      </div>
      </footer>
    );
  }
  
  export default Footer;
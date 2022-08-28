import React from 'react';
import '../styles/NavTabs.css'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul class="buttons">
      <h2 className='navHeader'>Victor Castellon</h2>
      <button class="btn-hover color-6">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </button>
      <button class="btn-hover color-6">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </button>
      <button class="btn-hover color-6">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </button>
      <button class="btn-hover color-6">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        </button>
    </ul>
  );
}

export default NavTabs;

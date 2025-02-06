'use client';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('text-green-400');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-green-400');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => {
    const navbarToggler = document.querySelector(
      '.navbar-toggler'
    ) as HTMLElement;
    if (
      navbarToggler &&
      window.getComputedStyle(navbarToggler).display !== 'none'
    ) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar fixed top-0 bg-accent h-screen w-64 p-4 flex flex-col justify-center">
      <a href="#page-top" className="text-center text-white">
        Clarence Taylor
      </a>
      <ul id="navbarResponsive" className=" space-y-4 mt-6">
        {[
          'about',
          'experience',
          'education',
          'skills',
          'interests',
          'awards',
        ].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="nav-link block py-2 px-4 hover:text-green-400"
              onClick={handleNavCollapse}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

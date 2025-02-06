// // 'use client';
// // import { useEffect } from 'react';

// // const Navbar = () => {
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const sections = document.querySelectorAll('section');
// //       const navLinks = document.querySelectorAll('.nav-link');

// //       sections.forEach((section) => {
// //         const top = window.scrollY;
// //         const offset = section.offsetTop - 100;
// //         const height = section.offsetHeight;
// //         const id = section.getAttribute('id');

// //         if (top >= offset && top < offset + height) {
// //           navLinks.forEach((link) => {
// //             link.classList.remove('text-green-400');
// //             if (link.getAttribute('href') === `#${id}`) {
// //               link.classList.add('text-green-400');
// //             }
// //           });
// //         }
// //       });
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleNavCollapse = () => {
// //     const navbarToggler = document.querySelector(
// //       '.navbar-toggler'
// //     ) as HTMLElement;
// //     if (
// //       navbarToggler &&
// //       window.getComputedStyle(navbarToggler).display !== 'none'
// //     ) {
// //       navbarToggler.click();
// //     }
// //   };

// //   return (
// //     <nav className="navbar fixed top-0 bg-accent h-screen w-64 p-4 flex flex-col justify-center">
// //       <a href="#page-top" className="text-center text-white">
// //         Clarence Taylor
// //       </a>
// //       <ul id="navbarResponsive" className=" space-y-4 mt-6">
// //         {[
// //           'about',
// //           'experience',
// //           'education',
// //           'skills',
// //           'interests',
// //           'awards',
// //         ].map((section) => (
// //           <li key={section}>
// //             <a
// //               href={`#${section}`}
// //               className="nav-link block py-2 px-4 hover:text-green-400"
// //               onClick={handleNavCollapse}
// //             >
// //               {section.charAt(0).toUpperCase() + section.slice(1)}
// //             </a>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// // src/components/Navbar.tsx
// import { FC, useState } from "react";

// const Navbar: FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-primary text-white fixed w-full lg:w-64 lg:h-screen p-4 z-10 shadow-lg">
//       <div className="flex justify-between items-center lg:block">
//         <a href="#page-top" className="text-2xl lg:hidden">Clarence Taylor</a>
//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl">
//           ☰
//         </button>
//       </div>
//       <div className={`${isOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
//         <ul className="space-y-4">
//           {['about', 'experience', 'education', 'skills', 'interests', 'awards'].map(section => (
//             <li key={section}>
//               <a href={`#${section}`} className="block py-2 px-4 hover:bg-space-4 rounded-lg capitalize">
//                 {section}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.tsx
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white fixed w-full lg:w-64 lg:h-screen p-4 z-10 shadow-lg">
      <div className="flex justify-between items-center lg:block">
        <a href="#page-top" className="text-2xl lg:hidden">Clarence Taylor</a>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl">
          ☰
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}> 
        <div className="dropdown relative lg:hidden">
          <button className="btn bg-space-4 text-white w-full py-2 px-4 rounded-lg flex justify-between items-center">
            Menu
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="dropdown-content absolute hidden bg-space-4 text-white mt-2 rounded-lg shadow-lg w-full">
            {['about', 'experience', 'education', 'skills', 'interests', 'awards'].map(section => (
              <a 
                key={section} 
                href={`#${section}`} 
                className="block py-2 px-4 hover:bg-space-5 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
        <ul className="hidden lg:block space-y-4">
          {['about', 'experience', 'education', 'skills', 'interests', 'awards'].map(section => (
            <li key={section}>
              <a href={`#${section}`} className="block py-2 px-4 hover:bg-space-4 rounded-lg capitalize">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

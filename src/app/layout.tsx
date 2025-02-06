// // src/app/layout.tsx
// 'use client';
// import "../styles/globals.css";
// import Navbar from "@/components/Navbar";
// import ThemeToggle from "@/components/ThemeToggle";
// import { ReactNode, useState, useEffect } from "react";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState('space');

//   useEffect(() => {
//     document.documentElement.classList.remove('space', 'mountain');
//     document.documentElement.classList.add(theme);
//   }, [theme]);

//   return (
//     <html lang="en">
//       <body className="bg-space-1 text-space-5 dark:bg-mountain-5 dark:text-mountain-1">
//         <Navbar />
//         <main className="ml-64">
//           {children}
//           <ThemeToggle theme={theme} setTheme={setTheme} />
//         </main>
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
'use client';
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { ReactNode, useState, useEffect } from "react";



export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('space');

  useEffect(() => {
    document.documentElement.classList.remove('space', 'mountain');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-space-1 to-space-4 dark:bg-gradient-to-t dark:from-mountain-5 dark:to-mountain-4 text-space-5  dark:text-mountain-1">
        <div className="flex flex-col lg:flex-row">
          <Navbar />
          <main className="flex-1 p-4 lg:ml-64">
            {children}
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </main>
        </div>
      </body>
    </html>
  );
}

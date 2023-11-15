import React from 'react'

export const Footer = () => {
  return (
    <footer id="Contact" className="relative bg-gray-800 flex justify-center p-8 max-w-full">
      <div className="rounded-full bg-blue-700 py-4 px-40 max-w-[calc(100vw_*_0.95)]">
        <h2 className="rounded text-4xl">
          Contact me: <br />
          <a className="text-papaya-400 hover:text-papaya-300" href="mailto:abc@example.com">
            mark@keeble.de
          </a>
        </h2>
      </div>
      <p className="absolute right-4 bottom-1">© Mark J. Keeble, 2023</p>
    </footer>
  );
}

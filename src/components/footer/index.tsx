import {Zoom} from "react-awesome-reveal";
export const Footer = () => {
  return (
    <footer id="Contact" className="bg-gray-200">
      <div className="flex justify-center p-8 pb-9 max-w-full">
        <Zoom>
          <div className="rounded-full bg-blue-700 py-4 px-14 lg:px-40 max-w-[calc(100vw_*_0.95)]">
            <h2 className="rounded text-xl lg:text-4xl">
              Contact me: <br />
              <a className="text-papaya-400 hover:text-papaya-300" href="mailto:mark@keeble.de">
                mark@keeble.de
              </a>
            </h2>
          </div>
        </Zoom>
      </div>
      <div>
        <p className="md:text-right pb-3 px-3 text-papaya ">© Mark J. Keeble, 2023</p>
      </div>
    </footer>
  );
};

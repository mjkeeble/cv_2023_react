import { Zoom } from "react-awesome-reveal";
export const Footer = () => {
  return (
    <footer id="Contact" className="bg-gray-200">
      <div className="flex max-w-full justify-center p-8 pb-9">
        <Zoom>
          <div className="max-w-[calc(100vw_*_0.95)] rounded-full bg-blue-700 px-14 py-4 lg:px-40">
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
        <p className="px-3 pb-3 text-papaya md:text-right ">© Mark J. Keeble, 2023</p>
      </div>
    </footer>
  );
};

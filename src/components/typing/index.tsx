import { Typewriting } from "react-typewriting";

const texts = [
  "more than code!",
  "commercially aware.",
  "problem-solving.",
  "teamwork.",
  "communication.",
  "excellentism.",
  "customer-orientation.",
  "value-added.",
  "meeting commitments.",
  "personal development.",
  "flexible.",
  "logical.",
  "creative.",
  "learning.",
  "agile.",
  "accepting the challenge.",
  "fun!",
];
interface TypewritingRenderArgs {
    currentText: string
    fullCurrentText: string
}

export const TypingEffect: React.FC = () => {

  return (
    <div>

      <Typewriting strings={texts} writeSpeedMs={250} waitBeforeDeleteMs={2000} deleteSpeedMs={0} >
        {({currentText, fullCurrentText}: TypewritingRenderArgs) => (
          <h1 className="mt-24 ml-4 text-left text-xl pb-2"> Web development is <br />
            <span className=" text-peach-300 font-mjk text-3xl pb-0
        6" aria-label={fullCurrentText}>
              &zwnj;{currentText}
            </span>
          </h1>
        )}
        </Typewriting>
    </div>
  );
};

import { Exclamation } from "./components/doodles/Exclamation";
import { Spiral } from "./components/doodles/Spiral";
import { SquareSpiral } from "./components/doodles/SquareSpiral";
import { Star } from "./components/doodles/Star";
import { WavyLine } from "./components/doodles/WavyLine";
import { EmailIcon } from "./components/icons/EmailIcon";
import { InstagramIcon } from "./components/icons/InstagramIcon";
import { MenuIcon } from "./components/icons/MenuIcon";

function App() {
    return (
        <>
            <Star className="size-20 text-white" />
            <h1 className="text-3xl font-bold underline text-lime font-display">
                Hello
            </h1>
            <Star className="size-20 text-lime" />
            <WavyLine className="w-full h-5 text-lime " />
            <MenuIcon className="size-20" />
            <InstagramIcon className="size-7 text-white" />
            <EmailIcon className="size-20 text-white" />
            <Spiral className="size-10 text-lime -rotate-25" />
            <Spiral className="size-30 text-lime" />
            <Spiral className="size-15 text-lime rotate-99" />
            <SquareSpiral className="size-15 text-orange" />
            <SquareSpiral className="size-25 rotate-120 text-orange" />
            <Exclamation className=" h-50 w-auto text-lime" />
        </>
    );
}

export default App;

import Image from "next/image";
import github from "@/images/github.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex-row">
        <h3 className="inline-block">Fábián Dzserold</h3>
        <a className="inline-block" href="https://github.com/Dzserold">
          <Image
            className=""
            src={github}
            alt="github logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

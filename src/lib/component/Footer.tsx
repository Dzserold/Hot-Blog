import Image from "next/image";
import githubLogo from "@/images/github.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-2 customBorder bg-zinc-950 bg-bg">
      <div className="flex flex-row ">
        <h3 className="inline-block">Fábián Dzserold</h3>
        <a className="inline-block" href="https://github.com/Dzserold">
          <Image
            className="ml-2"
            src={githubLogo}
            alt="github logo"
            width={30}
            height={30}
          />
        </a>
      </div>
      <p className="text-sm">2024</p>
    </footer>
  );
};

export default Footer;

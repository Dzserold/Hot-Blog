import Image from "next/image";
import githubLogo from "@/images/github.svg";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto bg-zinc-950 custom-border flex flex-col justify-center items-center sticky bottom-0 bg-bg p-2">
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

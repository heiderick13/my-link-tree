import "./ProfileCard.css";

import LinkCard from "../LinkCard/LinkCard";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

function Container({ img, alt }) {
  return (
    <div className="profile-card flex flex-col items-center justify-center gap-8 py-5 px-10">
      <img
        className="h-40 w-40 rounded-full ring-2 ring-white mb-12"
        src={img}
        alt={alt}
      />
      <LinkCard
        url={"https://github.com/heiderick13"}
        icon={<FaGithub />}
        social={"Meu Github"}
      />
      <LinkCard
        url={"https://www.linkedin.com/in/marcelo-ferreira-de-oliveira/"}
        icon={<FaLinkedin />}
        social={"Meu Linkedin"}
      />
      <LinkCard
        url={"https://marcelooliveira.vercel.app/"}
        icon={<BsPersonFill />}
        social={"Meu Portifólio"}
      />
    </div>
  );
}

export default Container;

/*
description
forks_count
full_name
name
html_url
language
stargazers_count
 */

import GithubRepoName from "./GithubRepoName";
import "../Stylesheets/GithubRepo.css";
import { IconContext } from "react-icons";
import { TbBrandJavascript, TbBrandPhp, TbBrandPython } from "react-icons/tb";
import { FaJava, FaJs, FaPhp, FaPython } from "react-icons/fa";

const languagesProps = {
  Python: <TbBrandPython />,
  JavaScript: <TbBrandJavascript />,
  PHP: <TbBrandPhp />,
};
const languagesIcons = (lang: string) => {
  switch (lang) {
    case "JavaScript":
      return <FaJs />;
    case "TypeScript":
      return <FaJs />;
    case "Python":
      return <FaPython />;
    case "PHP":
      return <FaPhp />;
    case "Java":
      return <FaJava />;
    case "Processing":
      return <FaJava />;
  }
  return "";
};

const GithubRepo = (props: { data: any }) => {
  console.log(props);
  return props.data.description ? (
    <div className={"github-repo"}>
      <GithubRepoName name={props.data.full_name} link={props.data.html_url} />
      <p>{props.data.description}</p>
      <p>{props.data.language}</p>
      <p>{props.data.stargazers_count}</p>

      <IconContext.Provider value={{ color: "white" }}>
        {languagesIcons(props.data.language)}
      </IconContext.Provider>
    </div>
  ) : null;
};

export default GithubRepo;

import GithubRepo from "./GithubRepo";
import "../Stylesheets/GithubList.css";

const R = require("ramda");

const GithubList = (props: { data: any }) => {
  console.log(props.data);

  return (
    <div className={"github-list-container"}>
      {props.data &&
        R.values(props.data).map((ref: any, i: number) => (
          <GithubRepo data={ref} />
        ))}
    </div>
  );
};
export default GithubList;

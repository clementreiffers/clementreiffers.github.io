import useFetch from "react-fetch-hook";
import { GITHUB_REPO_LIST } from "../Common/url.constants";
import Loading from "./Loading";
import GithubList from "./GithubList";

const Github = () => {
  const { error, data, isLoading } = useFetch(GITHUB_REPO_LIST);

  return (
    <>
      {isLoading && <Loading name={"Github Repo"} />}
      {error && <p>couldn't fetch github repo list : error</p>}
      <div className={"github-list"}>
        <GithubList data={data} />
      </div>
    </>
  );
};

export default Github;

const GithubRepoName = (props: { name: string; link: string }) => (
  <a href={props.link}>
    <h3 className={"github-repo-name"}>{props.name}</h3>
  </a>
);
export default GithubRepoName;

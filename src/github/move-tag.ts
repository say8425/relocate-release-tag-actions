import { Octokit, Tagger } from "@/types";

type MoveTag = {
  octokit: Octokit;
  owner: string;
  repo: string;
  sha: string;
  tagger: Tagger;
  tag: string;
};
export const moveTag = async ({ octokit, owner, repo, tagger, sha, tag }: MoveTag) => {
  await octokit.rest.git.deleteRef({
    owner,
    repo,
    ref: `tags/${tag}`,
  });
  await octokit.rest.git.createTag({
    owner,
    repo,
    tag,
    tagger,
    object: sha,
    type: "commit",
    message: "",
  });
};

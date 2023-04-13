import { moveTag } from "@/github/move-tag";
import { getOctokit } from "@/github/octokit";
import { gitHubActions } from "@/github/tagger";
import { SemverTag } from "@/semver";

export const relocateTag = async ({ majorTag, minorTag }: SemverTag, owner: string, repo: string, sha: string) => {
  const octokit = await getOctokit();

  await moveTag({
    tag: majorTag,
    tagger: gitHubActions,
    octokit,
    owner,
    repo,
    sha,
  });

  await moveTag({
    tag: minorTag,
    tagger: gitHubActions,
    octokit,
    owner,
    repo,
    sha,
  });
};

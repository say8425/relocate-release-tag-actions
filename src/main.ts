import * as core from "@actions/core";
import * as github from "@actions/github";

import { relocateTag } from "@/github";
import { createSemverTag } from "@/semver";

try {
  const {
    ref,
    sha,
    repo: { owner, repo },
  } = github.context;

  const semverTag = createSemverTag(ref);

  await relocateTag(semverTag, owner, repo, sha);
} catch (error) {
  core.setFailed(error as Error | string);
}

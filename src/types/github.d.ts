import { GitHub } from "@actions/github/lib/utils";
import { Endpoints } from "@octokit/types";

export type Octokit = InstanceType<typeof GitHub>;
export type Tagger = Endpoints["POST /repos/{owner}/{repo}/git/tags"]["parameters"]["tagger"];

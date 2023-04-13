import * as core from "@actions/core";
import * as github from "@actions/github";

export const getOctokit = async (githubToken = core.getInput("github_token")) => github.getOctokit(githubToken);

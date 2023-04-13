import { parse } from "semver";

export type SemverTag = {
  minorTag: string;
  patchTag: string;
  majorTag: string;
};
export const createSemverTag = (tag: string): SemverTag => {
  const semverTag = parse(tag);

  if (!semverTag) {
    throw `${tag} is not a valid semver tag`;
  }

  const { major, minor, patch } = semverTag;
  return {
    majorTag: `v${major}`,
    minorTag: `v${major}.${minor}`,
    patchTag: `v${major}.${minor}.${patch}`,
  };
};

import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";

import { createSemverTag } from "@/semver/semver-tag";

describe("semverTag", () => {
  describe("createSemverTag", () => {
    describe("when tag is not a valid semver tag (eg. foobar)", () => {
      it("should throw an error", () => {
        const invalidSemverTag = faker.random.alphaNumeric(10);
        expect(() => createSemverTag(invalidSemverTag)).toThrow(`${invalidSemverTag} is not a valid semver tag`);
      });
    });

    describe.each([faker.system.semver(), `v${faker.system.semver()}`])(
      "when tag is a valid semver tag (eg. v1.2.3 or 1.2.3)",
      (semverTag) => {
        it("should return the major tag (eg. v1)", () => {
          const majorTag = `v${semverTag.split(".")[0].replace("v", "")}`;
          expect(createSemverTag(semverTag).majorTag).toBe(majorTag);
        });

        it("should return the minor tag (eg. v1.2)", () => {
          const minorTag = `v${semverTag.split(".").slice(0, 2).join(".").replace("v", "")}`;
          expect(createSemverTag(semverTag).minorTag).toBe(minorTag);
        });

        it("should return the patch tag (eg. v1.2.3)", () => {
          const patchTag = `v${semverTag.split(".").slice(0, 3).join(".").replace("v", "")}`;
          expect(createSemverTag(semverTag).patchTag).toBe(patchTag);
        });
      },
    );
  });
});

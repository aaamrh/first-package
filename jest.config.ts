import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",

};

export default config;

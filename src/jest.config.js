/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest", // Kasuta ts-jest TypeScripti jaoks
  testEnvironment: "node", // Testide käitamiseks Node.js keskkond
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Töötle TypeScript-faile ts-jest abil
  },
  moduleFileExtensions: ["ts", "tsx", "js"], // Toetatud faililaiendid
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", // Leia testifailid
};
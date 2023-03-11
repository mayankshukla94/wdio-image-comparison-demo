import { join } from "path";

export function getTestOptions() {
  const testOptions = {
    actualFolder: join(process.cwd(), "./.tmp/checkActual"),
    baselineFolder: join(process.cwd(), "./.tmp/actual"),
    diffFolder: join(process.cwd(), "./.tmp/testDiff"),
    returnAllCompareData: true,
  };
  return testOptions;
}

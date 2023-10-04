import type { Config } from '@jest/types'
const jestConfig: Config.InitialOptions = {
  verbose: true,
  maxWorkers: 1,
  // runner: 'jest-serial-runner',
  displayName: "INTEGRATION",
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
//   rootDir: 'src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default jestConfig
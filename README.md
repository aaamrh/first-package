# first-package

- npm init -y
- .gitignore
- 配置 package.json : bugs, repository
- `npm i react typescript @types/react -D`
  - react 也用 -D 是可以防止用户在安装包时必须下载React，这样如果他们的项目已经存在 react 包，就不需要再安装额外的了。 问题来了，我们的package 是react的包，用户没有安装react怎么办
- 把 devDependencies 的 react 复制一份到 peerDependencies, 代表告诉包管理工具，检查 app 是否安装了相关的包。如果没有找到，高版本的 npm 包会自动安装，低版本的（3-6）会显示 warning
- test react component: `npm i -D jest @testing-library/react`
- `npm i -D ts-jest`, 创建 jest.config.ts , 配置支持 ts 语法
- `npm i -D ts-node` jest 需要 ts-node 来读取 ts 配置文件
- `npm i -D jest-environment-jsdom`  jest 默认测试环境是 nodejs, 因此当创建web相关的包的时候需要明确一个类似浏览器环境，安装后在 jest.config.ts 中配置 testEnvironment: 'jsdom'; 然后更新 package.json scripts `test: jest --config jest.config.ts`

------

- 创建 TweetButton.tsx TweetButton.test.tsx, 编写内容
- `npm run test TweetButton.test.tsx`
- git add commit push

------

规范 git 提交

- `npm i -D @commitlint/config-conventional @commitlint/cli`
- 创建 commitlint.config.ts
- `npm i -D husky` 配置 hooks

------

Git Action

Add the Commitlint GitHub Action to your team’s workflow.

- 创建文件 `mkdir .github`
- `mkdir .github/workflows`
- `touch .github/workflows/commitlint.yml`

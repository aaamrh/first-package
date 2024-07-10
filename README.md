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

------

Styling React Components

- index.css 添加样式，并再 TweetButton.tsx 中添加 className
- 现在 jest 测试是会报错, 因为 jest 默认不能处理 css 文件
- `npm i -D jest-transform-css` 可以将 stylesheets 导入到 jest 的 dom 环境中
- 在 jest.config.ts 中添加 `"^.+\\.css$": "jest-transform-css"`

------

Compiling React to JavaScript

```json
  "build": "rimraf dist && npm run build:esm && npm run build:cjs",
  "build:esm": "tsc",
  "build:cjs": "tsc --module commonjs --outDir dist/cjs",
```

------

将组建移到 src/components 中, 并在 tsconfig.json 中添加相应配置

`"include": ["src/**/*"]` `"exclude": ["src/**/*.test.tsx"]`

 define a script for copying the stylesheet to the dist directory during each build

 ``` json
  "build": "rimraf dist && npm run build:esm && npm run build:cjs && npm run copy-files",
  "build:esm": "tsc",
  "build:cjs": "tsc --module commonjs --outDir dist/cjs",
  "copy-files": "cp ./src/index.css dist/",

 ```

------

定义 pkg 的 entry point

现在打包结果有两种格式, 应该使使用软件包的工具意识到它们可以在ES或CommonJS模块之间进行选择。因此，他们可以选择他们支持的一个。

默认情况下，大多数使用软件包的工具都希望在 package.json 的 main 字段中找到一个CommonJS模块

因此，请使用该字段来引用您的CommonJS模块。并将ECMAScript编译添加到该模块属性中。

``` json
"main": "./dist/cjs/TweetButton.js",
"module": "./dist/esm/TweetButton.js",
```

------

指定包含程序包的类型定义的声明文件也是一个很好的做法 `"types": "./dist/esm/TweetButton.d.ts"`

------

本地测试未发布的包

- `npm link` tells NPM to create a symlink (symbolic link) in your system’s global directory that links to your package.

- 创建 nextjs 项目
  - `npx create-next-app@latest`
  - 再创建的额项目下, `npm link package-name`
    - NPM disconnects the symlink automatically whenever you install or uninstall packages. So, remember to re-run thenpm link package-namecommand after installing or uninstalling any library.
  - 在 page.tsx 中使用组件 🎉
  - 再 nextjs 项目下执行 `npm unlink package-name` 会取消link
  - `npm rm --global package-name` 删除全局的 link
  - `npm ls --global package-name` 查看是否删除

------

Creating LICENSE

- 创建 LICENSE 文件

如果你不申请开源许可，所有为你的项目做出贡献的人都会成为他们作品的独家版权所有者。
这意味着没有人可以使用、复制、分发或修改他们的贡献, 你也不行

------

publish to npm

- 在 package.json 中添加 description, keywords, author, homepage
- 声明你想发布的目录 `"files": ["./dist"]`, "main" 字段中的文件, package.json README LICENSE 默认会被包含进去
- `npm publish --dry-run` ，npm 会执行发布包的所有步骤，但不会实际将包上传到 npm , 可以帮助你确保你的 package.json files 配置是否正确, 是否有遗漏; 帮助你预览版本号, 包名等重要信息;
- `npm run test`
- `npm run build`
- `npm login`
- `npm search pkg-name` 确保名字可以用. 我们可以在名字前加个前缀 `@<username>/first-package` 代表包作为 NPM 用户名的一个作用域的发布。
- `npm publish` 恭喜, 报错啦 !!!
  - 如果限定了包的名称, NPM的默认会假设这个有作用域的包是一个私有项目。因此，如果您使用npm publish 发布命令来共享它，就会得到一个错误。因此，要将您的包作为用户名的范围发布，请将——访问=公共标志添加到thenpm发布命令：
  - `npm publish --access=public` 执行
  


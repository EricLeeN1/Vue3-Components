## 什么是 Monorepo

其实很简单,就是一个代码库里包含很多的项目,而这些项目虽然是相关联的,但是在逻辑上是独立的,可以由不同人或者团队来维护

## 为什么要用 pnpm

pnpm 对于包的管理是很方便的,尤其是对于一个 Monorepo 的项目。因为对于我们即将开发的组件库来说可能会存在多个 package(包),而这些包在我们本地是需要相互关联测试的,刚好 pnpm 就对其天然的支持。其实像其它包管理工具,比如 yarn、lerna 等也能做到,但是相对来说比较繁琐。而 pnpm 现在已经很成熟了,像 Vant，ElementUI 这些明星组件库都在使用 pnpm,因此本项目也采用 pnpm 作为包管理工具。

npm install pnpm -g

pnpm init

pnpm add vue@next typescript less -D -w

使用 pnpm 如果要安装在项目根目录下,则需要加-w

根目录 执行 npx tsc --init，自动生成 ts 的配置文件 tsconfig.json

安装插件 pnpm add vite @vitejs/plugin-vue -D -w

pnpm add unplugin-vue-define-options -D -w

pnpm add vite-plugin-dts@1.4.1 -D -w

vite build 打包

前端流程化控制工具 gulp 的使用

npm install --global gulp-cli

pnpm add @types/node -D -w

pnpm add release-it -D -w

npm config set registry https://registry.npm.taobao.org

npm config set registry https://registry.npmjs.org/

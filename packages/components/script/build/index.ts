import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import { pkgPath, componentPath } from "../utils/paths";
import run from "../utils/run";

//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/eric`);
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/easyest/lib/src`))
    .pipe(dest(`${pkgPath}/easyest/es/src`));
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);

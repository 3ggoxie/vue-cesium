# README

`public/libs/cesium` 下拷贝的是 1.104 版本的静态资源，其它版本慎用，仅供快速起项目

这个简易项目会在 `build` 时把 CesiumJS 再次打包到 chunk 文件中，会占用一些时间，但是开发冷启动还是很快的。

`package.json` 中 `cesium` 的版本已经固定为 1.104 版本，为 pnpm、npm、yarn 都关闭了锁文件。
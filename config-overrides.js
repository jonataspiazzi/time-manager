const path = require('path');

module.exports = {
  paths: function (paths, env) {
    paths.appBuild = path.resolve(__dirname, 'dist-render');
    paths.appIndexJs = path.resolve(__dirname, 'src-render/index.tsx');
    paths.testsSetup = path.resolve(__dirname, 'src-render/setupTests.ts');
    paths.proxySetup = path.resolve(__dirname, 'src-render/setupProxy.ts');
    paths.swSrc = path.resolve(__dirname, 'src-render/service-worker.ts');
    paths.appTypeDeclarations = path.resolve(__dirname, 'src-render/react-app-env.d.ts');
    paths.appSrc = path.resolve(__dirname, 'src-render');

    return paths;
  },
}
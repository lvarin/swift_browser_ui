import { sass } from "@stencil/sass";
import { angularOutputTarget, } from "@stencil/angular-output-target";
const angularValueAccessorBindings = [
  {
    elementSelectors: ['c-select', 'c-autocomplete', 'c-content-switcher'],
    event: 'changeValue',
    targetAttr: 'value',
    type: 'select',
  },
];
export const config = {
  namespace: 'cscwebcomponents',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'component-library',
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'docs.json',
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/global.scss',
        'src/styles/variables.css',
        'src/styles/variables.scss',
      ],
    }),
  ],
  extras: {
    experimentalImportInjection: true,
  },
};
//# sourceMappingURL=stencil.config.js.map

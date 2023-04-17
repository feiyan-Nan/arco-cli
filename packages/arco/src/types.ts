import type { WebpackConfigTransformer } from '@arco-cli/aspect/dist/webpack';
import type { TsConfigTransformer } from '@arco-cli/aspect/dist/typescript';
import type { WorkspaceConfig } from '@arco-cli/aspect/dist/workspace';

/**
 * env config transformers allow user to extend
 */
export type ArcoEnvConfig = {
  /**
   * extend config of Jest
   */
  jest?: {
    /**
     * specify the path of Jest config file
     */
    jestConfigPath?: string;
    /**
     * specify the path Jest module for testing
     */
    jestModulePath?: string;
  };
  /**
   * extend config of Webpack bundler
   */
  webpack?: {
    /**
     * extend the webpack config for component preview product
     */
    previewConfig?: WebpackConfigTransformer[];
    /**
     * extend the webpack config for component development
     */
    devServerConfig?: WebpackConfigTransformer[];
  };
  /**
   * extend config of TypeScript compiler
   */
  typescript?: {
    /**
     * specify the module of TypeScript for building
     */
    tsModule?: any;
    /**
     * extend build config for TypeScript
     */
    buildConfig?: TsConfigTransformer[];
  };
  /**
   * extend config of Less compiler
   */
  less?: {
    /**
     * option for less.render function. visit https://lesscss.org/usage/#programmatic-usage
     */
    lessOptions?: Record<string, any>;
    /**
     * whether to combine all raw style files to one
     */
    combine?:
      | boolean
      | {
          /**
           * filename of combined raw style file, which can also be a relative path. default(index.less)
           */
          filename: string;
        };
  };
  /**
   * extend config of Sass compiler
   */
  sass?: {
    /**
     * option for sass.compile function. visit https://sass-lang.com/documentation/js-api/modules#compile
     */
    sassOptions?: Record<string, any>;
    /**
     * whether to combine all raw style files to one
     */
    combine?:
      | boolean
      | {
          /**
           * filename of combined raw style file, which can also be a relative path. default(index.scss)
           */
          filename: string;
        };
  };
};

/**
 * main config of arco workspace
 */
export type ArcoWorkspaceConfig = {
  /**
   * config of workspace aspect
   */
  ['arco.aspect/workspace']?: WorkspaceConfig;
};

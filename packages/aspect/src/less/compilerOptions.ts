import { CompilerOptions } from '@arco-cli/service/distcompiler';

export type LessCompilerOptions = {
  /**
   * option for less.render function
   */
  lessOptions?: Record<string, any>;
} & Partial<CompilerOptions>;

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentType } from 'react';
import type { RenderingContext, PreviewModule } from '@arco-cli/preview';
import { PreviewAspect, PreviewPreview, PreviewRuntime } from '@arco-cli/preview/dist/preview';

import { DocsAspect } from '../docs.aspect';

export type DocsRootProps = {
  componentId: string;
  doc: ComponentType | undefined;
  context: RenderingContext;
  metadata: Record<string, any>;
};

export class DocsPreview {
  static runtime = PreviewRuntime;

  static dependencies = [PreviewAspect];

  static async provider([preview]: [PreviewPreview]) {
    const docsPreview = new DocsPreview();

    preview.registerPreview({
      name: 'overview',
      render: docsPreview.render.bind(docsPreview),
      selectPreviewModel: docsPreview.selectPreviewModel.bind(docsPreview),
    });

    return docsPreview;
  }

  constructor() {}

  selectPreviewModel(componentId: string, modules: PreviewModule) {
    const relevant = modules.componentMap[componentId];
    // only one doc file is supported.
    return relevant?.[0];
  }

  render = (componentId: string, modules: PreviewModule, _include, context: RenderingContext) => {
    const docsModule = this.selectPreviewModel(componentId, modules);
    const docsProps: DocsRootProps = {
      context,
      componentId,
      doc: docsModule?.default,
      metadata: modules.componentMetadataMap[componentId],
    };

    modules.mainModule.default(docsProps);
  };
}

DocsAspect.addRuntime(DocsPreview);

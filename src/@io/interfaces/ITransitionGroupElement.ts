import { IGalleryDataElement } from './IGalleryDataElement';

export interface ITransitionGroupElement extends Partial<IGalleryDataElement> {
  isVisible: boolean;
  nodeRef: React.Ref<HTMLElement | undefined> | undefined;
}

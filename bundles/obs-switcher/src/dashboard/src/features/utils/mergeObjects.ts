import { merge } from 'lodash-es';

// TODO 型定義
const mergeObjects = (...source: MutableArray<unknown>) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  merge({}, ...source);
export default mergeObjects;

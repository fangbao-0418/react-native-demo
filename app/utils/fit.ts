import { Dimensions, PixelRatio } from 'react-native'
const designWidth = 750.0
const designHeight = 1334.0
const screenW = Dimensions.get('window').width
const screenH = Dimensions.get('window').height
const screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW)
const screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH)
const pixelRatio = PixelRatio.get()

/**
 * 设置高度
 * @param {number} size
 * @returns {number}
 */
export function h(size: number): number {
  const scaleHeight = size * screenPxH / designHeight
  // size = Math.round((scaleHeight / pixelRatio + 0.5));
  return scaleHeight
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function w(size: number): number {
  const scaleHeight = size * screenPxW / designWidth
  // size = Math.round((scaleHeight / pixelRatio + 0.5));
  return size / pixelRatio * 2
}
export const info = {
  designWidth,
  designHeight,
  screenW,
  screenH,
  screenPxW,
  screenPxH,
  pixelRatio
}

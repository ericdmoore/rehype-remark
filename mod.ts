/**
 * @typedef {import('hast-util-to-mdast').Context} Context
 * @typedef {import('hast-util-to-mdast').H} H
 * @typedef {import('hast-util-to-mdast').Handle} Handle
 * @typedef {import('./lib/index.js').Options} Options
 * @typedef {import('./lib/index.js').Processor} Processor
 */

export {defaultHandlers, all, one} from './node_modules/hast-util-to-mdast/index.js'
import rhrm from './lib/index.js'
export const rehypeRemark = rhrm
export default rhrm

console.log(rhrm)

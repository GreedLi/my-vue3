/*
 * @Description: Description
 * @Author: Li Zhenxing
 * @Date: 2020-08-26 10:39:47
 * @LastEditors: Li Zhenxing
 * @LastEditTime: 2020-08-26 10:40:10
 */
const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/global-component/prompt')
const componentGeneratorInner = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGeneratorInner)
  plop.setGenerator('global-component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}

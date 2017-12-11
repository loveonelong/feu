/**
 * 构建流程
 * 1、删除dist/目录和该目录下所有文件
 * 2、webpack打包带有版本号的新文件到dist/目录下
 */

const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const package = require('../package.json')

const rootPath = path.resolve(__dirname, '../')
const distPath = rootPath + '/dist'
const packagePath = rootPath + '/package.json'

new Promise((resolve, reject) => {
    // 构建全量压缩包
    let building = ora('building...')
    building.start()
    rm(distPath, err => {
        if (err) throw (err)
        webpack(config, function (err, stats) {
            if (err) throw (err)
            building.stop()
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            resolve()
            console.log(chalk.cyan('  Webpack complete.\n'))
        })
    })
}).then(() => {

    // 修改package.json中的mian
    // let mPackage = package
    // mPackage.main = `dist/${mPackage.name}-${mPackage.version}.min.js`
    // fs.writeFileSync(packagePath, JSON.stringify(mPackage, null, 2), { flag: 'w' })
    // console.log(chalk.cyan('  Build complete.\n'))
}).catch((err) => {
    throw err
})
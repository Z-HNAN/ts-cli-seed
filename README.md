ts-cli-seed
===

使用typescript开发cli，或是开发bundleless包。

使用eslint进行格式化校验，jest进行测试，husky对提交进行格式化校验。

## 主要命令

```bash
# eslint检查项目
npm run lint

# tsc检查项目类型
npm run check-types

# 编译项目
npm run build

# 发布npm包（注意切换.npmrc）
npm run publish
```

## 注意事项

- 修改package.json中包名

- 如果项目用做cli，则需要修改package.json中bin对应的命令名称
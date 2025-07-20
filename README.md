# Pot-App MTranServer 翻译插件

中文 | [English](README_EN.md)

## 使用说明
1. 部署 MTranServer 服务
   - 参考 [MTranServer ReadMe](https://github.com/xxnuo/MTranServer/tree/main#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2) 

2. 安装插件
   - 从 Release 页面下载插件
   - 在 pot app 的*偏好设置 - 服务设置 - 翻译 - 添加外部插件 - 安装外部插件*中安装

3. 设置插件
   - 在 Request Path 中填入 `http://{ip}:{port}`，如果为空，使用默认值 `http://127.0.0.1:8989`
   - 在 API Token 中填入 MTranServer 服务的 token，如果为空，表示无需使用 token

## 支持语言
支持以下语言，请确保 MTranServer 服务安装了相关模型
- 自动检测 (auto)
- 中文简体 (zh-CN)
- 中文繁体 (zh-TW)
- 英语 (en)
- 日语 (ja)
- 韩语 (ko)
- 法语 (fr)
- 西班牙语 (es)
- 俄语 (ru)
- 德语 (de)
- 意大利语 (it)
- 土耳其语 (tr)
- 葡萄牙语 (pt)
- 阿拉伯语 (ar)
- 波斯语 (fa)

## 技术说明
[MTranServer](https://github.com/xxnuo/MTranServer) 是一个超低资源消耗超快的离线翻译服务器，无需显卡。单个请求平均响应时间 50 毫秒。支持全世界主要语言的翻译。

## 许可证
- 本软件使用 [GNU 通用公共许可证 (GPL), 版本 3 或更新版本](LICENSE) 授权。

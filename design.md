# Design — Brian

一个为中文个人网站设定的阅读优先设计系统。首页提供清晰入口，文章与作品页面把重点留给内容本身。

## Genre

Quiet editorial：克制、清晰、耐读。

## Macrostructure family

- 首页：Long Document 的署名式开场与行动入口。
- 内容页：Long Document，使用连续阅读节奏与清晰章节层级。
- 作品页：Portfolio Grid 的项目索引语义，沿用同一排版和色彩。

## Theme

- Paper：暖白与低饱和深色模式。
- Accent：深青色，仅用于链接、交互与局部强调。
- 字体：中文衬线显示字体配中文无衬线正文字体。

## Typography

- Display：`Noto Serif SC`、`Source Han Serif SC`、`STSong`，700，normal。
- Body：`Noto Sans SC`、`Source Han Sans SC`、`Microsoft YaHei`，400。
- 类型、间距、颜色和动效令牌定义在 `assets/css/extended/00-tokens.css`。

## Motion

- 仅使用颜色和位移的短促过渡。
- 减少动态偏好下仅保留不超过 150ms 的过渡。

## What pages share

- 暖白/深色纸张背景、深青强调色与同一字体体系。
- 细分隔线、适度圆角、无投影卡片。
- 阅读优先的行高、章节节奏和可见焦点状态。

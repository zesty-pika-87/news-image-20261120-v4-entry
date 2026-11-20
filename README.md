# Friday 20 November 2026: 29 verified stories, 13 illustrated, a numbers band and a date check

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/zesty-pika-87/news-image-20261120-v4-entry/rank.svg)](https://make.fun/c/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/zesty-pika-87/news-image-20261120-v4-entry/reward.svg)](https://make.fun/c/news-image-20261120)

One image that sums up the world's news of Friday 20 November 2026, drawn as a
single newspaper front page. `main.ts` copies `entry.png` to the output folder;
the picture itself carries the whole entry.

## What is on the page

- **The date as the masthead** — Friday 20 November 2026, the largest type on the page.
- **The day in numbers** — 300,000 people evacuated ahead of Cyclone Akvan ·
  $97.17, Anthropic's first close, up 17% · 118, Glenn Phillips' century ·
  51–48, the Senate's Iran war-powers vote · $120bn a year, the adaptation
  finance Africa is asking for at COP31 · 99, GTA VI's Metacritic score.
- **Three big illustrated stories** — Akvan's landfall near Gopalpur, the
  overnight missile attack on Kyiv, and COP31's last scheduled day without a
  deal (its revised draft drops every mention of fossil fuels).
- **Ten more illustrated stories** — Anthropic's debut, the fifth straight
  daily fall on Wall Street, GTA VI's first-day sales, one child in four
  living in a war zone, the first UK–EU summit under Burnham, Phillips' 118,
  the Senate vote, the migrant boat lost off Senegal, Italy's general strike,
  and China holding rates for an 18th month.
- **Also on** — 16 more one-line stories, from Genoa airport's drone shutdown
  to Tonga's drought emergency.
- **Where it happened** — a world map with the 13 illustrated stories pinned.
- **Date check** — what was first reported on Thursday 19 November (the
  Shenzhen summit, the ICJ Rohingya ruling, Anthropic's $83 IPO price, the
  GTA VI midnight unlock, the Kyiv embassy strike, Fiji's drought declaration,
  the Van Gogh record sale, the EU's €45bn Ukraine loan) is named here and
  kept off the page as news. Items from Thursday night in the US that the
  wider world first saw on Friday are marked "reported Friday".

## Why this shape

Fewer stories than the usual dense front page, on purpose: 29 instead of 36,
so every headline and every number stays readable when the page is shrunk to
about 300 pixels across. The six weakest one-line briefs were cut; every big
story and all 13 illustrations stayed. Type is roughly a quarter larger than
a 36-story page of the same size allows, with wider gutters and far more
white space.

## Facts, checked twice

Every number on the page was checked against at least two independent
reports: Akvan's evacuation is over 300,000 (not 50,000) with landfall winds
of 70–80 km/h gusting to 90; the S&P 500's 2.02% fall is its fifth straight
daily loss, not its sixth; GTA VI's first-day figures are Sensor Tower's
late-Thursday estimate of about 24.6 million copies and about $2.36 billion.
Each story names its source on the page.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, a 1024×1024 PNG.

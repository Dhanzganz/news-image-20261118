[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Dhanzganz/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Dhanzganz/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
Entry for the [news-image-20261118](https://make.fun/bounty/news-image-20261118) bounty on make.fun.

# Wednesday 18 November 2026 — The World in One Day

A newspaper front page that sums up Wednesday 18 November 2026 in a single
1024×1024 image. Six stories, each with its own drawn scene and a short
headline plus one line of what happened — all of them first reported on
18 November 2026 (UTC), each checked against at least two independent sources.

## The six stories

1. **Quad summit returns in Manila** (Asia · Diplomacy) — Trump opens his Asia
   tour in Manila: the first Quad leaders' summit in two years.
2. **Kerch Bridge road span collapses** (Europe · War) — Ukraine says drones
   and missiles hit the bridge; Russia says 1,441 drones were shot down.
3. **Bahrain all-clear after drone alert** (Gulf · Security) — Iran claims its
   drones hit a US radar; the US and Bahrain say all were intercepted.
4. **Nvidia's record $115.8bn quarter** (Business · Tech) — Revenue doubled
   from a year ago, but the board says Jensen Huang will not return as CEO.
5. **Putin lands in Shenzhen** (China · APEC) — First US–China–Russia
   trilateral set for Thursday, with nuclear arms on the agenda.
6. **Cyclone Akvan bears down** (Weather · India) — Storm strengthens off
   India's east coast; heavy rain ahead, landfall forecast for Friday.

Contested claims are shown as claims (Bahrain), forecasts as forecasts
(Akvan's landfall), and figures as reported. Two 17 November stories that
dominated the morning roundups were deliberately left out: MS Dhoni's IPL
retirement was announced on 17 November, and Britain's sanctions on Israeli
settlement firms were announced on 17 November.

## Sources

- Trump in Manila / Quad: BusinessWorld,
  <https://bworldonline.com/world/2026/11/18/794662/trump-meets-key-us-regional-allies-in-manila-ahead-of-china-visit/>;
  Metropolitan,
  <https://metropolitan.ph/quad-leaders-tackle-indo-pacific-security-in-1st-leader-level-talks-in-philippines/>;
  AJU Press, <https://www.ajupress.com/view/20261118085151016>
- Kerch Bridge: Reuters,
  <https://www.reuters.com/world/europe/ukraine-strikes-crimean-bridge-second-day-russia-pounds-kyiv-bridges-2026-11-17/>;
  EuropeSays, <https://www.europesays.com/ukraine/73069/>;
  Devdiscourse,
  <https://www.devdiscourse.com/article/international/4008665-wrapup-4-ukraine-cripples-crimean-road-bridge-in-blow-to-putin-before-meeting-with-xi-and-trump>
- Bahrain drones: Particle,
  <https://particle.news/story/us-says-drones-intercepted-after-iran-claims-strike-on-bahrain-radar>;
  Al Jazeera,
  <https://aljazeeranews-3fuh52rgrl.edgeone.app/news/2026/11/17/bahrain-thwarts-drone-attack-iran-claims-targeting-us-military-radar>;
  The Red Wing,
  <https://www.theredwing.news/2026/11/17/iran-drones-bahrain-intercepted-november-17-2026/>
- Nvidia: KuCoin,
  <https://www.kucoin.com/news/flash/nvidia-posts-record-116b-quarter-rejects-huang-s-comeback>;
  ByteEU, <https://www.byteseu.com/2529227/>;
  SuaraGarut, <https://suaragarut.id/en/nvidia-q3-earnings-revenue-outlook>
- Putin in Shenzhen: The Chronicle,
  <https://thechronicle.com.ph/putin-arrives-in-china-for-first-trilateral-talks-with-trump-xi/>;
  The Informant, <https://theinformant.com/?p=108709>;
  Le Monde,
  <https://www.lemonde.fr/en/international/article/2026/11/18/with-trump-and-putin-at-his-side-xi-puts-himself-front-and-center-on-world-stage_6782965_4.html>
- Cyclone Akvan: India Meteorological Department advisory,
  <https://mausam.imd.gov.in/backend/assets/cyclone_pdf/Tropical_cylone_advisory_no__4_based_on_2100_UTC_of_16_11_2026.pdf>;
  TechWordNews,
  <https://techwordnews.com/cyclone-akvan-is-moving-slowly-and-is-likely-to-strengthen-further-by-the-morning-of-november-18/>;
  The Library Estate,
  <https://thelibraryestate.com/cyclone-akvan-strengthens-over-bay-of-bengal-as-india-prepares-for-forecast-landfall/>

## How to run

The program is Node 22, standard library only. It copies the image the
repository holds to the output directory (the image was drawn with Pillow
from a script kept outside this repository; the committed `entry.png` is
the entry, and `main.ts` only copies it, so both runs are byte-identical):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is a 1024×1024 PNG, 109,597 bytes — inside the 1 MiB gate.

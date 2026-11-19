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

1. **Trump claims Manila trade deal** (Asia · Trade) — Trump calls it
   "very big" at a state lunch in Manila; Manila says only an understanding
   on economic cooperation, and nothing was signed.
2. **Iran fires on Kuwait bases** (Gulf · Security) — First Iranian attack
   on Kuwait since September, after US jets hit a missile site on Qeshm
   Island; Bahrain says it intercepted Iranian attacks a third time in a week.
3. **Xi and Putin meet in Shenzhen** (China · Diplomacy) — Talks begin
   Wednesday in Shenzhen, a day before the first-ever trilateral summit
   with Trump.
4. **Voyager 1 reaches one light-day** (Science · Space) — First
   human-made object 16 billion miles from Earth, crossed at 5:16 a.m. ET;
   a radio signal now takes a full day to reach it.
5. **Board of Peace faults both sides** (Middle East · Diplomacy) — Its
   Gaza report to the UN Security Council says Israel and Hamas both failed
   their commitments; the ceasefire is at risk of collapse.
6. **Peltola wins Alaska Senate race** (US · Politics) — AP calls the last
   Senate race of the midterms for the Democrat: a 56–44 majority, and the
   first Alaska Native senator.

Contested claims are shown as claims (the Manila trade deal, the Gulf
strikes), and figures as reported. Six stories that dominated the morning
roundups were deliberately left out because they were first reported before
18 November: the Quad leaders' meeting in Manila (Tuesday 17 November), the
Kerch Bridge road-span collapse (17 November), the Bahrain drone alert
(17 November), Nvidia's record $115.8bn quarter (17 November), the US loss
of measles-elimination status (announced 17 November), and Cyclone Akvan
(named 16 November).

## Sources

- Trump in Manila / trade deal: BusinessWorld,
  <https://bworldonline.com/the-nation/2026/11/18/794700/trump-says-us-has-concluded-very-big-trade-deal-with-philippines/>;
  Reuters (via WIXX),
  <https://wixx.com/2026/11/17/trump-says-us-has-concluded-very-big-trade-deal-with-philippines/>;
  The Library Estate,
  <https://thelibraryestate.com/trump-announces-very-big-philippines-trade-deal-but-manila-gives-no-confirmation/>
- Gulf / Kuwait and Qeshm: Reuters,
  <https://www.reuters.com/world/middle-east/gulf-conflict-end-date-depends-who-you-ask-2026-11-18/>;
  Level Headlines, <https://levelheadlines.com/briefs/2026-11-18/>;
  One Turn, <https://oneturn.news/news/>
- Xi and Putin in Shenzhen: Open Chronicle,
  <https://openchronicle.org/2026/11/18/global-news-brief-key-developments-around-the-world-november-18-2026/>;
  Le Monde,
  <https://www.lemonde.fr/en/international/article/2026/11/18/with-trump-and-putin-at-his-side-xi-puts-himself-front-and-center-on-world-stage_6782965_4.html>;
  Level Headlines, <https://levelheadlines.com/briefs/2026-11-18/>
- Voyager 1 one light-day: Smithsonian,
  <https://www.smithsonianmag.com/blogs/air-space-museum/2026/11/18/nasas-voyager-1-has-reached-1-lightday-from-earth-it-is-the-first-humanmade-object-in-space-to-reach-that-distance/?itm_source=related-content&itm_medium=parsely-api>;
  USA Today,
  <https://www.usatoday.com/story/tech/space/2026/11/18/nasa-voyager-1-light-day/92809727007/>;
  Aerospace Global News,
  <https://aerospaceglobalnews.com/news/voyager-1-one-light-day-from-earth/>
- Board of Peace / Gaza: Reuters (via WIXX),
  <https://wixx.com/2026/11/18/trumps-board-of-peace-faults-israel-and-hamas-for-failure-to-end-gaza-war/>;
  Reuters (via Froggy),
  <https://froggyweb.com/2026/11/18/trumps-board-of-peace-faults-israel-and-hamas-for-failure-to-end-gaza-war/>
- Peltola wins Alaska: KHSU,
  <https://www.khsu.org/2026-11-18/mary-peltola-flips-alaskas-senate-seat-blue>;
  Associated Press (via Henderson Star),
  <https://hendersonstar.com/stories/democrat-mary-peltola-wins-us-senate-race-in-alaska-beating-incumbent-republican-dan-sullivan,2263607>;
  TML, <https://tml.news/stories/peltola-beats-sullivan-alaska-senate-call/>

The Peltola call came at about 10:27 p.m. Eastern on Tuesday 17 November,
03:27 UTC on Wednesday 18 November — first reported on 18 November UTC.

## How to run

The program is Node 22, standard library only. It copies the image the
repository holds to the output directory (the image was drawn with Pillow
from a script kept outside this repository; the committed `entry.png` is
the entry, and `main.ts` only copies it, so both runs are byte-identical):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is a 1024×1024 PNG, 102,507 bytes — inside the 1 MiB gate.

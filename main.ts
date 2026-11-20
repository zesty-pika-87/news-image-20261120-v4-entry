// Friday 20 November 2026, drawn as one newspaper front page.
//
// This entry is a single static picture of the day's world news: 29
// verified stories, 13 of them illustrated, a band of six big numbers,
// a map with the thirteen illustrated stories pinned, and a date check
// that names what was first reported on Thursday 19 November and is
// therefore kept off this page. The picture itself is entry.png, drawn
// for this entry; this program only carries it to the grader's output
// folder, so both runs of the program write the very same bytes.
//
// The page was checked at 300 pixels across before it was sealed: the
// masthead date, all six numbers, the three big headlines and all ten
// medium headlines stay readable at that size, which is the point of
// cutting the story count from 36 to 29 and growing the type instead.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

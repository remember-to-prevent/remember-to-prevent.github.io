import { ch1 } from "./chapters/ch1";
import { ch2 } from "./chapters/ch2";
import { ch3 } from "./chapters/ch3";
import { ch4 } from "./chapters/ch4";
import { ch5 } from "./chapters/ch5";
import { ch6 } from "./chapters/ch6";
import { timelineWwi } from "./data/timeline-wwi";
import { timelineWwii } from "./data/timeline-wwii";
import { casualties, holocaust, hunger } from "./data/casualties";
import { patterns } from "./data/patterns";
import { actions } from "./data/actions";
import { oneMinute } from "./data/one-minute";
import { mapWwi, mapWwii } from "./data/theaters";

export const chapters = [ch1, ch2, ch3, ch4, ch5, ch6] as const;

export {
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  timelineWwi,
  timelineWwii,
  casualties,
  holocaust,
  hunger,
  patterns,
  actions,
  oneMinute,
  mapWwi,
  mapWwii,
};

import type { OneMinuteContent } from "@/content/types";

/**
 * One Minute to Remember — copy (Task 4-c, full bilingual rewrite).
 *
 * Design constraints honored in the wording:
 * - Optional and user-initiated only; the invitation is sensitive and never
 *   guilt-based; skipping is explicitly blessed (skipLabel + a11y.skipped).
 * - aboutTradition[0]: Armistice took effect 11:00, 11 November 1918; silences
 *   at that hour are observed in many countries — duration and form differ by
 *   country and institution (often two minutes; not universal).
 * - aboutTradition[1]: this project is independent — not affiliated with,
 *   endorsed by, or an official publication of the RSL or any remembrance
 *   organization; this feature is not the only or "correct" practice.
 * - aboutTradition[2]: participation is optional and unrecorded; silence does
 *   not prevent conflict — it makes room to remember those who bore the costs.
 * - completionMessage: gentle bridge to Chapter 06 (link rendered by the UI).
 * - a11y strings: short, informative screen-reader announcements.
 */
export const oneMinute: OneMinuteContent = {
  title: { en: "One Minute to Remember", zh: "一分鐘追思" },
  invitation: {
    en: "An optional minute of silence, in the tradition of remembrance. It is an invitation, never an obligation — you can begin it, pause it, restart it, or skip it without apology. Silence itself does not prevent conflict; it only makes room to remember the people who bore its costs.",
    zh: "依追思傳統而設、完全出於自願的一分鐘靜默。這是一份邀請，絕非義務——你可以開始、暫停、重新開始，或毫無歉意地略過。靜默本身並不能防止衝突；它只是騰出空間，記起那些承擔了代價的人。",
  },
  startLabel: { en: "Begin the minute", zh: "開始這一分鐘" },
  pauseLabel: { en: "Pause", zh: "暫停" },
  resumeLabel: { en: "Resume", zh: "繼續" },
  restartLabel: { en: "Restart", zh: "重新開始" },
  skipLabel: { en: "Skip the minute", zh: "略過這一分鐘" },
  remainingLabel: { en: "Time remaining", zh: "剩餘時間" },
  aboutTradition: [
    {
      en: "The Armistice of the First World War took effect at 11:00 on 11 November 1918. Many countries later came to observe a silence at that hour to remember the war's dead; how long that silence lasts, and how it is kept, differs by country and institution — two minutes is common, but it is not universal.",
      zh: "第一次世界大戰的停戰協定，於1918年11月11日上午11時生效。許多國家後來在這個時刻舉行靜默，追思戰歿者；靜默的長短與形式，依國家與機構而異——兩分鐘常見，但並非通例。",
    },
    {
      en: "This project is independent. It is not affiliated with, endorsed by, or an official publication of the RSL or any other remembrance organization, and this feature is not presented as the only or “correct” way to remember. It is one small, optional practice offered in the spirit of an older one.",
      zh: "本計畫為獨立專案，與澳洲退伍軍人聯盟（RSL）或任何其他追思組織，均無從屬、背書或官方出版關係；此功能也不應被視為唯一或「正確」的追思方式。它只是以舊傳統的精神，提供的一個小小的、可選的實踐。",
    },
    {
      en: "Participation is entirely optional, and nothing about it is recorded or stored. One minute here will not prevent anything, and this page will not pretend otherwise — silence does not stop conflict; it makes room to remember those who bore its costs.",
      zh: "參與完全出於自願，過程不做任何記錄或儲存。這裡的一分鐘不會阻止任何事情，本頁也不會假裝相反——靜默不能止戰；它只是騰出空間，記起那些承擔戰爭代價的人。",
    },
  ],
  completionMessage: {
    en: "Thank you — and if you skipped it, that is fine too. Remembrance is where this journey began; the next chapter is about what one person can carry from it into ordinary days.",
    zh: "謝謝——若你是略過的，那也完全沒有關係。追思是這趟旅程的起點；下一章要談的，是一個人能把什麼帶回尋常的日子。",
  },
  a11y: {
    started: { en: "The minute of remembrance has started.", zh: "追思的一分鐘已開始。" },
    paused: { en: "The minute is paused.", zh: "一分鐘已暫停。" },
    resumed: { en: "The minute has resumed.", zh: "一分鐘已繼續。" },
    complete: { en: "The minute is complete.", zh: "一分鐘已完成。" },
    skipped: { en: "The minute was skipped — no problem at all.", zh: "已略過這一分鐘——完全沒有關係。" },
    secondsRemaining: { en: "seconds remaining", zh: "秒，剩餘時間" },
  },
};

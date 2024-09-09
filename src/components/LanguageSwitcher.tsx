"use client";
import {
  availableLanguageTags,
  AvailableLanguageTag,
  languageTag,
} from "@/paraglide/runtime";
import { usePathname, useRouter } from "@/lib/i18n";
import { Route } from "next";

export function LanguageSwitcher() {
  const pathname = usePathname() as Route;
  const router = useRouter();

  const labels: Record<AvailableLanguageTag, string> = {
    en: "🇬🇧 English",
    uk: "🇺🇦 Українська",
  };

  return (
    <select
      className="bg-transparent"
      value={languageTag()}
      onChange={(e) =>
        router.push(pathname, {
          locale: e.target.value as AvailableLanguageTag,
        })
      }
    >
      {availableLanguageTags.map((lang) => (
        <option key={lang} value={lang}>
          {labels[lang]}
        </option>
      ))}
    </select>
  );
}

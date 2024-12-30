import {
  Language,
  languages,
  PathToValue,
  TranslationParams,
  TranslationPaths,
} from "@/shared/config/i18n";
import React, { useState, ReactNode } from "react";
import { I18nContext } from "@/shared/context/i18n/I18nContext";

const translations = languages;

export const I18nProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ru");

  const t = <K extends TranslationPaths<(typeof translations)[Language]>>(
    key: K,
    vars?: TranslationParams<PathToValue<(typeof translations)[Language], K>>
  ): string => {
    const translation = key
      .split(".")
      .reduce(
        (acc, part) => (acc as any)[part],
        translations[currentLanguage]
      ) as unknown as string;

    if (vars) {
      return Object.keys(vars).reduce(
        (str, varKey) => str.replace(`{${varKey}}`, (vars as any)[varKey]),
        translation
      );
    }

    return translation || key;
  };

  return (
    <I18nContext.Provider
      value={{ t, setLanguage: setCurrentLanguage, currentLanguage }}
    >
      {children}
    </I18nContext.Provider>
  );
};

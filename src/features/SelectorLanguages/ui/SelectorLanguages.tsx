import { ISelectorLanguages } from "../types";
import cls from "./SelectorLanguages.module.scss";
import React, { useContext, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { I18nContext } from "@/shared/context/i18n/I18nContext";

interface I18nContextValue {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export const SelectorLanguages: React.FC<ISelectorLanguages> = ({
  className,
}) => {
  const { currentLanguage, setLanguage } =
    useContext<I18nContextValue>(I18nContext);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [setLanguage]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleChange}
      className={classNames([cls.SelectorLanguages, className])}
    >
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="uz">Uzbek</option>
    </select>
  );
};

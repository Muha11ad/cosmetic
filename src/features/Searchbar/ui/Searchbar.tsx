import { FC } from "react";
import cls from "./Searchbar.module.scss";
import { TextInput } from "@/shared/ui/input";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "@/shared/hooks/useTranslation";

interface SearchbarProps {
  className?: string;
  onUpdate: (value: string) => void;
}

export const Searchbar: FC<SearchbarProps> = (props: SearchbarProps) => {
  const { t } = useTranslation();
  const { className, onUpdate, ...others } = props;

  return (
    <TextInput
      size="xl"
      view="normal"
      type="search"
      onUpdate={onUpdate}
      placeholder={t("page.home.searchInput")}
      className={classNames([cls.Searchbar, className])}
      {...others}
    />
  );
};

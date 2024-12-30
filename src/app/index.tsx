import "./styles/index.scss";
import { AppProps } from "next/app";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import { BaseLayout } from "@/widgets/layouts";
import { ThemeProvider } from "@gravity-ui/uikit";
import { I18nProvider } from "@/shared/providers/i18nProviders";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme="light">
      <I18nProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </I18nProvider>
    </ThemeProvider>
  );
}

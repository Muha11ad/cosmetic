import { FooterMenu } from "@/widgets/FooterMenu";
import { PropsWithChildren } from "react";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="main">
        {children}
        <FooterMenu />
      </main>
    </>
  );
};

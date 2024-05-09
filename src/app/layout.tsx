import type { Metadata } from "next";

import StyledComponentsRegistry from './registry'
import { Body } from "./globalStyles";
import Head from "next/head";
import { DefaultMeta } from "./metaDefaults";

export const metadata: Metadata = DefaultMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{"overflow":"hidden"}}>
      <StyledComponentsRegistry>
        <Body>
          {children}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3821979167237241"
            crossOrigin="anonymous"
          ></script>
        </Body>
      </StyledComponentsRegistry>
    </html>
  );
}

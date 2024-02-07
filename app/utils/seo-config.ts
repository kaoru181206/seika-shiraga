import { Metadata } from "next";

const siteName = "Seika Shiraga - Official Website";
const description = "\"Turning femininity into strength\"をコンセプトに伝統的な女性の美しさを尊重しながら、強さに変えるセンシュアルでタイムレスなデザインを提案。\n工場の残糸を使用し、家庭用編み機で１つ１つ丁寧に編んだハンドメイドニットや産地の生地に拘った布帛アイテムを販売しています。";
const url = "https://seika-shiraga.vercel.app/";

export const SEO_DEFAULT: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
};
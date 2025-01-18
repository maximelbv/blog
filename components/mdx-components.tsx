import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import CustomImage from "./custom-image";
import AutoplayVideo from "./autoplay-video";
import CustomLink from "./custom-link";
import Step from "./step";
import KeyboardKey from "./keyboard-key";
import ColorLegend from "./color-legend";
import SpacerS from "./spacer-s";
import SpacerM from "./spacer-m";
import SpacerL from "./spacer-l";
import SpacerXS from "./spacer-xs";
import Quizz from "./quizz";
import FadeIn from "./fade-in";
import PerlinNoiseGenerator from "./perlin-generator";
import ImagesGrid from "./images-grid";
import BarChartRandom from "./bar-chart-random-values";
import BarChartProcedural from "./bar-chart-procedural";
import ShowcaseWebsiteSection from "./showcase-website-section";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  CustomImage,
  CustomLink,
  AutoplayVideo,
  Callout,
  Step,
  KeyboardKey,
  ColorLegend,
  SpacerXS,
  SpacerS,
  SpacerM,
  SpacerL,
  Quizz,
  FadeIn,
  PerlinNoiseGenerator,
  ImagesGrid,
  BarChartRandom,
  BarChartProcedural,
  ShowcaseWebsiteSection,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

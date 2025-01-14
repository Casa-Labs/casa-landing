"use client";

import { Bona_Nova } from "next/font/google";
import { cn } from "@/lib/utils";

const bonaNova = Bona_Nova({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  classStyle?: string;
};

const Title = ({ classStyle }: Props) => {
  return (
    <span className={cn(`${bonaNova.className} ${classStyle} `)}>CASA</span>
  );
};

export default Title;

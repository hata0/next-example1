"use client";

import { Custom401 } from "../401";
import { Custom500 } from "../500";

type Props = {
  status: number;
};
export const CheckError = ({ status }: Props) => {
  if (status === 401) {
    return <Custom401 />;
  } else {
    return <Custom500 />;
  }
};

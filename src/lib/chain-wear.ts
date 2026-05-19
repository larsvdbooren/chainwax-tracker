import { Chain } from "./types";
import { bikes } from "@/lib/mock-data";

export default function getWaxWear(
  rotationDistance: number,
  maxRotationDistance: number,
) {
  let level: "ok" | "warning" | "overdue" = "ok";
  const percent: number = Number(
    ((rotationDistance / maxRotationDistance) * 100).toFixed(0),
  );

  if (percent < 75) {
    level = "ok";
  } else if (percent >= 75) {
    level = "warning";
  } else {
    level = "overdue";
  }
  return { level, percent };
}

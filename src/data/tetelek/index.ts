import type { Tetel } from "../../lib/types";
import { atheniDemokraciaTetel } from "./atheni-demokracia";
import { iszlamTetel } from "./iszlam";

export const tetelekList: Tetel[] = [atheniDemokraciaTetel, iszlamTetel];

export function getTetelBySlug(slug: string): Tetel | undefined {
  return tetelekList.find((t) => t.slug === slug);
}

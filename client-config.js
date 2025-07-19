import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '4ltxt25w',
  dataset: 'production',
  useCdn: false,
});
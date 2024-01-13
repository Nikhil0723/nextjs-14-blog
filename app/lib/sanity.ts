import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; // Import the correct module
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'jcglhuul',
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}

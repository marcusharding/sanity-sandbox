import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: 'gf6pa0yr', 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: true, 
   ignoreBrowserTokenWarning: true
});
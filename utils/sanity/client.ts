import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: 'm9kr2eer', 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: true, 
   ignoreBrowserTokenWarning: true
});
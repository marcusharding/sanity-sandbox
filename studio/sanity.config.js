import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const sanityPreview = 'skn2H30YylmoJaE83LBlmdQtaF8sbCGLFpX7ILFhbAR4zhQ1Lw2eGAvDpiQIvIy2gUPkuPk51rK6pprMYqSkD5Fznfe1cnRhvHNJRgI0TvWlHgX8f8JIQRax3rY5la4JZvRGALM6TVCOeZXSSwx7XWTihVBXp4dJIiA45FlmSwUSOOcD4WXu';

export default defineConfig({
  name: 'default',
  title: 'sandbox',

  projectId: 'l202cs32',
  dataset: 'production',

  preview: {
    projectId: 'l202cs32',
    dataset: 'production',
    token: sanityPreview,
    useCdn: false,
    withCredentials: true,       
    perspective: 'raw'        
  },

  document: {
    productionUrl: async (prev, context) => {

      // context includes the client an other details
        
      const { document} = context;            
      const localUrl = 'http://localhost:3000';
      const baseUrl = (window.location.hostname === 'localhost') ? localUrl : remoteUrl;      
      const params = new URLSearchParams();

      params.set('secret', sanityPreview);          
      params.set('preview', 'true');                    

      switch (document._type) {

        default:
          return null;
        case 'home':
          return `${baseUrl}?${params}`;                  
      }
    }
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

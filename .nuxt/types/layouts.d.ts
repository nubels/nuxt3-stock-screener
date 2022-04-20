import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "footer" | "header"
declare module "/Users/nubels/Developer/personal-projects/nuxt3-stock-screener/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
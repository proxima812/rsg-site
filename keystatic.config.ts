import { pages } from "@/fields/pages"
import { products } from "@/fields/products"
import { config } from "@keystatic/core"

export default config({
	// storage: {
	// 	kind: "cloud",
	// },
	// cloud: {
	// 	project: "rsg-valve/rsg-valve-kz",
	// },
	// storage: {
	// 	kind: "github",
	// 	repo: "proxima812/rsg-valve-kz",
	// },

	storage: {
		kind: "local",
	},
	collections: {
		products,
		pages,
	},
})

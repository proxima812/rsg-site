import { collection, fields } from "@keystatic/core"

export const products = collection({
	label: "Товары",
	slugField: "title",
	path: "src/data/products/*",
	columns: ["title", "pubDate"],
	entryLayout: "content",
	format: { contentField: "content" },
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
		}),
		ogImage: fields.image({
			label: "Фото товара",
			directory: "src/assets/images/products",
			publicPath: "../../assets/images/products/",
		}),
		content: fields.mdx({
			label: "Контент",
		}),
		pubDate: fields.date({
			label: "Время",
			description: "Время публикации",
		}),
		// keyswords: fields.text({
		// 	label: "",
		// }),
	},
})

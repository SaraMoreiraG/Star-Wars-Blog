const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			vehicles: [],
			planets: [],
		},

		actions: {
			loadData: async () => {
				const store = getStore();

				fetch('https://www.swapi.tech/api/people')
				.then(response => response.json())
				.then(data => setStore({ people: data.results }))

				fetch('https://www.swapi.tech/api/vehicles')
				.then(response => response.json())
				.then(data => setStore({ vehicles: data.results }))

				fetch('https://www.swapi.tech/api/planets')
				.then(response => response.json())
				.then(data => setStore({ planets: data.results }))
			},

			getCharacter: async (url) => {
				const store = getStore();

				fetch (url)
				.then(response => response.json())
				.then(data => setStore({ character: [...store.character, data.result.properties] }))

			},

			// getCharacterDescription: async url => {
			// 	const store = getStore();
			// 	const settings = {
			// 		method: "GET",
			// 		headers: { "Content-Type": "application/json" }
			// 	};

			// 	const request = await fetch(url, settings);
			// 	const json = await request.json();
			// 	const data = json;
			// 	setStore({ character: [...store.character, data.result.properties] });
			// },

			// charDescription: url => {
			// 	getActions().getCharacterDescription(url);
			// },
		}
	};
};

export default getState;

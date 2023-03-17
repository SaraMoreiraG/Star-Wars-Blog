const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			characteres: [],
			vehicles: [],
			vehicle: [],
			planets: [],
			planetInfo: [],
			favorites: [],
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

			getCharacteres: async (url) => {
				const store = getStore();

				fetch (url)
				.then(response => response.json())
				.then(data => setStore({ characteres: [...store.characteres, data.result.properties] }));

			},

			getPlanets: async (url) => {
				const store = getStore();

				fetch (url)
				.then(response => response.json())
				.then(data => setStore({ planetInfo: [...store.planetInfo, data.result.properties] }));
			},

			saveFavorite: (name) => {
				const store = getStore();

				setStore({favorites : [...store.favorites, name]});
				this.innerText = 'More';
			},

			deleteFavorite: (key) => {
				const store = getStore();

				setStore(store.favorites.splice(key, 1));
			}
		}
	};
};

export default getState;

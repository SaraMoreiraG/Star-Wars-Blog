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

				// fetch('https://www.swapi.tech/api/people')
				// .then(response => response.json())
				// .then(data => setStore({ people: data.results }))
				// .then(data => localStorage.setItem('people', JSON.stringify(data.results)));

				try {
					const response = await fetch(
						'https://www.swapi.tech/api/people'
					);
					const data = await response.json();
					localStorage.setItem('people', JSON.stringify(data.results));
					setStore({ people: data.results });
				} catch (err) {
					console.log(err);
				}
				fetch('https://www.swapi.tech/api/vehicles')
				.then(response => response.json())
				.then(data => setStore({ vehicles: data.results }))

				// fetch('https://www.swapi.tech/api/planets')
				// .then(response => response.json())
				// .then(data => setStore({ planets: data.results }))
			},

			getCharacteres: async (id) => {
				const store = getStore();

				try {
					const response = await fetch(
						'https://www.swapi.tech/api/people/' + id
					);
					const data = await response.json();
					localStorage.setItem(('Character' + id), JSON.stringify(data.result.properties));
					setStore({ characteres: data.results });
				} catch (err) {
					console.log(err);
				}

			},

			// getPlanets: async (url) => {
			// 	const store = getStore();

			// 	fetch (url)
			// 	.then(response => response.json())
			// 	.then(data => setStore({ planetInfo: [...store.planetInfo, data.result.properties] }));
			// },

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

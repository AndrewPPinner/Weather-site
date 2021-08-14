const app = Vue.createApp({
    data() {
        return {
            weather: '',
            zipcode: '',
            city: '',
            humidity: '',
            tempLow: '',
            tempHigh: '',
            tempCurrent: '',
            tempFeel: '',
            forcastData: ''
        }
    },
    methods: {
        getWeather(zip) {
            axios
                .get('https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&appid=d1172525e77aebbb79846bda52cf2b23')
                .then(response => (console.log(response), this.weather = "Weather: " + response.data.weather[0].description, this.city = "City of " + response.data.name + " Weather", this.tempLow = "Low: " + response.data.main.temp_min + "F", this.tempHigh = "High: " + response.data.main.temp_max + "F", this.tempCurrent = "Current Temp: " + response.data.main.temp + "F", this.tempFeel = "Real Feel: " + response.data.main.feels_like + "F", this.humidity = "Humidity: " + response.data.main.humidity + "%"))
                .catch(error => (console.log(error)))
            },
        getForcast(zip) {
            axios
                .get("https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&appid=d1172525e77aebbb79846bda52cf2b23")
                .then(castResponse => (console.log(castResponse), this.forcastData = "Work in Progress"))
                .catch(castError => console.log(castError))
        }
    }
})


app.mount('#app')
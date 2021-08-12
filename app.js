const app = Vue.createApp({
    data() {
        return {
            title: 'QR Code Generator',
            lastName: 'Doe',
            yourURL: 'https://yoururlhere.fakeurl',
            gender: 'male',
            picture: 'https://api.qrserver.com/v1/create-qr-code/?data="https://musc.org/"&size=250x250',
        }
    },
    methods: {
        async getUser() {
            var urlInput = $("#url_input").val().trim();

            this.yourURL = urlInput
            // this.gender = results[0].gender
            // this.picture = 'https://api.qrserver.com/v1/create-qr-code/?data="https://muschealth.org"&size=250x250'
            this.picture = 'https://api.qrserver.com/v1/create-qr-code/?data="' + urlInput +'"&size=250x250'
            // console.log(results[0].name.first) // Test API call to get random results for 1 user
             // Example URL'https://api.qrserver.com/v1/create-qr-code/?data="https://goqr.me/"&size=250x250'
        },
    },
})

app.mount('#app')

let lat = 40.63864,
    lng = -74.00063

let result

function initMap() {
    navigator.geolocation.getCurrentPosition(pos => {
        const position = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        }
        const map = new google.maps.Map(document.getElementById('map'), {
            center: position,
            zoom: 19
        })
        const marker = new google.maps.Marker({ position, map })
    })
}

const mapDiv = document.getElementById('map')

function newLocation(address) {
    fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=AIzaSyAMRK83oe_v7EGO7UrtCXUF9ezvcpzdI-o`
    )
        .then(res => res.json())
        .then(res => {
            const location = res.results[0].geometry.location
            const lat = location.lat
            const lng = location.lng
            const position = {
                lat,
                lng
            }
            const map = new google.maps.Map(mapDiv, {
                center: position,
                zoom: 17
            })
            const marker = new google.maps.Marker({ position, map })
        })
}

const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keypress', evt => {
    if (evt.key === 'Enter') {
        newLocation(searchBar.value)
        searchBar.value = ''
    }
})

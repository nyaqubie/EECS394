// Calculate the distance betwen two geolocation.
// Distance in kilometers between two points using the Haversine algo.
  haversine: function(p1, p2) {
    var R = 6371
    var dLat  = this.rad(p2.latitude - p1.latitude)
    var dLong = this.rad(p2.longitude - p1.longitude)

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.rad(p1.latitude)) * Math.cos(this.rad(p2.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = R * c

    return Math.round(d)
  },
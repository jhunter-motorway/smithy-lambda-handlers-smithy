$version: "2.0"

namespace uk.co.motorway

/// A structure which defines a Car
structure Car {
    @required
    make: String,

    @required
    model: String
}

/// A list of cars
list CarList {
    member: Car
}
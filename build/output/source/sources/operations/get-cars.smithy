$version: "2"
namespace uk.co.motorway

@readonly
@http(code: 200, method: "GET", uri: "/cars")
@handler(language: "typescript")
operation GetCars {
    input := {
        @httpQuery("id")
        id: String
    }
    output := {
        @required
        items: CarList
    }
}

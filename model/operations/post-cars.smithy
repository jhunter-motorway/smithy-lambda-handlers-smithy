$version: "2"
namespace uk.co.motorway


@http(code: 200, method: "POST", uri: "/cars")
@handler(language: "typescript")
operation PostCars {
    input := {
        items: CarList
    }
    output := {
        @required
        items: CarList
    }
}

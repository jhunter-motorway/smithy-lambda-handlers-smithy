$version: "2"

namespace uk.co.motorway

use aws.protocols#restJson1
use smithy.framework#ValidationException


@title("Car API")
@restJson1
service CarApi {
    version: "1.0",
    operations: [GetCars, PostCars],
    errors: [
      BadRequestError,
      NotAuthorizedError,
      InternalFailureError,
      ValidationException
    ]
}
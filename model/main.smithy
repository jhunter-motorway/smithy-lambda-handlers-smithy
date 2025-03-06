$version: "2"

namespace uk.co.motorway

use aws.protocols#restJson1
use smithy.framework#ValidationException
use aws.apigateway#integration


@title("Car API")
@integration(
    type: "aws_proxy",
    uri: "${lambdaArn}",
    httpMethod: "POST",
    passthroughBehavior: "when_no_match"
)
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
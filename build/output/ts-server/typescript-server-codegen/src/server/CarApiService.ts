// smithy-typescript generated code
import { serializeFrameworkException } from "../protocols/Aws_restJson1";
import {
  GetCars,
  GetCarsSerializer,
  GetCarsServerInput,
} from "./operations/GetCars";
import {
  PostCars,
  PostCarsSerializer,
  PostCarsServerInput,
} from "./operations/PostCars";
import {
  InternalFailureException as __InternalFailureException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
  generateValidationMessage as __generateValidationMessage,
  generateValidationSummary as __generateValidationSummary,
  isFrameworkException as __isFrameworkException,
  httpbinding,
} from "@aws-smithy/server-common";
import {
  NodeHttpHandler,
  streamCollector,
} from "@smithy/node-http-handler";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  fromBase64,
  toBase64,
} from "@smithy/util-base64";
import {
  fromUtf8,
  toUtf8,
} from "@smithy/util-utf8";

export type CarApiServiceOperations = "GetCars" | "PostCars";
export interface CarApiService<Context> {
  GetCars: GetCars<Context>
  PostCars: PostCars<Context>
}
const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request), ...serdeContextBase
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    };
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    let validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      let validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    let output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch(error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log('Received an unexpected error', error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class CarApiServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly service: CarApiService<Context>;
  private readonly mux: __Mux<"CarApi", CarApiServiceOperations>;
  private readonly serializerFactory: <T extends CarApiServiceOperations>(operation: T) => __OperationSerializer<CarApiService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<CarApiServiceOperations>;
  /**
   * Construct a CarApiService handler.
   * @param service The {@link CarApiService} implementation that supplies the business logic for CarApiService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in CarApiService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: CarApiService<Context>,
    mux: __Mux<"CarApi", CarApiServiceOperations>,
    serializerFactory:<T extends CarApiServiceOperations>(op: T) => __OperationSerializer<CarApiService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<CarApiServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      return this.serializeFrameworkException(new __UnknownOperationException(), serdeContextBase);
    }
    switch (target.operation) {
      case "GetCars" : {
        return handle(request, context, "GetCars", this.serializerFactory("GetCars"), this.service.GetCars, this.serializeFrameworkException, GetCarsServerInput.validate, this.validationCustomizer);
      }
      case "PostCars" : {
        return handle(request, context, "PostCars", this.serializerFactory("PostCars"), this.service.PostCars, this.serializeFrameworkException, PostCarsServerInput.validate, this.validationCustomizer);
      }
    }
  }
}

export const getCarApiServiceHandler = <Context>(service: CarApiService<Context>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"CarApi", keyof CarApiService<Context>>([
    new httpbinding.UriSpec<"CarApi", "GetCars">(
      'GET',
      [
        { type: 'path_literal', value: "cars" },
      ],
      [
      ],
      { service: "CarApi", operation: "GetCars" }),
    new httpbinding.UriSpec<"CarApi", "PostCars">(
      'POST',
      [
        { type: 'path_literal', value: "cars" },
      ],
      [
      ],
      { service: "CarApi", operation: "PostCars" }),
  ]);
  const serFn: (op: CarApiServiceOperations) => __OperationSerializer<CarApiService<Context>, CarApiServiceOperations, __ServiceException> = (op) => {
    switch (op) {
      case "GetCars": return new GetCarsSerializer();
      case "PostCars": return new PostCarsSerializer();
    }
  };
  const customizer: __ValidationCustomizer<CarApiServiceOperations> = (ctx, failures) => {
    if (!failures) {
      return undefined;
    }
    return {
      name: "ValidationException",
      $fault: "client",
      message: __generateValidationSummary(failures),
      fieldList: failures.map(failure => ({
        path: failure.path,
        message: __generateValidationMessage(failure)
      }))
    };
  };
  return new CarApiServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
}

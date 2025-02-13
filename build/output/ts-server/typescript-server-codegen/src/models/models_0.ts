// smithy-typescript generated code
import {
  ServiceException as __BaseException,
  CompositeCollectionValidator as __CompositeCollectionValidator,
  CompositeStructureValidator as __CompositeStructureValidator,
  CompositeValidator as __CompositeValidator,
  MultiConstraintValidator as __MultiConstraintValidator,
  NoOpValidator as __NoOpValidator,
  RequiredValidator as __RequiredValidator,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  const memberValidators : {
    path?: __MultiConstraintValidator<string>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: ValidationExceptionField, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "path": {
            memberValidators["path"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("path").validate(obj.path, `${path}/path`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A list of specific failures encountered while validating the input.
   * A member can appear in this list more than once if it failed to satisfy multiple constraints.
   * @public
   */
  fieldList?: (ValidationExceptionField)[] | undefined;

  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

/**
 * An error at the fault of the client sending invalid input
 * @public
 */
export class BadRequestError extends __BaseException {
  readonly name: "BadRequestError" = "BadRequestError";
  readonly $fault: "client" = "client";
  constructor(opts: __ExceptionOptionType<BadRequestError, __BaseException>) {
    super({
      name: "BadRequestError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * A structure which defines a Car
 * @public
 */
export interface Car {
  make: string | undefined;
  model: string | undefined;
}

export namespace Car {
  const memberValidators : {
    make?: __MultiConstraintValidator<string>,
    model?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Car, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "make": {
            memberValidators["make"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "model": {
            memberValidators["model"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("make").validate(obj.make, `${path}/make`),
      ...getMemberValidator("model").validate(obj.model, `${path}/model`),
    ];
  }
}

/**
 * @public
 */
export interface GetCarsInput {
  id?: string | undefined;
}

export namespace GetCarsInput {
  const memberValidators : {
    id?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetCarsInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "id": {
            memberValidators["id"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("id").validate(obj.id, `${path}/id`),
    ];
  }
}

/**
 * @public
 */
export interface GetCarsOutput {
  /**
   * A list of cars
   * @public
   */
  items: (Car)[] | undefined;
}

export namespace GetCarsOutput {
  const memberValidators : {
    items?: __MultiConstraintValidator<Iterable<Car>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetCarsOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "items": {
            memberValidators["items"] = new __CompositeCollectionValidator<Car>(
              new __CompositeValidator<(Car)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Car>(
                new __NoOpValidator(),
                Car.validate
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("items").validate(obj.items, `${path}/items`),
    ];
  }
}

/**
 * An internal failure at the fault of the server
 * @public
 */
export class InternalFailureError extends __BaseException {
  readonly name: "InternalFailureError" = "InternalFailureError";
  readonly $fault: "server" = "server";
  constructor(opts: __ExceptionOptionType<InternalFailureError, __BaseException>) {
    super({
      name: "InternalFailureError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, InternalFailureError.prototype);
  }
}

/**
 * An error due to the client not being authorized to access the resource
 * @public
 */
export class NotAuthorizedError extends __BaseException {
  readonly name: "NotAuthorizedError" = "NotAuthorizedError";
  readonly $fault: "client" = "client";
  constructor(opts: __ExceptionOptionType<NotAuthorizedError, __BaseException>) {
    super({
      name: "NotAuthorizedError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
}

/**
 * @public
 */
export interface PostCarsInput {
  /**
   * A list of cars
   * @public
   */
  items?: (Car)[] | undefined;
}

export namespace PostCarsInput {
  const memberValidators : {
    items?: __MultiConstraintValidator<Iterable<Car>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostCarsInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "items": {
            memberValidators["items"] = new __CompositeCollectionValidator<Car>(
              new __NoOpValidator(),
              new __CompositeStructureValidator<Car>(
                new __NoOpValidator(),
                Car.validate
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("items").validate(obj.items, `${path}/items`),
    ];
  }
}

/**
 * @public
 */
export interface PostCarsOutput {
  /**
   * A list of cars
   * @public
   */
  items: (Car)[] | undefined;
}

export namespace PostCarsOutput {
  const memberValidators : {
    items?: __MultiConstraintValidator<Iterable<Car>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: PostCarsOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "items": {
            memberValidators["items"] = new __CompositeCollectionValidator<Car>(
              new __CompositeValidator<(Car)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Car>(
                new __NoOpValidator(),
                Car.validate
              )
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("items").validate(obj.items, `${path}/items`),
    ];
  }
}

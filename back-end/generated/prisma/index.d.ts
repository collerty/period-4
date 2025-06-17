
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cloth
 * 
 */
export type Cloth = $Result.DefaultSelection<Prisma.$ClothPayload>
/**
 * Model Outfit
 * 
 */
export type Outfit = $Result.DefaultSelection<Prisma.$OutfitPayload>
/**
 * Model OutfitCloth
 * 
 */
export type OutfitCloth = $Result.DefaultSelection<Prisma.$OutfitClothPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cloth`: Exposes CRUD operations for the **Cloth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cloths
    * const cloths = await prisma.cloth.findMany()
    * ```
    */
  get cloth(): Prisma.ClothDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfit`: Exposes CRUD operations for the **Outfit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outfits
    * const outfits = await prisma.outfit.findMany()
    * ```
    */
  get outfit(): Prisma.OutfitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitCloth`: Exposes CRUD operations for the **OutfitCloth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitCloths
    * const outfitCloths = await prisma.outfitCloth.findMany()
    * ```
    */
  get outfitCloth(): Prisma.OutfitClothDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cloth: 'Cloth',
    Outfit: 'Outfit',
    OutfitCloth: 'OutfitCloth'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cloth" | "outfit" | "outfitCloth"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cloth: {
        payload: Prisma.$ClothPayload<ExtArgs>
        fields: Prisma.ClothFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClothFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClothFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          findFirst: {
            args: Prisma.ClothFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClothFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          findMany: {
            args: Prisma.ClothFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>[]
          }
          create: {
            args: Prisma.ClothCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          createMany: {
            args: Prisma.ClothCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClothCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>[]
          }
          delete: {
            args: Prisma.ClothDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          update: {
            args: Prisma.ClothUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          deleteMany: {
            args: Prisma.ClothDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClothUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClothUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>[]
          }
          upsert: {
            args: Prisma.ClothUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothPayload>
          }
          aggregate: {
            args: Prisma.ClothAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCloth>
          }
          groupBy: {
            args: Prisma.ClothGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClothGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClothCountArgs<ExtArgs>
            result: $Utils.Optional<ClothCountAggregateOutputType> | number
          }
        }
      }
      Outfit: {
        payload: Prisma.$OutfitPayload<ExtArgs>
        fields: Prisma.OutfitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findFirst: {
            args: Prisma.OutfitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          findMany: {
            args: Prisma.OutfitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          create: {
            args: Prisma.OutfitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          createMany: {
            args: Prisma.OutfitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          delete: {
            args: Prisma.OutfitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          update: {
            args: Prisma.OutfitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          deleteMany: {
            args: Prisma.OutfitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>[]
          }
          upsert: {
            args: Prisma.OutfitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitPayload>
          }
          aggregate: {
            args: Prisma.OutfitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfit>
          }
          groupBy: {
            args: Prisma.OutfitGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitCountAggregateOutputType> | number
          }
        }
      }
      OutfitCloth: {
        payload: Prisma.$OutfitClothPayload<ExtArgs>
        fields: Prisma.OutfitClothFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitClothFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitClothFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          findFirst: {
            args: Prisma.OutfitClothFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitClothFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          findMany: {
            args: Prisma.OutfitClothFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>[]
          }
          create: {
            args: Prisma.OutfitClothCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          createMany: {
            args: Prisma.OutfitClothCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitClothCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>[]
          }
          delete: {
            args: Prisma.OutfitClothDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          update: {
            args: Prisma.OutfitClothUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          deleteMany: {
            args: Prisma.OutfitClothDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitClothUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitClothUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>[]
          }
          upsert: {
            args: Prisma.OutfitClothUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitClothPayload>
          }
          aggregate: {
            args: Prisma.OutfitClothAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitCloth>
          }
          groupBy: {
            args: Prisma.OutfitClothGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitClothGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitClothCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitClothCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cloth?: ClothOmit
    outfit?: OutfitOmit
    outfitCloth?: OutfitClothOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clothes: number
    outfits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothes?: boolean | UserCountOutputTypeCountClothesArgs
    outfits?: boolean | UserCountOutputTypeCountOutfitsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClothesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
  }


  /**
   * Count Type ClothCountOutputType
   */

  export type ClothCountOutputType = {
    outfits: number
  }

  export type ClothCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfits?: boolean | ClothCountOutputTypeCountOutfitsArgs
  }

  // Custom InputTypes
  /**
   * ClothCountOutputType without action
   */
  export type ClothCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClothCountOutputType
     */
    select?: ClothCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClothCountOutputType without action
   */
  export type ClothCountOutputTypeCountOutfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitClothWhereInput
  }


  /**
   * Count Type OutfitCountOutputType
   */

  export type OutfitCountOutputType = {
    clothes: number
  }

  export type OutfitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothes?: boolean | OutfitCountOutputTypeCountClothesArgs
  }

  // Custom InputTypes
  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCountOutputType
     */
    select?: OutfitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutfitCountOutputType without action
   */
  export type OutfitCountOutputTypeCountClothesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitClothWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clothes?: boolean | User$clothesArgs<ExtArgs>
    outfits?: boolean | User$outfitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clothes?: boolean | User$clothesArgs<ExtArgs>
    outfits?: boolean | User$outfitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clothes: Prisma.$ClothPayload<ExtArgs>[]
      outfits: Prisma.$OutfitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clothes<T extends User$clothesArgs<ExtArgs> = {}>(args?: Subset<T, User$clothesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outfits<T extends User$outfitsArgs<ExtArgs> = {}>(args?: Subset<T, User$outfitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clothes
   */
  export type User$clothesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    where?: ClothWhereInput
    orderBy?: ClothOrderByWithRelationInput | ClothOrderByWithRelationInput[]
    cursor?: ClothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClothScalarFieldEnum | ClothScalarFieldEnum[]
  }

  /**
   * User.outfits
   */
  export type User$outfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    cursor?: OutfitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cloth
   */

  export type AggregateCloth = {
    _count: ClothCountAggregateOutputType | null
    _min: ClothMinAggregateOutputType | null
    _max: ClothMaxAggregateOutputType | null
  }

  export type ClothMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    color: string | null
    imageUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClothMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    color: string | null
    imageUrl: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClothCountAggregateOutputType = {
    id: number
    name: number
    type: number
    color: number
    imageUrl: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClothMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClothMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClothCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    color?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClothAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cloth to aggregate.
     */
    where?: ClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloths to fetch.
     */
    orderBy?: ClothOrderByWithRelationInput | ClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cloths
    **/
    _count?: true | ClothCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClothMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClothMaxAggregateInputType
  }

  export type GetClothAggregateType<T extends ClothAggregateArgs> = {
        [P in keyof T & keyof AggregateCloth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCloth[P]>
      : GetScalarType<T[P], AggregateCloth[P]>
  }




  export type ClothGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothWhereInput
    orderBy?: ClothOrderByWithAggregationInput | ClothOrderByWithAggregationInput[]
    by: ClothScalarFieldEnum[] | ClothScalarFieldEnum
    having?: ClothScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClothCountAggregateInputType | true
    _min?: ClothMinAggregateInputType
    _max?: ClothMaxAggregateInputType
  }

  export type ClothGroupByOutputType = {
    id: string
    name: string
    type: string
    color: string | null
    imageUrl: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ClothCountAggregateOutputType | null
    _min: ClothMinAggregateOutputType | null
    _max: ClothMaxAggregateOutputType | null
  }

  type GetClothGroupByPayload<T extends ClothGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClothGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClothGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClothGroupByOutputType[P]>
            : GetScalarType<T[P], ClothGroupByOutputType[P]>
        }
      >
    >


  export type ClothSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfits?: boolean | Cloth$outfitsArgs<ExtArgs>
    _count?: boolean | ClothCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloth"]>

  export type ClothSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloth"]>

  export type ClothSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cloth"]>

  export type ClothSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    color?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClothOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "color" | "imageUrl" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cloth"]>
  export type ClothInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfits?: boolean | Cloth$outfitsArgs<ExtArgs>
    _count?: boolean | ClothCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClothIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClothIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClothPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cloth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      outfits: Prisma.$OutfitClothPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      color: string | null
      imageUrl: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cloth"]>
    composites: {}
  }

  type ClothGetPayload<S extends boolean | null | undefined | ClothDefaultArgs> = $Result.GetResult<Prisma.$ClothPayload, S>

  type ClothCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClothFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClothCountAggregateInputType | true
    }

  export interface ClothDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cloth'], meta: { name: 'Cloth' } }
    /**
     * Find zero or one Cloth that matches the filter.
     * @param {ClothFindUniqueArgs} args - Arguments to find a Cloth
     * @example
     * // Get one Cloth
     * const cloth = await prisma.cloth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClothFindUniqueArgs>(args: SelectSubset<T, ClothFindUniqueArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cloth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClothFindUniqueOrThrowArgs} args - Arguments to find a Cloth
     * @example
     * // Get one Cloth
     * const cloth = await prisma.cloth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClothFindUniqueOrThrowArgs>(args: SelectSubset<T, ClothFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cloth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothFindFirstArgs} args - Arguments to find a Cloth
     * @example
     * // Get one Cloth
     * const cloth = await prisma.cloth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClothFindFirstArgs>(args?: SelectSubset<T, ClothFindFirstArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cloth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothFindFirstOrThrowArgs} args - Arguments to find a Cloth
     * @example
     * // Get one Cloth
     * const cloth = await prisma.cloth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClothFindFirstOrThrowArgs>(args?: SelectSubset<T, ClothFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cloths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cloths
     * const cloths = await prisma.cloth.findMany()
     * 
     * // Get first 10 Cloths
     * const cloths = await prisma.cloth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clothWithIdOnly = await prisma.cloth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClothFindManyArgs>(args?: SelectSubset<T, ClothFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cloth.
     * @param {ClothCreateArgs} args - Arguments to create a Cloth.
     * @example
     * // Create one Cloth
     * const Cloth = await prisma.cloth.create({
     *   data: {
     *     // ... data to create a Cloth
     *   }
     * })
     * 
     */
    create<T extends ClothCreateArgs>(args: SelectSubset<T, ClothCreateArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cloths.
     * @param {ClothCreateManyArgs} args - Arguments to create many Cloths.
     * @example
     * // Create many Cloths
     * const cloth = await prisma.cloth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClothCreateManyArgs>(args?: SelectSubset<T, ClothCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cloths and returns the data saved in the database.
     * @param {ClothCreateManyAndReturnArgs} args - Arguments to create many Cloths.
     * @example
     * // Create many Cloths
     * const cloth = await prisma.cloth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cloths and only return the `id`
     * const clothWithIdOnly = await prisma.cloth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClothCreateManyAndReturnArgs>(args?: SelectSubset<T, ClothCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cloth.
     * @param {ClothDeleteArgs} args - Arguments to delete one Cloth.
     * @example
     * // Delete one Cloth
     * const Cloth = await prisma.cloth.delete({
     *   where: {
     *     // ... filter to delete one Cloth
     *   }
     * })
     * 
     */
    delete<T extends ClothDeleteArgs>(args: SelectSubset<T, ClothDeleteArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cloth.
     * @param {ClothUpdateArgs} args - Arguments to update one Cloth.
     * @example
     * // Update one Cloth
     * const cloth = await prisma.cloth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClothUpdateArgs>(args: SelectSubset<T, ClothUpdateArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cloths.
     * @param {ClothDeleteManyArgs} args - Arguments to filter Cloths to delete.
     * @example
     * // Delete a few Cloths
     * const { count } = await prisma.cloth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClothDeleteManyArgs>(args?: SelectSubset<T, ClothDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cloths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cloths
     * const cloth = await prisma.cloth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClothUpdateManyArgs>(args: SelectSubset<T, ClothUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cloths and returns the data updated in the database.
     * @param {ClothUpdateManyAndReturnArgs} args - Arguments to update many Cloths.
     * @example
     * // Update many Cloths
     * const cloth = await prisma.cloth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cloths and only return the `id`
     * const clothWithIdOnly = await prisma.cloth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClothUpdateManyAndReturnArgs>(args: SelectSubset<T, ClothUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cloth.
     * @param {ClothUpsertArgs} args - Arguments to update or create a Cloth.
     * @example
     * // Update or create a Cloth
     * const cloth = await prisma.cloth.upsert({
     *   create: {
     *     // ... data to create a Cloth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cloth we want to update
     *   }
     * })
     */
    upsert<T extends ClothUpsertArgs>(args: SelectSubset<T, ClothUpsertArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cloths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothCountArgs} args - Arguments to filter Cloths to count.
     * @example
     * // Count the number of Cloths
     * const count = await prisma.cloth.count({
     *   where: {
     *     // ... the filter for the Cloths we want to count
     *   }
     * })
    **/
    count<T extends ClothCountArgs>(
      args?: Subset<T, ClothCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClothCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cloth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClothAggregateArgs>(args: Subset<T, ClothAggregateArgs>): Prisma.PrismaPromise<GetClothAggregateType<T>>

    /**
     * Group by Cloth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClothGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClothGroupByArgs['orderBy'] }
        : { orderBy?: ClothGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClothGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClothGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cloth model
   */
  readonly fields: ClothFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cloth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClothClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outfits<T extends Cloth$outfitsArgs<ExtArgs> = {}>(args?: Subset<T, Cloth$outfitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cloth model
   */
  interface ClothFieldRefs {
    readonly id: FieldRef<"Cloth", 'String'>
    readonly name: FieldRef<"Cloth", 'String'>
    readonly type: FieldRef<"Cloth", 'String'>
    readonly color: FieldRef<"Cloth", 'String'>
    readonly imageUrl: FieldRef<"Cloth", 'String'>
    readonly userId: FieldRef<"Cloth", 'String'>
    readonly createdAt: FieldRef<"Cloth", 'DateTime'>
    readonly updatedAt: FieldRef<"Cloth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cloth findUnique
   */
  export type ClothFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter, which Cloth to fetch.
     */
    where: ClothWhereUniqueInput
  }

  /**
   * Cloth findUniqueOrThrow
   */
  export type ClothFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter, which Cloth to fetch.
     */
    where: ClothWhereUniqueInput
  }

  /**
   * Cloth findFirst
   */
  export type ClothFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter, which Cloth to fetch.
     */
    where?: ClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloths to fetch.
     */
    orderBy?: ClothOrderByWithRelationInput | ClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cloths.
     */
    cursor?: ClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cloths.
     */
    distinct?: ClothScalarFieldEnum | ClothScalarFieldEnum[]
  }

  /**
   * Cloth findFirstOrThrow
   */
  export type ClothFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter, which Cloth to fetch.
     */
    where?: ClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloths to fetch.
     */
    orderBy?: ClothOrderByWithRelationInput | ClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cloths.
     */
    cursor?: ClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cloths.
     */
    distinct?: ClothScalarFieldEnum | ClothScalarFieldEnum[]
  }

  /**
   * Cloth findMany
   */
  export type ClothFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter, which Cloths to fetch.
     */
    where?: ClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloths to fetch.
     */
    orderBy?: ClothOrderByWithRelationInput | ClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cloths.
     */
    cursor?: ClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloths.
     */
    skip?: number
    distinct?: ClothScalarFieldEnum | ClothScalarFieldEnum[]
  }

  /**
   * Cloth create
   */
  export type ClothCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * The data needed to create a Cloth.
     */
    data: XOR<ClothCreateInput, ClothUncheckedCreateInput>
  }

  /**
   * Cloth createMany
   */
  export type ClothCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cloths.
     */
    data: ClothCreateManyInput | ClothCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cloth createManyAndReturn
   */
  export type ClothCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * The data used to create many Cloths.
     */
    data: ClothCreateManyInput | ClothCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cloth update
   */
  export type ClothUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * The data needed to update a Cloth.
     */
    data: XOR<ClothUpdateInput, ClothUncheckedUpdateInput>
    /**
     * Choose, which Cloth to update.
     */
    where: ClothWhereUniqueInput
  }

  /**
   * Cloth updateMany
   */
  export type ClothUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cloths.
     */
    data: XOR<ClothUpdateManyMutationInput, ClothUncheckedUpdateManyInput>
    /**
     * Filter which Cloths to update
     */
    where?: ClothWhereInput
    /**
     * Limit how many Cloths to update.
     */
    limit?: number
  }

  /**
   * Cloth updateManyAndReturn
   */
  export type ClothUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * The data used to update Cloths.
     */
    data: XOR<ClothUpdateManyMutationInput, ClothUncheckedUpdateManyInput>
    /**
     * Filter which Cloths to update
     */
    where?: ClothWhereInput
    /**
     * Limit how many Cloths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cloth upsert
   */
  export type ClothUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * The filter to search for the Cloth to update in case it exists.
     */
    where: ClothWhereUniqueInput
    /**
     * In case the Cloth found by the `where` argument doesn't exist, create a new Cloth with this data.
     */
    create: XOR<ClothCreateInput, ClothUncheckedCreateInput>
    /**
     * In case the Cloth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClothUpdateInput, ClothUncheckedUpdateInput>
  }

  /**
   * Cloth delete
   */
  export type ClothDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
    /**
     * Filter which Cloth to delete.
     */
    where: ClothWhereUniqueInput
  }

  /**
   * Cloth deleteMany
   */
  export type ClothDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cloths to delete
     */
    where?: ClothWhereInput
    /**
     * Limit how many Cloths to delete.
     */
    limit?: number
  }

  /**
   * Cloth.outfits
   */
  export type Cloth$outfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    where?: OutfitClothWhereInput
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    cursor?: OutfitClothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitClothScalarFieldEnum | OutfitClothScalarFieldEnum[]
  }

  /**
   * Cloth without action
   */
  export type ClothDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloth
     */
    select?: ClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloth
     */
    omit?: ClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothInclude<ExtArgs> | null
  }


  /**
   * Model Outfit
   */

  export type AggregateOutfit = {
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  export type OutfitMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutfitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutfitCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutfitMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutfitMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutfitCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutfitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfit to aggregate.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outfits
    **/
    _count?: true | OutfitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitMaxAggregateInputType
  }

  export type GetOutfitAggregateType<T extends OutfitAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfit[P]>
      : GetScalarType<T[P], AggregateOutfit[P]>
  }




  export type OutfitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitWhereInput
    orderBy?: OutfitOrderByWithAggregationInput | OutfitOrderByWithAggregationInput[]
    by: OutfitScalarFieldEnum[] | OutfitScalarFieldEnum
    having?: OutfitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitCountAggregateInputType | true
    _min?: OutfitMinAggregateInputType
    _max?: OutfitMaxAggregateInputType
  }

  export type OutfitGroupByOutputType = {
    id: string
    name: string
    userId: string
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: OutfitCountAggregateOutputType | null
    _min: OutfitMinAggregateOutputType | null
    _max: OutfitMaxAggregateOutputType | null
  }

  type GetOutfitGroupByPayload<T extends OutfitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitGroupByOutputType[P]>
        }
      >
    >


  export type OutfitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    clothes?: boolean | Outfit$clothesArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfit"]>

  export type OutfitSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutfitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["outfit"]>
  export type OutfitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    clothes?: boolean | Outfit$clothesArgs<ExtArgs>
    _count?: boolean | OutfitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutfitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutfitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outfit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      clothes: Prisma.$OutfitClothPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outfit"]>
    composites: {}
  }

  type OutfitGetPayload<S extends boolean | null | undefined | OutfitDefaultArgs> = $Result.GetResult<Prisma.$OutfitPayload, S>

  type OutfitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitCountAggregateInputType | true
    }

  export interface OutfitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outfit'], meta: { name: 'Outfit' } }
    /**
     * Find zero or one Outfit that matches the filter.
     * @param {OutfitFindUniqueArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitFindUniqueArgs>(args: SelectSubset<T, OutfitFindUniqueArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outfit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitFindUniqueOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitFindFirstArgs>(args?: SelectSubset<T, OutfitFindFirstArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outfit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindFirstOrThrowArgs} args - Arguments to find a Outfit
     * @example
     * // Get one Outfit
     * const outfit = await prisma.outfit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outfits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outfits
     * const outfits = await prisma.outfit.findMany()
     * 
     * // Get first 10 Outfits
     * const outfits = await prisma.outfit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitWithIdOnly = await prisma.outfit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitFindManyArgs>(args?: SelectSubset<T, OutfitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outfit.
     * @param {OutfitCreateArgs} args - Arguments to create a Outfit.
     * @example
     * // Create one Outfit
     * const Outfit = await prisma.outfit.create({
     *   data: {
     *     // ... data to create a Outfit
     *   }
     * })
     * 
     */
    create<T extends OutfitCreateArgs>(args: SelectSubset<T, OutfitCreateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outfits.
     * @param {OutfitCreateManyArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitCreateManyArgs>(args?: SelectSubset<T, OutfitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outfits and returns the data saved in the database.
     * @param {OutfitCreateManyAndReturnArgs} args - Arguments to create many Outfits.
     * @example
     * // Create many Outfits
     * const outfit = await prisma.outfit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outfit.
     * @param {OutfitDeleteArgs} args - Arguments to delete one Outfit.
     * @example
     * // Delete one Outfit
     * const Outfit = await prisma.outfit.delete({
     *   where: {
     *     // ... filter to delete one Outfit
     *   }
     * })
     * 
     */
    delete<T extends OutfitDeleteArgs>(args: SelectSubset<T, OutfitDeleteArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outfit.
     * @param {OutfitUpdateArgs} args - Arguments to update one Outfit.
     * @example
     * // Update one Outfit
     * const outfit = await prisma.outfit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitUpdateArgs>(args: SelectSubset<T, OutfitUpdateArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outfits.
     * @param {OutfitDeleteManyArgs} args - Arguments to filter Outfits to delete.
     * @example
     * // Delete a few Outfits
     * const { count } = await prisma.outfit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitDeleteManyArgs>(args?: SelectSubset<T, OutfitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitUpdateManyArgs>(args: SelectSubset<T, OutfitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outfits and returns the data updated in the database.
     * @param {OutfitUpdateManyAndReturnArgs} args - Arguments to update many Outfits.
     * @example
     * // Update many Outfits
     * const outfit = await prisma.outfit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outfits and only return the `id`
     * const outfitWithIdOnly = await prisma.outfit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutfitUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outfit.
     * @param {OutfitUpsertArgs} args - Arguments to update or create a Outfit.
     * @example
     * // Update or create a Outfit
     * const outfit = await prisma.outfit.upsert({
     *   create: {
     *     // ... data to create a Outfit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outfit we want to update
     *   }
     * })
     */
    upsert<T extends OutfitUpsertArgs>(args: SelectSubset<T, OutfitUpsertArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCountArgs} args - Arguments to filter Outfits to count.
     * @example
     * // Count the number of Outfits
     * const count = await prisma.outfit.count({
     *   where: {
     *     // ... the filter for the Outfits we want to count
     *   }
     * })
    **/
    count<T extends OutfitCountArgs>(
      args?: Subset<T, OutfitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutfitAggregateArgs>(args: Subset<T, OutfitAggregateArgs>): Prisma.PrismaPromise<GetOutfitAggregateType<T>>

    /**
     * Group by Outfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutfitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitGroupByArgs['orderBy'] }
        : { orderBy?: OutfitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutfitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outfit model
   */
  readonly fields: OutfitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outfit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clothes<T extends Outfit$clothesArgs<ExtArgs> = {}>(args?: Subset<T, Outfit$clothesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outfit model
   */
  interface OutfitFieldRefs {
    readonly id: FieldRef<"Outfit", 'String'>
    readonly name: FieldRef<"Outfit", 'String'>
    readonly userId: FieldRef<"Outfit", 'String'>
    readonly description: FieldRef<"Outfit", 'String'>
    readonly imageUrl: FieldRef<"Outfit", 'String'>
    readonly createdAt: FieldRef<"Outfit", 'DateTime'>
    readonly updatedAt: FieldRef<"Outfit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outfit findUnique
   */
  export type OutfitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findUniqueOrThrow
   */
  export type OutfitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit findFirst
   */
  export type OutfitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findFirstOrThrow
   */
  export type OutfitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfit to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outfits.
     */
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit findMany
   */
  export type OutfitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter, which Outfits to fetch.
     */
    where?: OutfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outfits to fetch.
     */
    orderBy?: OutfitOrderByWithRelationInput | OutfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outfits.
     */
    cursor?: OutfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outfits.
     */
    skip?: number
    distinct?: OutfitScalarFieldEnum | OutfitScalarFieldEnum[]
  }

  /**
   * Outfit create
   */
  export type OutfitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to create a Outfit.
     */
    data: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
  }

  /**
   * Outfit createMany
   */
  export type OutfitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outfit createManyAndReturn
   */
  export type OutfitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to create many Outfits.
     */
    data: OutfitCreateManyInput | OutfitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit update
   */
  export type OutfitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The data needed to update a Outfit.
     */
    data: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
    /**
     * Choose, which Outfit to update.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit updateMany
   */
  export type OutfitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
  }

  /**
   * Outfit updateManyAndReturn
   */
  export type OutfitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * The data used to update Outfits.
     */
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyInput>
    /**
     * Filter which Outfits to update
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outfit upsert
   */
  export type OutfitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * The filter to search for the Outfit to update in case it exists.
     */
    where: OutfitWhereUniqueInput
    /**
     * In case the Outfit found by the `where` argument doesn't exist, create a new Outfit with this data.
     */
    create: XOR<OutfitCreateInput, OutfitUncheckedCreateInput>
    /**
     * In case the Outfit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitUpdateInput, OutfitUncheckedUpdateInput>
  }

  /**
   * Outfit delete
   */
  export type OutfitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
    /**
     * Filter which Outfit to delete.
     */
    where: OutfitWhereUniqueInput
  }

  /**
   * Outfit deleteMany
   */
  export type OutfitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outfits to delete
     */
    where?: OutfitWhereInput
    /**
     * Limit how many Outfits to delete.
     */
    limit?: number
  }

  /**
   * Outfit.clothes
   */
  export type Outfit$clothesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    where?: OutfitClothWhereInput
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    cursor?: OutfitClothWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitClothScalarFieldEnum | OutfitClothScalarFieldEnum[]
  }

  /**
   * Outfit without action
   */
  export type OutfitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outfit
     */
    select?: OutfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outfit
     */
    omit?: OutfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInclude<ExtArgs> | null
  }


  /**
   * Model OutfitCloth
   */

  export type AggregateOutfitCloth = {
    _count: OutfitClothCountAggregateOutputType | null
    _min: OutfitClothMinAggregateOutputType | null
    _max: OutfitClothMaxAggregateOutputType | null
  }

  export type OutfitClothMinAggregateOutputType = {
    id: string | null
    outfitId: string | null
    clothId: string | null
  }

  export type OutfitClothMaxAggregateOutputType = {
    id: string | null
    outfitId: string | null
    clothId: string | null
  }

  export type OutfitClothCountAggregateOutputType = {
    id: number
    outfitId: number
    clothId: number
    _all: number
  }


  export type OutfitClothMinAggregateInputType = {
    id?: true
    outfitId?: true
    clothId?: true
  }

  export type OutfitClothMaxAggregateInputType = {
    id?: true
    outfitId?: true
    clothId?: true
  }

  export type OutfitClothCountAggregateInputType = {
    id?: true
    outfitId?: true
    clothId?: true
    _all?: true
  }

  export type OutfitClothAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitCloth to aggregate.
     */
    where?: OutfitClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCloths to fetch.
     */
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitCloths
    **/
    _count?: true | OutfitClothCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitClothMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitClothMaxAggregateInputType
  }

  export type GetOutfitClothAggregateType<T extends OutfitClothAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitCloth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitCloth[P]>
      : GetScalarType<T[P], AggregateOutfitCloth[P]>
  }




  export type OutfitClothGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitClothWhereInput
    orderBy?: OutfitClothOrderByWithAggregationInput | OutfitClothOrderByWithAggregationInput[]
    by: OutfitClothScalarFieldEnum[] | OutfitClothScalarFieldEnum
    having?: OutfitClothScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitClothCountAggregateInputType | true
    _min?: OutfitClothMinAggregateInputType
    _max?: OutfitClothMaxAggregateInputType
  }

  export type OutfitClothGroupByOutputType = {
    id: string
    outfitId: string
    clothId: string
    _count: OutfitClothCountAggregateOutputType | null
    _min: OutfitClothMinAggregateOutputType | null
    _max: OutfitClothMaxAggregateOutputType | null
  }

  type GetOutfitClothGroupByPayload<T extends OutfitClothGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitClothGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitClothGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitClothGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitClothGroupByOutputType[P]>
        }
      >
    >


  export type OutfitClothSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitCloth"]>

  export type OutfitClothSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitCloth"]>

  export type OutfitClothSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outfitId?: boolean
    clothId?: boolean
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitCloth"]>

  export type OutfitClothSelectScalar = {
    id?: boolean
    outfitId?: boolean
    clothId?: boolean
  }

  export type OutfitClothOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outfitId" | "clothId", ExtArgs["result"]["outfitCloth"]>
  export type OutfitClothInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }
  export type OutfitClothIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }
  export type OutfitClothIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outfit?: boolean | OutfitDefaultArgs<ExtArgs>
    cloth?: boolean | ClothDefaultArgs<ExtArgs>
  }

  export type $OutfitClothPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitCloth"
    objects: {
      outfit: Prisma.$OutfitPayload<ExtArgs>
      cloth: Prisma.$ClothPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outfitId: string
      clothId: string
    }, ExtArgs["result"]["outfitCloth"]>
    composites: {}
  }

  type OutfitClothGetPayload<S extends boolean | null | undefined | OutfitClothDefaultArgs> = $Result.GetResult<Prisma.$OutfitClothPayload, S>

  type OutfitClothCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitClothFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitClothCountAggregateInputType | true
    }

  export interface OutfitClothDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitCloth'], meta: { name: 'OutfitCloth' } }
    /**
     * Find zero or one OutfitCloth that matches the filter.
     * @param {OutfitClothFindUniqueArgs} args - Arguments to find a OutfitCloth
     * @example
     * // Get one OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitClothFindUniqueArgs>(args: SelectSubset<T, OutfitClothFindUniqueArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitCloth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitClothFindUniqueOrThrowArgs} args - Arguments to find a OutfitCloth
     * @example
     * // Get one OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitClothFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitClothFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitCloth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothFindFirstArgs} args - Arguments to find a OutfitCloth
     * @example
     * // Get one OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitClothFindFirstArgs>(args?: SelectSubset<T, OutfitClothFindFirstArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitCloth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothFindFirstOrThrowArgs} args - Arguments to find a OutfitCloth
     * @example
     * // Get one OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitClothFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitClothFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitCloths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitCloths
     * const outfitCloths = await prisma.outfitCloth.findMany()
     * 
     * // Get first 10 OutfitCloths
     * const outfitCloths = await prisma.outfitCloth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitClothWithIdOnly = await prisma.outfitCloth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitClothFindManyArgs>(args?: SelectSubset<T, OutfitClothFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitCloth.
     * @param {OutfitClothCreateArgs} args - Arguments to create a OutfitCloth.
     * @example
     * // Create one OutfitCloth
     * const OutfitCloth = await prisma.outfitCloth.create({
     *   data: {
     *     // ... data to create a OutfitCloth
     *   }
     * })
     * 
     */
    create<T extends OutfitClothCreateArgs>(args: SelectSubset<T, OutfitClothCreateArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitCloths.
     * @param {OutfitClothCreateManyArgs} args - Arguments to create many OutfitCloths.
     * @example
     * // Create many OutfitCloths
     * const outfitCloth = await prisma.outfitCloth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitClothCreateManyArgs>(args?: SelectSubset<T, OutfitClothCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitCloths and returns the data saved in the database.
     * @param {OutfitClothCreateManyAndReturnArgs} args - Arguments to create many OutfitCloths.
     * @example
     * // Create many OutfitCloths
     * const outfitCloth = await prisma.outfitCloth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitCloths and only return the `id`
     * const outfitClothWithIdOnly = await prisma.outfitCloth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitClothCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitClothCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitCloth.
     * @param {OutfitClothDeleteArgs} args - Arguments to delete one OutfitCloth.
     * @example
     * // Delete one OutfitCloth
     * const OutfitCloth = await prisma.outfitCloth.delete({
     *   where: {
     *     // ... filter to delete one OutfitCloth
     *   }
     * })
     * 
     */
    delete<T extends OutfitClothDeleteArgs>(args: SelectSubset<T, OutfitClothDeleteArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitCloth.
     * @param {OutfitClothUpdateArgs} args - Arguments to update one OutfitCloth.
     * @example
     * // Update one OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitClothUpdateArgs>(args: SelectSubset<T, OutfitClothUpdateArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitCloths.
     * @param {OutfitClothDeleteManyArgs} args - Arguments to filter OutfitCloths to delete.
     * @example
     * // Delete a few OutfitCloths
     * const { count } = await prisma.outfitCloth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitClothDeleteManyArgs>(args?: SelectSubset<T, OutfitClothDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitCloths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitCloths
     * const outfitCloth = await prisma.outfitCloth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitClothUpdateManyArgs>(args: SelectSubset<T, OutfitClothUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitCloths and returns the data updated in the database.
     * @param {OutfitClothUpdateManyAndReturnArgs} args - Arguments to update many OutfitCloths.
     * @example
     * // Update many OutfitCloths
     * const outfitCloth = await prisma.outfitCloth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitCloths and only return the `id`
     * const outfitClothWithIdOnly = await prisma.outfitCloth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutfitClothUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitClothUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitCloth.
     * @param {OutfitClothUpsertArgs} args - Arguments to update or create a OutfitCloth.
     * @example
     * // Update or create a OutfitCloth
     * const outfitCloth = await prisma.outfitCloth.upsert({
     *   create: {
     *     // ... data to create a OutfitCloth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitCloth we want to update
     *   }
     * })
     */
    upsert<T extends OutfitClothUpsertArgs>(args: SelectSubset<T, OutfitClothUpsertArgs<ExtArgs>>): Prisma__OutfitClothClient<$Result.GetResult<Prisma.$OutfitClothPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitCloths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothCountArgs} args - Arguments to filter OutfitCloths to count.
     * @example
     * // Count the number of OutfitCloths
     * const count = await prisma.outfitCloth.count({
     *   where: {
     *     // ... the filter for the OutfitCloths we want to count
     *   }
     * })
    **/
    count<T extends OutfitClothCountArgs>(
      args?: Subset<T, OutfitClothCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitClothCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitCloth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutfitClothAggregateArgs>(args: Subset<T, OutfitClothAggregateArgs>): Prisma.PrismaPromise<GetOutfitClothAggregateType<T>>

    /**
     * Group by OutfitCloth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitClothGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutfitClothGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitClothGroupByArgs['orderBy'] }
        : { orderBy?: OutfitClothGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutfitClothGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitClothGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitCloth model
   */
  readonly fields: OutfitClothFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitCloth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitClothClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outfit<T extends OutfitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutfitDefaultArgs<ExtArgs>>): Prisma__OutfitClient<$Result.GetResult<Prisma.$OutfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cloth<T extends ClothDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClothDefaultArgs<ExtArgs>>): Prisma__ClothClient<$Result.GetResult<Prisma.$ClothPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutfitCloth model
   */
  interface OutfitClothFieldRefs {
    readonly id: FieldRef<"OutfitCloth", 'String'>
    readonly outfitId: FieldRef<"OutfitCloth", 'String'>
    readonly clothId: FieldRef<"OutfitCloth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutfitCloth findUnique
   */
  export type OutfitClothFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCloth to fetch.
     */
    where: OutfitClothWhereUniqueInput
  }

  /**
   * OutfitCloth findUniqueOrThrow
   */
  export type OutfitClothFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCloth to fetch.
     */
    where: OutfitClothWhereUniqueInput
  }

  /**
   * OutfitCloth findFirst
   */
  export type OutfitClothFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCloth to fetch.
     */
    where?: OutfitClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCloths to fetch.
     */
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitCloths.
     */
    cursor?: OutfitClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitCloths.
     */
    distinct?: OutfitClothScalarFieldEnum | OutfitClothScalarFieldEnum[]
  }

  /**
   * OutfitCloth findFirstOrThrow
   */
  export type OutfitClothFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCloth to fetch.
     */
    where?: OutfitClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCloths to fetch.
     */
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitCloths.
     */
    cursor?: OutfitClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCloths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitCloths.
     */
    distinct?: OutfitClothScalarFieldEnum | OutfitClothScalarFieldEnum[]
  }

  /**
   * OutfitCloth findMany
   */
  export type OutfitClothFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCloths to fetch.
     */
    where?: OutfitClothWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCloths to fetch.
     */
    orderBy?: OutfitClothOrderByWithRelationInput | OutfitClothOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitCloths.
     */
    cursor?: OutfitClothWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCloths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCloths.
     */
    skip?: number
    distinct?: OutfitClothScalarFieldEnum | OutfitClothScalarFieldEnum[]
  }

  /**
   * OutfitCloth create
   */
  export type OutfitClothCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitCloth.
     */
    data: XOR<OutfitClothCreateInput, OutfitClothUncheckedCreateInput>
  }

  /**
   * OutfitCloth createMany
   */
  export type OutfitClothCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitCloths.
     */
    data: OutfitClothCreateManyInput | OutfitClothCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitCloth createManyAndReturn
   */
  export type OutfitClothCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitCloths.
     */
    data: OutfitClothCreateManyInput | OutfitClothCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitCloth update
   */
  export type OutfitClothUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitCloth.
     */
    data: XOR<OutfitClothUpdateInput, OutfitClothUncheckedUpdateInput>
    /**
     * Choose, which OutfitCloth to update.
     */
    where: OutfitClothWhereUniqueInput
  }

  /**
   * OutfitCloth updateMany
   */
  export type OutfitClothUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitCloths.
     */
    data: XOR<OutfitClothUpdateManyMutationInput, OutfitClothUncheckedUpdateManyInput>
    /**
     * Filter which OutfitCloths to update
     */
    where?: OutfitClothWhereInput
    /**
     * Limit how many OutfitCloths to update.
     */
    limit?: number
  }

  /**
   * OutfitCloth updateManyAndReturn
   */
  export type OutfitClothUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * The data used to update OutfitCloths.
     */
    data: XOR<OutfitClothUpdateManyMutationInput, OutfitClothUncheckedUpdateManyInput>
    /**
     * Filter which OutfitCloths to update
     */
    where?: OutfitClothWhereInput
    /**
     * Limit how many OutfitCloths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitCloth upsert
   */
  export type OutfitClothUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitCloth to update in case it exists.
     */
    where: OutfitClothWhereUniqueInput
    /**
     * In case the OutfitCloth found by the `where` argument doesn't exist, create a new OutfitCloth with this data.
     */
    create: XOR<OutfitClothCreateInput, OutfitClothUncheckedCreateInput>
    /**
     * In case the OutfitCloth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitClothUpdateInput, OutfitClothUncheckedUpdateInput>
  }

  /**
   * OutfitCloth delete
   */
  export type OutfitClothDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
    /**
     * Filter which OutfitCloth to delete.
     */
    where: OutfitClothWhereUniqueInput
  }

  /**
   * OutfitCloth deleteMany
   */
  export type OutfitClothDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitCloths to delete
     */
    where?: OutfitClothWhereInput
    /**
     * Limit how many OutfitCloths to delete.
     */
    limit?: number
  }

  /**
   * OutfitCloth without action
   */
  export type OutfitClothDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCloth
     */
    select?: OutfitClothSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCloth
     */
    omit?: OutfitClothOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitClothInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClothScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    color: 'color',
    imageUrl: 'imageUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClothScalarFieldEnum = (typeof ClothScalarFieldEnum)[keyof typeof ClothScalarFieldEnum]


  export const OutfitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutfitScalarFieldEnum = (typeof OutfitScalarFieldEnum)[keyof typeof OutfitScalarFieldEnum]


  export const OutfitClothScalarFieldEnum: {
    id: 'id',
    outfitId: 'outfitId',
    clothId: 'clothId'
  };

  export type OutfitClothScalarFieldEnum = (typeof OutfitClothScalarFieldEnum)[keyof typeof OutfitClothScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clothes?: ClothListRelationFilter
    outfits?: OutfitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clothes?: ClothOrderByRelationAggregateInput
    outfits?: OutfitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clothes?: ClothListRelationFilter
    outfits?: OutfitListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClothWhereInput = {
    AND?: ClothWhereInput | ClothWhereInput[]
    OR?: ClothWhereInput[]
    NOT?: ClothWhereInput | ClothWhereInput[]
    id?: StringFilter<"Cloth"> | string
    name?: StringFilter<"Cloth"> | string
    type?: StringFilter<"Cloth"> | string
    color?: StringNullableFilter<"Cloth"> | string | null
    imageUrl?: StringNullableFilter<"Cloth"> | string | null
    userId?: StringFilter<"Cloth"> | string
    createdAt?: DateTimeFilter<"Cloth"> | Date | string
    updatedAt?: DateTimeFilter<"Cloth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfits?: OutfitClothListRelationFilter
  }

  export type ClothOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    outfits?: OutfitClothOrderByRelationAggregateInput
  }

  export type ClothWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClothWhereInput | ClothWhereInput[]
    OR?: ClothWhereInput[]
    NOT?: ClothWhereInput | ClothWhereInput[]
    name?: StringFilter<"Cloth"> | string
    type?: StringFilter<"Cloth"> | string
    color?: StringNullableFilter<"Cloth"> | string | null
    imageUrl?: StringNullableFilter<"Cloth"> | string | null
    userId?: StringFilter<"Cloth"> | string
    createdAt?: DateTimeFilter<"Cloth"> | Date | string
    updatedAt?: DateTimeFilter<"Cloth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfits?: OutfitClothListRelationFilter
  }, "id">

  export type ClothOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClothCountOrderByAggregateInput
    _max?: ClothMaxOrderByAggregateInput
    _min?: ClothMinOrderByAggregateInput
  }

  export type ClothScalarWhereWithAggregatesInput = {
    AND?: ClothScalarWhereWithAggregatesInput | ClothScalarWhereWithAggregatesInput[]
    OR?: ClothScalarWhereWithAggregatesInput[]
    NOT?: ClothScalarWhereWithAggregatesInput | ClothScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cloth"> | string
    name?: StringWithAggregatesFilter<"Cloth"> | string
    type?: StringWithAggregatesFilter<"Cloth"> | string
    color?: StringNullableWithAggregatesFilter<"Cloth"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Cloth"> | string | null
    userId?: StringWithAggregatesFilter<"Cloth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cloth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cloth"> | Date | string
  }

  export type OutfitWhereInput = {
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    id?: StringFilter<"Outfit"> | string
    name?: StringFilter<"Outfit"> | string
    userId?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    clothes?: OutfitClothListRelationFilter
  }

  export type OutfitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    clothes?: OutfitClothOrderByRelationAggregateInput
  }

  export type OutfitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutfitWhereInput | OutfitWhereInput[]
    OR?: OutfitWhereInput[]
    NOT?: OutfitWhereInput | OutfitWhereInput[]
    name?: StringFilter<"Outfit"> | string
    userId?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    clothes?: OutfitClothListRelationFilter
  }, "id">

  export type OutfitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutfitCountOrderByAggregateInput
    _max?: OutfitMaxOrderByAggregateInput
    _min?: OutfitMinOrderByAggregateInput
  }

  export type OutfitScalarWhereWithAggregatesInput = {
    AND?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    OR?: OutfitScalarWhereWithAggregatesInput[]
    NOT?: OutfitScalarWhereWithAggregatesInput | OutfitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outfit"> | string
    name?: StringWithAggregatesFilter<"Outfit"> | string
    userId?: StringWithAggregatesFilter<"Outfit"> | string
    description?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Outfit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outfit"> | Date | string
  }

  export type OutfitClothWhereInput = {
    AND?: OutfitClothWhereInput | OutfitClothWhereInput[]
    OR?: OutfitClothWhereInput[]
    NOT?: OutfitClothWhereInput | OutfitClothWhereInput[]
    id?: StringFilter<"OutfitCloth"> | string
    outfitId?: StringFilter<"OutfitCloth"> | string
    clothId?: StringFilter<"OutfitCloth"> | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
    cloth?: XOR<ClothScalarRelationFilter, ClothWhereInput>
  }

  export type OutfitClothOrderByWithRelationInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothId?: SortOrder
    outfit?: OutfitOrderByWithRelationInput
    cloth?: ClothOrderByWithRelationInput
  }

  export type OutfitClothWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutfitClothWhereInput | OutfitClothWhereInput[]
    OR?: OutfitClothWhereInput[]
    NOT?: OutfitClothWhereInput | OutfitClothWhereInput[]
    outfitId?: StringFilter<"OutfitCloth"> | string
    clothId?: StringFilter<"OutfitCloth"> | string
    outfit?: XOR<OutfitScalarRelationFilter, OutfitWhereInput>
    cloth?: XOR<ClothScalarRelationFilter, ClothWhereInput>
  }, "id">

  export type OutfitClothOrderByWithAggregationInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothId?: SortOrder
    _count?: OutfitClothCountOrderByAggregateInput
    _max?: OutfitClothMaxOrderByAggregateInput
    _min?: OutfitClothMinOrderByAggregateInput
  }

  export type OutfitClothScalarWhereWithAggregatesInput = {
    AND?: OutfitClothScalarWhereWithAggregatesInput | OutfitClothScalarWhereWithAggregatesInput[]
    OR?: OutfitClothScalarWhereWithAggregatesInput[]
    NOT?: OutfitClothScalarWhereWithAggregatesInput | OutfitClothScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutfitCloth"> | string
    outfitId?: StringWithAggregatesFilter<"OutfitCloth"> | string
    clothId?: StringWithAggregatesFilter<"OutfitCloth"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: ClothCreateNestedManyWithoutUserInput
    outfits?: OutfitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: ClothUncheckedCreateNestedManyWithoutUserInput
    outfits?: OutfitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: ClothUpdateManyWithoutUserNestedInput
    outfits?: OutfitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: ClothUncheckedUpdateManyWithoutUserNestedInput
    outfits?: OutfitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothCreateInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothesInput
    outfits?: OutfitClothCreateNestedManyWithoutClothInput
  }

  export type ClothUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitClothUncheckedCreateNestedManyWithoutClothInput
  }

  export type ClothUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothesNestedInput
    outfits?: OutfitClothUpdateManyWithoutClothNestedInput
  }

  export type ClothUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitClothUncheckedUpdateManyWithoutClothNestedInput
  }

  export type ClothCreateManyInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOutfitsInput
    clothes?: OutfitClothCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: OutfitClothUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOutfitsNestedInput
    clothes?: OutfitClothUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: OutfitClothUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitCreateManyInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutfitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitClothCreateInput = {
    id?: string
    outfit: OutfitCreateNestedOneWithoutClothesInput
    cloth: ClothCreateNestedOneWithoutOutfitsInput
  }

  export type OutfitClothUncheckedCreateInput = {
    id?: string
    outfitId: string
    clothId: string
  }

  export type OutfitClothUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit?: OutfitUpdateOneRequiredWithoutClothesNestedInput
    cloth?: ClothUpdateOneRequiredWithoutOutfitsNestedInput
  }

  export type OutfitClothUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
    clothId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitClothCreateManyInput = {
    id?: string
    outfitId: string
    clothId: string
  }

  export type OutfitClothUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitClothUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
    clothId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClothListRelationFilter = {
    every?: ClothWhereInput
    some?: ClothWhereInput
    none?: ClothWhereInput
  }

  export type OutfitListRelationFilter = {
    every?: OutfitWhereInput
    some?: OutfitWhereInput
    none?: OutfitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClothOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OutfitClothListRelationFilter = {
    every?: OutfitClothWhereInput
    some?: OutfitClothWhereInput
    none?: OutfitClothWhereInput
  }

  export type OutfitClothOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClothCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClothMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClothMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    color?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutfitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutfitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutfitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutfitScalarRelationFilter = {
    is?: OutfitWhereInput
    isNot?: OutfitWhereInput
  }

  export type ClothScalarRelationFilter = {
    is?: ClothWhereInput
    isNot?: ClothWhereInput
  }

  export type OutfitClothCountOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothId?: SortOrder
  }

  export type OutfitClothMaxOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothId?: SortOrder
  }

  export type OutfitClothMinOrderByAggregateInput = {
    id?: SortOrder
    outfitId?: SortOrder
    clothId?: SortOrder
  }

  export type ClothCreateNestedManyWithoutUserInput = {
    create?: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput> | ClothCreateWithoutUserInput[] | ClothUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothCreateOrConnectWithoutUserInput | ClothCreateOrConnectWithoutUserInput[]
    createMany?: ClothCreateManyUserInputEnvelope
    connect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
  }

  export type OutfitCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
  }

  export type ClothUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput> | ClothCreateWithoutUserInput[] | ClothUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothCreateOrConnectWithoutUserInput | ClothCreateOrConnectWithoutUserInput[]
    createMany?: ClothCreateManyUserInputEnvelope
    connect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
  }

  export type OutfitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClothUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput> | ClothCreateWithoutUserInput[] | ClothUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothCreateOrConnectWithoutUserInput | ClothCreateOrConnectWithoutUserInput[]
    upsert?: ClothUpsertWithWhereUniqueWithoutUserInput | ClothUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClothCreateManyUserInputEnvelope
    set?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    disconnect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    delete?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    connect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    update?: ClothUpdateWithWhereUniqueWithoutUserInput | ClothUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClothUpdateManyWithWhereWithoutUserInput | ClothUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClothScalarWhereInput | ClothScalarWhereInput[]
  }

  export type OutfitUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutUserInput | OutfitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutUserInput | OutfitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutUserInput | OutfitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type ClothUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput> | ClothCreateWithoutUserInput[] | ClothUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClothCreateOrConnectWithoutUserInput | ClothCreateOrConnectWithoutUserInput[]
    upsert?: ClothUpsertWithWhereUniqueWithoutUserInput | ClothUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClothCreateManyUserInputEnvelope
    set?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    disconnect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    delete?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    connect?: ClothWhereUniqueInput | ClothWhereUniqueInput[]
    update?: ClothUpdateWithWhereUniqueWithoutUserInput | ClothUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClothUpdateManyWithWhereWithoutUserInput | ClothUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClothScalarWhereInput | ClothScalarWhereInput[]
  }

  export type OutfitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput> | OutfitCreateWithoutUserInput[] | OutfitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitCreateOrConnectWithoutUserInput | OutfitCreateOrConnectWithoutUserInput[]
    upsert?: OutfitUpsertWithWhereUniqueWithoutUserInput | OutfitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitCreateManyUserInputEnvelope
    set?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    disconnect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    delete?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    connect?: OutfitWhereUniqueInput | OutfitWhereUniqueInput[]
    update?: OutfitUpdateWithWhereUniqueWithoutUserInput | OutfitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitUpdateManyWithWhereWithoutUserInput | OutfitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClothesInput = {
    create?: XOR<UserCreateWithoutClothesInput, UserUncheckedCreateWithoutClothesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothesInput
    connect?: UserWhereUniqueInput
  }

  export type OutfitClothCreateNestedManyWithoutClothInput = {
    create?: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput> | OutfitClothCreateWithoutClothInput[] | OutfitClothUncheckedCreateWithoutClothInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutClothInput | OutfitClothCreateOrConnectWithoutClothInput[]
    createMany?: OutfitClothCreateManyClothInputEnvelope
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
  }

  export type OutfitClothUncheckedCreateNestedManyWithoutClothInput = {
    create?: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput> | OutfitClothCreateWithoutClothInput[] | OutfitClothUncheckedCreateWithoutClothInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutClothInput | OutfitClothCreateOrConnectWithoutClothInput[]
    createMany?: OutfitClothCreateManyClothInputEnvelope
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClothesNestedInput = {
    create?: XOR<UserCreateWithoutClothesInput, UserUncheckedCreateWithoutClothesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothesInput
    upsert?: UserUpsertWithoutClothesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClothesInput, UserUpdateWithoutClothesInput>, UserUncheckedUpdateWithoutClothesInput>
  }

  export type OutfitClothUpdateManyWithoutClothNestedInput = {
    create?: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput> | OutfitClothCreateWithoutClothInput[] | OutfitClothUncheckedCreateWithoutClothInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutClothInput | OutfitClothCreateOrConnectWithoutClothInput[]
    upsert?: OutfitClothUpsertWithWhereUniqueWithoutClothInput | OutfitClothUpsertWithWhereUniqueWithoutClothInput[]
    createMany?: OutfitClothCreateManyClothInputEnvelope
    set?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    disconnect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    delete?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    update?: OutfitClothUpdateWithWhereUniqueWithoutClothInput | OutfitClothUpdateWithWhereUniqueWithoutClothInput[]
    updateMany?: OutfitClothUpdateManyWithWhereWithoutClothInput | OutfitClothUpdateManyWithWhereWithoutClothInput[]
    deleteMany?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
  }

  export type OutfitClothUncheckedUpdateManyWithoutClothNestedInput = {
    create?: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput> | OutfitClothCreateWithoutClothInput[] | OutfitClothUncheckedCreateWithoutClothInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutClothInput | OutfitClothCreateOrConnectWithoutClothInput[]
    upsert?: OutfitClothUpsertWithWhereUniqueWithoutClothInput | OutfitClothUpsertWithWhereUniqueWithoutClothInput[]
    createMany?: OutfitClothCreateManyClothInputEnvelope
    set?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    disconnect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    delete?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    update?: OutfitClothUpdateWithWhereUniqueWithoutClothInput | OutfitClothUpdateWithWhereUniqueWithoutClothInput[]
    updateMany?: OutfitClothUpdateManyWithWhereWithoutClothInput | OutfitClothUpdateManyWithWhereWithoutClothInput[]
    deleteMany?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOutfitsInput = {
    create?: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutfitsInput
    connect?: UserWhereUniqueInput
  }

  export type OutfitClothCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput> | OutfitClothCreateWithoutOutfitInput[] | OutfitClothUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutOutfitInput | OutfitClothCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitClothCreateManyOutfitInputEnvelope
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
  }

  export type OutfitClothUncheckedCreateNestedManyWithoutOutfitInput = {
    create?: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput> | OutfitClothCreateWithoutOutfitInput[] | OutfitClothUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutOutfitInput | OutfitClothCreateOrConnectWithoutOutfitInput[]
    createMany?: OutfitClothCreateManyOutfitInputEnvelope
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOutfitsNestedInput = {
    create?: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutfitsInput
    upsert?: UserUpsertWithoutOutfitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutfitsInput, UserUpdateWithoutOutfitsInput>, UserUncheckedUpdateWithoutOutfitsInput>
  }

  export type OutfitClothUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput> | OutfitClothCreateWithoutOutfitInput[] | OutfitClothUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutOutfitInput | OutfitClothCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitClothUpsertWithWhereUniqueWithoutOutfitInput | OutfitClothUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitClothCreateManyOutfitInputEnvelope
    set?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    disconnect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    delete?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    update?: OutfitClothUpdateWithWhereUniqueWithoutOutfitInput | OutfitClothUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitClothUpdateManyWithWhereWithoutOutfitInput | OutfitClothUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
  }

  export type OutfitClothUncheckedUpdateManyWithoutOutfitNestedInput = {
    create?: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput> | OutfitClothCreateWithoutOutfitInput[] | OutfitClothUncheckedCreateWithoutOutfitInput[]
    connectOrCreate?: OutfitClothCreateOrConnectWithoutOutfitInput | OutfitClothCreateOrConnectWithoutOutfitInput[]
    upsert?: OutfitClothUpsertWithWhereUniqueWithoutOutfitInput | OutfitClothUpsertWithWhereUniqueWithoutOutfitInput[]
    createMany?: OutfitClothCreateManyOutfitInputEnvelope
    set?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    disconnect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    delete?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    connect?: OutfitClothWhereUniqueInput | OutfitClothWhereUniqueInput[]
    update?: OutfitClothUpdateWithWhereUniqueWithoutOutfitInput | OutfitClothUpdateWithWhereUniqueWithoutOutfitInput[]
    updateMany?: OutfitClothUpdateManyWithWhereWithoutOutfitInput | OutfitClothUpdateManyWithWhereWithoutOutfitInput[]
    deleteMany?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
  }

  export type OutfitCreateNestedOneWithoutClothesInput = {
    create?: XOR<OutfitCreateWithoutClothesInput, OutfitUncheckedCreateWithoutClothesInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutClothesInput
    connect?: OutfitWhereUniqueInput
  }

  export type ClothCreateNestedOneWithoutOutfitsInput = {
    create?: XOR<ClothCreateWithoutOutfitsInput, ClothUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: ClothCreateOrConnectWithoutOutfitsInput
    connect?: ClothWhereUniqueInput
  }

  export type OutfitUpdateOneRequiredWithoutClothesNestedInput = {
    create?: XOR<OutfitCreateWithoutClothesInput, OutfitUncheckedCreateWithoutClothesInput>
    connectOrCreate?: OutfitCreateOrConnectWithoutClothesInput
    upsert?: OutfitUpsertWithoutClothesInput
    connect?: OutfitWhereUniqueInput
    update?: XOR<XOR<OutfitUpdateToOneWithWhereWithoutClothesInput, OutfitUpdateWithoutClothesInput>, OutfitUncheckedUpdateWithoutClothesInput>
  }

  export type ClothUpdateOneRequiredWithoutOutfitsNestedInput = {
    create?: XOR<ClothCreateWithoutOutfitsInput, ClothUncheckedCreateWithoutOutfitsInput>
    connectOrCreate?: ClothCreateOrConnectWithoutOutfitsInput
    upsert?: ClothUpsertWithoutOutfitsInput
    connect?: ClothWhereUniqueInput
    update?: XOR<XOR<ClothUpdateToOneWithWhereWithoutOutfitsInput, ClothUpdateWithoutOutfitsInput>, ClothUncheckedUpdateWithoutOutfitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClothCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitClothCreateNestedManyWithoutClothInput
  }

  export type ClothUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitClothUncheckedCreateNestedManyWithoutClothInput
  }

  export type ClothCreateOrConnectWithoutUserInput = {
    where: ClothWhereUniqueInput
    create: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput>
  }

  export type ClothCreateManyUserInputEnvelope = {
    data: ClothCreateManyUserInput | ClothCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OutfitCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: OutfitClothCreateNestedManyWithoutOutfitInput
  }

  export type OutfitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: OutfitClothUncheckedCreateNestedManyWithoutOutfitInput
  }

  export type OutfitCreateOrConnectWithoutUserInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput>
  }

  export type OutfitCreateManyUserInputEnvelope = {
    data: OutfitCreateManyUserInput | OutfitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClothUpsertWithWhereUniqueWithoutUserInput = {
    where: ClothWhereUniqueInput
    update: XOR<ClothUpdateWithoutUserInput, ClothUncheckedUpdateWithoutUserInput>
    create: XOR<ClothCreateWithoutUserInput, ClothUncheckedCreateWithoutUserInput>
  }

  export type ClothUpdateWithWhereUniqueWithoutUserInput = {
    where: ClothWhereUniqueInput
    data: XOR<ClothUpdateWithoutUserInput, ClothUncheckedUpdateWithoutUserInput>
  }

  export type ClothUpdateManyWithWhereWithoutUserInput = {
    where: ClothScalarWhereInput
    data: XOR<ClothUpdateManyMutationInput, ClothUncheckedUpdateManyWithoutUserInput>
  }

  export type ClothScalarWhereInput = {
    AND?: ClothScalarWhereInput | ClothScalarWhereInput[]
    OR?: ClothScalarWhereInput[]
    NOT?: ClothScalarWhereInput | ClothScalarWhereInput[]
    id?: StringFilter<"Cloth"> | string
    name?: StringFilter<"Cloth"> | string
    type?: StringFilter<"Cloth"> | string
    color?: StringNullableFilter<"Cloth"> | string | null
    imageUrl?: StringNullableFilter<"Cloth"> | string | null
    userId?: StringFilter<"Cloth"> | string
    createdAt?: DateTimeFilter<"Cloth"> | Date | string
    updatedAt?: DateTimeFilter<"Cloth"> | Date | string
  }

  export type OutfitUpsertWithWhereUniqueWithoutUserInput = {
    where: OutfitWhereUniqueInput
    update: XOR<OutfitUpdateWithoutUserInput, OutfitUncheckedUpdateWithoutUserInput>
    create: XOR<OutfitCreateWithoutUserInput, OutfitUncheckedCreateWithoutUserInput>
  }

  export type OutfitUpdateWithWhereUniqueWithoutUserInput = {
    where: OutfitWhereUniqueInput
    data: XOR<OutfitUpdateWithoutUserInput, OutfitUncheckedUpdateWithoutUserInput>
  }

  export type OutfitUpdateManyWithWhereWithoutUserInput = {
    where: OutfitScalarWhereInput
    data: XOR<OutfitUpdateManyMutationInput, OutfitUncheckedUpdateManyWithoutUserInput>
  }

  export type OutfitScalarWhereInput = {
    AND?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    OR?: OutfitScalarWhereInput[]
    NOT?: OutfitScalarWhereInput | OutfitScalarWhereInput[]
    id?: StringFilter<"Outfit"> | string
    name?: StringFilter<"Outfit"> | string
    userId?: StringFilter<"Outfit"> | string
    description?: StringNullableFilter<"Outfit"> | string | null
    imageUrl?: StringNullableFilter<"Outfit"> | string | null
    createdAt?: DateTimeFilter<"Outfit"> | Date | string
    updatedAt?: DateTimeFilter<"Outfit"> | Date | string
  }

  export type UserCreateWithoutClothesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClothesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outfits?: OutfitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClothesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClothesInput, UserUncheckedCreateWithoutClothesInput>
  }

  export type OutfitClothCreateWithoutClothInput = {
    id?: string
    outfit: OutfitCreateNestedOneWithoutClothesInput
  }

  export type OutfitClothUncheckedCreateWithoutClothInput = {
    id?: string
    outfitId: string
  }

  export type OutfitClothCreateOrConnectWithoutClothInput = {
    where: OutfitClothWhereUniqueInput
    create: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput>
  }

  export type OutfitClothCreateManyClothInputEnvelope = {
    data: OutfitClothCreateManyClothInput | OutfitClothCreateManyClothInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClothesInput = {
    update: XOR<UserUpdateWithoutClothesInput, UserUncheckedUpdateWithoutClothesInput>
    create: XOR<UserCreateWithoutClothesInput, UserUncheckedCreateWithoutClothesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClothesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClothesInput, UserUncheckedUpdateWithoutClothesInput>
  }

  export type UserUpdateWithoutClothesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClothesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutfitClothUpsertWithWhereUniqueWithoutClothInput = {
    where: OutfitClothWhereUniqueInput
    update: XOR<OutfitClothUpdateWithoutClothInput, OutfitClothUncheckedUpdateWithoutClothInput>
    create: XOR<OutfitClothCreateWithoutClothInput, OutfitClothUncheckedCreateWithoutClothInput>
  }

  export type OutfitClothUpdateWithWhereUniqueWithoutClothInput = {
    where: OutfitClothWhereUniqueInput
    data: XOR<OutfitClothUpdateWithoutClothInput, OutfitClothUncheckedUpdateWithoutClothInput>
  }

  export type OutfitClothUpdateManyWithWhereWithoutClothInput = {
    where: OutfitClothScalarWhereInput
    data: XOR<OutfitClothUpdateManyMutationInput, OutfitClothUncheckedUpdateManyWithoutClothInput>
  }

  export type OutfitClothScalarWhereInput = {
    AND?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
    OR?: OutfitClothScalarWhereInput[]
    NOT?: OutfitClothScalarWhereInput | OutfitClothScalarWhereInput[]
    id?: StringFilter<"OutfitCloth"> | string
    outfitId?: StringFilter<"OutfitCloth"> | string
    clothId?: StringFilter<"OutfitCloth"> | string
  }

  export type UserCreateWithoutOutfitsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: ClothCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutfitsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clothes?: ClothUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutfitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
  }

  export type OutfitClothCreateWithoutOutfitInput = {
    id?: string
    cloth: ClothCreateNestedOneWithoutOutfitsInput
  }

  export type OutfitClothUncheckedCreateWithoutOutfitInput = {
    id?: string
    clothId: string
  }

  export type OutfitClothCreateOrConnectWithoutOutfitInput = {
    where: OutfitClothWhereUniqueInput
    create: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitClothCreateManyOutfitInputEnvelope = {
    data: OutfitClothCreateManyOutfitInput | OutfitClothCreateManyOutfitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOutfitsInput = {
    update: XOR<UserUpdateWithoutOutfitsInput, UserUncheckedUpdateWithoutOutfitsInput>
    create: XOR<UserCreateWithoutOutfitsInput, UserUncheckedCreateWithoutOutfitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutfitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutfitsInput, UserUncheckedUpdateWithoutOutfitsInput>
  }

  export type UserUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: ClothUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: ClothUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutfitClothUpsertWithWhereUniqueWithoutOutfitInput = {
    where: OutfitClothWhereUniqueInput
    update: XOR<OutfitClothUpdateWithoutOutfitInput, OutfitClothUncheckedUpdateWithoutOutfitInput>
    create: XOR<OutfitClothCreateWithoutOutfitInput, OutfitClothUncheckedCreateWithoutOutfitInput>
  }

  export type OutfitClothUpdateWithWhereUniqueWithoutOutfitInput = {
    where: OutfitClothWhereUniqueInput
    data: XOR<OutfitClothUpdateWithoutOutfitInput, OutfitClothUncheckedUpdateWithoutOutfitInput>
  }

  export type OutfitClothUpdateManyWithWhereWithoutOutfitInput = {
    where: OutfitClothScalarWhereInput
    data: XOR<OutfitClothUpdateManyMutationInput, OutfitClothUncheckedUpdateManyWithoutOutfitInput>
  }

  export type OutfitCreateWithoutClothesInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOutfitsInput
  }

  export type OutfitUncheckedCreateWithoutClothesInput = {
    id?: string
    name: string
    userId: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutfitCreateOrConnectWithoutClothesInput = {
    where: OutfitWhereUniqueInput
    create: XOR<OutfitCreateWithoutClothesInput, OutfitUncheckedCreateWithoutClothesInput>
  }

  export type ClothCreateWithoutOutfitsInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClothesInput
  }

  export type ClothUncheckedCreateWithoutOutfitsInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothCreateOrConnectWithoutOutfitsInput = {
    where: ClothWhereUniqueInput
    create: XOR<ClothCreateWithoutOutfitsInput, ClothUncheckedCreateWithoutOutfitsInput>
  }

  export type OutfitUpsertWithoutClothesInput = {
    update: XOR<OutfitUpdateWithoutClothesInput, OutfitUncheckedUpdateWithoutClothesInput>
    create: XOR<OutfitCreateWithoutClothesInput, OutfitUncheckedCreateWithoutClothesInput>
    where?: OutfitWhereInput
  }

  export type OutfitUpdateToOneWithWhereWithoutClothesInput = {
    where?: OutfitWhereInput
    data: XOR<OutfitUpdateWithoutClothesInput, OutfitUncheckedUpdateWithoutClothesInput>
  }

  export type OutfitUpdateWithoutClothesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOutfitsNestedInput
  }

  export type OutfitUncheckedUpdateWithoutClothesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothUpsertWithoutOutfitsInput = {
    update: XOR<ClothUpdateWithoutOutfitsInput, ClothUncheckedUpdateWithoutOutfitsInput>
    create: XOR<ClothCreateWithoutOutfitsInput, ClothUncheckedCreateWithoutOutfitsInput>
    where?: ClothWhereInput
  }

  export type ClothUpdateToOneWithWhereWithoutOutfitsInput = {
    where?: ClothWhereInput
    data: XOR<ClothUpdateWithoutOutfitsInput, ClothUncheckedUpdateWithoutOutfitsInput>
  }

  export type ClothUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClothesNestedInput
  }

  export type ClothUncheckedUpdateWithoutOutfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothCreateManyUserInput = {
    id?: string
    name: string
    type: string
    color?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutfitCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitClothUpdateManyWithoutClothNestedInput
  }

  export type ClothUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfits?: OutfitClothUncheckedUpdateManyWithoutClothNestedInput
  }

  export type ClothUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: OutfitClothUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clothes?: OutfitClothUncheckedUpdateManyWithoutOutfitNestedInput
  }

  export type OutfitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitClothCreateManyClothInput = {
    id?: string
    outfitId: string
  }

  export type OutfitClothUpdateWithoutClothInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfit?: OutfitUpdateOneRequiredWithoutClothesNestedInput
  }

  export type OutfitClothUncheckedUpdateWithoutClothInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitClothUncheckedUpdateManyWithoutClothInput = {
    id?: StringFieldUpdateOperationsInput | string
    outfitId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitClothCreateManyOutfitInput = {
    id?: string
    clothId: string
  }

  export type OutfitClothUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    cloth?: ClothUpdateOneRequiredWithoutOutfitsNestedInput
  }

  export type OutfitClothUncheckedUpdateWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clothId?: StringFieldUpdateOperationsInput | string
  }

  export type OutfitClothUncheckedUpdateManyWithoutOutfitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clothId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
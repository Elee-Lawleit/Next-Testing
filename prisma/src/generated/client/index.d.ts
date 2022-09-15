
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Parent
 * 
 */
export type Parent = {
  id: number
  parentEmail: string
  parentName: string
  parentCnic: string
  parentPhone: string
  parentPassword: string
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: number
  adminName: string
  adminPassword: string
  adminGender: string
  adminCnic: string
  adminEmail: string
  adminDesignation: string | null
}

/**
 * Model Role
 * 
 */
export type Role = {
  id: number
  role: string
  adminId: number
}

/**
 * Model Student
 * 
 */
export type Student = {
  id: number
  studentRegNo: string
  studentName: string
  studentPassword: string
  parentId: number
}

/**
 * Model StudentInfo
 * 
 */
export type StudentInfo = {
  infoCgpa: number
  infoAttendance: boolean
  studentId: number
}

/**
 * Model Subject
 * 
 */
export type Subject = {
  subjectName: string
  studentId: number
}

/**
 * Model Meeting
 * 
 */
export type Meeting = {
  id: number
  meetingDay: string
  meetingStatus: boolean
  meetingReason: string | null
  adminId: number
  studentId: number
  parentId: number
  meetingStartTime: Date
  meetingEndTime: Date
}

/**
 * Model Feedback
 * 
 */
export type Feedback = {
  id: number
  meetingId: number
  adminRemarks: string | null
  parentRemarks: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Parents
 * const parents = await prisma.parent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Parents
   * const parents = await prisma.parent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.studentInfo`: Exposes CRUD operations for the **StudentInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentInfos
    * const studentInfos = await prisma.studentInfo.findMany()
    * ```
    */
  get studentInfo(): Prisma.StudentInfoDelegate<GlobalReject>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<GlobalReject>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<GlobalReject>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.0
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Parent: 'Parent',
    Admin: 'Admin',
    Role: 'Role',
    Student: 'Student',
    StudentInfo: 'StudentInfo',
    Subject: 'Subject',
    Meeting: 'Meeting',
    Feedback: 'Feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ParentCountOutputType
   */


  export type ParentCountOutputType = {
    Meeting: number
    Student: number
  }

  export type ParentCountOutputTypeSelect = {
    Meeting?: boolean
    Student?: boolean
  }

  export type ParentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ParentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ParentCountOutputType
    : S extends undefined
    ? never
    : S extends ParentCountOutputTypeArgs
    ?'include' extends U
    ? ParentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ParentCountOutputType ? ParentCountOutputType[P] : never
  } 
    : ParentCountOutputType
  : ParentCountOutputType




  // Custom InputTypes

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     * 
    **/
    select?: ParentCountOutputTypeSelect | null
  }



  /**
   * Count Type AdminCountOutputType
   */


  export type AdminCountOutputType = {
    Meeting: number
    Role: number
  }

  export type AdminCountOutputTypeSelect = {
    Meeting?: boolean
    Role?: boolean
  }

  export type AdminCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AdminCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AdminCountOutputType
    : S extends undefined
    ? never
    : S extends AdminCountOutputTypeArgs
    ?'include' extends U
    ? AdminCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AdminCountOutputType ? AdminCountOutputType[P] : never
  } 
    : AdminCountOutputType
  : AdminCountOutputType




  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     * 
    **/
    select?: AdminCountOutputTypeSelect | null
  }



  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    Meeting: number
    Subject: number
  }

  export type StudentCountOutputTypeSelect = {
    Meeting?: boolean
    Subject?: boolean
  }

  export type StudentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StudentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StudentCountOutputType
    : S extends undefined
    ? never
    : S extends StudentCountOutputTypeArgs
    ?'include' extends U
    ? StudentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StudentCountOutputType ? StudentCountOutputType[P] : never
  } 
    : StudentCountOutputType
  : StudentCountOutputType




  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     * 
    **/
    select?: StudentCountOutputTypeSelect | null
  }



  /**
   * Count Type MeetingCountOutputType
   */


  export type MeetingCountOutputType = {
    Feedback: number
  }

  export type MeetingCountOutputTypeSelect = {
    Feedback?: boolean
  }

  export type MeetingCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MeetingCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MeetingCountOutputType
    : S extends undefined
    ? never
    : S extends MeetingCountOutputTypeArgs
    ?'include' extends U
    ? MeetingCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MeetingCountOutputType ? MeetingCountOutputType[P] : never
  } 
    : MeetingCountOutputType
  : MeetingCountOutputType




  // Custom InputTypes

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     * 
    **/
    select?: MeetingCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Parent
   */


  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentAvgAggregateOutputType = {
    id: number | null
  }

  export type ParentSumAggregateOutputType = {
    id: number | null
  }

  export type ParentMinAggregateOutputType = {
    id: number | null
    parentEmail: string | null
    parentName: string | null
    parentCnic: string | null
    parentPhone: string | null
    parentPassword: string | null
  }

  export type ParentMaxAggregateOutputType = {
    id: number | null
    parentEmail: string | null
    parentName: string | null
    parentCnic: string | null
    parentPhone: string | null
    parentPassword: string | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    parentEmail: number
    parentName: number
    parentCnic: number
    parentPhone: number
    parentPassword: number
    _all: number
  }


  export type ParentAvgAggregateInputType = {
    id?: true
  }

  export type ParentSumAggregateInputType = {
    id?: true
  }

  export type ParentMinAggregateInputType = {
    id?: true
    parentEmail?: true
    parentName?: true
    parentCnic?: true
    parentPhone?: true
    parentPassword?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    parentEmail?: true
    parentName?: true
    parentCnic?: true
    parentPhone?: true
    parentPassword?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    parentEmail?: true
    parentName?: true
    parentCnic?: true
    parentPhone?: true
    parentPassword?: true
    _all?: true
  }

  export type ParentAggregateArgs = {
    /**
     * Filter which Parent to aggregate.
     * 
    **/
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     * 
    **/
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs = {
    where?: ParentWhereInput
    orderBy?: Enumerable<ParentOrderByWithAggregationInput>
    by: Array<ParentScalarFieldEnum>
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _avg?: ParentAvgAggregateInputType
    _sum?: ParentSumAggregateInputType
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }


  export type ParentGroupByOutputType = {
    id: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect = {
    id?: boolean
    parentEmail?: boolean
    parentName?: boolean
    parentCnic?: boolean
    parentPhone?: boolean
    parentPassword?: boolean
    Meeting?: boolean | MeetingFindManyArgs
    Student?: boolean | StudentFindManyArgs
    _count?: boolean | ParentCountOutputTypeArgs
  }

  export type ParentInclude = {
    Meeting?: boolean | MeetingFindManyArgs
    Student?: boolean | StudentFindManyArgs
    _count?: boolean | ParentCountOutputTypeArgs
  }

  export type ParentGetPayload<
    S extends boolean | null | undefined | ParentArgs,
    U = keyof S
      > = S extends true
        ? Parent
    : S extends undefined
    ? never
    : S extends ParentArgs | ParentFindManyArgs
    ?'include' extends U
    ? Parent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['include'][P]>>  :
        P extends 'Student' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends '_count' ? ParentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'Student' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends '_count' ? ParentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Parent ? Parent[P] : never
  } 
    : Parent
  : Parent


  type ParentCountArgs = Merge<
    Omit<ParentFindManyArgs, 'select' | 'include'> & {
      select?: ParentCountAggregateInputType | true
    }
  >

  export interface ParentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ParentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Parent'> extends True ? CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>> : CheckSelect<T, Prisma__ParentClient<Parent | null >, Prisma__ParentClient<ParentGetPayload<T> | null >>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ParentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Parent'> extends True ? CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>> : CheckSelect<T, Prisma__ParentClient<Parent | null >, Prisma__ParentClient<ParentGetPayload<T> | null >>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParentFindManyArgs>(
      args?: SelectSubset<T, ParentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Parent>>, PrismaPromise<Array<ParentGetPayload<T>>>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
    **/
    create<T extends ParentCreateArgs>(
      args: SelectSubset<T, ParentCreateArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Create many Parents.
     *     @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     *     @example
     *     // Create many Parents
     *     const parent = await prisma.parent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParentCreateManyArgs>(
      args?: SelectSubset<T, ParentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
    **/
    delete<T extends ParentDeleteArgs>(
      args: SelectSubset<T, ParentDeleteArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParentUpdateArgs>(
      args: SelectSubset<T, ParentUpdateArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParentDeleteManyArgs>(
      args?: SelectSubset<T, ParentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParentUpdateManyArgs>(
      args: SelectSubset<T, ParentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
    **/
    upsert<T extends ParentUpsertArgs>(
      args: SelectSubset<T, ParentUpsertArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Find one Parent that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ParentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Find the first Parent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ParentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ParentClient<Parent>, Prisma__ParentClient<ParentGetPayload<T>>>

    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ParentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Meeting<T extends MeetingFindManyArgs = {}>(args?: Subset<T, MeetingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Meeting>>, PrismaPromise<Array<MeetingGetPayload<T>>>>;

    Student<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Parent base type for findUnique actions
   */
  export type ParentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * Filter, which Parent to fetch.
     * 
    **/
    where: ParentWhereUniqueInput
  }

  /**
   * Parent: findUnique
   */
  export interface ParentFindUniqueArgs extends ParentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parent base type for findFirst actions
   */
  export type ParentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * Filter, which Parent to fetch.
     * 
    **/
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     * 
    **/
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     * 
    **/
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     * 
    **/
    distinct?: Enumerable<ParentScalarFieldEnum>
  }

  /**
   * Parent: findFirst
   */
  export interface ParentFindFirstArgs extends ParentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * Filter, which Parents to fetch.
     * 
    **/
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     * 
    **/
    orderBy?: Enumerable<ParentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     * 
    **/
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * Parent create
   */
  export type ParentCreateArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * The data needed to create a Parent.
     * 
    **/
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }


  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs = {
    /**
     * The data used to create many Parents.
     * 
    **/
    data: Enumerable<ParentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Parent update
   */
  export type ParentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * The data needed to update a Parent.
     * 
    **/
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     * 
    **/
    where: ParentWhereUniqueInput
  }


  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs = {
    /**
     * The data used to update Parents.
     * 
    **/
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     * 
    **/
    where?: ParentWhereInput
  }


  /**
   * Parent upsert
   */
  export type ParentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * The filter to search for the Parent to update in case it exists.
     * 
    **/
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     * 
    **/
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }


  /**
   * Parent delete
   */
  export type ParentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
    /**
     * Filter which Parent to delete.
     * 
    **/
    where: ParentWhereUniqueInput
  }


  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs = {
    /**
     * Filter which Parents to delete
     * 
    **/
    where?: ParentWhereInput
  }


  /**
   * Parent: findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs = ParentFindUniqueArgsBase
      

  /**
   * Parent: findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs = ParentFindFirstArgsBase
      

  /**
   * Parent without action
   */
  export type ParentArgs = {
    /**
     * Select specific fields to fetch from the Parent
     * 
    **/
    select?: ParentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParentInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    adminName: string | null
    adminPassword: string | null
    adminGender: string | null
    adminCnic: string | null
    adminEmail: string | null
    adminDesignation: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    adminName: string | null
    adminPassword: string | null
    adminGender: string | null
    adminCnic: string | null
    adminEmail: string | null
    adminDesignation: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    adminName: number
    adminPassword: number
    adminGender: number
    adminCnic: number
    adminEmail: number
    adminDesignation: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    adminName?: true
    adminPassword?: true
    adminGender?: true
    adminCnic?: true
    adminEmail?: true
    adminDesignation?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    adminName?: true
    adminPassword?: true
    adminGender?: true
    adminCnic?: true
    adminEmail?: true
    adminDesignation?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    adminName?: true
    adminPassword?: true
    adminGender?: true
    adminCnic?: true
    adminEmail?: true
    adminDesignation?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    adminName?: boolean
    adminPassword?: boolean
    adminGender?: boolean
    adminCnic?: boolean
    adminEmail?: boolean
    adminDesignation?: boolean
    Meeting?: boolean | MeetingFindManyArgs
    Role?: boolean | RoleFindManyArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminInclude = {
    Meeting?: boolean | MeetingFindManyArgs
    Role?: boolean | RoleFindManyArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['include'][P]>>  :
        P extends 'Role' ? Array < RoleGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'Role' ? Array < RoleGetPayload<S['select'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Admin ? Admin[P] : never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find one Admin that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Meeting<T extends MeetingFindManyArgs = {}>(args?: Subset<T, MeetingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Meeting>>, PrismaPromise<Array<MeetingGetPayload<T>>>>;

    Role<T extends RoleFindManyArgs = {}>(args?: Subset<T, RoleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }

  /**
   * Admin: findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin: findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     * 
    **/
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin: findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = AdminFindUniqueArgsBase
      

  /**
   * Admin: findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = AdminFindFirstArgsBase
      

  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdminInclude | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    role: string | null
    adminId: number | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    role: string | null
    adminId: number | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role: number
    adminId: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    role?: true
    adminId?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role?: true
    adminId?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role?: true
    adminId?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which Role to aggregate.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithAggregationInput>
    by: Array<RoleScalarFieldEnum>
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: number
    role: string
    adminId: number
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect = {
    id?: boolean
    role?: boolean
    adminId?: boolean
    Admin?: boolean | AdminArgs
  }

  export type RoleInclude = {
    Admin?: boolean | AdminArgs
  }

  export type RoleGetPayload<
    S extends boolean | null | undefined | RoleArgs,
    U = keyof S
      > = S extends true
        ? Role
    : S extends undefined
    ? never
    : S extends RoleArgs | RoleFindManyArgs
    ?'include' extends U
    ? Role  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> :  P extends keyof Role ? Role[P] : never
  } 
    : Role
  : Role


  type RoleCountArgs = Merge<
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }
  >

  export interface RoleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>> : CheckSelect<T, Prisma__RoleClient<Role | null >, Prisma__RoleClient<RoleGetPayload<T> | null >>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Role>>, PrismaPromise<Array<RoleGetPayload<T>>>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Find one Role that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Find the first Role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RoleClient<Role>, Prisma__RoleClient<RoleGetPayload<T>>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Admin<T extends AdminArgs = {}>(args?: Subset<T, AdminArgs>): CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Role base type for findUnique actions
   */
  export type RoleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }

  /**
   * Role: findUnique
   */
  export interface RoleFindUniqueArgs extends RoleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role base type for findFirst actions
   */
  export type RoleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * Role: findFirst
   */
  export interface RoleFindFirstArgs extends RoleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to create a Role.
     * 
    **/
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    /**
     * The data used to create many Roles.
     * 
    **/
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to update a Role.
     * 
    **/
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    /**
     * The data used to update Roles.
     * 
    **/
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The filter to search for the Role to update in case it exists.
     * 
    **/
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     * 
    **/
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter which Role to delete.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role: findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs = RoleFindUniqueArgsBase
      

  /**
   * Role: findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs = RoleFindFirstArgsBase
      

  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    studentRegNo: string | null
    studentName: string | null
    studentPassword: string | null
    parentId: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    studentRegNo: string | null
    studentName: string | null
    studentPassword: string | null
    parentId: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentRegNo: number
    studentName: number
    studentPassword: number
    parentId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    studentRegNo?: true
    studentName?: true
    studentPassword?: true
    parentId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentRegNo?: true
    studentName?: true
    studentPassword?: true
    parentId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentRegNo?: true
    studentName?: true
    studentPassword?: true
    parentId?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: Array<StudentScalarFieldEnum>
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect = {
    id?: boolean
    studentRegNo?: boolean
    studentName?: boolean
    studentPassword?: boolean
    parentId?: boolean
    Parent?: boolean | ParentArgs
    Meeting?: boolean | MeetingFindManyArgs
    StudentInfo?: boolean | StudentInfoArgs
    Subject?: boolean | SubjectFindManyArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentInclude = {
    Parent?: boolean | ParentArgs
    Meeting?: boolean | MeetingFindManyArgs
    StudentInfo?: boolean | StudentInfoArgs
    Subject?: boolean | SubjectFindManyArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentGetPayload<
    S extends boolean | null | undefined | StudentArgs,
    U = keyof S
      > = S extends true
        ? Student
    : S extends undefined
    ? never
    : S extends StudentArgs | StudentFindManyArgs
    ?'include' extends U
    ? Student  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Parent' ? ParentGetPayload<S['include'][P]> :
        P extends 'Meeting' ? Array < MeetingGetPayload<S['include'][P]>>  :
        P extends 'StudentInfo' ? StudentInfoGetPayload<S['include'][P]> | null :
        P extends 'Subject' ? Array < SubjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Parent' ? ParentGetPayload<S['select'][P]> :
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'StudentInfo' ? StudentInfoGetPayload<S['select'][P]> | null :
        P extends 'Subject' ? Array < SubjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Student ? Student[P] : never
  } 
    : Student
  : Student


  type StudentCountArgs = Merge<
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
  >

  export interface StudentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find one Student that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Parent<T extends ParentArgs = {}>(args?: Subset<T, ParentArgs>): CheckSelect<T, Prisma__ParentClient<Parent | null >, Prisma__ParentClient<ParentGetPayload<T> | null >>;

    Meeting<T extends MeetingFindManyArgs = {}>(args?: Subset<T, MeetingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Meeting>>, PrismaPromise<Array<MeetingGetPayload<T>>>>;

    StudentInfo<T extends StudentInfoArgs = {}>(args?: Subset<T, StudentInfoArgs>): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo | null >, Prisma__StudentInfoClient<StudentInfoGetPayload<T> | null >>;

    Subject<T extends SubjectFindManyArgs = {}>(args?: Subset<T, SubjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Subject>>, PrismaPromise<Array<SubjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where: StudentWhereUniqueInput
  }

  /**
   * Student: findUnique
   */
  export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     * 
    **/
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student: findFirst
   */
  export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     * 
    **/
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs = {
    /**
     * The data used to create many Students.
     * 
    **/
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     * 
    **/
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    /**
     * The data used to update Students.
     * 
    **/
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     * 
    **/
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     * 
    **/
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    /**
     * Filter which Students to delete
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student: findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs = StudentFindUniqueArgsBase
      

  /**
   * Student: findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs = StudentFindFirstArgsBase
      

  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
  }



  /**
   * Model StudentInfo
   */


  export type AggregateStudentInfo = {
    _count: StudentInfoCountAggregateOutputType | null
    _avg: StudentInfoAvgAggregateOutputType | null
    _sum: StudentInfoSumAggregateOutputType | null
    _min: StudentInfoMinAggregateOutputType | null
    _max: StudentInfoMaxAggregateOutputType | null
  }

  export type StudentInfoAvgAggregateOutputType = {
    infoCgpa: number | null
    studentId: number | null
  }

  export type StudentInfoSumAggregateOutputType = {
    infoCgpa: number | null
    studentId: number | null
  }

  export type StudentInfoMinAggregateOutputType = {
    infoCgpa: number | null
    infoAttendance: boolean | null
    studentId: number | null
  }

  export type StudentInfoMaxAggregateOutputType = {
    infoCgpa: number | null
    infoAttendance: boolean | null
    studentId: number | null
  }

  export type StudentInfoCountAggregateOutputType = {
    infoCgpa: number
    infoAttendance: number
    studentId: number
    _all: number
  }


  export type StudentInfoAvgAggregateInputType = {
    infoCgpa?: true
    studentId?: true
  }

  export type StudentInfoSumAggregateInputType = {
    infoCgpa?: true
    studentId?: true
  }

  export type StudentInfoMinAggregateInputType = {
    infoCgpa?: true
    infoAttendance?: true
    studentId?: true
  }

  export type StudentInfoMaxAggregateInputType = {
    infoCgpa?: true
    infoAttendance?: true
    studentId?: true
  }

  export type StudentInfoCountAggregateInputType = {
    infoCgpa?: true
    infoAttendance?: true
    studentId?: true
    _all?: true
  }

  export type StudentInfoAggregateArgs = {
    /**
     * Filter which StudentInfo to aggregate.
     * 
    **/
    where?: StudentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentInfos
    **/
    _count?: true | StudentInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentInfoMaxAggregateInputType
  }

  export type GetStudentInfoAggregateType<T extends StudentInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentInfo[P]>
      : GetScalarType<T[P], AggregateStudentInfo[P]>
  }




  export type StudentInfoGroupByArgs = {
    where?: StudentInfoWhereInput
    orderBy?: Enumerable<StudentInfoOrderByWithAggregationInput>
    by: Array<StudentInfoScalarFieldEnum>
    having?: StudentInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentInfoCountAggregateInputType | true
    _avg?: StudentInfoAvgAggregateInputType
    _sum?: StudentInfoSumAggregateInputType
    _min?: StudentInfoMinAggregateInputType
    _max?: StudentInfoMaxAggregateInputType
  }


  export type StudentInfoGroupByOutputType = {
    infoCgpa: number
    infoAttendance: boolean
    studentId: number
    _count: StudentInfoCountAggregateOutputType | null
    _avg: StudentInfoAvgAggregateOutputType | null
    _sum: StudentInfoSumAggregateOutputType | null
    _min: StudentInfoMinAggregateOutputType | null
    _max: StudentInfoMaxAggregateOutputType | null
  }

  type GetStudentInfoGroupByPayload<T extends StudentInfoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentInfoGroupByOutputType[P]>
            : GetScalarType<T[P], StudentInfoGroupByOutputType[P]>
        }
      >
    >


  export type StudentInfoSelect = {
    infoCgpa?: boolean
    infoAttendance?: boolean
    studentId?: boolean
    Student?: boolean | StudentArgs
  }

  export type StudentInfoInclude = {
    Student?: boolean | StudentArgs
  }

  export type StudentInfoGetPayload<
    S extends boolean | null | undefined | StudentInfoArgs,
    U = keyof S
      > = S extends true
        ? StudentInfo
    : S extends undefined
    ? never
    : S extends StudentInfoArgs | StudentInfoFindManyArgs
    ?'include' extends U
    ? StudentInfo  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Student' ? StudentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Student' ? StudentGetPayload<S['select'][P]> :  P extends keyof StudentInfo ? StudentInfo[P] : never
  } 
    : StudentInfo
  : StudentInfo


  type StudentInfoCountArgs = Merge<
    Omit<StudentInfoFindManyArgs, 'select' | 'include'> & {
      select?: StudentInfoCountAggregateInputType | true
    }
  >

  export interface StudentInfoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one StudentInfo that matches the filter.
     * @param {StudentInfoFindUniqueArgs} args - Arguments to find a StudentInfo
     * @example
     * // Get one StudentInfo
     * const studentInfo = await prisma.studentInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StudentInfo'> extends True ? CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>> : CheckSelect<T, Prisma__StudentInfoClient<StudentInfo | null >, Prisma__StudentInfoClient<StudentInfoGetPayload<T> | null >>

    /**
     * Find the first StudentInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoFindFirstArgs} args - Arguments to find a StudentInfo
     * @example
     * // Get one StudentInfo
     * const studentInfo = await prisma.studentInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StudentInfo'> extends True ? CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>> : CheckSelect<T, Prisma__StudentInfoClient<StudentInfo | null >, Prisma__StudentInfoClient<StudentInfoGetPayload<T> | null >>

    /**
     * Find zero or more StudentInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentInfos
     * const studentInfos = await prisma.studentInfo.findMany()
     * 
     * // Get first 10 StudentInfos
     * const studentInfos = await prisma.studentInfo.findMany({ take: 10 })
     * 
     * // Only select the `infoCgpa`
     * const studentInfoWithInfoCgpaOnly = await prisma.studentInfo.findMany({ select: { infoCgpa: true } })
     * 
    **/
    findMany<T extends StudentInfoFindManyArgs>(
      args?: SelectSubset<T, StudentInfoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<StudentInfo>>, PrismaPromise<Array<StudentInfoGetPayload<T>>>>

    /**
     * Create a StudentInfo.
     * @param {StudentInfoCreateArgs} args - Arguments to create a StudentInfo.
     * @example
     * // Create one StudentInfo
     * const StudentInfo = await prisma.studentInfo.create({
     *   data: {
     *     // ... data to create a StudentInfo
     *   }
     * })
     * 
    **/
    create<T extends StudentInfoCreateArgs>(
      args: SelectSubset<T, StudentInfoCreateArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Create many StudentInfos.
     *     @param {StudentInfoCreateManyArgs} args - Arguments to create many StudentInfos.
     *     @example
     *     // Create many StudentInfos
     *     const studentInfo = await prisma.studentInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentInfoCreateManyArgs>(
      args?: SelectSubset<T, StudentInfoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StudentInfo.
     * @param {StudentInfoDeleteArgs} args - Arguments to delete one StudentInfo.
     * @example
     * // Delete one StudentInfo
     * const StudentInfo = await prisma.studentInfo.delete({
     *   where: {
     *     // ... filter to delete one StudentInfo
     *   }
     * })
     * 
    **/
    delete<T extends StudentInfoDeleteArgs>(
      args: SelectSubset<T, StudentInfoDeleteArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Update one StudentInfo.
     * @param {StudentInfoUpdateArgs} args - Arguments to update one StudentInfo.
     * @example
     * // Update one StudentInfo
     * const studentInfo = await prisma.studentInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentInfoUpdateArgs>(
      args: SelectSubset<T, StudentInfoUpdateArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Delete zero or more StudentInfos.
     * @param {StudentInfoDeleteManyArgs} args - Arguments to filter StudentInfos to delete.
     * @example
     * // Delete a few StudentInfos
     * const { count } = await prisma.studentInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentInfoDeleteManyArgs>(
      args?: SelectSubset<T, StudentInfoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentInfos
     * const studentInfo = await prisma.studentInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentInfoUpdateManyArgs>(
      args: SelectSubset<T, StudentInfoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentInfo.
     * @param {StudentInfoUpsertArgs} args - Arguments to update or create a StudentInfo.
     * @example
     * // Update or create a StudentInfo
     * const studentInfo = await prisma.studentInfo.upsert({
     *   create: {
     *     // ... data to create a StudentInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentInfo we want to update
     *   }
     * })
    **/
    upsert<T extends StudentInfoUpsertArgs>(
      args: SelectSubset<T, StudentInfoUpsertArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Find one StudentInfo that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudentInfoFindUniqueOrThrowArgs} args - Arguments to find a StudentInfo
     * @example
     * // Get one StudentInfo
     * const studentInfo = await prisma.studentInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentInfoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentInfoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Find the first StudentInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoFindFirstOrThrowArgs} args - Arguments to find a StudentInfo
     * @example
     * // Get one StudentInfo
     * const studentInfo = await prisma.studentInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentInfoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentInfoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentInfoClient<StudentInfo>, Prisma__StudentInfoClient<StudentInfoGetPayload<T>>>

    /**
     * Count the number of StudentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoCountArgs} args - Arguments to filter StudentInfos to count.
     * @example
     * // Count the number of StudentInfos
     * const count = await prisma.studentInfo.count({
     *   where: {
     *     // ... the filter for the StudentInfos we want to count
     *   }
     * })
    **/
    count<T extends StudentInfoCountArgs>(
      args?: Subset<T, StudentInfoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentInfoAggregateArgs>(args: Subset<T, StudentInfoAggregateArgs>): PrismaPromise<GetStudentInfoAggregateType<T>>

    /**
     * Group by StudentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentInfoGroupByArgs} args - Group by arguments.
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
      T extends StudentInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentInfoGroupByArgs['orderBy'] }
        : { orderBy?: StudentInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentInfoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentInfoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StudentInfo base type for findUnique actions
   */
  export type StudentInfoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * Filter, which StudentInfo to fetch.
     * 
    **/
    where: StudentInfoWhereUniqueInput
  }

  /**
   * StudentInfo: findUnique
   */
  export interface StudentInfoFindUniqueArgs extends StudentInfoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentInfo base type for findFirst actions
   */
  export type StudentInfoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * Filter, which StudentInfo to fetch.
     * 
    **/
    where?: StudentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentInfos.
     * 
    **/
    cursor?: StudentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentInfos.
     * 
    **/
    distinct?: Enumerable<StudentInfoScalarFieldEnum>
  }

  /**
   * StudentInfo: findFirst
   */
  export interface StudentInfoFindFirstArgs extends StudentInfoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentInfo findMany
   */
  export type StudentInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * Filter, which StudentInfos to fetch.
     * 
    **/
    where?: StudentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentInfos.
     * 
    **/
    cursor?: StudentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentInfos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentInfoScalarFieldEnum>
  }


  /**
   * StudentInfo create
   */
  export type StudentInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * The data needed to create a StudentInfo.
     * 
    **/
    data: XOR<StudentInfoCreateInput, StudentInfoUncheckedCreateInput>
  }


  /**
   * StudentInfo createMany
   */
  export type StudentInfoCreateManyArgs = {
    /**
     * The data used to create many StudentInfos.
     * 
    **/
    data: Enumerable<StudentInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StudentInfo update
   */
  export type StudentInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * The data needed to update a StudentInfo.
     * 
    **/
    data: XOR<StudentInfoUpdateInput, StudentInfoUncheckedUpdateInput>
    /**
     * Choose, which StudentInfo to update.
     * 
    **/
    where: StudentInfoWhereUniqueInput
  }


  /**
   * StudentInfo updateMany
   */
  export type StudentInfoUpdateManyArgs = {
    /**
     * The data used to update StudentInfos.
     * 
    **/
    data: XOR<StudentInfoUpdateManyMutationInput, StudentInfoUncheckedUpdateManyInput>
    /**
     * Filter which StudentInfos to update
     * 
    **/
    where?: StudentInfoWhereInput
  }


  /**
   * StudentInfo upsert
   */
  export type StudentInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * The filter to search for the StudentInfo to update in case it exists.
     * 
    **/
    where: StudentInfoWhereUniqueInput
    /**
     * In case the StudentInfo found by the `where` argument doesn't exist, create a new StudentInfo with this data.
     * 
    **/
    create: XOR<StudentInfoCreateInput, StudentInfoUncheckedCreateInput>
    /**
     * In case the StudentInfo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentInfoUpdateInput, StudentInfoUncheckedUpdateInput>
  }


  /**
   * StudentInfo delete
   */
  export type StudentInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
    /**
     * Filter which StudentInfo to delete.
     * 
    **/
    where: StudentInfoWhereUniqueInput
  }


  /**
   * StudentInfo deleteMany
   */
  export type StudentInfoDeleteManyArgs = {
    /**
     * Filter which StudentInfos to delete
     * 
    **/
    where?: StudentInfoWhereInput
  }


  /**
   * StudentInfo: findUniqueOrThrow
   */
  export type StudentInfoFindUniqueOrThrowArgs = StudentInfoFindUniqueArgsBase
      

  /**
   * StudentInfo: findFirstOrThrow
   */
  export type StudentInfoFindFirstOrThrowArgs = StudentInfoFindFirstArgsBase
      

  /**
   * StudentInfo without action
   */
  export type StudentInfoArgs = {
    /**
     * Select specific fields to fetch from the StudentInfo
     * 
    **/
    select?: StudentInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInfoInclude | null
  }



  /**
   * Model Subject
   */


  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    studentId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    studentId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    subjectName: string | null
    studentId: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    subjectName: string | null
    studentId: number | null
  }

  export type SubjectCountAggregateOutputType = {
    subjectName: number
    studentId: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    studentId?: true
  }

  export type SubjectSumAggregateInputType = {
    studentId?: true
  }

  export type SubjectMinAggregateInputType = {
    subjectName?: true
    studentId?: true
  }

  export type SubjectMaxAggregateInputType = {
    subjectName?: true
    studentId?: true
  }

  export type SubjectCountAggregateInputType = {
    subjectName?: true
    studentId?: true
    _all?: true
  }

  export type SubjectAggregateArgs = {
    /**
     * Filter which Subject to aggregate.
     * 
    **/
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs = {
    where?: SubjectWhereInput
    orderBy?: Enumerable<SubjectOrderByWithAggregationInput>
    by: Array<SubjectScalarFieldEnum>
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }


  export type SubjectGroupByOutputType = {
    subjectName: string
    studentId: number
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect = {
    subjectName?: boolean
    studentId?: boolean
    Student?: boolean | StudentArgs
  }

  export type SubjectInclude = {
    Student?: boolean | StudentArgs
  }

  export type SubjectGetPayload<
    S extends boolean | null | undefined | SubjectArgs,
    U = keyof S
      > = S extends true
        ? Subject
    : S extends undefined
    ? never
    : S extends SubjectArgs | SubjectFindManyArgs
    ?'include' extends U
    ? Subject  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Student' ? StudentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Student' ? StudentGetPayload<S['select'][P]> :  P extends keyof Subject ? Subject[P] : never
  } 
    : Subject
  : Subject


  type SubjectCountArgs = Merge<
    Omit<SubjectFindManyArgs, 'select' | 'include'> & {
      select?: SubjectCountAggregateInputType | true
    }
  >

  export interface SubjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Subject'> extends True ? CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>> : CheckSelect<T, Prisma__SubjectClient<Subject | null >, Prisma__SubjectClient<SubjectGetPayload<T> | null >>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Subject'> extends True ? CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>> : CheckSelect<T, Prisma__SubjectClient<Subject | null >, Prisma__SubjectClient<SubjectGetPayload<T> | null >>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `subjectName`
     * const subjectWithSubjectNameOnly = await prisma.subject.findMany({ select: { subjectName: true } })
     * 
    **/
    findMany<T extends SubjectFindManyArgs>(
      args?: SelectSubset<T, SubjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Subject>>, PrismaPromise<Array<SubjectGetPayload<T>>>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
    **/
    create<T extends SubjectCreateArgs>(
      args: SelectSubset<T, SubjectCreateArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Create many Subjects.
     *     @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     *     @example
     *     // Create many Subjects
     *     const subject = await prisma.subject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubjectCreateManyArgs>(
      args?: SelectSubset<T, SubjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
    **/
    delete<T extends SubjectDeleteArgs>(
      args: SelectSubset<T, SubjectDeleteArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubjectUpdateArgs>(
      args: SelectSubset<T, SubjectUpdateArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubjectDeleteManyArgs>(
      args?: SelectSubset<T, SubjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubjectUpdateManyArgs>(
      args: SelectSubset<T, SubjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
    **/
    upsert<T extends SubjectUpsertArgs>(
      args: SelectSubset<T, SubjectUpsertArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Find one Subject that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SubjectFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Find the first Subject that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubjectFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>

    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Subject base type for findUnique actions
   */
  export type SubjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * Filter, which Subject to fetch.
     * 
    **/
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject: findUnique
   */
  export interface SubjectFindUniqueArgs extends SubjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subject base type for findFirst actions
   */
  export type SubjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * Filter, which Subject to fetch.
     * 
    **/
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     * 
    **/
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     * 
    **/
    distinct?: Enumerable<SubjectScalarFieldEnum>
  }

  /**
   * Subject: findFirst
   */
  export interface SubjectFindFirstArgs extends SubjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * Filter, which Subjects to fetch.
     * 
    **/
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     * 
    **/
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SubjectScalarFieldEnum>
  }


  /**
   * Subject create
   */
  export type SubjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * The data needed to create a Subject.
     * 
    **/
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }


  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs = {
    /**
     * The data used to create many Subjects.
     * 
    **/
    data: Enumerable<SubjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Subject update
   */
  export type SubjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * The data needed to update a Subject.
     * 
    **/
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     * 
    **/
    where: SubjectWhereUniqueInput
  }


  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs = {
    /**
     * The data used to update Subjects.
     * 
    **/
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     * 
    **/
    where?: SubjectWhereInput
  }


  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * The filter to search for the Subject to update in case it exists.
     * 
    **/
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     * 
    **/
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }


  /**
   * Subject delete
   */
  export type SubjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
    /**
     * Filter which Subject to delete.
     * 
    **/
    where: SubjectWhereUniqueInput
  }


  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs = {
    /**
     * Filter which Subjects to delete
     * 
    **/
    where?: SubjectWhereInput
  }


  /**
   * Subject: findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs = SubjectFindUniqueArgsBase
      

  /**
   * Subject: findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs = SubjectFindFirstArgsBase
      

  /**
   * Subject without action
   */
  export type SubjectArgs = {
    /**
     * Select specific fields to fetch from the Subject
     * 
    **/
    select?: SubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubjectInclude | null
  }



  /**
   * Model Meeting
   */


  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    studentId: number | null
    parentId: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    studentId: number | null
    parentId: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    meetingDay: string | null
    meetingStatus: boolean | null
    meetingReason: string | null
    adminId: number | null
    studentId: number | null
    parentId: number | null
    meetingStartTime: Date | null
    meetingEndTime: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    meetingDay: string | null
    meetingStatus: boolean | null
    meetingReason: string | null
    adminId: number | null
    studentId: number | null
    parentId: number | null
    meetingStartTime: Date | null
    meetingEndTime: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    meetingDay: number
    meetingStatus: number
    meetingReason: number
    adminId: number
    studentId: number
    parentId: number
    meetingStartTime: number
    meetingEndTime: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    adminId?: true
    studentId?: true
    parentId?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    adminId?: true
    studentId?: true
    parentId?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    meetingDay?: true
    meetingStatus?: true
    meetingReason?: true
    adminId?: true
    studentId?: true
    parentId?: true
    meetingStartTime?: true
    meetingEndTime?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    meetingDay?: true
    meetingStatus?: true
    meetingReason?: true
    adminId?: true
    studentId?: true
    parentId?: true
    meetingStartTime?: true
    meetingEndTime?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    meetingDay?: true
    meetingStatus?: true
    meetingReason?: true
    adminId?: true
    studentId?: true
    parentId?: true
    meetingStartTime?: true
    meetingEndTime?: true
    _all?: true
  }

  export type MeetingAggregateArgs = {
    /**
     * Filter which Meeting to aggregate.
     * 
    **/
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     * 
    **/
    orderBy?: Enumerable<MeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs = {
    where?: MeetingWhereInput
    orderBy?: Enumerable<MeetingOrderByWithAggregationInput>
    by: Array<MeetingScalarFieldEnum>
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }


  export type MeetingGroupByOutputType = {
    id: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason: string | null
    adminId: number
    studentId: number
    parentId: number
    meetingStartTime: Date
    meetingEndTime: Date
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect = {
    id?: boolean
    meetingDay?: boolean
    meetingStatus?: boolean
    meetingReason?: boolean
    adminId?: boolean
    studentId?: boolean
    parentId?: boolean
    meetingStartTime?: boolean
    meetingEndTime?: boolean
    Admin?: boolean | AdminArgs
    Parent?: boolean | ParentArgs
    Student?: boolean | StudentArgs
    Feedback?: boolean | FeedbackFindManyArgs
    _count?: boolean | MeetingCountOutputTypeArgs
  }

  export type MeetingInclude = {
    Admin?: boolean | AdminArgs
    Parent?: boolean | ParentArgs
    Student?: boolean | StudentArgs
    Feedback?: boolean | FeedbackFindManyArgs
    _count?: boolean | MeetingCountOutputTypeArgs
  }

  export type MeetingGetPayload<
    S extends boolean | null | undefined | MeetingArgs,
    U = keyof S
      > = S extends true
        ? Meeting
    : S extends undefined
    ? never
    : S extends MeetingArgs | MeetingFindManyArgs
    ?'include' extends U
    ? Meeting  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> :
        P extends 'Parent' ? ParentGetPayload<S['include'][P]> :
        P extends 'Student' ? StudentGetPayload<S['include'][P]> :
        P extends 'Feedback' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends '_count' ? MeetingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> :
        P extends 'Parent' ? ParentGetPayload<S['select'][P]> :
        P extends 'Student' ? StudentGetPayload<S['select'][P]> :
        P extends 'Feedback' ? Array < FeedbackGetPayload<S['select'][P]>>  :
        P extends '_count' ? MeetingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Meeting ? Meeting[P] : never
  } 
    : Meeting
  : Meeting


  type MeetingCountArgs = Merge<
    Omit<MeetingFindManyArgs, 'select' | 'include'> & {
      select?: MeetingCountAggregateInputType | true
    }
  >

  export interface MeetingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MeetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MeetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Meeting'> extends True ? CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>> : CheckSelect<T, Prisma__MeetingClient<Meeting | null >, Prisma__MeetingClient<MeetingGetPayload<T> | null >>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MeetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MeetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Meeting'> extends True ? CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>> : CheckSelect<T, Prisma__MeetingClient<Meeting | null >, Prisma__MeetingClient<MeetingGetPayload<T> | null >>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MeetingFindManyArgs>(
      args?: SelectSubset<T, MeetingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Meeting>>, PrismaPromise<Array<MeetingGetPayload<T>>>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
    **/
    create<T extends MeetingCreateArgs>(
      args: SelectSubset<T, MeetingCreateArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Create many Meetings.
     *     @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     *     @example
     *     // Create many Meetings
     *     const meeting = await prisma.meeting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MeetingCreateManyArgs>(
      args?: SelectSubset<T, MeetingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
    **/
    delete<T extends MeetingDeleteArgs>(
      args: SelectSubset<T, MeetingDeleteArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MeetingUpdateArgs>(
      args: SelectSubset<T, MeetingUpdateArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MeetingDeleteManyArgs>(
      args?: SelectSubset<T, MeetingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MeetingUpdateManyArgs>(
      args: SelectSubset<T, MeetingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
    **/
    upsert<T extends MeetingUpsertArgs>(
      args: SelectSubset<T, MeetingUpsertArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Find one Meeting that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MeetingFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Find the first Meeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MeetingFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MeetingClient<Meeting>, Prisma__MeetingClient<MeetingGetPayload<T>>>

    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
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
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MeetingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Admin<T extends AdminArgs = {}>(args?: Subset<T, AdminArgs>): CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>;

    Parent<T extends ParentArgs = {}>(args?: Subset<T, ParentArgs>): CheckSelect<T, Prisma__ParentClient<Parent | null >, Prisma__ParentClient<ParentGetPayload<T> | null >>;

    Student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    Feedback<T extends FeedbackFindManyArgs = {}>(args?: Subset<T, FeedbackFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Feedback>>, PrismaPromise<Array<FeedbackGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Meeting base type for findUnique actions
   */
  export type MeetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * Filter, which Meeting to fetch.
     * 
    **/
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting: findUnique
   */
  export interface MeetingFindUniqueArgs extends MeetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Meeting base type for findFirst actions
   */
  export type MeetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * Filter, which Meeting to fetch.
     * 
    **/
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     * 
    **/
    orderBy?: Enumerable<MeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     * 
    **/
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     * 
    **/
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }

  /**
   * Meeting: findFirst
   */
  export interface MeetingFindFirstArgs extends MeetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * Filter, which Meetings to fetch.
     * 
    **/
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     * 
    **/
    orderBy?: Enumerable<MeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     * 
    **/
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * Meeting create
   */
  export type MeetingCreateArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * The data needed to create a Meeting.
     * 
    **/
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }


  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs = {
    /**
     * The data used to create many Meetings.
     * 
    **/
    data: Enumerable<MeetingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Meeting update
   */
  export type MeetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * The data needed to update a Meeting.
     * 
    **/
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     * 
    **/
    where: MeetingWhereUniqueInput
  }


  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs = {
    /**
     * The data used to update Meetings.
     * 
    **/
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     * 
    **/
    where?: MeetingWhereInput
  }


  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     * 
    **/
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     * 
    **/
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }


  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
    /**
     * Filter which Meeting to delete.
     * 
    **/
    where: MeetingWhereUniqueInput
  }


  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs = {
    /**
     * Filter which Meetings to delete
     * 
    **/
    where?: MeetingWhereInput
  }


  /**
   * Meeting: findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs = MeetingFindUniqueArgsBase
      

  /**
   * Meeting: findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs = MeetingFindFirstArgsBase
      

  /**
   * Meeting without action
   */
  export type MeetingArgs = {
    /**
     * Select specific fields to fetch from the Meeting
     * 
    **/
    select?: MeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MeetingInclude | null
  }



  /**
   * Model Feedback
   */


  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    meetingId: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    meetingId: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    meetingId: number | null
    adminRemarks: string | null
    parentRemarks: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    meetingId: number | null
    adminRemarks: string | null
    parentRemarks: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    meetingId: number
    adminRemarks: number
    parentRemarks: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    meetingId?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    meetingId?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    meetingId?: true
    adminRemarks?: true
    parentRemarks?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    meetingId?: true
    adminRemarks?: true
    parentRemarks?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    meetingId?: true
    adminRemarks?: true
    parentRemarks?: true
    _all?: true
  }

  export type FeedbackAggregateArgs = {
    /**
     * Filter which Feedback to aggregate.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs = {
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithAggregationInput>
    by: Array<FeedbackScalarFieldEnum>
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }


  export type FeedbackGroupByOutputType = {
    id: number
    meetingId: number
    adminRemarks: string | null
    parentRemarks: string | null
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect = {
    id?: boolean
    meetingId?: boolean
    adminRemarks?: boolean
    parentRemarks?: boolean
    Meeting?: boolean | MeetingArgs
  }

  export type FeedbackInclude = {
    Meeting?: boolean | MeetingArgs
  }

  export type FeedbackGetPayload<
    S extends boolean | null | undefined | FeedbackArgs,
    U = keyof S
      > = S extends true
        ? Feedback
    : S extends undefined
    ? never
    : S extends FeedbackArgs | FeedbackFindManyArgs
    ?'include' extends U
    ? Feedback  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Meeting' ? MeetingGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? MeetingGetPayload<S['select'][P]> :  P extends keyof Feedback ? Feedback[P] : never
  } 
    : Feedback
  : Feedback


  type FeedbackCountArgs = Merge<
    Omit<FeedbackFindManyArgs, 'select' | 'include'> & {
      select?: FeedbackCountAggregateInputType | true
    }
  >

  export interface FeedbackDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedbackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Feedback'> extends True ? CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>> : CheckSelect<T, Prisma__FeedbackClient<Feedback | null >, Prisma__FeedbackClient<FeedbackGetPayload<T> | null >>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedbackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Feedback'> extends True ? CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>> : CheckSelect<T, Prisma__FeedbackClient<Feedback | null >, Prisma__FeedbackClient<FeedbackGetPayload<T> | null >>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedbackFindManyArgs>(
      args?: SelectSubset<T, FeedbackFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Feedback>>, PrismaPromise<Array<FeedbackGetPayload<T>>>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends FeedbackCreateArgs>(
      args: SelectSubset<T, FeedbackCreateArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Create many Feedbacks.
     *     @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackCreateManyArgs>(
      args?: SelectSubset<T, FeedbackCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackDeleteArgs>(
      args: SelectSubset<T, FeedbackDeleteArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackUpdateArgs>(
      args: SelectSubset<T, FeedbackUpdateArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackDeleteManyArgs>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackUpdateManyArgs>(
      args: SelectSubset<T, FeedbackUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackUpsertArgs>(
      args: SelectSubset<T, FeedbackUpsertArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Find one Feedback that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Find the first Feedback that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FeedbackClient<Feedback>, Prisma__FeedbackClient<FeedbackGetPayload<T>>>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedbackClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Meeting<T extends MeetingArgs = {}>(args?: Subset<T, MeetingArgs>): CheckSelect<T, Prisma__MeetingClient<Meeting | null >, Prisma__MeetingClient<MeetingGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Feedback base type for findUnique actions
   */
  export type FeedbackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback: findUnique
   */
  export interface FeedbackFindUniqueArgs extends FeedbackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback base type for findFirst actions
   */
  export type FeedbackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     * 
    **/
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }

  /**
   * Feedback: findFirst
   */
  export interface FeedbackFindFirstArgs extends FeedbackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedbacks to fetch.
     * 
    **/
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     * 
    **/
    orderBy?: Enumerable<FeedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     * 
    **/
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Feedback create
   */
  export type FeedbackCreateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The data needed to create a Feedback.
     * 
    **/
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }


  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs = {
    /**
     * The data used to create many Feedbacks.
     * 
    **/
    data: Enumerable<FeedbackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The data needed to update a Feedback.
     * 
    **/
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs = {
    /**
     * The data used to update Feedbacks.
     * 
    **/
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     * 
    **/
    where?: FeedbackWhereInput
  }


  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     * 
    **/
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     * 
    **/
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }


  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
    /**
     * Filter which Feedback to delete.
     * 
    **/
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs = {
    /**
     * Filter which Feedbacks to delete
     * 
    **/
    where?: FeedbackWhereInput
  }


  /**
   * Feedback: findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs = FeedbackFindUniqueArgsBase
      

  /**
   * Feedback: findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs = FeedbackFindFirstArgsBase
      

  /**
   * Feedback without action
   */
  export type FeedbackArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     * 
    **/
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FeedbackInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    adminName: 'adminName',
    adminPassword: 'adminPassword',
    adminGender: 'adminGender',
    adminCnic: 'adminCnic',
    adminEmail: 'adminEmail',
    adminDesignation: 'adminDesignation'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    adminRemarks: 'adminRemarks',
    parentRemarks: 'parentRemarks'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    meetingDay: 'meetingDay',
    meetingStatus: 'meetingStatus',
    meetingReason: 'meetingReason',
    adminId: 'adminId',
    studentId: 'studentId',
    parentId: 'parentId',
    meetingStartTime: 'meetingStartTime',
    meetingEndTime: 'meetingEndTime'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    parentEmail: 'parentEmail',
    parentName: 'parentName',
    parentCnic: 'parentCnic',
    parentPhone: 'parentPhone',
    parentPassword: 'parentPassword'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role: 'role',
    adminId: 'adminId'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentInfoScalarFieldEnum: {
    infoCgpa: 'infoCgpa',
    infoAttendance: 'infoAttendance',
    studentId: 'studentId'
  };

  export type StudentInfoScalarFieldEnum = (typeof StudentInfoScalarFieldEnum)[keyof typeof StudentInfoScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentRegNo: 'studentRegNo',
    studentName: 'studentName',
    studentPassword: 'studentPassword',
    parentId: 'parentId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    subjectName: 'subjectName',
    studentId: 'studentId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ParentWhereInput = {
    AND?: Enumerable<ParentWhereInput>
    OR?: Enumerable<ParentWhereInput>
    NOT?: Enumerable<ParentWhereInput>
    id?: IntFilter | number
    parentEmail?: StringFilter | string
    parentName?: StringFilter | string
    parentCnic?: StringFilter | string
    parentPhone?: StringFilter | string
    parentPassword?: StringFilter | string
    Meeting?: MeetingListRelationFilter
    Student?: StudentListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    parentEmail?: SortOrder
    parentName?: SortOrder
    parentCnic?: SortOrder
    parentPhone?: SortOrder
    parentPassword?: SortOrder
    Meeting?: MeetingOrderByRelationAggregateInput
    Student?: StudentOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = {
    id?: number
    parentEmail?: string
    parentName?: string
    parentCnic?: string
    parentPhone?: string
  }

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    parentEmail?: SortOrder
    parentName?: SortOrder
    parentCnic?: SortOrder
    parentPhone?: SortOrder
    parentPassword?: SortOrder
    _count?: ParentCountOrderByAggregateInput
    _avg?: ParentAvgOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
    _sum?: ParentSumOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ParentScalarWhereWithAggregatesInput>
    OR?: Enumerable<ParentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ParentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    parentEmail?: StringWithAggregatesFilter | string
    parentName?: StringWithAggregatesFilter | string
    parentCnic?: StringWithAggregatesFilter | string
    parentPhone?: StringWithAggregatesFilter | string
    parentPassword?: StringWithAggregatesFilter | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: IntFilter | number
    adminName?: StringFilter | string
    adminPassword?: StringFilter | string
    adminGender?: StringFilter | string
    adminCnic?: StringFilter | string
    adminEmail?: StringFilter | string
    adminDesignation?: StringNullableFilter | string | null
    Meeting?: MeetingListRelationFilter
    Role?: RoleListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    adminName?: SortOrder
    adminPassword?: SortOrder
    adminGender?: SortOrder
    adminCnic?: SortOrder
    adminEmail?: SortOrder
    adminDesignation?: SortOrder
    Meeting?: MeetingOrderByRelationAggregateInput
    Role?: RoleOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = {
    id?: number
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    adminName?: SortOrder
    adminPassword?: SortOrder
    adminGender?: SortOrder
    adminCnic?: SortOrder
    adminEmail?: SortOrder
    adminDesignation?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    adminName?: StringWithAggregatesFilter | string
    adminPassword?: StringWithAggregatesFilter | string
    adminGender?: StringWithAggregatesFilter | string
    adminCnic?: StringWithAggregatesFilter | string
    adminEmail?: StringWithAggregatesFilter | string
    adminDesignation?: StringNullableWithAggregatesFilter | string | null
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: IntFilter | number
    role?: StringFilter | string
    adminId?: IntFilter | number
    Admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    adminId?: SortOrder
    Admin?: AdminOrderByWithRelationInput
  }

  export type RoleWhereUniqueInput = {
    id?: number
  }

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    adminId?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    role?: StringWithAggregatesFilter | string
    adminId?: IntWithAggregatesFilter | number
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: IntFilter | number
    studentRegNo?: StringFilter | string
    studentName?: StringFilter | string
    studentPassword?: StringFilter | string
    parentId?: IntFilter | number
    Parent?: XOR<ParentRelationFilter, ParentWhereInput>
    Meeting?: MeetingListRelationFilter
    StudentInfo?: XOR<StudentInfoRelationFilter, StudentInfoWhereInput> | null
    Subject?: SubjectListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentRegNo?: SortOrder
    studentName?: SortOrder
    studentPassword?: SortOrder
    parentId?: SortOrder
    Parent?: ParentOrderByWithRelationInput
    Meeting?: MeetingOrderByRelationAggregateInput
    StudentInfo?: StudentInfoOrderByWithRelationInput
    Subject?: SubjectOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = {
    id?: number
    studentRegNo?: string
    studentName?: string
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentRegNo?: SortOrder
    studentName?: SortOrder
    studentPassword?: SortOrder
    parentId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    studentRegNo?: StringWithAggregatesFilter | string
    studentName?: StringWithAggregatesFilter | string
    studentPassword?: StringWithAggregatesFilter | string
    parentId?: IntWithAggregatesFilter | number
  }

  export type StudentInfoWhereInput = {
    AND?: Enumerable<StudentInfoWhereInput>
    OR?: Enumerable<StudentInfoWhereInput>
    NOT?: Enumerable<StudentInfoWhereInput>
    infoCgpa?: FloatFilter | number
    infoAttendance?: BoolFilter | boolean
    studentId?: IntFilter | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type StudentInfoOrderByWithRelationInput = {
    infoCgpa?: SortOrder
    infoAttendance?: SortOrder
    studentId?: SortOrder
    Student?: StudentOrderByWithRelationInput
  }

  export type StudentInfoWhereUniqueInput = {
    studentId?: number
  }

  export type StudentInfoOrderByWithAggregationInput = {
    infoCgpa?: SortOrder
    infoAttendance?: SortOrder
    studentId?: SortOrder
    _count?: StudentInfoCountOrderByAggregateInput
    _avg?: StudentInfoAvgOrderByAggregateInput
    _max?: StudentInfoMaxOrderByAggregateInput
    _min?: StudentInfoMinOrderByAggregateInput
    _sum?: StudentInfoSumOrderByAggregateInput
  }

  export type StudentInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentInfoScalarWhereWithAggregatesInput>
    infoCgpa?: FloatWithAggregatesFilter | number
    infoAttendance?: BoolWithAggregatesFilter | boolean
    studentId?: IntWithAggregatesFilter | number
  }

  export type SubjectWhereInput = {
    AND?: Enumerable<SubjectWhereInput>
    OR?: Enumerable<SubjectWhereInput>
    NOT?: Enumerable<SubjectWhereInput>
    subjectName?: StringFilter | string
    studentId?: IntFilter | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type SubjectOrderByWithRelationInput = {
    subjectName?: SortOrder
    studentId?: SortOrder
    Student?: StudentOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = {
    subjectName_studentId?: SubjectSubjectNameStudentIdCompoundUniqueInput
  }

  export type SubjectOrderByWithAggregationInput = {
    subjectName?: SortOrder
    studentId?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubjectScalarWhereWithAggregatesInput>
    subjectName?: StringWithAggregatesFilter | string
    studentId?: IntWithAggregatesFilter | number
  }

  export type MeetingWhereInput = {
    AND?: Enumerable<MeetingWhereInput>
    OR?: Enumerable<MeetingWhereInput>
    NOT?: Enumerable<MeetingWhereInput>
    id?: IntFilter | number
    meetingDay?: StringFilter | string
    meetingStatus?: BoolFilter | boolean
    meetingReason?: StringNullableFilter | string | null
    adminId?: IntFilter | number
    studentId?: IntFilter | number
    parentId?: IntFilter | number
    meetingStartTime?: DateTimeFilter | Date | string
    meetingEndTime?: DateTimeFilter | Date | string
    Admin?: XOR<AdminRelationFilter, AdminWhereInput>
    Parent?: XOR<ParentRelationFilter, ParentWhereInput>
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    Feedback?: FeedbackListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
    Admin?: AdminOrderByWithRelationInput
    Parent?: ParentOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    Feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = {
    id?: number
  }

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _avg?: MeetingAvgOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
    _sum?: MeetingSumOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MeetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<MeetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MeetingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    meetingDay?: StringWithAggregatesFilter | string
    meetingStatus?: BoolWithAggregatesFilter | boolean
    meetingReason?: StringNullableWithAggregatesFilter | string | null
    adminId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    parentId?: IntWithAggregatesFilter | number
    meetingStartTime?: DateTimeWithAggregatesFilter | Date | string
    meetingEndTime?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: Enumerable<FeedbackWhereInput>
    OR?: Enumerable<FeedbackWhereInput>
    NOT?: Enumerable<FeedbackWhereInput>
    id?: IntFilter | number
    meetingId?: IntFilter | number
    adminRemarks?: StringNullableFilter | string | null
    parentRemarks?: StringNullableFilter | string | null
    Meeting?: XOR<MeetingRelationFilter, MeetingWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    adminRemarks?: SortOrder
    parentRemarks?: SortOrder
    Meeting?: MeetingOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = {
    id?: number
  }

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    adminRemarks?: SortOrder
    parentRemarks?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    meetingId?: IntWithAggregatesFilter | number
    adminRemarks?: StringNullableWithAggregatesFilter | string | null
    parentRemarks?: StringNullableWithAggregatesFilter | string | null
  }

  export type ParentCreateInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingCreateNestedManyWithoutParentInput
    Student?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutParentInput
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutParentNestedInput
    Student?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutParentNestedInput
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
  }

  export type ParentUpdateManyMutationInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingCreateNestedManyWithoutAdminInput
    Role?: RoleCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingUncheckedCreateNestedManyWithoutAdminInput
    Role?: RoleUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
    Role?: RoleUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUncheckedUpdateManyWithoutAdminNestedInput
    Role?: RoleUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    role: string
    Admin: AdminCreateNestedOneWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    role: string
    adminId: number
  }

  export type RoleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneRequiredWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateManyInput = {
    id?: number
    role: string
    adminId: number
  }

  export type RoleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedOneWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedOneWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
  }

  export type StudentUpdateManyMutationInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentInfoCreateInput = {
    infoCgpa: number
    infoAttendance: boolean
    Student: StudentCreateNestedOneWithoutStudentInfoInput
  }

  export type StudentInfoUncheckedCreateInput = {
    infoCgpa: number
    infoAttendance: boolean
    studentId: number
  }

  export type StudentInfoUpdateInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
    Student?: StudentUpdateOneRequiredWithoutStudentInfoNestedInput
  }

  export type StudentInfoUncheckedUpdateInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentInfoCreateManyInput = {
    infoCgpa: number
    infoAttendance: boolean
    studentId: number
  }

  export type StudentInfoUpdateManyMutationInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentInfoUncheckedUpdateManyInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectCreateInput = {
    subjectName: string
    Student: StudentCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    subjectName: string
    studentId: number
  }

  export type SubjectUpdateInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectCreateManyInput = {
    subjectName: string
    studentId: number
  }

  export type SubjectUpdateManyMutationInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateInput = {
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Admin: AdminCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    studentId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    studentId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    adminRemarks?: string | null
    parentRemarks?: string | null
    Meeting: MeetingCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    meetingId: number
    adminRemarks?: string | null
    parentRemarks?: string | null
  }

  export type FeedbackUpdateInput = {
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingId?: IntFieldUpdateOperationsInput | number
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackCreateManyInput = {
    id?: number
    meetingId: number
    adminRemarks?: string | null
    parentRemarks?: string | null
  }

  export type FeedbackUpdateManyMutationInput = {
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingId?: IntFieldUpdateOperationsInput | number
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    parentEmail?: SortOrder
    parentName?: SortOrder
    parentCnic?: SortOrder
    parentPhone?: SortOrder
    parentPassword?: SortOrder
  }

  export type ParentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    parentEmail?: SortOrder
    parentName?: SortOrder
    parentCnic?: SortOrder
    parentPhone?: SortOrder
    parentPassword?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    parentEmail?: SortOrder
    parentName?: SortOrder
    parentCnic?: SortOrder
    parentPhone?: SortOrder
    parentPassword?: SortOrder
  }

  export type ParentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    adminName?: SortOrder
    adminPassword?: SortOrder
    adminGender?: SortOrder
    adminCnic?: SortOrder
    adminEmail?: SortOrder
    adminDesignation?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    adminName?: SortOrder
    adminPassword?: SortOrder
    adminGender?: SortOrder
    adminCnic?: SortOrder
    adminEmail?: SortOrder
    adminDesignation?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    adminName?: SortOrder
    adminPassword?: SortOrder
    adminGender?: SortOrder
    adminCnic?: SortOrder
    adminEmail?: SortOrder
    adminDesignation?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    adminId?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    adminId?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    adminId?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type ParentRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type StudentInfoRelationFilter = {
    is?: StudentInfoWhereInput | null
    isNot?: StudentInfoWhereInput | null
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentRegNo?: SortOrder
    studentName?: SortOrder
    studentPassword?: SortOrder
    parentId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentRegNo?: SortOrder
    studentName?: SortOrder
    studentPassword?: SortOrder
    parentId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentRegNo?: SortOrder
    studentName?: SortOrder
    studentPassword?: SortOrder
    parentId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentInfoCountOrderByAggregateInput = {
    infoCgpa?: SortOrder
    infoAttendance?: SortOrder
    studentId?: SortOrder
  }

  export type StudentInfoAvgOrderByAggregateInput = {
    infoCgpa?: SortOrder
    studentId?: SortOrder
  }

  export type StudentInfoMaxOrderByAggregateInput = {
    infoCgpa?: SortOrder
    infoAttendance?: SortOrder
    studentId?: SortOrder
  }

  export type StudentInfoMinOrderByAggregateInput = {
    infoCgpa?: SortOrder
    infoAttendance?: SortOrder
    studentId?: SortOrder
  }

  export type StudentInfoSumOrderByAggregateInput = {
    infoCgpa?: SortOrder
    studentId?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type SubjectSubjectNameStudentIdCompoundUniqueInput = {
    subjectName: string
    studentId: number
  }

  export type SubjectCountOrderByAggregateInput = {
    subjectName?: SortOrder
    studentId?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    studentId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    subjectName?: SortOrder
    studentId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    subjectName?: SortOrder
    studentId?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    studentId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MeetingRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    adminRemarks?: SortOrder
    parentRemarks?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    adminRemarks?: SortOrder
    parentRemarks?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    adminRemarks?: SortOrder
    parentRemarks?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
  }

  export type MeetingCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutParentInput>, Enumerable<MeetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutParentInput>
    createMany?: MeetingCreateManyParentInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type StudentCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<StudentCreateWithoutParentInput>, Enumerable<StudentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutParentInput>
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type MeetingUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutParentInput>, Enumerable<MeetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutParentInput>
    createMany?: MeetingCreateManyParentInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<StudentCreateWithoutParentInput>, Enumerable<StudentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutParentInput>
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MeetingUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutParentInput>, Enumerable<MeetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutParentInput>
    createMany?: MeetingCreateManyParentInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type StudentUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutParentInput>, Enumerable<StudentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutParentInput>
    createMany?: StudentCreateManyParentInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MeetingUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutParentInput>, Enumerable<MeetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutParentInput>
    createMany?: MeetingCreateManyParentInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutParentInput>, Enumerable<StudentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutParentInput>
    createMany?: StudentCreateManyParentInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type MeetingCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type RoleCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<RoleCreateWithoutAdminInput>, Enumerable<RoleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutAdminInput>
    createMany?: RoleCreateManyAdminInputEnvelope
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type MeetingUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type RoleUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<RoleCreateWithoutAdminInput>, Enumerable<RoleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutAdminInput>
    createMany?: RoleCreateManyAdminInputEnvelope
    connect?: Enumerable<RoleWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MeetingUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type RoleUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutAdminInput>, Enumerable<RoleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: RoleCreateManyAdminInputEnvelope
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type MeetingUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type RoleUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<RoleCreateWithoutAdminInput>, Enumerable<RoleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RoleCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<RoleUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: RoleCreateManyAdminInputEnvelope
    set?: Enumerable<RoleWhereUniqueInput>
    disconnect?: Enumerable<RoleWhereUniqueInput>
    delete?: Enumerable<RoleWhereUniqueInput>
    connect?: Enumerable<RoleWhereUniqueInput>
    update?: Enumerable<RoleUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<RoleUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<RoleScalarWhereInput>
  }

  export type AdminCreateNestedOneWithoutRoleInput = {
    create?: XOR<AdminCreateWithoutRoleInput, AdminUncheckedCreateWithoutRoleInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRoleInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<AdminCreateWithoutRoleInput, AdminUncheckedCreateWithoutRoleInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRoleInput
    upsert?: AdminUpsertWithoutRoleInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutRoleInput, AdminUncheckedUpdateWithoutRoleInput>
  }

  export type ParentCreateNestedOneWithoutStudentInput = {
    create?: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentInput
    connect?: ParentWhereUniqueInput
  }

  export type MeetingCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutStudentInput>, Enumerable<MeetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutStudentInput>
    createMany?: MeetingCreateManyStudentInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type StudentInfoCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentInfoCreateOrConnectWithoutStudentInput
    connect?: StudentInfoWhereUniqueInput
  }

  export type SubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<SubjectCreateWithoutStudentInput>, Enumerable<SubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubjectCreateOrConnectWithoutStudentInput>
    createMany?: SubjectCreateManyStudentInputEnvelope
    connect?: Enumerable<SubjectWhereUniqueInput>
  }

  export type MeetingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutStudentInput>, Enumerable<MeetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutStudentInput>
    createMany?: MeetingCreateManyStudentInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type StudentInfoUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentInfoCreateOrConnectWithoutStudentInput
    connect?: StudentInfoWhereUniqueInput
  }

  export type SubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<SubjectCreateWithoutStudentInput>, Enumerable<SubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubjectCreateOrConnectWithoutStudentInput>
    createMany?: SubjectCreateManyStudentInputEnvelope
    connect?: Enumerable<SubjectWhereUniqueInput>
  }

  export type ParentUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentInput
    upsert?: ParentUpsertWithoutStudentInput
    connect?: ParentWhereUniqueInput
    update?: XOR<ParentUpdateWithoutStudentInput, ParentUncheckedUpdateWithoutStudentInput>
  }

  export type MeetingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutStudentInput>, Enumerable<MeetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: MeetingCreateManyStudentInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type StudentInfoUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentInfoCreateOrConnectWithoutStudentInput
    upsert?: StudentInfoUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentInfoWhereUniqueInput
    update?: XOR<StudentInfoUpdateWithoutStudentInput, StudentInfoUncheckedUpdateWithoutStudentInput>
  }

  export type SubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<SubjectCreateWithoutStudentInput>, Enumerable<SubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubjectCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<SubjectUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: SubjectCreateManyStudentInputEnvelope
    set?: Enumerable<SubjectWhereUniqueInput>
    disconnect?: Enumerable<SubjectWhereUniqueInput>
    delete?: Enumerable<SubjectWhereUniqueInput>
    connect?: Enumerable<SubjectWhereUniqueInput>
    update?: Enumerable<SubjectUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<SubjectUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<SubjectScalarWhereInput>
  }

  export type MeetingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutStudentInput>, Enumerable<MeetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: MeetingCreateManyStudentInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type StudentInfoUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentInfoCreateOrConnectWithoutStudentInput
    upsert?: StudentInfoUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentInfoWhereUniqueInput
    update?: XOR<StudentInfoUpdateWithoutStudentInput, StudentInfoUncheckedUpdateWithoutStudentInput>
  }

  export type SubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<SubjectCreateWithoutStudentInput>, Enumerable<SubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<SubjectCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<SubjectUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: SubjectCreateManyStudentInputEnvelope
    set?: Enumerable<SubjectWhereUniqueInput>
    disconnect?: Enumerable<SubjectWhereUniqueInput>
    delete?: Enumerable<SubjectWhereUniqueInput>
    connect?: Enumerable<SubjectWhereUniqueInput>
    update?: Enumerable<SubjectUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<SubjectUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<SubjectScalarWhereInput>
  }

  export type StudentCreateNestedOneWithoutStudentInfoInput = {
    create?: XOR<StudentCreateWithoutStudentInfoInput, StudentUncheckedCreateWithoutStudentInfoInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentInfoInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutStudentInfoNestedInput = {
    create?: XOR<StudentCreateWithoutStudentInfoInput, StudentUncheckedCreateWithoutStudentInfoInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentInfoInput
    upsert?: StudentUpsertWithoutStudentInfoInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutStudentInfoInput, StudentUncheckedUpdateWithoutStudentInfoInput>
  }

  export type StudentCreateNestedOneWithoutSubjectInput = {
    create?: XOR<StudentCreateWithoutSubjectInput, StudentUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectInput, StudentUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectInput
    upsert?: StudentUpsertWithoutSubjectInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutSubjectInput, StudentUncheckedUpdateWithoutSubjectInput>
  }

  export type AdminCreateNestedOneWithoutMeetingInput = {
    create?: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMeetingInput
    connect?: AdminWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutMeetingInput = {
    create?: XOR<ParentCreateWithoutMeetingInput, ParentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: ParentCreateOrConnectWithoutMeetingInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutMeetingInput = {
    create?: XOR<StudentCreateWithoutMeetingInput, StudentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMeetingInput
    connect?: StudentWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutMeetingInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutMeetingInput>, Enumerable<FeedbackUncheckedCreateWithoutMeetingInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutMeetingInput>
    createMany?: FeedbackCreateManyMeetingInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type FeedbackUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutMeetingInput>, Enumerable<FeedbackUncheckedCreateWithoutMeetingInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutMeetingInput>
    createMany?: FeedbackCreateManyMeetingInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMeetingInput
    upsert?: AdminUpsertWithoutMeetingInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutMeetingInput, AdminUncheckedUpdateWithoutMeetingInput>
  }

  export type ParentUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<ParentCreateWithoutMeetingInput, ParentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: ParentCreateOrConnectWithoutMeetingInput
    upsert?: ParentUpsertWithoutMeetingInput
    connect?: ParentWhereUniqueInput
    update?: XOR<ParentUpdateWithoutMeetingInput, ParentUncheckedUpdateWithoutMeetingInput>
  }

  export type StudentUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<StudentCreateWithoutMeetingInput, StudentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMeetingInput
    upsert?: StudentUpsertWithoutMeetingInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutMeetingInput, StudentUncheckedUpdateWithoutMeetingInput>
  }

  export type FeedbackUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutMeetingInput>, Enumerable<FeedbackUncheckedCreateWithoutMeetingInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutMeetingInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutMeetingInput>
    createMany?: FeedbackCreateManyMeetingInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutMeetingInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutMeetingInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutMeetingInput>, Enumerable<FeedbackUncheckedCreateWithoutMeetingInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutMeetingInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutMeetingInput>
    createMany?: FeedbackCreateManyMeetingInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutMeetingInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutMeetingInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type MeetingCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<MeetingCreateWithoutFeedbackInput, MeetingUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutFeedbackInput
    connect?: MeetingWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<MeetingCreateWithoutFeedbackInput, MeetingUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutFeedbackInput
    upsert?: MeetingUpsertWithoutFeedbackInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<MeetingUpdateWithoutFeedbackInput, MeetingUncheckedUpdateWithoutFeedbackInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MeetingCreateWithoutParentInput = {
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Admin: AdminCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutParentInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    studentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutParentInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutParentInput, MeetingUncheckedCreateWithoutParentInput>
  }

  export type MeetingCreateManyParentInputEnvelope = {
    data: Enumerable<MeetingCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutParentInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedOneWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedOneWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutParentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentCreateManyParentInputEnvelope = {
    data: Enumerable<StudentCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutParentInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutParentInput, MeetingUncheckedUpdateWithoutParentInput>
    create: XOR<MeetingCreateWithoutParentInput, MeetingUncheckedCreateWithoutParentInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutParentInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutParentInput, MeetingUncheckedUpdateWithoutParentInput>
  }

  export type MeetingUpdateManyWithWhereWithoutParentInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: Enumerable<MeetingScalarWhereInput>
    OR?: Enumerable<MeetingScalarWhereInput>
    NOT?: Enumerable<MeetingScalarWhereInput>
    id?: IntFilter | number
    meetingDay?: StringFilter | string
    meetingStatus?: BoolFilter | boolean
    meetingReason?: StringNullableFilter | string | null
    adminId?: IntFilter | number
    studentId?: IntFilter | number
    parentId?: IntFilter | number
    meetingStartTime?: DateTimeFilter | Date | string
    meetingEndTime?: DateTimeFilter | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
  }

  export type StudentUpdateManyWithWhereWithoutParentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    id?: IntFilter | number
    studentRegNo?: StringFilter | string
    studentName?: StringFilter | string
    studentPassword?: StringFilter | string
    parentId?: IntFilter | number
  }

  export type MeetingCreateWithoutAdminInput = {
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutAdminInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    studentId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutAdminInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutAdminInput, MeetingUncheckedCreateWithoutAdminInput>
  }

  export type MeetingCreateManyAdminInputEnvelope = {
    data: Enumerable<MeetingCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutAdminInput = {
    role: string
  }

  export type RoleUncheckedCreateWithoutAdminInput = {
    id?: number
    role: string
  }

  export type RoleCreateOrConnectWithoutAdminInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutAdminInput, RoleUncheckedCreateWithoutAdminInput>
  }

  export type RoleCreateManyAdminInputEnvelope = {
    data: Enumerable<RoleCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutAdminInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutAdminInput, MeetingUncheckedUpdateWithoutAdminInput>
    create: XOR<MeetingCreateWithoutAdminInput, MeetingUncheckedCreateWithoutAdminInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutAdminInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutAdminInput, MeetingUncheckedUpdateWithoutAdminInput>
  }

  export type MeetingUpdateManyWithWhereWithoutAdminInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutAdminInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutAdminInput, RoleUncheckedUpdateWithoutAdminInput>
    create: XOR<RoleCreateWithoutAdminInput, RoleUncheckedCreateWithoutAdminInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutAdminInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutAdminInput, RoleUncheckedUpdateWithoutAdminInput>
  }

  export type RoleUpdateManyWithWhereWithoutAdminInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleScalarWhereInput = {
    AND?: Enumerable<RoleScalarWhereInput>
    OR?: Enumerable<RoleScalarWhereInput>
    NOT?: Enumerable<RoleScalarWhereInput>
    id?: IntFilter | number
    role?: StringFilter | string
    adminId?: IntFilter | number
  }

  export type AdminCreateWithoutRoleInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutRoleInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutRoleInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRoleInput, AdminUncheckedCreateWithoutRoleInput>
  }

  export type AdminUpsertWithoutRoleInput = {
    update: XOR<AdminUpdateWithoutRoleInput, AdminUncheckedUpdateWithoutRoleInput>
    create: XOR<AdminCreateWithoutRoleInput, AdminUncheckedCreateWithoutRoleInput>
  }

  export type AdminUpdateWithoutRoleInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ParentCreateWithoutStudentInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutStudentInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutStudentInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
  }

  export type MeetingCreateWithoutStudentInput = {
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Admin: AdminCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutStudentInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutStudentInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutStudentInput, MeetingUncheckedCreateWithoutStudentInput>
  }

  export type MeetingCreateManyStudentInputEnvelope = {
    data: Enumerable<MeetingCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type StudentInfoCreateWithoutStudentInput = {
    infoCgpa: number
    infoAttendance: boolean
  }

  export type StudentInfoUncheckedCreateWithoutStudentInput = {
    infoCgpa: number
    infoAttendance: boolean
  }

  export type StudentInfoCreateOrConnectWithoutStudentInput = {
    where: StudentInfoWhereUniqueInput
    create: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
  }

  export type SubjectCreateWithoutStudentInput = {
    subjectName: string
  }

  export type SubjectUncheckedCreateWithoutStudentInput = {
    subjectName: string
  }

  export type SubjectCreateOrConnectWithoutStudentInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentInput, SubjectUncheckedCreateWithoutStudentInput>
  }

  export type SubjectCreateManyStudentInputEnvelope = {
    data: Enumerable<SubjectCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type ParentUpsertWithoutStudentInput = {
    update: XOR<ParentUpdateWithoutStudentInput, ParentUncheckedUpdateWithoutStudentInput>
    create: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
  }

  export type ParentUpdateWithoutStudentInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MeetingUpsertWithWhereUniqueWithoutStudentInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutStudentInput, MeetingUncheckedUpdateWithoutStudentInput>
    create: XOR<MeetingCreateWithoutStudentInput, MeetingUncheckedCreateWithoutStudentInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutStudentInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutStudentInput, MeetingUncheckedUpdateWithoutStudentInput>
  }

  export type MeetingUpdateManyWithWhereWithoutStudentInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type StudentInfoUpsertWithoutStudentInput = {
    update: XOR<StudentInfoUpdateWithoutStudentInput, StudentInfoUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
  }

  export type StudentInfoUpdateWithoutStudentInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentInfoUncheckedUpdateWithoutStudentInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutStudentInput, SubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<SubjectCreateWithoutStudentInput, SubjectUncheckedCreateWithoutStudentInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutStudentInput, SubjectUncheckedUpdateWithoutStudentInput>
  }

  export type SubjectUpdateManyWithWhereWithoutStudentInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: Enumerable<SubjectScalarWhereInput>
    OR?: Enumerable<SubjectScalarWhereInput>
    NOT?: Enumerable<SubjectScalarWhereInput>
    subjectName?: StringFilter | string
    studentId?: IntFilter | number
  }

  export type StudentCreateWithoutStudentInfoInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentInfoInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentInfoInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentInfoInput, StudentUncheckedCreateWithoutStudentInfoInput>
  }

  export type StudentUpsertWithoutStudentInfoInput = {
    update: XOR<StudentUpdateWithoutStudentInfoInput, StudentUncheckedUpdateWithoutStudentInfoInput>
    create: XOR<StudentCreateWithoutStudentInfoInput, StudentUncheckedCreateWithoutStudentInfoInput>
  }

  export type StudentUpdateWithoutStudentInfoInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutSubjectInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubjectInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubjectInput, StudentUncheckedCreateWithoutSubjectInput>
  }

  export type StudentUpsertWithoutSubjectInput = {
    update: XOR<StudentUpdateWithoutSubjectInput, StudentUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentCreateWithoutSubjectInput, StudentUncheckedCreateWithoutSubjectInput>
  }

  export type StudentUpdateWithoutSubjectInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type AdminCreateWithoutMeetingInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Role?: RoleCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMeetingInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Role?: RoleUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMeetingInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
  }

  export type ParentCreateWithoutMeetingInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Student?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutMeetingInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutMeetingInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutMeetingInput, ParentUncheckedCreateWithoutMeetingInput>
  }

  export type StudentCreateWithoutMeetingInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedOneWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMeetingInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    StudentInfo?: StudentInfoUncheckedCreateNestedOneWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMeetingInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMeetingInput, StudentUncheckedCreateWithoutMeetingInput>
  }

  export type FeedbackCreateWithoutMeetingInput = {
    adminRemarks?: string | null
    parentRemarks?: string | null
  }

  export type FeedbackUncheckedCreateWithoutMeetingInput = {
    id?: number
    adminRemarks?: string | null
    parentRemarks?: string | null
  }

  export type FeedbackCreateOrConnectWithoutMeetingInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutMeetingInput, FeedbackUncheckedCreateWithoutMeetingInput>
  }

  export type FeedbackCreateManyMeetingInputEnvelope = {
    data: Enumerable<FeedbackCreateManyMeetingInput>
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutMeetingInput = {
    update: XOR<AdminUpdateWithoutMeetingInput, AdminUncheckedUpdateWithoutMeetingInput>
    create: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
  }

  export type AdminUpdateWithoutMeetingInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: RoleUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: RoleUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ParentUpsertWithoutMeetingInput = {
    update: XOR<ParentUpdateWithoutMeetingInput, ParentUncheckedUpdateWithoutMeetingInput>
    create: XOR<ParentCreateWithoutMeetingInput, ParentUncheckedCreateWithoutMeetingInput>
  }

  export type ParentUpdateWithoutMeetingInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentUpsertWithoutMeetingInput = {
    update: XOR<StudentUpdateWithoutMeetingInput, StudentUncheckedUpdateWithoutMeetingInput>
    create: XOR<StudentCreateWithoutMeetingInput, StudentUncheckedCreateWithoutMeetingInput>
  }

  export type StudentUpdateWithoutMeetingInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    StudentInfo?: StudentInfoUncheckedUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutMeetingInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutMeetingInput, FeedbackUncheckedUpdateWithoutMeetingInput>
    create: XOR<FeedbackCreateWithoutMeetingInput, FeedbackUncheckedCreateWithoutMeetingInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutMeetingInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutMeetingInput, FeedbackUncheckedUpdateWithoutMeetingInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutMeetingInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: Enumerable<FeedbackScalarWhereInput>
    OR?: Enumerable<FeedbackScalarWhereInput>
    NOT?: Enumerable<FeedbackScalarWhereInput>
    id?: IntFilter | number
    meetingId?: IntFilter | number
    adminRemarks?: StringNullableFilter | string | null
    parentRemarks?: StringNullableFilter | string | null
  }

  export type MeetingCreateWithoutFeedbackInput = {
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: Date | string
    meetingEndTime: Date | string
    Admin: AdminCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutFeedbackInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    studentId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
  }

  export type MeetingCreateOrConnectWithoutFeedbackInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutFeedbackInput, MeetingUncheckedCreateWithoutFeedbackInput>
  }

  export type MeetingUpsertWithoutFeedbackInput = {
    update: XOR<MeetingUpdateWithoutFeedbackInput, MeetingUncheckedUpdateWithoutFeedbackInput>
    create: XOR<MeetingCreateWithoutFeedbackInput, MeetingUncheckedCreateWithoutFeedbackInput>
  }

  export type MeetingUpdateWithoutFeedbackInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyParentInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    studentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
  }

  export type StudentCreateManyParentInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
  }

  export type MeetingUpdateWithoutParentInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutParentInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateOneWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyAdminInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    studentId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
  }

  export type RoleCreateManyAdminInput = {
    id?: number
    role: string
  }

  export type MeetingUpdateWithoutAdminInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type RoleUpdateWithoutAdminInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyStudentInput = {
    id?: number
    meetingDay: string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId: number
    parentId: number
    meetingStartTime: Date | string
    meetingEndTime: Date | string
  }

  export type SubjectCreateManyStudentInput = {
    subjectName: string
  }

  export type MeetingUpdateWithoutStudentInput = {
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: StringFieldUpdateOperationsInput | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingEndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type SubjectUpdateWithoutStudentInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateWithoutStudentInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyWithoutSubjectInput = {
    subjectName?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateManyMeetingInput = {
    id?: number
    adminRemarks?: string | null
    parentRemarks?: string | null
  }

  export type FeedbackUpdateWithoutMeetingInput = {
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    parentRemarks?: NullableStringFieldUpdateOperationsInput | string | null
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
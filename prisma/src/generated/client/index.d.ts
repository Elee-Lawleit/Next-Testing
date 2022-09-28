
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
 * Model Department
 * 
 */
export type Department = {
  id: number
  departmentName: string
}

/**
 * Model Faculty
 * 
 */
export type Faculty = {
  id: number
  userName: string
  departmentId: number
}

/**
 * Model Schedule
 * 
 */
export type Schedule = {
  id: number
  day: number
  start: Date
  end: Date
  startTime: Date
  EndTime: Date
  adminId: number
}

/**
 * Model DayTime
 * 
 */
export type DayTime = {
  id: number
  day: number
  startTime: Date
  endTime: Date
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
 * Model RequestedMeetings
 * 
 */
export type RequestedMeetings = {
  id: number
  meetingReason: string
  parentId: number
  studentId: number
  adminId: number
}

/**
 * Model Meeting
 * 
 */
export type Meeting = {
  id: number
  meetingDay: Date
  meetingStatus: boolean
  meetingReason: string | null
  adminId: number | null
  facultyId: number | null
  studentId: number
  parentId: number
  meetingStartTime: string
  meetingEndTime: string
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
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<GlobalReject>;

  /**
   * `prisma.faculty`: Exposes CRUD operations for the **Faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.FacultyDelegate<GlobalReject>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<GlobalReject>;

  /**
   * `prisma.dayTime`: Exposes CRUD operations for the **DayTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayTimes
    * const dayTimes = await prisma.dayTime.findMany()
    * ```
    */
  get dayTime(): Prisma.DayTimeDelegate<GlobalReject>;

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
   * `prisma.requestedMeetings`: Exposes CRUD operations for the **RequestedMeetings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestedMeetings
    * const requestedMeetings = await prisma.requestedMeetings.findMany()
    * ```
    */
  get requestedMeetings(): Prisma.RequestedMeetingsDelegate<GlobalReject>;

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
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
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
    Department: 'Department',
    Faculty: 'Faculty',
    Schedule: 'Schedule',
    DayTime: 'DayTime',
    Student: 'Student',
    StudentInfo: 'StudentInfo',
    Subject: 'Subject',
    RequestedMeetings: 'RequestedMeetings',
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
    RequestedMeetings: number
  }

  export type ParentCountOutputTypeSelect = {
    Meeting?: boolean | ParentCountOutputTypeCountMeetingArgs
    Student?: boolean | ParentCountOutputTypeCountStudentArgs
    RequestedMeetings?: boolean | ParentCountOutputTypeCountRequestedMeetingsArgs
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
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountMeetingArgs = {
    where?: MeetingWhereInput
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountStudentArgs = {
    where?: StudentWhereInput
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountRequestedMeetingsArgs = {
    where?: RequestedMeetingsWhereInput
  }



  /**
   * Count Type AdminCountOutputType
   */


  export type AdminCountOutputType = {
    Meeting: number
    Schedule: number
    RequestedMeetings: number
    DayTime: number
  }

  export type AdminCountOutputTypeSelect = {
    Meeting?: boolean | AdminCountOutputTypeCountMeetingArgs
    Schedule?: boolean | AdminCountOutputTypeCountScheduleArgs
    RequestedMeetings?: boolean | AdminCountOutputTypeCountRequestedMeetingsArgs
    DayTime?: boolean | AdminCountOutputTypeCountDayTimeArgs
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
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMeetingArgs = {
    where?: MeetingWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountScheduleArgs = {
    where?: ScheduleWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountRequestedMeetingsArgs = {
    where?: RequestedMeetingsWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountDayTimeArgs = {
    where?: DayTimeWhereInput
  }



  /**
   * Count Type DepartmentCountOutputType
   */


  export type DepartmentCountOutputType = {
    Faculty: number
  }

  export type DepartmentCountOutputTypeSelect = {
    Faculty?: boolean | DepartmentCountOutputTypeCountFacultyArgs
  }

  export type DepartmentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DepartmentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DepartmentCountOutputType
    : S extends undefined
    ? never
    : S extends DepartmentCountOutputTypeArgs
    ?'include' extends U
    ? DepartmentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DepartmentCountOutputType ? DepartmentCountOutputType[P] : never
  } 
    : DepartmentCountOutputType
  : DepartmentCountOutputType




  // Custom InputTypes

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     * 
    **/
    select?: DepartmentCountOutputTypeSelect | null
  }


  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountFacultyArgs = {
    where?: FacultyWhereInput
  }



  /**
   * Count Type FacultyCountOutputType
   */


  export type FacultyCountOutputType = {
    Meeting: number
  }

  export type FacultyCountOutputTypeSelect = {
    Meeting?: boolean | FacultyCountOutputTypeCountMeetingArgs
  }

  export type FacultyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FacultyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FacultyCountOutputType
    : S extends undefined
    ? never
    : S extends FacultyCountOutputTypeArgs
    ?'include' extends U
    ? FacultyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FacultyCountOutputType ? FacultyCountOutputType[P] : never
  } 
    : FacultyCountOutputType
  : FacultyCountOutputType




  // Custom InputTypes

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     * 
    **/
    select?: FacultyCountOutputTypeSelect | null
  }


  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountMeetingArgs = {
    where?: MeetingWhereInput
  }



  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    Meeting: number
    RequestedMeetings: number
    StudentInfo: number
    Subject: number
  }

  export type StudentCountOutputTypeSelect = {
    Meeting?: boolean | StudentCountOutputTypeCountMeetingArgs
    RequestedMeetings?: boolean | StudentCountOutputTypeCountRequestedMeetingsArgs
    StudentInfo?: boolean | StudentCountOutputTypeCountStudentInfoArgs
    Subject?: boolean | StudentCountOutputTypeCountSubjectArgs
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
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMeetingArgs = {
    where?: MeetingWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountRequestedMeetingsArgs = {
    where?: RequestedMeetingsWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentInfoArgs = {
    where?: StudentInfoWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubjectArgs = {
    where?: SubjectWhereInput
  }



  /**
   * Count Type MeetingCountOutputType
   */


  export type MeetingCountOutputType = {
    Feedback: number
  }

  export type MeetingCountOutputTypeSelect = {
    Feedback?: boolean | MeetingCountOutputTypeCountFeedbackArgs
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
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountFeedbackArgs = {
    where?: FeedbackWhereInput
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
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
    _count?: boolean | ParentCountOutputTypeArgs
  }

  export type ParentInclude = {
    Meeting?: boolean | MeetingFindManyArgs
    Student?: boolean | StudentFindManyArgs
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
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
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ParentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'Student' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['select'][P]>>  :
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

    RequestedMeetings<T extends RequestedMeetingsFindManyArgs = {}>(args?: Subset<T, RequestedMeetingsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RequestedMeetings>>, PrismaPromise<Array<RequestedMeetingsGetPayload<T>>>>;

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
    Schedule?: boolean | ScheduleFindManyArgs
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
    DayTime?: boolean | DayTimeFindManyArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type AdminInclude = {
    Meeting?: boolean | MeetingFindManyArgs
    Schedule?: boolean | ScheduleFindManyArgs
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
    DayTime?: boolean | DayTimeFindManyArgs
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
        P extends 'Schedule' ? Array < ScheduleGetPayload<S['include'][P]>>  :
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['include'][P]>>  :
        P extends 'DayTime' ? Array < DayTimeGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'Schedule' ? Array < ScheduleGetPayload<S['select'][P]>>  :
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['select'][P]>>  :
        P extends 'DayTime' ? Array < DayTimeGetPayload<S['select'][P]>>  :
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

    Schedule<T extends ScheduleFindManyArgs = {}>(args?: Subset<T, ScheduleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Schedule>>, PrismaPromise<Array<ScheduleGetPayload<T>>>>;

    RequestedMeetings<T extends RequestedMeetingsFindManyArgs = {}>(args?: Subset<T, RequestedMeetingsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RequestedMeetings>>, PrismaPromise<Array<RequestedMeetingsGetPayload<T>>>>;

    DayTime<T extends DayTimeFindManyArgs = {}>(args?: Subset<T, DayTimeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DayTime>>, PrismaPromise<Array<DayTimeGetPayload<T>>>>;

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
   * Model Department
   */


  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    departmentName: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    departmentName: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    departmentName: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    departmentName?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    departmentName?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    departmentName?: true
    _all?: true
  }

  export type DepartmentAggregateArgs = {
    /**
     * Filter which Department to aggregate.
     * 
    **/
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     * 
    **/
    orderBy?: Enumerable<DepartmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs = {
    where?: DepartmentWhereInput
    orderBy?: Enumerable<DepartmentOrderByWithAggregationInput>
    by: Array<DepartmentScalarFieldEnum>
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }


  export type DepartmentGroupByOutputType = {
    id: number
    departmentName: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect = {
    id?: boolean
    departmentName?: boolean
    Faculty?: boolean | FacultyFindManyArgs
    _count?: boolean | DepartmentCountOutputTypeArgs
  }

  export type DepartmentInclude = {
    Faculty?: boolean | FacultyFindManyArgs
    _count?: boolean | DepartmentCountOutputTypeArgs
  }

  export type DepartmentGetPayload<
    S extends boolean | null | undefined | DepartmentArgs,
    U = keyof S
      > = S extends true
        ? Department
    : S extends undefined
    ? never
    : S extends DepartmentArgs | DepartmentFindManyArgs
    ?'include' extends U
    ? Department  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Faculty' ? Array < FacultyGetPayload<S['include'][P]>>  :
        P extends '_count' ? DepartmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Faculty' ? Array < FacultyGetPayload<S['select'][P]>>  :
        P extends '_count' ? DepartmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Department ? Department[P] : never
  } 
    : Department
  : Department


  type DepartmentCountArgs = Merge<
    Omit<DepartmentFindManyArgs, 'select' | 'include'> & {
      select?: DepartmentCountAggregateInputType | true
    }
  >

  export interface DepartmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DepartmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Department'> extends True ? CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>> : CheckSelect<T, Prisma__DepartmentClient<Department | null >, Prisma__DepartmentClient<DepartmentGetPayload<T> | null >>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DepartmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Department'> extends True ? CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>> : CheckSelect<T, Prisma__DepartmentClient<Department | null >, Prisma__DepartmentClient<DepartmentGetPayload<T> | null >>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepartmentFindManyArgs>(
      args?: SelectSubset<T, DepartmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Department>>, PrismaPromise<Array<DepartmentGetPayload<T>>>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
    **/
    create<T extends DepartmentCreateArgs>(
      args: SelectSubset<T, DepartmentCreateArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Create many Departments.
     *     @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const department = await prisma.department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepartmentCreateManyArgs>(
      args?: SelectSubset<T, DepartmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentDeleteArgs>(
      args: SelectSubset<T, DepartmentDeleteArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentUpdateArgs>(
      args: SelectSubset<T, DepartmentUpdateArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentDeleteManyArgs>(
      args?: SelectSubset<T, DepartmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentUpdateManyArgs>(
      args: SelectSubset<T, DepartmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentUpsertArgs>(
      args: SelectSubset<T, DepartmentUpsertArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Find one Department that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DepartmentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Find the first Department that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DepartmentClient<T> implements PrismaPromise<T> {
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

    Faculty<T extends FacultyFindManyArgs = {}>(args?: Subset<T, FacultyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Faculty>>, PrismaPromise<Array<FacultyGetPayload<T>>>>;

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
   * Department base type for findUnique actions
   */
  export type DepartmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * Filter, which Department to fetch.
     * 
    **/
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department: findUnique
   */
  export interface DepartmentFindUniqueArgs extends DepartmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Department base type for findFirst actions
   */
  export type DepartmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * Filter, which Department to fetch.
     * 
    **/
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     * 
    **/
    orderBy?: Enumerable<DepartmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     * 
    **/
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     * 
    **/
    distinct?: Enumerable<DepartmentScalarFieldEnum>
  }

  /**
   * Department: findFirst
   */
  export interface DepartmentFindFirstArgs extends DepartmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * Filter, which Departments to fetch.
     * 
    **/
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     * 
    **/
    orderBy?: Enumerable<DepartmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     * 
    **/
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DepartmentScalarFieldEnum>
  }


  /**
   * Department create
   */
  export type DepartmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * The data needed to create a Department.
     * 
    **/
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }


  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs = {
    /**
     * The data used to create many Departments.
     * 
    **/
    data: Enumerable<DepartmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Department update
   */
  export type DepartmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * The data needed to update a Department.
     * 
    **/
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     * 
    **/
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs = {
    /**
     * The data used to update Departments.
     * 
    **/
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     * 
    **/
    where?: DepartmentWhereInput
  }


  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * The filter to search for the Department to update in case it exists.
     * 
    **/
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     * 
    **/
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }


  /**
   * Department delete
   */
  export type DepartmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
    /**
     * Filter which Department to delete.
     * 
    **/
    where: DepartmentWhereUniqueInput
  }


  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs = {
    /**
     * Filter which Departments to delete
     * 
    **/
    where?: DepartmentWhereInput
  }


  /**
   * Department: findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs = DepartmentFindUniqueArgsBase
      

  /**
   * Department: findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs = DepartmentFindFirstArgsBase
      

  /**
   * Department without action
   */
  export type DepartmentArgs = {
    /**
     * Select specific fields to fetch from the Department
     * 
    **/
    select?: DepartmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DepartmentInclude | null
  }



  /**
   * Model Faculty
   */


  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyAvgAggregateOutputType = {
    id: number | null
    departmentId: number | null
  }

  export type FacultySumAggregateOutputType = {
    id: number | null
    departmentId: number | null
  }

  export type FacultyMinAggregateOutputType = {
    id: number | null
    userName: string | null
    departmentId: number | null
  }

  export type FacultyMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    departmentId: number | null
  }

  export type FacultyCountAggregateOutputType = {
    id: number
    userName: number
    departmentId: number
    _all: number
  }


  export type FacultyAvgAggregateInputType = {
    id?: true
    departmentId?: true
  }

  export type FacultySumAggregateInputType = {
    id?: true
    departmentId?: true
  }

  export type FacultyMinAggregateInputType = {
    id?: true
    userName?: true
    departmentId?: true
  }

  export type FacultyMaxAggregateInputType = {
    id?: true
    userName?: true
    departmentId?: true
  }

  export type FacultyCountAggregateInputType = {
    id?: true
    userName?: true
    departmentId?: true
    _all?: true
  }

  export type FacultyAggregateArgs = {
    /**
     * Filter which Faculty to aggregate.
     * 
    **/
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     * 
    **/
    orderBy?: Enumerable<FacultyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type FacultyGroupByArgs = {
    where?: FacultyWhereInput
    orderBy?: Enumerable<FacultyOrderByWithAggregationInput>
    by: Array<FacultyScalarFieldEnum>
    having?: FacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _avg?: FacultyAvgAggregateInputType
    _sum?: FacultySumAggregateInputType
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }


  export type FacultyGroupByOutputType = {
    id: number
    userName: string
    departmentId: number
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type FacultySelect = {
    id?: boolean
    userName?: boolean
    departmentId?: boolean
    Meeting?: boolean | MeetingFindManyArgs
    Department?: boolean | DepartmentArgs
    _count?: boolean | FacultyCountOutputTypeArgs
  }

  export type FacultyInclude = {
    Meeting?: boolean | MeetingFindManyArgs
    Department?: boolean | DepartmentArgs
    _count?: boolean | FacultyCountOutputTypeArgs
  }

  export type FacultyGetPayload<
    S extends boolean | null | undefined | FacultyArgs,
    U = keyof S
      > = S extends true
        ? Faculty
    : S extends undefined
    ? never
    : S extends FacultyArgs | FacultyFindManyArgs
    ?'include' extends U
    ? Faculty  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['include'][P]>>  :
        P extends 'Department' ? DepartmentGetPayload<S['include'][P]> :
        P extends '_count' ? FacultyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'Department' ? DepartmentGetPayload<S['select'][P]> :
        P extends '_count' ? FacultyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Faculty ? Faculty[P] : never
  } 
    : Faculty
  : Faculty


  type FacultyCountArgs = Merge<
    Omit<FacultyFindManyArgs, 'select' | 'include'> & {
      select?: FacultyCountAggregateInputType | true
    }
  >

  export interface FacultyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {FacultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacultyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FacultyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Faculty'> extends True ? CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>> : CheckSelect<T, Prisma__FacultyClient<Faculty | null >, Prisma__FacultyClient<FacultyGetPayload<T> | null >>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacultyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FacultyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Faculty'> extends True ? CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>> : CheckSelect<T, Prisma__FacultyClient<Faculty | null >, Prisma__FacultyClient<FacultyGetPayload<T> | null >>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyWithIdOnly = await prisma.faculty.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacultyFindManyArgs>(
      args?: SelectSubset<T, FacultyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Faculty>>, PrismaPromise<Array<FacultyGetPayload<T>>>>

    /**
     * Create a Faculty.
     * @param {FacultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
    **/
    create<T extends FacultyCreateArgs>(
      args: SelectSubset<T, FacultyCreateArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Create many Faculties.
     *     @param {FacultyCreateManyArgs} args - Arguments to create many Faculties.
     *     @example
     *     // Create many Faculties
     *     const faculty = await prisma.faculty.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacultyCreateManyArgs>(
      args?: SelectSubset<T, FacultyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Faculty.
     * @param {FacultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
    **/
    delete<T extends FacultyDeleteArgs>(
      args: SelectSubset<T, FacultyDeleteArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Update one Faculty.
     * @param {FacultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacultyUpdateArgs>(
      args: SelectSubset<T, FacultyUpdateArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Delete zero or more Faculties.
     * @param {FacultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacultyDeleteManyArgs>(
      args?: SelectSubset<T, FacultyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacultyUpdateManyArgs>(
      args: SelectSubset<T, FacultyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Faculty.
     * @param {FacultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
    **/
    upsert<T extends FacultyUpsertArgs>(
      args: SelectSubset<T, FacultyUpsertArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Find one Faculty that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FacultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FacultyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Find the first Faculty that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacultyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FacultyClient<Faculty>, Prisma__FacultyClient<FacultyGetPayload<T>>>

    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends FacultyCountArgs>(
      args?: Subset<T, FacultyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyGroupByArgs} args - Group by arguments.
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
      T extends FacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyGroupByArgs['orderBy'] }
        : { orderBy?: FacultyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FacultyClient<T> implements PrismaPromise<T> {
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

    Department<T extends DepartmentArgs = {}>(args?: Subset<T, DepartmentArgs>): CheckSelect<T, Prisma__DepartmentClient<Department | null >, Prisma__DepartmentClient<DepartmentGetPayload<T> | null >>;

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
   * Faculty base type for findUnique actions
   */
  export type FacultyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * Filter, which Faculty to fetch.
     * 
    **/
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty: findUnique
   */
  export interface FacultyFindUniqueArgs extends FacultyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Faculty base type for findFirst actions
   */
  export type FacultyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * Filter, which Faculty to fetch.
     * 
    **/
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     * 
    **/
    orderBy?: Enumerable<FacultyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     * 
    **/
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     * 
    **/
    distinct?: Enumerable<FacultyScalarFieldEnum>
  }

  /**
   * Faculty: findFirst
   */
  export interface FacultyFindFirstArgs extends FacultyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Faculty findMany
   */
  export type FacultyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * Filter, which Faculties to fetch.
     * 
    **/
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     * 
    **/
    orderBy?: Enumerable<FacultyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculties.
     * 
    **/
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FacultyScalarFieldEnum>
  }


  /**
   * Faculty create
   */
  export type FacultyCreateArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * The data needed to create a Faculty.
     * 
    **/
    data: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
  }


  /**
   * Faculty createMany
   */
  export type FacultyCreateManyArgs = {
    /**
     * The data used to create many Faculties.
     * 
    **/
    data: Enumerable<FacultyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Faculty update
   */
  export type FacultyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * The data needed to update a Faculty.
     * 
    **/
    data: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
    /**
     * Choose, which Faculty to update.
     * 
    **/
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty updateMany
   */
  export type FacultyUpdateManyArgs = {
    /**
     * The data used to update Faculties.
     * 
    **/
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     * 
    **/
    where?: FacultyWhereInput
  }


  /**
   * Faculty upsert
   */
  export type FacultyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * The filter to search for the Faculty to update in case it exists.
     * 
    **/
    where: FacultyWhereUniqueInput
    /**
     * In case the Faculty found by the `where` argument doesn't exist, create a new Faculty with this data.
     * 
    **/
    create: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
    /**
     * In case the Faculty was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
  }


  /**
   * Faculty delete
   */
  export type FacultyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
    /**
     * Filter which Faculty to delete.
     * 
    **/
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty deleteMany
   */
  export type FacultyDeleteManyArgs = {
    /**
     * Filter which Faculties to delete
     * 
    **/
    where?: FacultyWhereInput
  }


  /**
   * Faculty: findUniqueOrThrow
   */
  export type FacultyFindUniqueOrThrowArgs = FacultyFindUniqueArgsBase
      

  /**
   * Faculty: findFirstOrThrow
   */
  export type FacultyFindFirstOrThrowArgs = FacultyFindFirstArgsBase
      

  /**
   * Faculty without action
   */
  export type FacultyArgs = {
    /**
     * Select specific fields to fetch from the Faculty
     * 
    **/
    select?: FacultySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FacultyInclude | null
  }



  /**
   * Model Schedule
   */


  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    day: number | null
    adminId: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    day: number | null
    adminId: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    day: number | null
    start: Date | null
    end: Date | null
    startTime: Date | null
    EndTime: Date | null
    adminId: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    day: number | null
    start: Date | null
    end: Date | null
    startTime: Date | null
    EndTime: Date | null
    adminId: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    day: number
    start: number
    end: number
    startTime: number
    EndTime: number
    adminId: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    day?: true
    adminId?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    day?: true
    adminId?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    day?: true
    start?: true
    end?: true
    startTime?: true
    EndTime?: true
    adminId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    day?: true
    start?: true
    end?: true
    startTime?: true
    EndTime?: true
    adminId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    day?: true
    start?: true
    end?: true
    startTime?: true
    EndTime?: true
    adminId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs = {
    /**
     * Filter which Schedule to aggregate.
     * 
    **/
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs = {
    where?: ScheduleWhereInput
    orderBy?: Enumerable<ScheduleOrderByWithAggregationInput>
    by: Array<ScheduleScalarFieldEnum>
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }


  export type ScheduleGroupByOutputType = {
    id: number
    day: number
    start: Date
    end: Date
    startTime: Date
    EndTime: Date
    adminId: number
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect = {
    id?: boolean
    day?: boolean
    start?: boolean
    end?: boolean
    startTime?: boolean
    EndTime?: boolean
    adminId?: boolean
    Admin?: boolean | AdminArgs
  }

  export type ScheduleInclude = {
    Admin?: boolean | AdminArgs
  }

  export type ScheduleGetPayload<
    S extends boolean | null | undefined | ScheduleArgs,
    U = keyof S
      > = S extends true
        ? Schedule
    : S extends undefined
    ? never
    : S extends ScheduleArgs | ScheduleFindManyArgs
    ?'include' extends U
    ? Schedule  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> :  P extends keyof Schedule ? Schedule[P] : never
  } 
    : Schedule
  : Schedule


  type ScheduleCountArgs = Merge<
    Omit<ScheduleFindManyArgs, 'select' | 'include'> & {
      select?: ScheduleCountAggregateInputType | true
    }
  >

  export interface ScheduleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ScheduleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Schedule'> extends True ? CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>> : CheckSelect<T, Prisma__ScheduleClient<Schedule | null >, Prisma__ScheduleClient<ScheduleGetPayload<T> | null >>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ScheduleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Schedule'> extends True ? CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>> : CheckSelect<T, Prisma__ScheduleClient<Schedule | null >, Prisma__ScheduleClient<ScheduleGetPayload<T> | null >>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleFindManyArgs>(
      args?: SelectSubset<T, ScheduleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Schedule>>, PrismaPromise<Array<ScheduleGetPayload<T>>>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
    **/
    create<T extends ScheduleCreateArgs>(
      args: SelectSubset<T, ScheduleCreateArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Create many Schedules.
     *     @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScheduleCreateManyArgs>(
      args?: SelectSubset<T, ScheduleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleDeleteArgs>(
      args: SelectSubset<T, ScheduleDeleteArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleUpdateArgs>(
      args: SelectSubset<T, ScheduleUpdateArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleDeleteManyArgs>(
      args?: SelectSubset<T, ScheduleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleUpdateManyArgs>(
      args: SelectSubset<T, ScheduleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleUpsertArgs>(
      args: SelectSubset<T, ScheduleUpsertArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Find one Schedule that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ScheduleFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Find the first Schedule that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ScheduleClient<Schedule>, Prisma__ScheduleClient<ScheduleGetPayload<T>>>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ScheduleClient<T> implements PrismaPromise<T> {
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
   * Schedule base type for findUnique actions
   */
  export type ScheduleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     * 
    **/
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule: findUnique
   */
  export interface ScheduleFindUniqueArgs extends ScheduleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Schedule base type for findFirst actions
   */
  export type ScheduleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedule to fetch.
     * 
    **/
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     * 
    **/
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     * 
    **/
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }

  /**
   * Schedule: findFirst
   */
  export interface ScheduleFindFirstArgs extends ScheduleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * Filter, which Schedules to fetch.
     * 
    **/
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<ScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     * 
    **/
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * Schedule create
   */
  export type ScheduleCreateArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * The data needed to create a Schedule.
     * 
    **/
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }


  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs = {
    /**
     * The data used to create many Schedules.
     * 
    **/
    data: Enumerable<ScheduleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * The data needed to update a Schedule.
     * 
    **/
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     * 
    **/
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs = {
    /**
     * The data used to update Schedules.
     * 
    **/
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     * 
    **/
    where?: ScheduleWhereInput
  }


  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     * 
    **/
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     * 
    **/
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }


  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
    /**
     * Filter which Schedule to delete.
     * 
    **/
    where: ScheduleWhereUniqueInput
  }


  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs = {
    /**
     * Filter which Schedules to delete
     * 
    **/
    where?: ScheduleWhereInput
  }


  /**
   * Schedule: findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs = ScheduleFindUniqueArgsBase
      

  /**
   * Schedule: findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs = ScheduleFindFirstArgsBase
      

  /**
   * Schedule without action
   */
  export type ScheduleArgs = {
    /**
     * Select specific fields to fetch from the Schedule
     * 
    **/
    select?: ScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ScheduleInclude | null
  }



  /**
   * Model DayTime
   */


  export type AggregateDayTime = {
    _count: DayTimeCountAggregateOutputType | null
    _avg: DayTimeAvgAggregateOutputType | null
    _sum: DayTimeSumAggregateOutputType | null
    _min: DayTimeMinAggregateOutputType | null
    _max: DayTimeMaxAggregateOutputType | null
  }

  export type DayTimeAvgAggregateOutputType = {
    id: number | null
    day: number | null
    adminId: number | null
  }

  export type DayTimeSumAggregateOutputType = {
    id: number | null
    day: number | null
    adminId: number | null
  }

  export type DayTimeMinAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: Date | null
    endTime: Date | null
    adminId: number | null
  }

  export type DayTimeMaxAggregateOutputType = {
    id: number | null
    day: number | null
    startTime: Date | null
    endTime: Date | null
    adminId: number | null
  }

  export type DayTimeCountAggregateOutputType = {
    id: number
    day: number
    startTime: number
    endTime: number
    adminId: number
    _all: number
  }


  export type DayTimeAvgAggregateInputType = {
    id?: true
    day?: true
    adminId?: true
  }

  export type DayTimeSumAggregateInputType = {
    id?: true
    day?: true
    adminId?: true
  }

  export type DayTimeMinAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    adminId?: true
  }

  export type DayTimeMaxAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    adminId?: true
  }

  export type DayTimeCountAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    adminId?: true
    _all?: true
  }

  export type DayTimeAggregateArgs = {
    /**
     * Filter which DayTime to aggregate.
     * 
    **/
    where?: DayTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<DayTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DayTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTimes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayTimes
    **/
    _count?: true | DayTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayTimeMaxAggregateInputType
  }

  export type GetDayTimeAggregateType<T extends DayTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateDayTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayTime[P]>
      : GetScalarType<T[P], AggregateDayTime[P]>
  }




  export type DayTimeGroupByArgs = {
    where?: DayTimeWhereInput
    orderBy?: Enumerable<DayTimeOrderByWithAggregationInput>
    by: Array<DayTimeScalarFieldEnum>
    having?: DayTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayTimeCountAggregateInputType | true
    _avg?: DayTimeAvgAggregateInputType
    _sum?: DayTimeSumAggregateInputType
    _min?: DayTimeMinAggregateInputType
    _max?: DayTimeMaxAggregateInputType
  }


  export type DayTimeGroupByOutputType = {
    id: number
    day: number
    startTime: Date
    endTime: Date
    adminId: number
    _count: DayTimeCountAggregateOutputType | null
    _avg: DayTimeAvgAggregateOutputType | null
    _sum: DayTimeSumAggregateOutputType | null
    _min: DayTimeMinAggregateOutputType | null
    _max: DayTimeMaxAggregateOutputType | null
  }

  type GetDayTimeGroupByPayload<T extends DayTimeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DayTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayTimeGroupByOutputType[P]>
            : GetScalarType<T[P], DayTimeGroupByOutputType[P]>
        }
      >
    >


  export type DayTimeSelect = {
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    adminId?: boolean
    Admin?: boolean | AdminArgs
  }

  export type DayTimeInclude = {
    Admin?: boolean | AdminArgs
  }

  export type DayTimeGetPayload<
    S extends boolean | null | undefined | DayTimeArgs,
    U = keyof S
      > = S extends true
        ? DayTime
    : S extends undefined
    ? never
    : S extends DayTimeArgs | DayTimeFindManyArgs
    ?'include' extends U
    ? DayTime  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> :  P extends keyof DayTime ? DayTime[P] : never
  } 
    : DayTime
  : DayTime


  type DayTimeCountArgs = Merge<
    Omit<DayTimeFindManyArgs, 'select' | 'include'> & {
      select?: DayTimeCountAggregateInputType | true
    }
  >

  export interface DayTimeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DayTime that matches the filter.
     * @param {DayTimeFindUniqueArgs} args - Arguments to find a DayTime
     * @example
     * // Get one DayTime
     * const dayTime = await prisma.dayTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayTimeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DayTimeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DayTime'> extends True ? CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>> : CheckSelect<T, Prisma__DayTimeClient<DayTime | null >, Prisma__DayTimeClient<DayTimeGetPayload<T> | null >>

    /**
     * Find the first DayTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeFindFirstArgs} args - Arguments to find a DayTime
     * @example
     * // Get one DayTime
     * const dayTime = await prisma.dayTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayTimeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DayTimeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DayTime'> extends True ? CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>> : CheckSelect<T, Prisma__DayTimeClient<DayTime | null >, Prisma__DayTimeClient<DayTimeGetPayload<T> | null >>

    /**
     * Find zero or more DayTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayTimes
     * const dayTimes = await prisma.dayTime.findMany()
     * 
     * // Get first 10 DayTimes
     * const dayTimes = await prisma.dayTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayTimeWithIdOnly = await prisma.dayTime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayTimeFindManyArgs>(
      args?: SelectSubset<T, DayTimeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DayTime>>, PrismaPromise<Array<DayTimeGetPayload<T>>>>

    /**
     * Create a DayTime.
     * @param {DayTimeCreateArgs} args - Arguments to create a DayTime.
     * @example
     * // Create one DayTime
     * const DayTime = await prisma.dayTime.create({
     *   data: {
     *     // ... data to create a DayTime
     *   }
     * })
     * 
    **/
    create<T extends DayTimeCreateArgs>(
      args: SelectSubset<T, DayTimeCreateArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Create many DayTimes.
     *     @param {DayTimeCreateManyArgs} args - Arguments to create many DayTimes.
     *     @example
     *     // Create many DayTimes
     *     const dayTime = await prisma.dayTime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayTimeCreateManyArgs>(
      args?: SelectSubset<T, DayTimeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DayTime.
     * @param {DayTimeDeleteArgs} args - Arguments to delete one DayTime.
     * @example
     * // Delete one DayTime
     * const DayTime = await prisma.dayTime.delete({
     *   where: {
     *     // ... filter to delete one DayTime
     *   }
     * })
     * 
    **/
    delete<T extends DayTimeDeleteArgs>(
      args: SelectSubset<T, DayTimeDeleteArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Update one DayTime.
     * @param {DayTimeUpdateArgs} args - Arguments to update one DayTime.
     * @example
     * // Update one DayTime
     * const dayTime = await prisma.dayTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayTimeUpdateArgs>(
      args: SelectSubset<T, DayTimeUpdateArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Delete zero or more DayTimes.
     * @param {DayTimeDeleteManyArgs} args - Arguments to filter DayTimes to delete.
     * @example
     * // Delete a few DayTimes
     * const { count } = await prisma.dayTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayTimeDeleteManyArgs>(
      args?: SelectSubset<T, DayTimeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayTimes
     * const dayTime = await prisma.dayTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayTimeUpdateManyArgs>(
      args: SelectSubset<T, DayTimeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DayTime.
     * @param {DayTimeUpsertArgs} args - Arguments to update or create a DayTime.
     * @example
     * // Update or create a DayTime
     * const dayTime = await prisma.dayTime.upsert({
     *   create: {
     *     // ... data to create a DayTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayTime we want to update
     *   }
     * })
    **/
    upsert<T extends DayTimeUpsertArgs>(
      args: SelectSubset<T, DayTimeUpsertArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Find one DayTime that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DayTimeFindUniqueOrThrowArgs} args - Arguments to find a DayTime
     * @example
     * // Get one DayTime
     * const dayTime = await prisma.dayTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayTimeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DayTimeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Find the first DayTime that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeFindFirstOrThrowArgs} args - Arguments to find a DayTime
     * @example
     * // Get one DayTime
     * const dayTime = await prisma.dayTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayTimeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DayTimeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DayTimeClient<DayTime>, Prisma__DayTimeClient<DayTimeGetPayload<T>>>

    /**
     * Count the number of DayTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeCountArgs} args - Arguments to filter DayTimes to count.
     * @example
     * // Count the number of DayTimes
     * const count = await prisma.dayTime.count({
     *   where: {
     *     // ... the filter for the DayTimes we want to count
     *   }
     * })
    **/
    count<T extends DayTimeCountArgs>(
      args?: Subset<T, DayTimeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayTimeAggregateArgs>(args: Subset<T, DayTimeAggregateArgs>): PrismaPromise<GetDayTimeAggregateType<T>>

    /**
     * Group by DayTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayTimeGroupByArgs} args - Group by arguments.
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
      T extends DayTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayTimeGroupByArgs['orderBy'] }
        : { orderBy?: DayTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DayTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayTimeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DayTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayTimeClient<T> implements PrismaPromise<T> {
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
   * DayTime base type for findUnique actions
   */
  export type DayTimeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * Filter, which DayTime to fetch.
     * 
    **/
    where: DayTimeWhereUniqueInput
  }

  /**
   * DayTime: findUnique
   */
  export interface DayTimeFindUniqueArgs extends DayTimeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DayTime base type for findFirst actions
   */
  export type DayTimeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * Filter, which DayTime to fetch.
     * 
    **/
    where?: DayTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<DayTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayTimes.
     * 
    **/
    cursor?: DayTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTimes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayTimes.
     * 
    **/
    distinct?: Enumerable<DayTimeScalarFieldEnum>
  }

  /**
   * DayTime: findFirst
   */
  export interface DayTimeFindFirstArgs extends DayTimeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DayTime findMany
   */
  export type DayTimeFindManyArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * Filter, which DayTimes to fetch.
     * 
    **/
    where?: DayTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayTimes to fetch.
     * 
    **/
    orderBy?: Enumerable<DayTimeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayTimes.
     * 
    **/
    cursor?: DayTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayTimes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayTimes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DayTimeScalarFieldEnum>
  }


  /**
   * DayTime create
   */
  export type DayTimeCreateArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * The data needed to create a DayTime.
     * 
    **/
    data: XOR<DayTimeCreateInput, DayTimeUncheckedCreateInput>
  }


  /**
   * DayTime createMany
   */
  export type DayTimeCreateManyArgs = {
    /**
     * The data used to create many DayTimes.
     * 
    **/
    data: Enumerable<DayTimeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DayTime update
   */
  export type DayTimeUpdateArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * The data needed to update a DayTime.
     * 
    **/
    data: XOR<DayTimeUpdateInput, DayTimeUncheckedUpdateInput>
    /**
     * Choose, which DayTime to update.
     * 
    **/
    where: DayTimeWhereUniqueInput
  }


  /**
   * DayTime updateMany
   */
  export type DayTimeUpdateManyArgs = {
    /**
     * The data used to update DayTimes.
     * 
    **/
    data: XOR<DayTimeUpdateManyMutationInput, DayTimeUncheckedUpdateManyInput>
    /**
     * Filter which DayTimes to update
     * 
    **/
    where?: DayTimeWhereInput
  }


  /**
   * DayTime upsert
   */
  export type DayTimeUpsertArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * The filter to search for the DayTime to update in case it exists.
     * 
    **/
    where: DayTimeWhereUniqueInput
    /**
     * In case the DayTime found by the `where` argument doesn't exist, create a new DayTime with this data.
     * 
    **/
    create: XOR<DayTimeCreateInput, DayTimeUncheckedCreateInput>
    /**
     * In case the DayTime was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DayTimeUpdateInput, DayTimeUncheckedUpdateInput>
  }


  /**
   * DayTime delete
   */
  export type DayTimeDeleteArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
    /**
     * Filter which DayTime to delete.
     * 
    **/
    where: DayTimeWhereUniqueInput
  }


  /**
   * DayTime deleteMany
   */
  export type DayTimeDeleteManyArgs = {
    /**
     * Filter which DayTimes to delete
     * 
    **/
    where?: DayTimeWhereInput
  }


  /**
   * DayTime: findUniqueOrThrow
   */
  export type DayTimeFindUniqueOrThrowArgs = DayTimeFindUniqueArgsBase
      

  /**
   * DayTime: findFirstOrThrow
   */
  export type DayTimeFindFirstOrThrowArgs = DayTimeFindFirstArgsBase
      

  /**
   * DayTime without action
   */
  export type DayTimeArgs = {
    /**
     * Select specific fields to fetch from the DayTime
     * 
    **/
    select?: DayTimeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DayTimeInclude | null
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
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
    StudentInfo?: boolean | StudentInfoFindManyArgs
    Subject?: boolean | SubjectFindManyArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentInclude = {
    Parent?: boolean | ParentArgs
    Meeting?: boolean | MeetingFindManyArgs
    RequestedMeetings?: boolean | RequestedMeetingsFindManyArgs
    StudentInfo?: boolean | StudentInfoFindManyArgs
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
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['include'][P]>>  :
        P extends 'StudentInfo' ? Array < StudentInfoGetPayload<S['include'][P]>>  :
        P extends 'Subject' ? Array < SubjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Parent' ? ParentGetPayload<S['select'][P]> :
        P extends 'Meeting' ? Array < MeetingGetPayload<S['select'][P]>>  :
        P extends 'RequestedMeetings' ? Array < RequestedMeetingsGetPayload<S['select'][P]>>  :
        P extends 'StudentInfo' ? Array < StudentInfoGetPayload<S['select'][P]>>  :
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

    RequestedMeetings<T extends RequestedMeetingsFindManyArgs = {}>(args?: Subset<T, RequestedMeetingsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RequestedMeetings>>, PrismaPromise<Array<RequestedMeetingsGetPayload<T>>>>;

    StudentInfo<T extends StudentInfoFindManyArgs = {}>(args?: Subset<T, StudentInfoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<StudentInfo>>, PrismaPromise<Array<StudentInfoGetPayload<T>>>>;

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
   * Model RequestedMeetings
   */


  export type AggregateRequestedMeetings = {
    _count: RequestedMeetingsCountAggregateOutputType | null
    _avg: RequestedMeetingsAvgAggregateOutputType | null
    _sum: RequestedMeetingsSumAggregateOutputType | null
    _min: RequestedMeetingsMinAggregateOutputType | null
    _max: RequestedMeetingsMaxAggregateOutputType | null
  }

  export type RequestedMeetingsAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    studentId: number | null
    adminId: number | null
  }

  export type RequestedMeetingsSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    studentId: number | null
    adminId: number | null
  }

  export type RequestedMeetingsMinAggregateOutputType = {
    id: number | null
    meetingReason: string | null
    parentId: number | null
    studentId: number | null
    adminId: number | null
  }

  export type RequestedMeetingsMaxAggregateOutputType = {
    id: number | null
    meetingReason: string | null
    parentId: number | null
    studentId: number | null
    adminId: number | null
  }

  export type RequestedMeetingsCountAggregateOutputType = {
    id: number
    meetingReason: number
    parentId: number
    studentId: number
    adminId: number
    _all: number
  }


  export type RequestedMeetingsAvgAggregateInputType = {
    id?: true
    parentId?: true
    studentId?: true
    adminId?: true
  }

  export type RequestedMeetingsSumAggregateInputType = {
    id?: true
    parentId?: true
    studentId?: true
    adminId?: true
  }

  export type RequestedMeetingsMinAggregateInputType = {
    id?: true
    meetingReason?: true
    parentId?: true
    studentId?: true
    adminId?: true
  }

  export type RequestedMeetingsMaxAggregateInputType = {
    id?: true
    meetingReason?: true
    parentId?: true
    studentId?: true
    adminId?: true
  }

  export type RequestedMeetingsCountAggregateInputType = {
    id?: true
    meetingReason?: true
    parentId?: true
    studentId?: true
    adminId?: true
    _all?: true
  }

  export type RequestedMeetingsAggregateArgs = {
    /**
     * Filter which RequestedMeetings to aggregate.
     * 
    **/
    where?: RequestedMeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestedMeetings to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestedMeetingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RequestedMeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestedMeetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestedMeetings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestedMeetings
    **/
    _count?: true | RequestedMeetingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestedMeetingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestedMeetingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestedMeetingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestedMeetingsMaxAggregateInputType
  }

  export type GetRequestedMeetingsAggregateType<T extends RequestedMeetingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestedMeetings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestedMeetings[P]>
      : GetScalarType<T[P], AggregateRequestedMeetings[P]>
  }




  export type RequestedMeetingsGroupByArgs = {
    where?: RequestedMeetingsWhereInput
    orderBy?: Enumerable<RequestedMeetingsOrderByWithAggregationInput>
    by: Array<RequestedMeetingsScalarFieldEnum>
    having?: RequestedMeetingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestedMeetingsCountAggregateInputType | true
    _avg?: RequestedMeetingsAvgAggregateInputType
    _sum?: RequestedMeetingsSumAggregateInputType
    _min?: RequestedMeetingsMinAggregateInputType
    _max?: RequestedMeetingsMaxAggregateInputType
  }


  export type RequestedMeetingsGroupByOutputType = {
    id: number
    meetingReason: string
    parentId: number
    studentId: number
    adminId: number
    _count: RequestedMeetingsCountAggregateOutputType | null
    _avg: RequestedMeetingsAvgAggregateOutputType | null
    _sum: RequestedMeetingsSumAggregateOutputType | null
    _min: RequestedMeetingsMinAggregateOutputType | null
    _max: RequestedMeetingsMaxAggregateOutputType | null
  }

  type GetRequestedMeetingsGroupByPayload<T extends RequestedMeetingsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RequestedMeetingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestedMeetingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestedMeetingsGroupByOutputType[P]>
            : GetScalarType<T[P], RequestedMeetingsGroupByOutputType[P]>
        }
      >
    >


  export type RequestedMeetingsSelect = {
    id?: boolean
    meetingReason?: boolean
    parentId?: boolean
    studentId?: boolean
    adminId?: boolean
    Admin?: boolean | AdminArgs
    Parent?: boolean | ParentArgs
    Student?: boolean | StudentArgs
  }

  export type RequestedMeetingsInclude = {
    Admin?: boolean | AdminArgs
    Parent?: boolean | ParentArgs
    Student?: boolean | StudentArgs
  }

  export type RequestedMeetingsGetPayload<
    S extends boolean | null | undefined | RequestedMeetingsArgs,
    U = keyof S
      > = S extends true
        ? RequestedMeetings
    : S extends undefined
    ? never
    : S extends RequestedMeetingsArgs | RequestedMeetingsFindManyArgs
    ?'include' extends U
    ? RequestedMeetings  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> :
        P extends 'Parent' ? ParentGetPayload<S['include'][P]> :
        P extends 'Student' ? StudentGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> :
        P extends 'Parent' ? ParentGetPayload<S['select'][P]> :
        P extends 'Student' ? StudentGetPayload<S['select'][P]> :  P extends keyof RequestedMeetings ? RequestedMeetings[P] : never
  } 
    : RequestedMeetings
  : RequestedMeetings


  type RequestedMeetingsCountArgs = Merge<
    Omit<RequestedMeetingsFindManyArgs, 'select' | 'include'> & {
      select?: RequestedMeetingsCountAggregateInputType | true
    }
  >

  export interface RequestedMeetingsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RequestedMeetings that matches the filter.
     * @param {RequestedMeetingsFindUniqueArgs} args - Arguments to find a RequestedMeetings
     * @example
     * // Get one RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestedMeetingsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RequestedMeetingsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RequestedMeetings'> extends True ? CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>> : CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings | null >, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T> | null >>

    /**
     * Find the first RequestedMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsFindFirstArgs} args - Arguments to find a RequestedMeetings
     * @example
     * // Get one RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestedMeetingsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RequestedMeetingsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RequestedMeetings'> extends True ? CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>> : CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings | null >, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T> | null >>

    /**
     * Find zero or more RequestedMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findMany()
     * 
     * // Get first 10 RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestedMeetingsWithIdOnly = await prisma.requestedMeetings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestedMeetingsFindManyArgs>(
      args?: SelectSubset<T, RequestedMeetingsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RequestedMeetings>>, PrismaPromise<Array<RequestedMeetingsGetPayload<T>>>>

    /**
     * Create a RequestedMeetings.
     * @param {RequestedMeetingsCreateArgs} args - Arguments to create a RequestedMeetings.
     * @example
     * // Create one RequestedMeetings
     * const RequestedMeetings = await prisma.requestedMeetings.create({
     *   data: {
     *     // ... data to create a RequestedMeetings
     *   }
     * })
     * 
    **/
    create<T extends RequestedMeetingsCreateArgs>(
      args: SelectSubset<T, RequestedMeetingsCreateArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Create many RequestedMeetings.
     *     @param {RequestedMeetingsCreateManyArgs} args - Arguments to create many RequestedMeetings.
     *     @example
     *     // Create many RequestedMeetings
     *     const requestedMeetings = await prisma.requestedMeetings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestedMeetingsCreateManyArgs>(
      args?: SelectSubset<T, RequestedMeetingsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RequestedMeetings.
     * @param {RequestedMeetingsDeleteArgs} args - Arguments to delete one RequestedMeetings.
     * @example
     * // Delete one RequestedMeetings
     * const RequestedMeetings = await prisma.requestedMeetings.delete({
     *   where: {
     *     // ... filter to delete one RequestedMeetings
     *   }
     * })
     * 
    **/
    delete<T extends RequestedMeetingsDeleteArgs>(
      args: SelectSubset<T, RequestedMeetingsDeleteArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Update one RequestedMeetings.
     * @param {RequestedMeetingsUpdateArgs} args - Arguments to update one RequestedMeetings.
     * @example
     * // Update one RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestedMeetingsUpdateArgs>(
      args: SelectSubset<T, RequestedMeetingsUpdateArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Delete zero or more RequestedMeetings.
     * @param {RequestedMeetingsDeleteManyArgs} args - Arguments to filter RequestedMeetings to delete.
     * @example
     * // Delete a few RequestedMeetings
     * const { count } = await prisma.requestedMeetings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestedMeetingsDeleteManyArgs>(
      args?: SelectSubset<T, RequestedMeetingsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestedMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestedMeetingsUpdateManyArgs>(
      args: SelectSubset<T, RequestedMeetingsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RequestedMeetings.
     * @param {RequestedMeetingsUpsertArgs} args - Arguments to update or create a RequestedMeetings.
     * @example
     * // Update or create a RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.upsert({
     *   create: {
     *     // ... data to create a RequestedMeetings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestedMeetings we want to update
     *   }
     * })
    **/
    upsert<T extends RequestedMeetingsUpsertArgs>(
      args: SelectSubset<T, RequestedMeetingsUpsertArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Find one RequestedMeetings that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RequestedMeetingsFindUniqueOrThrowArgs} args - Arguments to find a RequestedMeetings
     * @example
     * // Get one RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestedMeetingsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RequestedMeetingsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Find the first RequestedMeetings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsFindFirstOrThrowArgs} args - Arguments to find a RequestedMeetings
     * @example
     * // Get one RequestedMeetings
     * const requestedMeetings = await prisma.requestedMeetings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestedMeetingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RequestedMeetingsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RequestedMeetingsClient<RequestedMeetings>, Prisma__RequestedMeetingsClient<RequestedMeetingsGetPayload<T>>>

    /**
     * Count the number of RequestedMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsCountArgs} args - Arguments to filter RequestedMeetings to count.
     * @example
     * // Count the number of RequestedMeetings
     * const count = await prisma.requestedMeetings.count({
     *   where: {
     *     // ... the filter for the RequestedMeetings we want to count
     *   }
     * })
    **/
    count<T extends RequestedMeetingsCountArgs>(
      args?: Subset<T, RequestedMeetingsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestedMeetingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestedMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestedMeetingsAggregateArgs>(args: Subset<T, RequestedMeetingsAggregateArgs>): PrismaPromise<GetRequestedMeetingsAggregateType<T>>

    /**
     * Group by RequestedMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestedMeetingsGroupByArgs} args - Group by arguments.
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
      T extends RequestedMeetingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestedMeetingsGroupByArgs['orderBy'] }
        : { orderBy?: RequestedMeetingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestedMeetingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestedMeetingsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestedMeetings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestedMeetingsClient<T> implements PrismaPromise<T> {
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
   * RequestedMeetings base type for findUnique actions
   */
  export type RequestedMeetingsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * Filter, which RequestedMeetings to fetch.
     * 
    **/
    where: RequestedMeetingsWhereUniqueInput
  }

  /**
   * RequestedMeetings: findUnique
   */
  export interface RequestedMeetingsFindUniqueArgs extends RequestedMeetingsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestedMeetings base type for findFirst actions
   */
  export type RequestedMeetingsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * Filter, which RequestedMeetings to fetch.
     * 
    **/
    where?: RequestedMeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestedMeetings to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestedMeetingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestedMeetings.
     * 
    **/
    cursor?: RequestedMeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestedMeetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestedMeetings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestedMeetings.
     * 
    **/
    distinct?: Enumerable<RequestedMeetingsScalarFieldEnum>
  }

  /**
   * RequestedMeetings: findFirst
   */
  export interface RequestedMeetingsFindFirstArgs extends RequestedMeetingsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RequestedMeetings findMany
   */
  export type RequestedMeetingsFindManyArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * Filter, which RequestedMeetings to fetch.
     * 
    **/
    where?: RequestedMeetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestedMeetings to fetch.
     * 
    **/
    orderBy?: Enumerable<RequestedMeetingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestedMeetings.
     * 
    **/
    cursor?: RequestedMeetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestedMeetings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestedMeetings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RequestedMeetingsScalarFieldEnum>
  }


  /**
   * RequestedMeetings create
   */
  export type RequestedMeetingsCreateArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * The data needed to create a RequestedMeetings.
     * 
    **/
    data: XOR<RequestedMeetingsCreateInput, RequestedMeetingsUncheckedCreateInput>
  }


  /**
   * RequestedMeetings createMany
   */
  export type RequestedMeetingsCreateManyArgs = {
    /**
     * The data used to create many RequestedMeetings.
     * 
    **/
    data: Enumerable<RequestedMeetingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RequestedMeetings update
   */
  export type RequestedMeetingsUpdateArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * The data needed to update a RequestedMeetings.
     * 
    **/
    data: XOR<RequestedMeetingsUpdateInput, RequestedMeetingsUncheckedUpdateInput>
    /**
     * Choose, which RequestedMeetings to update.
     * 
    **/
    where: RequestedMeetingsWhereUniqueInput
  }


  /**
   * RequestedMeetings updateMany
   */
  export type RequestedMeetingsUpdateManyArgs = {
    /**
     * The data used to update RequestedMeetings.
     * 
    **/
    data: XOR<RequestedMeetingsUpdateManyMutationInput, RequestedMeetingsUncheckedUpdateManyInput>
    /**
     * Filter which RequestedMeetings to update
     * 
    **/
    where?: RequestedMeetingsWhereInput
  }


  /**
   * RequestedMeetings upsert
   */
  export type RequestedMeetingsUpsertArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * The filter to search for the RequestedMeetings to update in case it exists.
     * 
    **/
    where: RequestedMeetingsWhereUniqueInput
    /**
     * In case the RequestedMeetings found by the `where` argument doesn't exist, create a new RequestedMeetings with this data.
     * 
    **/
    create: XOR<RequestedMeetingsCreateInput, RequestedMeetingsUncheckedCreateInput>
    /**
     * In case the RequestedMeetings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RequestedMeetingsUpdateInput, RequestedMeetingsUncheckedUpdateInput>
  }


  /**
   * RequestedMeetings delete
   */
  export type RequestedMeetingsDeleteArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
    /**
     * Filter which RequestedMeetings to delete.
     * 
    **/
    where: RequestedMeetingsWhereUniqueInput
  }


  /**
   * RequestedMeetings deleteMany
   */
  export type RequestedMeetingsDeleteManyArgs = {
    /**
     * Filter which RequestedMeetings to delete
     * 
    **/
    where?: RequestedMeetingsWhereInput
  }


  /**
   * RequestedMeetings: findUniqueOrThrow
   */
  export type RequestedMeetingsFindUniqueOrThrowArgs = RequestedMeetingsFindUniqueArgsBase
      

  /**
   * RequestedMeetings: findFirstOrThrow
   */
  export type RequestedMeetingsFindFirstOrThrowArgs = RequestedMeetingsFindFirstArgsBase
      

  /**
   * RequestedMeetings without action
   */
  export type RequestedMeetingsArgs = {
    /**
     * Select specific fields to fetch from the RequestedMeetings
     * 
    **/
    select?: RequestedMeetingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RequestedMeetingsInclude | null
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
    facultyId: number | null
    studentId: number | null
    parentId: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    facultyId: number | null
    studentId: number | null
    parentId: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    meetingDay: Date | null
    meetingStatus: boolean | null
    meetingReason: string | null
    adminId: number | null
    facultyId: number | null
    studentId: number | null
    parentId: number | null
    meetingStartTime: string | null
    meetingEndTime: string | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    meetingDay: Date | null
    meetingStatus: boolean | null
    meetingReason: string | null
    adminId: number | null
    facultyId: number | null
    studentId: number | null
    parentId: number | null
    meetingStartTime: string | null
    meetingEndTime: string | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    meetingDay: number
    meetingStatus: number
    meetingReason: number
    adminId: number
    facultyId: number
    studentId: number
    parentId: number
    meetingStartTime: number
    meetingEndTime: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    adminId?: true
    facultyId?: true
    studentId?: true
    parentId?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    adminId?: true
    facultyId?: true
    studentId?: true
    parentId?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    meetingDay?: true
    meetingStatus?: true
    meetingReason?: true
    adminId?: true
    facultyId?: true
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
    facultyId?: true
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
    facultyId?: true
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
    meetingDay: Date
    meetingStatus: boolean
    meetingReason: string | null
    adminId: number | null
    facultyId: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
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
    facultyId?: boolean
    studentId?: boolean
    parentId?: boolean
    meetingStartTime?: boolean
    meetingEndTime?: boolean
    Admin?: boolean | AdminArgs
    Faculty?: boolean | FacultyArgs
    Parent?: boolean | ParentArgs
    Student?: boolean | StudentArgs
    Feedback?: boolean | FeedbackFindManyArgs
    _count?: boolean | MeetingCountOutputTypeArgs
  }

  export type MeetingInclude = {
    Admin?: boolean | AdminArgs
    Faculty?: boolean | FacultyArgs
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
        P extends 'Admin' ? AdminGetPayload<S['include'][P]> | null :
        P extends 'Faculty' ? FacultyGetPayload<S['include'][P]> | null :
        P extends 'Parent' ? ParentGetPayload<S['include'][P]> :
        P extends 'Student' ? StudentGetPayload<S['include'][P]> :
        P extends 'Feedback' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends '_count' ? MeetingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Admin' ? AdminGetPayload<S['select'][P]> | null :
        P extends 'Faculty' ? FacultyGetPayload<S['select'][P]> | null :
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

    Faculty<T extends FacultyArgs = {}>(args?: Subset<T, FacultyArgs>): CheckSelect<T, Prisma__FacultyClient<Faculty | null >, Prisma__FacultyClient<FacultyGetPayload<T> | null >>;

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


  export const DayTimeScalarFieldEnum: {
    id: 'id',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    adminId: 'adminId'
  };

  export type DayTimeScalarFieldEnum = (typeof DayTimeScalarFieldEnum)[keyof typeof DayTimeScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    departmentName: 'departmentName'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const FacultyScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    departmentId: 'departmentId'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


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
    facultyId: 'facultyId',
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


  export const RequestedMeetingsScalarFieldEnum: {
    id: 'id',
    meetingReason: 'meetingReason',
    parentId: 'parentId',
    studentId: 'studentId',
    adminId: 'adminId'
  };

  export type RequestedMeetingsScalarFieldEnum = (typeof RequestedMeetingsScalarFieldEnum)[keyof typeof RequestedMeetingsScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    day: 'day',
    start: 'start',
    end: 'end',
    startTime: 'startTime',
    EndTime: 'EndTime',
    adminId: 'adminId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


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
    RequestedMeetings?: RequestedMeetingsListRelationFilter
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
    RequestedMeetings?: RequestedMeetingsOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = {
    id?: number
    parentEmail?: string
    parentCnic?: string
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
    Schedule?: ScheduleListRelationFilter
    RequestedMeetings?: RequestedMeetingsListRelationFilter
    DayTime?: DayTimeListRelationFilter
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
    Schedule?: ScheduleOrderByRelationAggregateInput
    RequestedMeetings?: RequestedMeetingsOrderByRelationAggregateInput
    DayTime?: DayTimeOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = {
    id?: number
    adminCnic?: string
    adminEmail?: string
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

  export type DepartmentWhereInput = {
    AND?: Enumerable<DepartmentWhereInput>
    OR?: Enumerable<DepartmentWhereInput>
    NOT?: Enumerable<DepartmentWhereInput>
    id?: IntFilter | number
    departmentName?: StringFilter | string
    Faculty?: FacultyListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    Faculty?: FacultyOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = {
    id?: number
  }

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DepartmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<DepartmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DepartmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    departmentName?: StringWithAggregatesFilter | string
  }

  export type FacultyWhereInput = {
    AND?: Enumerable<FacultyWhereInput>
    OR?: Enumerable<FacultyWhereInput>
    NOT?: Enumerable<FacultyWhereInput>
    id?: IntFilter | number
    userName?: StringFilter | string
    departmentId?: IntFilter | number
    Meeting?: MeetingListRelationFilter
    Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
  }

  export type FacultyOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    departmentId?: SortOrder
    Meeting?: MeetingOrderByRelationAggregateInput
    Department?: DepartmentOrderByWithRelationInput
  }

  export type FacultyWhereUniqueInput = {
    id?: number
  }

  export type FacultyOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    departmentId?: SortOrder
    _count?: FacultyCountOrderByAggregateInput
    _avg?: FacultyAvgOrderByAggregateInput
    _max?: FacultyMaxOrderByAggregateInput
    _min?: FacultyMinOrderByAggregateInput
    _sum?: FacultySumOrderByAggregateInput
  }

  export type FacultyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FacultyScalarWhereWithAggregatesInput>
    OR?: Enumerable<FacultyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FacultyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userName?: StringWithAggregatesFilter | string
    departmentId?: IntWithAggregatesFilter | number
  }

  export type ScheduleWhereInput = {
    AND?: Enumerable<ScheduleWhereInput>
    OR?: Enumerable<ScheduleWhereInput>
    NOT?: Enumerable<ScheduleWhereInput>
    id?: IntFilter | number
    day?: IntFilter | number
    start?: DateTimeFilter | Date | string
    end?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    EndTime?: DateTimeFilter | Date | string
    adminId?: IntFilter | number
    Admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    start?: SortOrder
    end?: SortOrder
    startTime?: SortOrder
    EndTime?: SortOrder
    adminId?: SortOrder
    Admin?: AdminOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = {
    id?: number
  }

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    start?: SortOrder
    end?: SortOrder
    startTime?: SortOrder
    EndTime?: SortOrder
    adminId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ScheduleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day?: IntWithAggregatesFilter | number
    start?: DateTimeWithAggregatesFilter | Date | string
    end?: DateTimeWithAggregatesFilter | Date | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    EndTime?: DateTimeWithAggregatesFilter | Date | string
    adminId?: IntWithAggregatesFilter | number
  }

  export type DayTimeWhereInput = {
    AND?: Enumerable<DayTimeWhereInput>
    OR?: Enumerable<DayTimeWhereInput>
    NOT?: Enumerable<DayTimeWhereInput>
    id?: IntFilter | number
    day?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    adminId?: IntFilter | number
    Admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type DayTimeOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    adminId?: SortOrder
    Admin?: AdminOrderByWithRelationInput
  }

  export type DayTimeWhereUniqueInput = {
    id?: number
    adminId?: number
  }

  export type DayTimeOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    adminId?: SortOrder
    _count?: DayTimeCountOrderByAggregateInput
    _avg?: DayTimeAvgOrderByAggregateInput
    _max?: DayTimeMaxOrderByAggregateInput
    _min?: DayTimeMinOrderByAggregateInput
    _sum?: DayTimeSumOrderByAggregateInput
  }

  export type DayTimeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DayTimeScalarWhereWithAggregatesInput>
    OR?: Enumerable<DayTimeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DayTimeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day?: IntWithAggregatesFilter | number
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
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
    RequestedMeetings?: RequestedMeetingsListRelationFilter
    StudentInfo?: StudentInfoListRelationFilter
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
    RequestedMeetings?: RequestedMeetingsOrderByRelationAggregateInput
    StudentInfo?: StudentInfoOrderByRelationAggregateInput
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

  export type RequestedMeetingsWhereInput = {
    AND?: Enumerable<RequestedMeetingsWhereInput>
    OR?: Enumerable<RequestedMeetingsWhereInput>
    NOT?: Enumerable<RequestedMeetingsWhereInput>
    id?: IntFilter | number
    meetingReason?: StringFilter | string
    parentId?: IntFilter | number
    studentId?: IntFilter | number
    adminId?: IntFilter | number
    Admin?: XOR<AdminRelationFilter, AdminWhereInput>
    Parent?: XOR<ParentRelationFilter, ParentWhereInput>
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type RequestedMeetingsOrderByWithRelationInput = {
    id?: SortOrder
    meetingReason?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
    Admin?: AdminOrderByWithRelationInput
    Parent?: ParentOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
  }

  export type RequestedMeetingsWhereUniqueInput = {
    id?: number
  }

  export type RequestedMeetingsOrderByWithAggregationInput = {
    id?: SortOrder
    meetingReason?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
    _count?: RequestedMeetingsCountOrderByAggregateInput
    _avg?: RequestedMeetingsAvgOrderByAggregateInput
    _max?: RequestedMeetingsMaxOrderByAggregateInput
    _min?: RequestedMeetingsMinOrderByAggregateInput
    _sum?: RequestedMeetingsSumOrderByAggregateInput
  }

  export type RequestedMeetingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RequestedMeetingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<RequestedMeetingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RequestedMeetingsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    meetingReason?: StringWithAggregatesFilter | string
    parentId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    adminId?: IntWithAggregatesFilter | number
  }

  export type MeetingWhereInput = {
    AND?: Enumerable<MeetingWhereInput>
    OR?: Enumerable<MeetingWhereInput>
    NOT?: Enumerable<MeetingWhereInput>
    id?: IntFilter | number
    meetingDay?: DateTimeFilter | Date | string
    meetingStatus?: BoolFilter | boolean
    meetingReason?: StringNullableFilter | string | null
    adminId?: IntNullableFilter | number | null
    facultyId?: IntNullableFilter | number | null
    studentId?: IntFilter | number
    parentId?: IntFilter | number
    meetingStartTime?: StringFilter | string
    meetingEndTime?: StringFilter | string
    Admin?: XOR<AdminRelationFilter, AdminWhereInput> | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput> | null
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
    facultyId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
    Admin?: AdminOrderByWithRelationInput
    Faculty?: FacultyOrderByWithRelationInput
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
    facultyId?: SortOrder
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
    meetingDay?: DateTimeWithAggregatesFilter | Date | string
    meetingStatus?: BoolWithAggregatesFilter | boolean
    meetingReason?: StringNullableWithAggregatesFilter | string | null
    adminId?: IntNullableWithAggregatesFilter | number | null
    facultyId?: IntNullableWithAggregatesFilter | number | null
    studentId?: IntWithAggregatesFilter | number
    parentId?: IntWithAggregatesFilter | number
    meetingStartTime?: StringWithAggregatesFilter | string
    meetingEndTime?: StringWithAggregatesFilter | string
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
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutParentInput
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
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutParentNestedInput
    Student?: StudentUpdateManyWithoutParentNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutParentNestedInput
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
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutParentNestedInput
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
    Schedule?: ScheduleCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeCreateNestedManyWithoutAdminInput
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
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
    Schedule?: ScheduleUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUpdateManyWithoutAdminNestedInput
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
    Schedule?: ScheduleUncheckedUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUncheckedUpdateManyWithoutAdminNestedInput
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

  export type DepartmentCreateInput = {
    departmentName: string
    Faculty?: FacultyCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    departmentName: string
    Faculty?: FacultyUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    departmentName: string
  }

  export type DepartmentUpdateManyMutationInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCreateInput = {
    userName: string
    Meeting?: MeetingCreateNestedManyWithoutFacultyInput
    Department: DepartmentCreateNestedOneWithoutFacultyInput
  }

  export type FacultyUncheckedCreateInput = {
    id?: number
    userName: string
    departmentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutFacultyNestedInput
    Department?: DepartmentUpdateOneRequiredWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyCreateManyInput = {
    id?: number
    userName: string
    departmentId: number
  }

  export type FacultyUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
    Admin: AdminCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
    adminId: number
  }

  export type ScheduleUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateManyInput = {
    id?: number
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
    adminId: number
  }

  export type ScheduleUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type DayTimeCreateInput = {
    day: number
    startTime: Date | string
    endTime: Date | string
    Admin: AdminCreateNestedOneWithoutDayTimeInput
  }

  export type DayTimeUncheckedCreateInput = {
    id?: number
    day: number
    startTime: Date | string
    endTime: Date | string
    adminId: number
  }

  export type DayTimeUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneRequiredWithoutDayTimeNestedInput
  }

  export type DayTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type DayTimeCreateManyInput = {
    id?: number
    day: number
    startTime: Date | string
    endTime: Date | string
    adminId: number
  }

  export type DayTimeUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedManyWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateManyWithoutStudentNestedInput
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

  export type RequestedMeetingsCreateInput = {
    meetingReason: string
    Admin: AdminCreateNestedOneWithoutRequestedMeetingsInput
    Parent: ParentCreateNestedOneWithoutRequestedMeetingsInput
    Student: StudentCreateNestedOneWithoutRequestedMeetingsInput
  }

  export type RequestedMeetingsUncheckedCreateInput = {
    id?: number
    meetingReason: string
    parentId: number
    studentId: number
    adminId: number
  }

  export type RequestedMeetingsUpdateInput = {
    meetingReason?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneRequiredWithoutRequestedMeetingsNestedInput
    Parent?: ParentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
    Student?: StudentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
  }

  export type RequestedMeetingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestedMeetingsCreateManyInput = {
    id?: number
    meetingReason: string
    parentId: number
    studentId: number
    adminId: number
  }

  export type RequestedMeetingsUpdateManyMutationInput = {
    meetingReason?: StringFieldUpdateOperationsInput | string
  }

  export type RequestedMeetingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateInput = {
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Admin?: AdminCreateNestedOneWithoutMeetingInput
    Faculty?: FacultyCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutMeetingNestedInput
    Faculty?: FacultyUpdateOneWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
  }

  export type MeetingUpdateManyMutationInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
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

  export type RequestedMeetingsListRelationFilter = {
    every?: RequestedMeetingsWhereInput
    some?: RequestedMeetingsWhereInput
    none?: RequestedMeetingsWhereInput
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestedMeetingsOrderByRelationAggregateInput = {
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
    not?: NestedStringNullableFilter | string | null
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type DayTimeListRelationFilter = {
    every?: DayTimeWhereInput
    some?: DayTimeWhereInput
    none?: DayTimeWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayTimeOrderByRelationAggregateInput = {
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
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FacultyListRelationFilter = {
    every?: FacultyWhereInput
    some?: FacultyWhereInput
    none?: FacultyWhereInput
  }

  export type FacultyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type FacultyCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    departmentId?: SortOrder
  }

  export type FacultyAvgOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
  }

  export type FacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    departmentId?: SortOrder
  }

  export type FacultyMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    departmentId?: SortOrder
  }

  export type FacultySumOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
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

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start?: SortOrder
    end?: SortOrder
    startTime?: SortOrder
    EndTime?: SortOrder
    adminId?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    adminId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start?: SortOrder
    end?: SortOrder
    startTime?: SortOrder
    EndTime?: SortOrder
    adminId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start?: SortOrder
    end?: SortOrder
    startTime?: SortOrder
    EndTime?: SortOrder
    adminId?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    adminId?: SortOrder
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

  export type DayTimeCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    adminId?: SortOrder
  }

  export type DayTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    adminId?: SortOrder
  }

  export type DayTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    adminId?: SortOrder
  }

  export type DayTimeMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    adminId?: SortOrder
  }

  export type DayTimeSumOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    adminId?: SortOrder
  }

  export type ParentRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type StudentInfoListRelationFilter = {
    every?: StudentInfoWhereInput
    some?: StudentInfoWhereInput
    none?: StudentInfoWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type StudentInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type RequestedMeetingsCountOrderByAggregateInput = {
    id?: SortOrder
    meetingReason?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
  }

  export type RequestedMeetingsAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
  }

  export type RequestedMeetingsMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingReason?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
  }

  export type RequestedMeetingsMinOrderByAggregateInput = {
    id?: SortOrder
    meetingReason?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
  }

  export type RequestedMeetingsSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    studentId?: SortOrder
    adminId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FacultyRelationFilter = {
    is?: FacultyWhereInput | null
    isNot?: FacultyWhereInput | null
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
    facultyId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingDay?: SortOrder
    meetingStatus?: SortOrder
    meetingReason?: SortOrder
    adminId?: SortOrder
    facultyId?: SortOrder
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
    facultyId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
    meetingStartTime?: SortOrder
    meetingEndTime?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    facultyId?: SortOrder
    studentId?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
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

  export type RequestedMeetingsCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutParentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutParentInput>
    createMany?: RequestedMeetingsCreateManyParentInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
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

  export type RequestedMeetingsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutParentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutParentInput>
    createMany?: RequestedMeetingsCreateManyParentInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
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

  export type RequestedMeetingsUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutParentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutParentInput>
    createMany?: RequestedMeetingsCreateManyParentInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
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

  export type RequestedMeetingsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutParentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutParentInput>
    createMany?: RequestedMeetingsCreateManyParentInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
  }

  export type MeetingCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type ScheduleCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutAdminInput>, Enumerable<ScheduleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutAdminInput>
    createMany?: ScheduleCreateManyAdminInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type RequestedMeetingsCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutAdminInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutAdminInput>
    createMany?: RequestedMeetingsCreateManyAdminInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
  }

  export type DayTimeCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<DayTimeCreateWithoutAdminInput>, Enumerable<DayTimeUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<DayTimeCreateOrConnectWithoutAdminInput>
    createMany?: DayTimeCreateManyAdminInputEnvelope
    connect?: Enumerable<DayTimeWhereUniqueInput>
  }

  export type MeetingUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutAdminInput>, Enumerable<MeetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutAdminInput>
    createMany?: MeetingCreateManyAdminInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type ScheduleUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutAdminInput>, Enumerable<ScheduleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutAdminInput>
    createMany?: ScheduleCreateManyAdminInputEnvelope
    connect?: Enumerable<ScheduleWhereUniqueInput>
  }

  export type RequestedMeetingsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutAdminInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutAdminInput>
    createMany?: RequestedMeetingsCreateManyAdminInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
  }

  export type DayTimeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<DayTimeCreateWithoutAdminInput>, Enumerable<DayTimeUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<DayTimeCreateOrConnectWithoutAdminInput>
    createMany?: DayTimeCreateManyAdminInputEnvelope
    connect?: Enumerable<DayTimeWhereUniqueInput>
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

  export type ScheduleUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutAdminInput>, Enumerable<ScheduleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: ScheduleCreateManyAdminInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type RequestedMeetingsUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutAdminInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: RequestedMeetingsCreateManyAdminInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
  }

  export type DayTimeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<DayTimeCreateWithoutAdminInput>, Enumerable<DayTimeUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<DayTimeCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<DayTimeUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: DayTimeCreateManyAdminInputEnvelope
    set?: Enumerable<DayTimeWhereUniqueInput>
    disconnect?: Enumerable<DayTimeWhereUniqueInput>
    delete?: Enumerable<DayTimeWhereUniqueInput>
    connect?: Enumerable<DayTimeWhereUniqueInput>
    update?: Enumerable<DayTimeUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<DayTimeUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<DayTimeScalarWhereInput>
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

  export type ScheduleUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<ScheduleCreateWithoutAdminInput>, Enumerable<ScheduleUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<ScheduleCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<ScheduleUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: ScheduleCreateManyAdminInputEnvelope
    set?: Enumerable<ScheduleWhereUniqueInput>
    disconnect?: Enumerable<ScheduleWhereUniqueInput>
    delete?: Enumerable<ScheduleWhereUniqueInput>
    connect?: Enumerable<ScheduleWhereUniqueInput>
    update?: Enumerable<ScheduleUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<ScheduleUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<ScheduleScalarWhereInput>
  }

  export type RequestedMeetingsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutAdminInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: RequestedMeetingsCreateManyAdminInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
  }

  export type DayTimeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<DayTimeCreateWithoutAdminInput>, Enumerable<DayTimeUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<DayTimeCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<DayTimeUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: DayTimeCreateManyAdminInputEnvelope
    set?: Enumerable<DayTimeWhereUniqueInput>
    disconnect?: Enumerable<DayTimeWhereUniqueInput>
    delete?: Enumerable<DayTimeWhereUniqueInput>
    connect?: Enumerable<DayTimeWhereUniqueInput>
    update?: Enumerable<DayTimeUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<DayTimeUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<DayTimeScalarWhereInput>
  }

  export type FacultyCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<Enumerable<FacultyCreateWithoutDepartmentInput>, Enumerable<FacultyUncheckedCreateWithoutDepartmentInput>>
    connectOrCreate?: Enumerable<FacultyCreateOrConnectWithoutDepartmentInput>
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    connect?: Enumerable<FacultyWhereUniqueInput>
  }

  export type FacultyUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<Enumerable<FacultyCreateWithoutDepartmentInput>, Enumerable<FacultyUncheckedCreateWithoutDepartmentInput>>
    connectOrCreate?: Enumerable<FacultyCreateOrConnectWithoutDepartmentInput>
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    connect?: Enumerable<FacultyWhereUniqueInput>
  }

  export type FacultyUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<Enumerable<FacultyCreateWithoutDepartmentInput>, Enumerable<FacultyUncheckedCreateWithoutDepartmentInput>>
    connectOrCreate?: Enumerable<FacultyCreateOrConnectWithoutDepartmentInput>
    upsert?: Enumerable<FacultyUpsertWithWhereUniqueWithoutDepartmentInput>
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    set?: Enumerable<FacultyWhereUniqueInput>
    disconnect?: Enumerable<FacultyWhereUniqueInput>
    delete?: Enumerable<FacultyWhereUniqueInput>
    connect?: Enumerable<FacultyWhereUniqueInput>
    update?: Enumerable<FacultyUpdateWithWhereUniqueWithoutDepartmentInput>
    updateMany?: Enumerable<FacultyUpdateManyWithWhereWithoutDepartmentInput>
    deleteMany?: Enumerable<FacultyScalarWhereInput>
  }

  export type FacultyUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<Enumerable<FacultyCreateWithoutDepartmentInput>, Enumerable<FacultyUncheckedCreateWithoutDepartmentInput>>
    connectOrCreate?: Enumerable<FacultyCreateOrConnectWithoutDepartmentInput>
    upsert?: Enumerable<FacultyUpsertWithWhereUniqueWithoutDepartmentInput>
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    set?: Enumerable<FacultyWhereUniqueInput>
    disconnect?: Enumerable<FacultyWhereUniqueInput>
    delete?: Enumerable<FacultyWhereUniqueInput>
    connect?: Enumerable<FacultyWhereUniqueInput>
    update?: Enumerable<FacultyUpdateWithWhereUniqueWithoutDepartmentInput>
    updateMany?: Enumerable<FacultyUpdateManyWithWhereWithoutDepartmentInput>
    deleteMany?: Enumerable<FacultyScalarWhereInput>
  }

  export type MeetingCreateNestedManyWithoutFacultyInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutFacultyInput>, Enumerable<MeetingUncheckedCreateWithoutFacultyInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutFacultyInput>
    createMany?: MeetingCreateManyFacultyInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type DepartmentCreateNestedOneWithoutFacultyInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    connect?: DepartmentWhereUniqueInput
  }

  export type MeetingUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutFacultyInput>, Enumerable<MeetingUncheckedCreateWithoutFacultyInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutFacultyInput>
    createMany?: MeetingCreateManyFacultyInputEnvelope
    connect?: Enumerable<MeetingWhereUniqueInput>
  }

  export type MeetingUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutFacultyInput>, Enumerable<MeetingUncheckedCreateWithoutFacultyInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutFacultyInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutFacultyInput>
    createMany?: MeetingCreateManyFacultyInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutFacultyInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutFacultyInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type DepartmentUpdateOneRequiredWithoutFacultyNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    upsert?: DepartmentUpsertWithoutFacultyInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
  }

  export type MeetingUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<Enumerable<MeetingCreateWithoutFacultyInput>, Enumerable<MeetingUncheckedCreateWithoutFacultyInput>>
    connectOrCreate?: Enumerable<MeetingCreateOrConnectWithoutFacultyInput>
    upsert?: Enumerable<MeetingUpsertWithWhereUniqueWithoutFacultyInput>
    createMany?: MeetingCreateManyFacultyInputEnvelope
    set?: Enumerable<MeetingWhereUniqueInput>
    disconnect?: Enumerable<MeetingWhereUniqueInput>
    delete?: Enumerable<MeetingWhereUniqueInput>
    connect?: Enumerable<MeetingWhereUniqueInput>
    update?: Enumerable<MeetingUpdateWithWhereUniqueWithoutFacultyInput>
    updateMany?: Enumerable<MeetingUpdateManyWithWhereWithoutFacultyInput>
    deleteMany?: Enumerable<MeetingScalarWhereInput>
  }

  export type AdminCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AdminCreateWithoutScheduleInput, AdminUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AdminCreateOrConnectWithoutScheduleInput
    connect?: AdminWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<AdminCreateWithoutScheduleInput, AdminUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AdminCreateOrConnectWithoutScheduleInput
    upsert?: AdminUpsertWithoutScheduleInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutScheduleInput, AdminUncheckedUpdateWithoutScheduleInput>
  }

  export type AdminCreateNestedOneWithoutDayTimeInput = {
    create?: XOR<AdminCreateWithoutDayTimeInput, AdminUncheckedCreateWithoutDayTimeInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDayTimeInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutDayTimeNestedInput = {
    create?: XOR<AdminCreateWithoutDayTimeInput, AdminUncheckedCreateWithoutDayTimeInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDayTimeInput
    upsert?: AdminUpsertWithoutDayTimeInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutDayTimeInput, AdminUncheckedUpdateWithoutDayTimeInput>
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

  export type RequestedMeetingsCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutStudentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutStudentInput>
    createMany?: RequestedMeetingsCreateManyStudentInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
  }

  export type StudentInfoCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<StudentInfoCreateWithoutStudentInput>, Enumerable<StudentInfoUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentInfoCreateOrConnectWithoutStudentInput>
    createMany?: StudentInfoCreateManyStudentInputEnvelope
    connect?: Enumerable<StudentInfoWhereUniqueInput>
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

  export type RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutStudentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutStudentInput>
    createMany?: RequestedMeetingsCreateManyStudentInputEnvelope
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
  }

  export type StudentInfoUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<StudentInfoCreateWithoutStudentInput>, Enumerable<StudentInfoUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentInfoCreateOrConnectWithoutStudentInput>
    createMany?: StudentInfoCreateManyStudentInputEnvelope
    connect?: Enumerable<StudentInfoWhereUniqueInput>
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

  export type RequestedMeetingsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutStudentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: RequestedMeetingsCreateManyStudentInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
  }

  export type StudentInfoUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<StudentInfoCreateWithoutStudentInput>, Enumerable<StudentInfoUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentInfoCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<StudentInfoUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: StudentInfoCreateManyStudentInputEnvelope
    set?: Enumerable<StudentInfoWhereUniqueInput>
    disconnect?: Enumerable<StudentInfoWhereUniqueInput>
    delete?: Enumerable<StudentInfoWhereUniqueInput>
    connect?: Enumerable<StudentInfoWhereUniqueInput>
    update?: Enumerable<StudentInfoUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<StudentInfoUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<StudentInfoScalarWhereInput>
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

  export type RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<RequestedMeetingsCreateWithoutStudentInput>, Enumerable<RequestedMeetingsUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RequestedMeetingsCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<RequestedMeetingsUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: RequestedMeetingsCreateManyStudentInputEnvelope
    set?: Enumerable<RequestedMeetingsWhereUniqueInput>
    disconnect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    delete?: Enumerable<RequestedMeetingsWhereUniqueInput>
    connect?: Enumerable<RequestedMeetingsWhereUniqueInput>
    update?: Enumerable<RequestedMeetingsUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<RequestedMeetingsUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<RequestedMeetingsScalarWhereInput>
  }

  export type StudentInfoUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<StudentInfoCreateWithoutStudentInput>, Enumerable<StudentInfoUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<StudentInfoCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<StudentInfoUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: StudentInfoCreateManyStudentInputEnvelope
    set?: Enumerable<StudentInfoWhereUniqueInput>
    disconnect?: Enumerable<StudentInfoWhereUniqueInput>
    delete?: Enumerable<StudentInfoWhereUniqueInput>
    connect?: Enumerable<StudentInfoWhereUniqueInput>
    update?: Enumerable<StudentInfoUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<StudentInfoUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<StudentInfoScalarWhereInput>
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

  export type AdminCreateNestedOneWithoutRequestedMeetingsInput = {
    create?: XOR<AdminCreateWithoutRequestedMeetingsInput, AdminUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRequestedMeetingsInput
    connect?: AdminWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutRequestedMeetingsInput = {
    create?: XOR<ParentCreateWithoutRequestedMeetingsInput, ParentUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutRequestedMeetingsInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutRequestedMeetingsInput = {
    create?: XOR<StudentCreateWithoutRequestedMeetingsInput, StudentUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRequestedMeetingsInput
    connect?: StudentWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutRequestedMeetingsNestedInput = {
    create?: XOR<AdminCreateWithoutRequestedMeetingsInput, AdminUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRequestedMeetingsInput
    upsert?: AdminUpsertWithoutRequestedMeetingsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutRequestedMeetingsInput, AdminUncheckedUpdateWithoutRequestedMeetingsInput>
  }

  export type ParentUpdateOneRequiredWithoutRequestedMeetingsNestedInput = {
    create?: XOR<ParentCreateWithoutRequestedMeetingsInput, ParentUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: ParentCreateOrConnectWithoutRequestedMeetingsInput
    upsert?: ParentUpsertWithoutRequestedMeetingsInput
    connect?: ParentWhereUniqueInput
    update?: XOR<ParentUpdateWithoutRequestedMeetingsInput, ParentUncheckedUpdateWithoutRequestedMeetingsInput>
  }

  export type StudentUpdateOneRequiredWithoutRequestedMeetingsNestedInput = {
    create?: XOR<StudentCreateWithoutRequestedMeetingsInput, StudentUncheckedCreateWithoutRequestedMeetingsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRequestedMeetingsInput
    upsert?: StudentUpsertWithoutRequestedMeetingsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutRequestedMeetingsInput, StudentUncheckedUpdateWithoutRequestedMeetingsInput>
  }

  export type AdminCreateNestedOneWithoutMeetingInput = {
    create?: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMeetingInput
    connect?: AdminWhereUniqueInput
  }

  export type FacultyCreateNestedOneWithoutMeetingInput = {
    create?: XOR<FacultyCreateWithoutMeetingInput, FacultyUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutMeetingInput
    connect?: FacultyWhereUniqueInput
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

  export type AdminUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMeetingInput
    upsert?: AdminUpsertWithoutMeetingInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutMeetingInput, AdminUncheckedUpdateWithoutMeetingInput>
  }

  export type FacultyUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<FacultyCreateWithoutMeetingInput, FacultyUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutMeetingInput
    upsert?: FacultyUpsertWithoutMeetingInput
    disconnect?: boolean
    delete?: boolean
    connect?: FacultyWhereUniqueInput
    update?: XOR<FacultyUpdateWithoutMeetingInput, FacultyUncheckedUpdateWithoutMeetingInput>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type MeetingCreateWithoutParentInput = {
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Admin?: AdminCreateNestedOneWithoutMeetingInput
    Faculty?: FacultyCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutParentInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    studentId: number
    meetingStartTime: string
    meetingEndTime: string
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
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedManyWithoutStudentInput
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

  export type RequestedMeetingsCreateWithoutParentInput = {
    meetingReason: string
    Admin: AdminCreateNestedOneWithoutRequestedMeetingsInput
    Student: StudentCreateNestedOneWithoutRequestedMeetingsInput
  }

  export type RequestedMeetingsUncheckedCreateWithoutParentInput = {
    id?: number
    meetingReason: string
    studentId: number
    adminId: number
  }

  export type RequestedMeetingsCreateOrConnectWithoutParentInput = {
    where: RequestedMeetingsWhereUniqueInput
    create: XOR<RequestedMeetingsCreateWithoutParentInput, RequestedMeetingsUncheckedCreateWithoutParentInput>
  }

  export type RequestedMeetingsCreateManyParentInputEnvelope = {
    data: Enumerable<RequestedMeetingsCreateManyParentInput>
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
    meetingDay?: DateTimeFilter | Date | string
    meetingStatus?: BoolFilter | boolean
    meetingReason?: StringNullableFilter | string | null
    adminId?: IntNullableFilter | number | null
    facultyId?: IntNullableFilter | number | null
    studentId?: IntFilter | number
    parentId?: IntFilter | number
    meetingStartTime?: StringFilter | string
    meetingEndTime?: StringFilter | string
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

  export type RequestedMeetingsUpsertWithWhereUniqueWithoutParentInput = {
    where: RequestedMeetingsWhereUniqueInput
    update: XOR<RequestedMeetingsUpdateWithoutParentInput, RequestedMeetingsUncheckedUpdateWithoutParentInput>
    create: XOR<RequestedMeetingsCreateWithoutParentInput, RequestedMeetingsUncheckedCreateWithoutParentInput>
  }

  export type RequestedMeetingsUpdateWithWhereUniqueWithoutParentInput = {
    where: RequestedMeetingsWhereUniqueInput
    data: XOR<RequestedMeetingsUpdateWithoutParentInput, RequestedMeetingsUncheckedUpdateWithoutParentInput>
  }

  export type RequestedMeetingsUpdateManyWithWhereWithoutParentInput = {
    where: RequestedMeetingsScalarWhereInput
    data: XOR<RequestedMeetingsUpdateManyMutationInput, RequestedMeetingsUncheckedUpdateManyWithoutRequestedMeetingsInput>
  }

  export type RequestedMeetingsScalarWhereInput = {
    AND?: Enumerable<RequestedMeetingsScalarWhereInput>
    OR?: Enumerable<RequestedMeetingsScalarWhereInput>
    NOT?: Enumerable<RequestedMeetingsScalarWhereInput>
    id?: IntFilter | number
    meetingReason?: StringFilter | string
    parentId?: IntFilter | number
    studentId?: IntFilter | number
    adminId?: IntFilter | number
  }

  export type MeetingCreateWithoutAdminInput = {
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Faculty?: FacultyCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutAdminInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    facultyId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
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

  export type ScheduleCreateWithoutAdminInput = {
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
  }

  export type ScheduleUncheckedCreateWithoutAdminInput = {
    id?: number
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
  }

  export type ScheduleCreateOrConnectWithoutAdminInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutAdminInput, ScheduleUncheckedCreateWithoutAdminInput>
  }

  export type ScheduleCreateManyAdminInputEnvelope = {
    data: Enumerable<ScheduleCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type RequestedMeetingsCreateWithoutAdminInput = {
    meetingReason: string
    Parent: ParentCreateNestedOneWithoutRequestedMeetingsInput
    Student: StudentCreateNestedOneWithoutRequestedMeetingsInput
  }

  export type RequestedMeetingsUncheckedCreateWithoutAdminInput = {
    id?: number
    meetingReason: string
    parentId: number
    studentId: number
  }

  export type RequestedMeetingsCreateOrConnectWithoutAdminInput = {
    where: RequestedMeetingsWhereUniqueInput
    create: XOR<RequestedMeetingsCreateWithoutAdminInput, RequestedMeetingsUncheckedCreateWithoutAdminInput>
  }

  export type RequestedMeetingsCreateManyAdminInputEnvelope = {
    data: Enumerable<RequestedMeetingsCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type DayTimeCreateWithoutAdminInput = {
    day: number
    startTime: Date | string
    endTime: Date | string
  }

  export type DayTimeUncheckedCreateWithoutAdminInput = {
    id?: number
    day: number
    startTime: Date | string
    endTime: Date | string
  }

  export type DayTimeCreateOrConnectWithoutAdminInput = {
    where: DayTimeWhereUniqueInput
    create: XOR<DayTimeCreateWithoutAdminInput, DayTimeUncheckedCreateWithoutAdminInput>
  }

  export type DayTimeCreateManyAdminInputEnvelope = {
    data: Enumerable<DayTimeCreateManyAdminInput>
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

  export type ScheduleUpsertWithWhereUniqueWithoutAdminInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutAdminInput, ScheduleUncheckedUpdateWithoutAdminInput>
    create: XOR<ScheduleCreateWithoutAdminInput, ScheduleUncheckedCreateWithoutAdminInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutAdminInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutAdminInput, ScheduleUncheckedUpdateWithoutAdminInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutAdminInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: Enumerable<ScheduleScalarWhereInput>
    OR?: Enumerable<ScheduleScalarWhereInput>
    NOT?: Enumerable<ScheduleScalarWhereInput>
    id?: IntFilter | number
    day?: IntFilter | number
    start?: DateTimeFilter | Date | string
    end?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    EndTime?: DateTimeFilter | Date | string
    adminId?: IntFilter | number
  }

  export type RequestedMeetingsUpsertWithWhereUniqueWithoutAdminInput = {
    where: RequestedMeetingsWhereUniqueInput
    update: XOR<RequestedMeetingsUpdateWithoutAdminInput, RequestedMeetingsUncheckedUpdateWithoutAdminInput>
    create: XOR<RequestedMeetingsCreateWithoutAdminInput, RequestedMeetingsUncheckedCreateWithoutAdminInput>
  }

  export type RequestedMeetingsUpdateWithWhereUniqueWithoutAdminInput = {
    where: RequestedMeetingsWhereUniqueInput
    data: XOR<RequestedMeetingsUpdateWithoutAdminInput, RequestedMeetingsUncheckedUpdateWithoutAdminInput>
  }

  export type RequestedMeetingsUpdateManyWithWhereWithoutAdminInput = {
    where: RequestedMeetingsScalarWhereInput
    data: XOR<RequestedMeetingsUpdateManyMutationInput, RequestedMeetingsUncheckedUpdateManyWithoutRequestedMeetingsInput>
  }

  export type DayTimeUpsertWithWhereUniqueWithoutAdminInput = {
    where: DayTimeWhereUniqueInput
    update: XOR<DayTimeUpdateWithoutAdminInput, DayTimeUncheckedUpdateWithoutAdminInput>
    create: XOR<DayTimeCreateWithoutAdminInput, DayTimeUncheckedCreateWithoutAdminInput>
  }

  export type DayTimeUpdateWithWhereUniqueWithoutAdminInput = {
    where: DayTimeWhereUniqueInput
    data: XOR<DayTimeUpdateWithoutAdminInput, DayTimeUncheckedUpdateWithoutAdminInput>
  }

  export type DayTimeUpdateManyWithWhereWithoutAdminInput = {
    where: DayTimeScalarWhereInput
    data: XOR<DayTimeUpdateManyMutationInput, DayTimeUncheckedUpdateManyWithoutDayTimeInput>
  }

  export type DayTimeScalarWhereInput = {
    AND?: Enumerable<DayTimeScalarWhereInput>
    OR?: Enumerable<DayTimeScalarWhereInput>
    NOT?: Enumerable<DayTimeScalarWhereInput>
    id?: IntFilter | number
    day?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    adminId?: IntFilter | number
  }

  export type FacultyCreateWithoutDepartmentInput = {
    userName: string
    Meeting?: MeetingCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutDepartmentInput = {
    id?: number
    userName: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyCreateManyDepartmentInputEnvelope = {
    data: Enumerable<FacultyCreateManyDepartmentInput>
    skipDuplicates?: boolean
  }

  export type FacultyUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    update: XOR<FacultyUpdateWithoutDepartmentInput, FacultyUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    data: XOR<FacultyUpdateWithoutDepartmentInput, FacultyUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultyUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultyScalarWhereInput
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyScalarWhereInput = {
    AND?: Enumerable<FacultyScalarWhereInput>
    OR?: Enumerable<FacultyScalarWhereInput>
    NOT?: Enumerable<FacultyScalarWhereInput>
    id?: IntFilter | number
    userName?: StringFilter | string
    departmentId?: IntFilter | number
  }

  export type MeetingCreateWithoutFacultyInput = {
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Admin?: AdminCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutFacultyInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutFacultyInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutFacultyInput, MeetingUncheckedCreateWithoutFacultyInput>
  }

  export type MeetingCreateManyFacultyInputEnvelope = {
    data: Enumerable<MeetingCreateManyFacultyInput>
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutFacultyInput = {
    departmentName: string
  }

  export type DepartmentUncheckedCreateWithoutFacultyInput = {
    id?: number
    departmentName: string
  }

  export type DepartmentCreateOrConnectWithoutFacultyInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutFacultyInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutFacultyInput, MeetingUncheckedUpdateWithoutFacultyInput>
    create: XOR<MeetingCreateWithoutFacultyInput, MeetingUncheckedCreateWithoutFacultyInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutFacultyInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutFacultyInput, MeetingUncheckedUpdateWithoutFacultyInput>
  }

  export type MeetingUpdateManyWithWhereWithoutFacultyInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type DepartmentUpsertWithoutFacultyInput = {
    update: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
  }

  export type DepartmentUpdateWithoutFacultyInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateWithoutScheduleInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutScheduleInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingUncheckedCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutScheduleInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutScheduleInput, AdminUncheckedCreateWithoutScheduleInput>
  }

  export type AdminUpsertWithoutScheduleInput = {
    update: XOR<AdminUpdateWithoutScheduleInput, AdminUncheckedUpdateWithoutScheduleInput>
    create: XOR<AdminCreateWithoutScheduleInput, AdminUncheckedCreateWithoutScheduleInput>
  }

  export type AdminUpdateWithoutScheduleInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUncheckedUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutDayTimeInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingCreateNestedManyWithoutAdminInput
    Schedule?: ScheduleCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutDayTimeInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingUncheckedCreateNestedManyWithoutAdminInput
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutDayTimeInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutDayTimeInput, AdminUncheckedCreateWithoutDayTimeInput>
  }

  export type AdminUpsertWithoutDayTimeInput = {
    update: XOR<AdminUpdateWithoutDayTimeInput, AdminUncheckedUpdateWithoutDayTimeInput>
    create: XOR<AdminCreateWithoutDayTimeInput, AdminUncheckedCreateWithoutDayTimeInput>
  }

  export type AdminUpdateWithoutDayTimeInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
    Schedule?: ScheduleUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutDayTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUncheckedUpdateManyWithoutAdminNestedInput
    Schedule?: ScheduleUncheckedUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ParentCreateWithoutStudentInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingCreateNestedManyWithoutParentInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutStudentInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutParentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutStudentInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
  }

  export type MeetingCreateWithoutStudentInput = {
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Admin?: AdminCreateNestedOneWithoutMeetingInput
    Faculty?: FacultyCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Feedback?: FeedbackCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutStudentInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
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

  export type RequestedMeetingsCreateWithoutStudentInput = {
    meetingReason: string
    Admin: AdminCreateNestedOneWithoutRequestedMeetingsInput
    Parent: ParentCreateNestedOneWithoutRequestedMeetingsInput
  }

  export type RequestedMeetingsUncheckedCreateWithoutStudentInput = {
    id?: number
    meetingReason: string
    parentId: number
    adminId: number
  }

  export type RequestedMeetingsCreateOrConnectWithoutStudentInput = {
    where: RequestedMeetingsWhereUniqueInput
    create: XOR<RequestedMeetingsCreateWithoutStudentInput, RequestedMeetingsUncheckedCreateWithoutStudentInput>
  }

  export type RequestedMeetingsCreateManyStudentInputEnvelope = {
    data: Enumerable<RequestedMeetingsCreateManyStudentInput>
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

  export type StudentInfoCreateManyStudentInputEnvelope = {
    data: Enumerable<StudentInfoCreateManyStudentInput>
    skipDuplicates?: boolean
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
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutParentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutParentNestedInput
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

  export type RequestedMeetingsUpsertWithWhereUniqueWithoutStudentInput = {
    where: RequestedMeetingsWhereUniqueInput
    update: XOR<RequestedMeetingsUpdateWithoutStudentInput, RequestedMeetingsUncheckedUpdateWithoutStudentInput>
    create: XOR<RequestedMeetingsCreateWithoutStudentInput, RequestedMeetingsUncheckedCreateWithoutStudentInput>
  }

  export type RequestedMeetingsUpdateWithWhereUniqueWithoutStudentInput = {
    where: RequestedMeetingsWhereUniqueInput
    data: XOR<RequestedMeetingsUpdateWithoutStudentInput, RequestedMeetingsUncheckedUpdateWithoutStudentInput>
  }

  export type RequestedMeetingsUpdateManyWithWhereWithoutStudentInput = {
    where: RequestedMeetingsScalarWhereInput
    data: XOR<RequestedMeetingsUpdateManyMutationInput, RequestedMeetingsUncheckedUpdateManyWithoutRequestedMeetingsInput>
  }

  export type StudentInfoUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentInfoWhereUniqueInput
    update: XOR<StudentInfoUpdateWithoutStudentInput, StudentInfoUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentInfoCreateWithoutStudentInput, StudentInfoUncheckedCreateWithoutStudentInput>
  }

  export type StudentInfoUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentInfoWhereUniqueInput
    data: XOR<StudentInfoUpdateWithoutStudentInput, StudentInfoUncheckedUpdateWithoutStudentInput>
  }

  export type StudentInfoUpdateManyWithWhereWithoutStudentInput = {
    where: StudentInfoScalarWhereInput
    data: XOR<StudentInfoUpdateManyMutationInput, StudentInfoUncheckedUpdateManyWithoutStudentInfoInput>
  }

  export type StudentInfoScalarWhereInput = {
    AND?: Enumerable<StudentInfoScalarWhereInput>
    OR?: Enumerable<StudentInfoScalarWhereInput>
    NOT?: Enumerable<StudentInfoScalarWhereInput>
    infoCgpa?: FloatFilter | number
    infoAttendance?: BoolFilter | boolean
    studentId?: IntFilter | number
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
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentInfoInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput
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
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutSubjectInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedManyWithoutStudentInput
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
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminCreateWithoutRequestedMeetingsInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingCreateNestedManyWithoutAdminInput
    Schedule?: ScheduleCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutRequestedMeetingsInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Meeting?: MeetingUncheckedCreateNestedManyWithoutAdminInput
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutRequestedMeetingsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRequestedMeetingsInput, AdminUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type ParentCreateWithoutRequestedMeetingsInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingCreateNestedManyWithoutParentInput
    Student?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutRequestedMeetingsInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Meeting?: MeetingUncheckedCreateNestedManyWithoutParentInput
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutRequestedMeetingsInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutRequestedMeetingsInput, ParentUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type StudentCreateWithoutRequestedMeetingsInput = {
    studentRegNo: string
    studentName: string
    studentPassword: string
    Parent: ParentCreateNestedOneWithoutStudentInput
    Meeting?: MeetingCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRequestedMeetingsInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    Meeting?: MeetingUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedManyWithoutStudentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRequestedMeetingsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRequestedMeetingsInput, StudentUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type AdminUpsertWithoutRequestedMeetingsInput = {
    update: XOR<AdminUpdateWithoutRequestedMeetingsInput, AdminUncheckedUpdateWithoutRequestedMeetingsInput>
    create: XOR<AdminCreateWithoutRequestedMeetingsInput, AdminUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type AdminUpdateWithoutRequestedMeetingsInput = {
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUpdateManyWithoutAdminNestedInput
    Schedule?: ScheduleUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutRequestedMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Meeting?: MeetingUncheckedUpdateManyWithoutAdminNestedInput
    Schedule?: ScheduleUncheckedUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ParentUpsertWithoutRequestedMeetingsInput = {
    update: XOR<ParentUpdateWithoutRequestedMeetingsInput, ParentUncheckedUpdateWithoutRequestedMeetingsInput>
    create: XOR<ParentCreateWithoutRequestedMeetingsInput, ParentUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type ParentUpdateWithoutRequestedMeetingsInput = {
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutParentNestedInput
    Student?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutRequestedMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutParentNestedInput
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentUpsertWithoutRequestedMeetingsInput = {
    update: XOR<StudentUpdateWithoutRequestedMeetingsInput, StudentUncheckedUpdateWithoutRequestedMeetingsInput>
    create: XOR<StudentCreateWithoutRequestedMeetingsInput, StudentUncheckedCreateWithoutRequestedMeetingsInput>
  }

  export type StudentUpdateWithoutRequestedMeetingsInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRequestedMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminCreateWithoutMeetingInput = {
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Schedule?: ScheduleCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMeetingInput = {
    id?: number
    adminName: string
    adminPassword: string
    adminGender: string
    adminCnic: string
    adminEmail: string
    adminDesignation?: string | null
    Schedule?: ScheduleUncheckedCreateNestedManyWithoutAdminInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutAdminInput
    DayTime?: DayTimeUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMeetingInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMeetingInput, AdminUncheckedCreateWithoutMeetingInput>
  }

  export type FacultyCreateWithoutMeetingInput = {
    userName: string
    Department: DepartmentCreateNestedOneWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutMeetingInput = {
    id?: number
    userName: string
    departmentId: number
  }

  export type FacultyCreateOrConnectWithoutMeetingInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutMeetingInput, FacultyUncheckedCreateWithoutMeetingInput>
  }

  export type ParentCreateWithoutMeetingInput = {
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Student?: StudentCreateNestedManyWithoutParentInput
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutMeetingInput = {
    id?: number
    parentEmail: string
    parentName: string
    parentCnic: string
    parentPhone: string
    parentPassword: string
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutParentInput
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
    RequestedMeetings?: RequestedMeetingsCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoCreateNestedManyWithoutStudentInput
    Subject?: SubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMeetingInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
    parentId: number
    RequestedMeetings?: RequestedMeetingsUncheckedCreateNestedManyWithoutStudentInput
    StudentInfo?: StudentInfoUncheckedCreateNestedManyWithoutStudentInput
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
    Schedule?: ScheduleUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminName?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    adminGender?: StringFieldUpdateOperationsInput | string
    adminCnic?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    Schedule?: ScheduleUncheckedUpdateManyWithoutAdminNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutAdminNestedInput
    DayTime?: DayTimeUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type FacultyUpsertWithoutMeetingInput = {
    update: XOR<FacultyUpdateWithoutMeetingInput, FacultyUncheckedUpdateWithoutMeetingInput>
    create: XOR<FacultyCreateWithoutMeetingInput, FacultyUncheckedCreateWithoutMeetingInput>
  }

  export type FacultyUpdateWithoutMeetingInput = {
    userName?: StringFieldUpdateOperationsInput | string
    Department?: DepartmentUpdateOneRequiredWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
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
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentEmail?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    parentCnic?: StringFieldUpdateOperationsInput | string
    parentPhone?: StringFieldUpdateOperationsInput | string
    parentPassword?: StringFieldUpdateOperationsInput | string
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutParentNestedInput
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
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateManyWithoutStudentNestedInput
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
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    meetingStartTime: string
    meetingEndTime: string
    Admin?: AdminCreateNestedOneWithoutMeetingInput
    Faculty?: FacultyCreateNestedOneWithoutMeetingInput
    Parent: ParentCreateNestedOneWithoutMeetingInput
    Student: StudentCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutFeedbackInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
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
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutMeetingNestedInput
    Faculty?: FacultyUpdateOneWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyParentInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    studentId: number
    meetingStartTime: string
    meetingEndTime: string
  }

  export type StudentCreateManyParentInput = {
    id?: number
    studentRegNo: string
    studentName: string
    studentPassword: string
  }

  export type RequestedMeetingsCreateManyParentInput = {
    id?: number
    meetingReason: string
    studentId: number
    adminId: number
  }

  export type MeetingUpdateWithoutParentInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutMeetingNestedInput
    Faculty?: FacultyUpdateOneWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutParentInput = {
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutStudentNestedInput
    RequestedMeetings?: RequestedMeetingsUncheckedUpdateManyWithoutStudentNestedInput
    StudentInfo?: StudentInfoUncheckedUpdateManyWithoutStudentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRegNo?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassword?: StringFieldUpdateOperationsInput | string
  }

  export type RequestedMeetingsUpdateWithoutParentInput = {
    meetingReason?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneRequiredWithoutRequestedMeetingsNestedInput
    Student?: StudentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
  }

  export type RequestedMeetingsUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestedMeetingsUncheckedUpdateManyWithoutRequestedMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingCreateManyAdminInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    facultyId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
  }

  export type ScheduleCreateManyAdminInput = {
    id?: number
    day: number
    start: Date | string
    end: Date | string
    startTime: Date | string
    EndTime: Date | string
  }

  export type RequestedMeetingsCreateManyAdminInput = {
    id?: number
    meetingReason: string
    parentId: number
    studentId: number
  }

  export type DayTimeCreateManyAdminInput = {
    id?: number
    day: number
    startTime: Date | string
    endTime: Date | string
  }

  export type MeetingUpdateWithoutAdminInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUpdateOneWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type ScheduleUpdateWithoutAdminInput = {
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestedMeetingsUpdateWithoutAdminInput = {
    meetingReason?: StringFieldUpdateOperationsInput | string
    Parent?: ParentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
    Student?: StudentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
  }

  export type RequestedMeetingsUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type DayTimeUpdateWithoutAdminInput = {
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayTimeUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayTimeUncheckedUpdateManyWithoutDayTimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyCreateManyDepartmentInput = {
    id?: number
    userName: string
  }

  export type FacultyUpdateWithoutDepartmentInput = {
    userName?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    Meeting?: MeetingUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateManyWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateManyFacultyInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    studentId: number
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
  }

  export type MeetingUpdateWithoutFacultyInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Student?: StudentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    studentId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyStudentInput = {
    id?: number
    meetingDay: Date | string
    meetingStatus: boolean
    meetingReason?: string | null
    adminId?: number | null
    facultyId?: number | null
    parentId: number
    meetingStartTime: string
    meetingEndTime: string
  }

  export type RequestedMeetingsCreateManyStudentInput = {
    id?: number
    meetingReason: string
    parentId: number
    adminId: number
  }

  export type StudentInfoCreateManyStudentInput = {
    infoCgpa: number
    infoAttendance: boolean
  }

  export type SubjectCreateManyStudentInput = {
    subjectName: string
  }

  export type MeetingUpdateWithoutStudentInput = {
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneWithoutMeetingNestedInput
    Faculty?: FacultyUpdateOneWithoutMeetingNestedInput
    Parent?: ParentUpdateOneRequiredWithoutMeetingNestedInput
    Feedback?: FeedbackUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingStatus?: BoolFieldUpdateOperationsInput | boolean
    meetingReason?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    facultyId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: IntFieldUpdateOperationsInput | number
    meetingStartTime?: StringFieldUpdateOperationsInput | string
    meetingEndTime?: StringFieldUpdateOperationsInput | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type RequestedMeetingsUpdateWithoutStudentInput = {
    meetingReason?: StringFieldUpdateOperationsInput | string
    Admin?: AdminUpdateOneRequiredWithoutRequestedMeetingsNestedInput
    Parent?: ParentUpdateOneRequiredWithoutRequestedMeetingsNestedInput
  }

  export type RequestedMeetingsUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetingReason?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentInfoUpdateWithoutStudentInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentInfoUncheckedUpdateWithoutStudentInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentInfoUncheckedUpdateManyWithoutStudentInfoInput = {
    infoCgpa?: FloatFieldUpdateOperationsInput | number
    infoAttendance?: BoolFieldUpdateOperationsInput | boolean
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
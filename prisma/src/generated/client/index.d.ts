
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model parent
 * 
 */
export type parent = {
  cnic: string
  firstName: string
  lastName: string
  email: string
  address: string
}

/**
 * Model admin
 * 
 */
export type admin = {
  cnic: string
  firstName: string
  lastName: string
  email: string
  gender: string
  phone: string
  role: string
  desgination: string
  generalavail: boolean | null
}

/**
 * Model timeslot
 * 
 */
export type timeslot = {
  tsid: number
  startTime: Date
  endTime: Date
  availibility: boolean
  adminId: string
  day: string | null
}

/**
 * Model student
 * 
 */
export type student = {
  regNo: string
  firstName: string
  lastName: string
  email: string
  gender: string
  birthdate: Date
  studentCnic: string
  class: string
  section: string
  parentId: string | null
}

/**
 * Model attendance
 * 
 */
export type attendance = {
  sid: number
  subject: string
  percentage: number
  regNo: string
}

/**
 * Model cgpa
 * 
 */
export type cgpa = {
  id: number
  cgpa: number
  regNo: string
}

/**
 * Model disciplinary
 * 
 */
export type disciplinary = {
  id: number
  actions: string
  regNo: string
}

/**
 * Model failedsubject
 * 
 */
export type failedsubject = {
  id: number
  semester: string
  subject: string
  grade: string
  regNo: string
}

/**
 * Model meeting
 * 
 */
export type meeting = {
  mid: number
  reason: string
  status: string
  referedTo: string
  tsid: number
  regNo: string
  adminId: string
  parentId: string
  date: Date
}

/**
 * Model waitinglist
 * 
 */
export type waitinglist = {
  id: number
  reason: string
  date: Date
  tsid: number
  regNo: string
  adminId: string
  parentId: string
  status: string | null
}

/**
 * Model history
 * 
 */
export type history = {
  hid: number
  date: Date
  startTime: Date
  endTime: Date
  reason: string
  status: Status
  referedTo: string
  regNo: string
  adminId: string
  parentId: string
  adminFeedback: string | null
  suggestion: string | null
}

/**
 * Model userlogin
 * 
 */
export type userlogin = {
  id: number
  userName: string
  password: string
  email: string
  role: Role
  regNo: string | null
  adminId: string | null
  parentId: string | null
}

/**
 * Model feedback
 * 
 */
export type feedback = {
  attentive: number | null
  polite: number | null
  rude: number | null
  suggestion: string
  hid: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  Admin: 'Admin',
  Parent: 'Parent',
  Student: 'Student',
  Director: 'Director'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  held: 'held',
  pending: 'pending',
  completed: 'completed'
};

export type Status = (typeof Status)[keyof typeof Status]


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
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.parent`: Exposes CRUD operations for the **parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.parentDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<GlobalReject>;

  /**
   * `prisma.timeslot`: Exposes CRUD operations for the **timeslot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timeslots
    * const timeslots = await prisma.timeslot.findMany()
    * ```
    */
  get timeslot(): Prisma.timeslotDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<GlobalReject>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<GlobalReject>;

  /**
   * `prisma.cgpa`: Exposes CRUD operations for the **cgpa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cgpas
    * const cgpas = await prisma.cgpa.findMany()
    * ```
    */
  get cgpa(): Prisma.cgpaDelegate<GlobalReject>;

  /**
   * `prisma.disciplinary`: Exposes CRUD operations for the **disciplinary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinaries
    * const disciplinaries = await prisma.disciplinary.findMany()
    * ```
    */
  get disciplinary(): Prisma.disciplinaryDelegate<GlobalReject>;

  /**
   * `prisma.failedsubject`: Exposes CRUD operations for the **failedsubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failedsubjects
    * const failedsubjects = await prisma.failedsubject.findMany()
    * ```
    */
  get failedsubject(): Prisma.failedsubjectDelegate<GlobalReject>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.meetingDelegate<GlobalReject>;

  /**
   * `prisma.waitinglist`: Exposes CRUD operations for the **waitinglist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waitinglists
    * const waitinglists = await prisma.waitinglist.findMany()
    * ```
    */
  get waitinglist(): Prisma.waitinglistDelegate<GlobalReject>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.historyDelegate<GlobalReject>;

  /**
   * `prisma.userlogin`: Exposes CRUD operations for the **userlogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userlogins
    * const userlogins = await prisma.userlogin.findMany()
    * ```
    */
  get userlogin(): Prisma.userloginDelegate<GlobalReject>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<GlobalReject>;
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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

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
    parent: 'parent',
    admin: 'admin',
    timeslot: 'timeslot',
    student: 'student',
    attendance: 'attendance',
    cgpa: 'cgpa',
    disciplinary: 'disciplinary',
    failedsubject: 'failedsubject',
    meeting: 'meeting',
    waitinglist: 'waitinglist',
    history: 'history',
    userlogin: 'userlogin',
    feedback: 'feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    history: number
    meeting: number
    waitinglist: number
  }

  export type ParentCountOutputTypeSelect = {
    history?: boolean | ParentCountOutputTypeCountHistoryArgs
    meeting?: boolean | ParentCountOutputTypeCountMeetingArgs
    waitinglist?: boolean | ParentCountOutputTypeCountWaitinglistArgs
  }

  export type ParentCountOutputTypeGetPayload<S extends boolean | null | undefined | ParentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ParentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ParentCountOutputTypeArgs)
    ? ParentCountOutputType 
    : S extends { select: any } & (ParentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ParentCountOutputType ? ParentCountOutputType[P] : never
  } 
      : ParentCountOutputType




  // Custom InputTypes

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect | null
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountHistoryArgs = {
    where?: historyWhereInput
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountMeetingArgs = {
    where?: meetingWhereInput
  }


  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountWaitinglistArgs = {
    where?: waitinglistWhereInput
  }



  /**
   * Count Type AdminCountOutputType
   */


  export type AdminCountOutputType = {
    history: number
    meeting: number
    timeslot: number
    waitinglist: number
  }

  export type AdminCountOutputTypeSelect = {
    history?: boolean | AdminCountOutputTypeCountHistoryArgs
    meeting?: boolean | AdminCountOutputTypeCountMeetingArgs
    timeslot?: boolean | AdminCountOutputTypeCountTimeslotArgs
    waitinglist?: boolean | AdminCountOutputTypeCountWaitinglistArgs
  }

  export type AdminCountOutputTypeGetPayload<S extends boolean | null | undefined | AdminCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AdminCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AdminCountOutputTypeArgs)
    ? AdminCountOutputType 
    : S extends { select: any } & (AdminCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AdminCountOutputType ? AdminCountOutputType[P] : never
  } 
      : AdminCountOutputType




  // Custom InputTypes

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect | null
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountHistoryArgs = {
    where?: historyWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMeetingArgs = {
    where?: meetingWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTimeslotArgs = {
    where?: timeslotWhereInput
  }


  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWaitinglistArgs = {
    where?: waitinglistWhereInput
  }



  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    attendance: number
    disciplinary: number
    failedsubject: number
    history: number
    meeting: number
    waiinglist: number
  }

  export type StudentCountOutputTypeSelect = {
    attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    disciplinary?: boolean | StudentCountOutputTypeCountDisciplinaryArgs
    failedsubject?: boolean | StudentCountOutputTypeCountFailedsubjectArgs
    history?: boolean | StudentCountOutputTypeCountHistoryArgs
    meeting?: boolean | StudentCountOutputTypeCountMeetingArgs
    waiinglist?: boolean | StudentCountOutputTypeCountWaiinglistArgs
  }

  export type StudentCountOutputTypeGetPayload<S extends boolean | null | undefined | StudentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudentCountOutputTypeArgs)
    ? StudentCountOutputType 
    : S extends { select: any } & (StudentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudentCountOutputType ? StudentCountOutputType[P] : never
  } 
      : StudentCountOutputType




  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs = {
    where?: attendanceWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDisciplinaryArgs = {
    where?: disciplinaryWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFailedsubjectArgs = {
    where?: failedsubjectWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountHistoryArgs = {
    where?: historyWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMeetingArgs = {
    where?: meetingWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountWaiinglistArgs = {
    where?: waitinglistWhereInput
  }



  /**
   * Models
   */

  /**
   * Model parent
   */


  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentMinAggregateOutputType = {
    cnic: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    address: string | null
  }

  export type ParentMaxAggregateOutputType = {
    cnic: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    address: string | null
  }

  export type ParentCountAggregateOutputType = {
    cnic: number
    firstName: number
    lastName: number
    email: number
    address: number
    _all: number
  }


  export type ParentMinAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    address?: true
  }

  export type ParentMaxAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    address?: true
  }

  export type ParentCountAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    address?: true
    _all?: true
  }

  export type ParentAggregateArgs = {
    /**
     * Filter which parent to aggregate.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: Enumerable<parentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parents
    **/
    _count?: true | ParentCountAggregateInputType
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
    where?: parentWhereInput
    orderBy?: Enumerable<parentOrderByWithAggregationInput>
    by: ParentScalarFieldEnum[]
    having?: parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }


  export type ParentGroupByOutputType = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    _count: ParentCountAggregateOutputType | null
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


  export type parentSelect = {
    cnic?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    address?: boolean
    history?: boolean | parent$historyArgs
    meeting?: boolean | parent$meetingArgs
    userlogin?: boolean | userloginArgs
    waitinglist?: boolean | parent$waitinglistArgs
    _count?: boolean | ParentCountOutputTypeArgs
  }


  export type parentInclude = {
    history?: boolean | parent$historyArgs
    meeting?: boolean | parent$meetingArgs
    userlogin?: boolean | userloginArgs
    waitinglist?: boolean | parent$waitinglistArgs
    _count?: boolean | ParentCountOutputTypeArgs
  }

  export type parentGetPayload<S extends boolean | null | undefined | parentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? parent :
    S extends undefined ? never :
    S extends { include: any } & (parentArgs | parentFindManyArgs)
    ? parent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? Array < historyGetPayload<S['include'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['include'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['include'][P]> | null :
        P extends 'waitinglist' ? Array < waitinglistGetPayload<S['include'][P]>>  :
        P extends '_count' ? ParentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (parentArgs | parentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? Array < historyGetPayload<S['select'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['select'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['select'][P]> | null :
        P extends 'waitinglist' ? Array < waitinglistGetPayload<S['select'][P]>>  :
        P extends '_count' ? ParentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof parent ? parent[P] : never
  } 
      : parent


  type parentCountArgs = 
    Omit<parentFindManyArgs, 'select' | 'include'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface parentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Parent that matches the filter.
     * @param {parentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, parentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'parent'> extends True ? Prisma__parentClient<parentGetPayload<T>> : Prisma__parentClient<parentGetPayload<T> | null, null>

    /**
     * Find one Parent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, parentFindUniqueOrThrowArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, parentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'parent'> extends True ? Prisma__parentClient<parentGetPayload<T>> : Prisma__parentClient<parentGetPayload<T> | null, null>

    /**
     * Find the first Parent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, parentFindFirstOrThrowArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `cnic`
     * const parentWithCnicOnly = await prisma.parent.findMany({ select: { cnic: true } })
     * 
    **/
    findMany<T extends parentFindManyArgs>(
      args?: SelectSubset<T, parentFindManyArgs>
    ): PrismaPromise<Array<parentGetPayload<T>>>

    /**
     * Create a Parent.
     * @param {parentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
    **/
    create<T extends parentCreateArgs>(
      args: SelectSubset<T, parentCreateArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Create many Parents.
     *     @param {parentCreateManyArgs} args - Arguments to create many Parents.
     *     @example
     *     // Create many Parents
     *     const parent = await prisma.parent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parentCreateManyArgs>(
      args?: SelectSubset<T, parentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parent.
     * @param {parentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
    **/
    delete<T extends parentDeleteArgs>(
      args: SelectSubset<T, parentDeleteArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Update one Parent.
     * @param {parentUpdateArgs} args - Arguments to update one Parent.
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
    update<T extends parentUpdateArgs>(
      args: SelectSubset<T, parentUpdateArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Delete zero or more Parents.
     * @param {parentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parentDeleteManyArgs>(
      args?: SelectSubset<T, parentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends parentUpdateManyArgs>(
      args: SelectSubset<T, parentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {parentUpsertArgs} args - Arguments to update or create a Parent.
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
    upsert<T extends parentUpsertArgs>(
      args: SelectSubset<T, parentUpsertArgs>
    ): Prisma__parentClient<parentGetPayload<T>>

    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends parentCountArgs>(
      args?: Subset<T, parentCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__parentClient<T, Null = never> implements PrismaPromise<T> {
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

    history<T extends parent$historyArgs= {}>(args?: Subset<T, parent$historyArgs>): PrismaPromise<Array<historyGetPayload<T>>| Null>;

    meeting<T extends parent$meetingArgs= {}>(args?: Subset<T, parent$meetingArgs>): PrismaPromise<Array<meetingGetPayload<T>>| Null>;

    userlogin<T extends userloginArgs= {}>(args?: Subset<T, userloginArgs>): Prisma__userloginClient<userloginGetPayload<T> | Null>;

    waitinglist<T extends parent$waitinglistArgs= {}>(args?: Subset<T, parent$waitinglistArgs>): PrismaPromise<Array<waitinglistGetPayload<T>>| Null>;

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
   * parent base type for findUnique actions
   */
  export type parentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput
  }

  /**
   * parent findUnique
   */
  export interface parentFindUniqueArgs extends parentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parent findUniqueOrThrow
   */
  export type parentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput
  }


  /**
   * parent base type for findFirst actions
   */
  export type parentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: Enumerable<parentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parents.
     */
    distinct?: Enumerable<ParentScalarFieldEnum>
  }

  /**
   * parent findFirst
   */
  export interface parentFindFirstArgs extends parentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parent findFirstOrThrow
   */
  export type parentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: Enumerable<parentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parents.
     */
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * parent findMany
   */
  export type parentFindManyArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter, which parents to fetch.
     */
    where?: parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parents to fetch.
     */
    orderBy?: Enumerable<parentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parents.
     */
    cursor?: parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parents.
     */
    skip?: number
    distinct?: Enumerable<ParentScalarFieldEnum>
  }


  /**
   * parent create
   */
  export type parentCreateArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * The data needed to create a parent.
     */
    data: XOR<parentCreateInput, parentUncheckedCreateInput>
  }


  /**
   * parent createMany
   */
  export type parentCreateManyArgs = {
    /**
     * The data used to create many parents.
     */
    data: Enumerable<parentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * parent update
   */
  export type parentUpdateArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * The data needed to update a parent.
     */
    data: XOR<parentUpdateInput, parentUncheckedUpdateInput>
    /**
     * Choose, which parent to update.
     */
    where: parentWhereUniqueInput
  }


  /**
   * parent updateMany
   */
  export type parentUpdateManyArgs = {
    /**
     * The data used to update parents.
     */
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyInput>
    /**
     * Filter which parents to update
     */
    where?: parentWhereInput
  }


  /**
   * parent upsert
   */
  export type parentUpsertArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * The filter to search for the parent to update in case it exists.
     */
    where: parentWhereUniqueInput
    /**
     * In case the parent found by the `where` argument doesn't exist, create a new parent with this data.
     */
    create: XOR<parentCreateInput, parentUncheckedCreateInput>
    /**
     * In case the parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parentUpdateInput, parentUncheckedUpdateInput>
  }


  /**
   * parent delete
   */
  export type parentDeleteArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
    /**
     * Filter which parent to delete.
     */
    where: parentWhereUniqueInput
  }


  /**
   * parent deleteMany
   */
  export type parentDeleteManyArgs = {
    /**
     * Filter which parents to delete
     */
    where?: parentWhereInput
  }


  /**
   * parent.history
   */
  export type parent$historyArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    where?: historyWhereInput
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }


  /**
   * parent.meeting
   */
  export type parent$meetingArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    where?: meetingWhereInput
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    cursor?: meetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * parent.waitinglist
   */
  export type parent$waitinglistArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    where?: waitinglistWhereInput
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    cursor?: waitinglistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }


  /**
   * parent without action
   */
  export type parentArgs = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude | null
  }



  /**
   * Model admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    cnic: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    gender: string | null
    phone: string | null
    role: string | null
    desgination: string | null
    generalavail: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    cnic: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    gender: string | null
    phone: string | null
    role: string | null
    desgination: string | null
    generalavail: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    cnic: number
    firstName: number
    lastName: number
    email: number
    gender: number
    phone: number
    role: number
    desgination: number
    generalavail: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    phone?: true
    role?: true
    desgination?: true
    generalavail?: true
  }

  export type AdminMaxAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    phone?: true
    role?: true
    desgination?: true
    generalavail?: true
  }

  export type AdminCountAggregateInputType = {
    cnic?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    phone?: true
    role?: true
    desgination?: true
    generalavail?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
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
    where?: adminWhereInput
    orderBy?: Enumerable<adminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail: boolean | null
    _count: AdminCountAggregateOutputType | null
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


  export type adminSelect = {
    cnic?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    role?: boolean
    desgination?: boolean
    generalavail?: boolean
    history?: boolean | admin$historyArgs
    meeting?: boolean | admin$meetingArgs
    timeslot?: boolean | admin$timeslotArgs
    userlogin?: boolean | userloginArgs
    waitinglist?: boolean | admin$waitinglistArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }


  export type adminInclude = {
    history?: boolean | admin$historyArgs
    meeting?: boolean | admin$meetingArgs
    timeslot?: boolean | admin$timeslotArgs
    userlogin?: boolean | userloginArgs
    waitinglist?: boolean | admin$waitinglistArgs
    _count?: boolean | AdminCountOutputTypeArgs
  }

  export type adminGetPayload<S extends boolean | null | undefined | adminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? admin :
    S extends undefined ? never :
    S extends { include: any } & (adminArgs | adminFindManyArgs)
    ? admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? Array < historyGetPayload<S['include'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['include'][P]>>  :
        P extends 'timeslot' ? Array < timeslotGetPayload<S['include'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['include'][P]> | null :
        P extends 'waitinglist' ? Array < waitinglistGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (adminArgs | adminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? Array < historyGetPayload<S['select'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['select'][P]>>  :
        P extends 'timeslot' ? Array < timeslotGetPayload<S['select'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['select'][P]> | null :
        P extends 'waitinglist' ? Array < waitinglistGetPayload<S['select'][P]>>  :
        P extends '_count' ? AdminCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof admin ? admin[P] : never
  } 
      : admin


  type adminCountArgs = 
    Omit<adminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, adminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'admin'> extends True ? Prisma__adminClient<adminGetPayload<T>> : Prisma__adminClient<adminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, adminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'admin'> extends True ? Prisma__adminClient<adminGetPayload<T>> : Prisma__adminClient<adminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `cnic`
     * const adminWithCnicOnly = await prisma.admin.findMany({ select: { cnic: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs>(
      args?: SelectSubset<T, adminFindManyArgs>
    ): PrismaPromise<Array<adminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs>(
      args: SelectSubset<T, adminCreateArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs>(
      args?: SelectSubset<T, adminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs>(
      args: SelectSubset<T, adminDeleteArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
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
    update<T extends adminUpdateArgs>(
      args: SelectSubset<T, adminUpdateArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs>(
      args?: SelectSubset<T, adminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends adminUpdateManyArgs>(
      args: SelectSubset<T, adminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
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
    upsert<T extends adminUpsertArgs>(
      args: SelectSubset<T, adminUpsertArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__adminClient<T, Null = never> implements PrismaPromise<T> {
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

    history<T extends admin$historyArgs= {}>(args?: Subset<T, admin$historyArgs>): PrismaPromise<Array<historyGetPayload<T>>| Null>;

    meeting<T extends admin$meetingArgs= {}>(args?: Subset<T, admin$meetingArgs>): PrismaPromise<Array<meetingGetPayload<T>>| Null>;

    timeslot<T extends admin$timeslotArgs= {}>(args?: Subset<T, admin$timeslotArgs>): PrismaPromise<Array<timeslotGetPayload<T>>| Null>;

    userlogin<T extends userloginArgs= {}>(args?: Subset<T, userloginArgs>): Prisma__userloginClient<userloginGetPayload<T> | Null>;

    waitinglist<T extends admin$waitinglistArgs= {}>(args?: Subset<T, admin$waitinglistArgs>): PrismaPromise<Array<waitinglistGetPayload<T>>| Null>;

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
   * admin base type for findUnique actions
   */
  export type adminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUnique
   */
  export interface adminFindUniqueArgs extends adminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin base type for findFirst actions
   */
  export type adminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * admin findFirst
   */
  export interface adminFindFirstArgs extends adminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * admin findMany
   */
  export type adminFindManyArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * admin create
   */
  export type adminCreateArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }


  /**
   * admin createMany
   */
  export type adminCreateManyArgs = {
    /**
     * The data used to create many admins.
     */
    data: Enumerable<adminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * admin update
   */
  export type adminUpdateArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }


  /**
   * admin upsert
   */
  export type adminUpsertArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }


  /**
   * admin delete
   */
  export type adminDeleteArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }


  /**
   * admin.history
   */
  export type admin$historyArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    where?: historyWhereInput
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }


  /**
   * admin.meeting
   */
  export type admin$meetingArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    where?: meetingWhereInput
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    cursor?: meetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * admin.timeslot
   */
  export type admin$timeslotArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    where?: timeslotWhereInput
    orderBy?: Enumerable<timeslotOrderByWithRelationInput>
    cursor?: timeslotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TimeslotScalarFieldEnum>
  }


  /**
   * admin.waitinglist
   */
  export type admin$waitinglistArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    where?: waitinglistWhereInput
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    cursor?: waitinglistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }


  /**
   * admin without action
   */
  export type adminArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adminInclude | null
  }



  /**
   * Model timeslot
   */


  export type AggregateTimeslot = {
    _count: TimeslotCountAggregateOutputType | null
    _avg: TimeslotAvgAggregateOutputType | null
    _sum: TimeslotSumAggregateOutputType | null
    _min: TimeslotMinAggregateOutputType | null
    _max: TimeslotMaxAggregateOutputType | null
  }

  export type TimeslotAvgAggregateOutputType = {
    tsid: number | null
  }

  export type TimeslotSumAggregateOutputType = {
    tsid: number | null
  }

  export type TimeslotMinAggregateOutputType = {
    tsid: number | null
    startTime: Date | null
    endTime: Date | null
    availibility: boolean | null
    adminId: string | null
    day: string | null
  }

  export type TimeslotMaxAggregateOutputType = {
    tsid: number | null
    startTime: Date | null
    endTime: Date | null
    availibility: boolean | null
    adminId: string | null
    day: string | null
  }

  export type TimeslotCountAggregateOutputType = {
    tsid: number
    startTime: number
    endTime: number
    availibility: number
    adminId: number
    day: number
    _all: number
  }


  export type TimeslotAvgAggregateInputType = {
    tsid?: true
  }

  export type TimeslotSumAggregateInputType = {
    tsid?: true
  }

  export type TimeslotMinAggregateInputType = {
    tsid?: true
    startTime?: true
    endTime?: true
    availibility?: true
    adminId?: true
    day?: true
  }

  export type TimeslotMaxAggregateInputType = {
    tsid?: true
    startTime?: true
    endTime?: true
    availibility?: true
    adminId?: true
    day?: true
  }

  export type TimeslotCountAggregateInputType = {
    tsid?: true
    startTime?: true
    endTime?: true
    availibility?: true
    adminId?: true
    day?: true
    _all?: true
  }

  export type TimeslotAggregateArgs = {
    /**
     * Filter which timeslot to aggregate.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: Enumerable<timeslotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timeslots
    **/
    _count?: true | TimeslotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeslotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeslotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeslotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeslotMaxAggregateInputType
  }

  export type GetTimeslotAggregateType<T extends TimeslotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeslot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeslot[P]>
      : GetScalarType<T[P], AggregateTimeslot[P]>
  }




  export type TimeslotGroupByArgs = {
    where?: timeslotWhereInput
    orderBy?: Enumerable<timeslotOrderByWithAggregationInput>
    by: TimeslotScalarFieldEnum[]
    having?: timeslotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeslotCountAggregateInputType | true
    _avg?: TimeslotAvgAggregateInputType
    _sum?: TimeslotSumAggregateInputType
    _min?: TimeslotMinAggregateInputType
    _max?: TimeslotMaxAggregateInputType
  }


  export type TimeslotGroupByOutputType = {
    tsid: number
    startTime: Date
    endTime: Date
    availibility: boolean
    adminId: string
    day: string | null
    _count: TimeslotCountAggregateOutputType | null
    _avg: TimeslotAvgAggregateOutputType | null
    _sum: TimeslotSumAggregateOutputType | null
    _min: TimeslotMinAggregateOutputType | null
    _max: TimeslotMaxAggregateOutputType | null
  }

  type GetTimeslotGroupByPayload<T extends TimeslotGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TimeslotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeslotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeslotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeslotGroupByOutputType[P]>
        }
      >
    >


  export type timeslotSelect = {
    tsid?: boolean
    startTime?: boolean
    endTime?: boolean
    availibility?: boolean
    adminId?: boolean
    day?: boolean
    meeting?: boolean | meetingArgs
    admin?: boolean | adminArgs
  }


  export type timeslotInclude = {
    meeting?: boolean | meetingArgs
    admin?: boolean | adminArgs
  }

  export type timeslotGetPayload<S extends boolean | null | undefined | timeslotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? timeslot :
    S extends undefined ? never :
    S extends { include: any } & (timeslotArgs | timeslotFindManyArgs)
    ? timeslot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'meeting' ? meetingGetPayload<S['include'][P]> | null :
        P extends 'admin' ? adminGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (timeslotArgs | timeslotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'meeting' ? meetingGetPayload<S['select'][P]> | null :
        P extends 'admin' ? adminGetPayload<S['select'][P]> :  P extends keyof timeslot ? timeslot[P] : never
  } 
      : timeslot


  type timeslotCountArgs = 
    Omit<timeslotFindManyArgs, 'select' | 'include'> & {
      select?: TimeslotCountAggregateInputType | true
    }

  export interface timeslotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Timeslot that matches the filter.
     * @param {timeslotFindUniqueArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends timeslotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, timeslotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'timeslot'> extends True ? Prisma__timeslotClient<timeslotGetPayload<T>> : Prisma__timeslotClient<timeslotGetPayload<T> | null, null>

    /**
     * Find one Timeslot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {timeslotFindUniqueOrThrowArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends timeslotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, timeslotFindUniqueOrThrowArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Find the first Timeslot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindFirstArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends timeslotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, timeslotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'timeslot'> extends True ? Prisma__timeslotClient<timeslotGetPayload<T>> : Prisma__timeslotClient<timeslotGetPayload<T> | null, null>

    /**
     * Find the first Timeslot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindFirstOrThrowArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends timeslotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, timeslotFindFirstOrThrowArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Find zero or more Timeslots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timeslots
     * const timeslots = await prisma.timeslot.findMany()
     * 
     * // Get first 10 Timeslots
     * const timeslots = await prisma.timeslot.findMany({ take: 10 })
     * 
     * // Only select the `tsid`
     * const timeslotWithTsidOnly = await prisma.timeslot.findMany({ select: { tsid: true } })
     * 
    **/
    findMany<T extends timeslotFindManyArgs>(
      args?: SelectSubset<T, timeslotFindManyArgs>
    ): PrismaPromise<Array<timeslotGetPayload<T>>>

    /**
     * Create a Timeslot.
     * @param {timeslotCreateArgs} args - Arguments to create a Timeslot.
     * @example
     * // Create one Timeslot
     * const Timeslot = await prisma.timeslot.create({
     *   data: {
     *     // ... data to create a Timeslot
     *   }
     * })
     * 
    **/
    create<T extends timeslotCreateArgs>(
      args: SelectSubset<T, timeslotCreateArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Create many Timeslots.
     *     @param {timeslotCreateManyArgs} args - Arguments to create many Timeslots.
     *     @example
     *     // Create many Timeslots
     *     const timeslot = await prisma.timeslot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends timeslotCreateManyArgs>(
      args?: SelectSubset<T, timeslotCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Timeslot.
     * @param {timeslotDeleteArgs} args - Arguments to delete one Timeslot.
     * @example
     * // Delete one Timeslot
     * const Timeslot = await prisma.timeslot.delete({
     *   where: {
     *     // ... filter to delete one Timeslot
     *   }
     * })
     * 
    **/
    delete<T extends timeslotDeleteArgs>(
      args: SelectSubset<T, timeslotDeleteArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Update one Timeslot.
     * @param {timeslotUpdateArgs} args - Arguments to update one Timeslot.
     * @example
     * // Update one Timeslot
     * const timeslot = await prisma.timeslot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends timeslotUpdateArgs>(
      args: SelectSubset<T, timeslotUpdateArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Delete zero or more Timeslots.
     * @param {timeslotDeleteManyArgs} args - Arguments to filter Timeslots to delete.
     * @example
     * // Delete a few Timeslots
     * const { count } = await prisma.timeslot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends timeslotDeleteManyArgs>(
      args?: SelectSubset<T, timeslotDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timeslots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timeslots
     * const timeslot = await prisma.timeslot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends timeslotUpdateManyArgs>(
      args: SelectSubset<T, timeslotUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeslot.
     * @param {timeslotUpsertArgs} args - Arguments to update or create a Timeslot.
     * @example
     * // Update or create a Timeslot
     * const timeslot = await prisma.timeslot.upsert({
     *   create: {
     *     // ... data to create a Timeslot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeslot we want to update
     *   }
     * })
    **/
    upsert<T extends timeslotUpsertArgs>(
      args: SelectSubset<T, timeslotUpsertArgs>
    ): Prisma__timeslotClient<timeslotGetPayload<T>>

    /**
     * Count the number of Timeslots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotCountArgs} args - Arguments to filter Timeslots to count.
     * @example
     * // Count the number of Timeslots
     * const count = await prisma.timeslot.count({
     *   where: {
     *     // ... the filter for the Timeslots we want to count
     *   }
     * })
    **/
    count<T extends timeslotCountArgs>(
      args?: Subset<T, timeslotCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeslotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeslot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeslotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeslotAggregateArgs>(args: Subset<T, TimeslotAggregateArgs>): PrismaPromise<GetTimeslotAggregateType<T>>

    /**
     * Group by Timeslot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeslotGroupByArgs} args - Group by arguments.
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
      T extends TimeslotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeslotGroupByArgs['orderBy'] }
        : { orderBy?: TimeslotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeslotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeslotGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for timeslot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__timeslotClient<T, Null = never> implements PrismaPromise<T> {
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

    meeting<T extends meetingArgs= {}>(args?: Subset<T, meetingArgs>): Prisma__meetingClient<meetingGetPayload<T> | Null>;

    admin<T extends adminArgs= {}>(args?: Subset<T, adminArgs>): Prisma__adminClient<adminGetPayload<T> | Null>;

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
   * timeslot base type for findUnique actions
   */
  export type timeslotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter, which timeslot to fetch.
     */
    where: timeslotWhereUniqueInput
  }

  /**
   * timeslot findUnique
   */
  export interface timeslotFindUniqueArgs extends timeslotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * timeslot findUniqueOrThrow
   */
  export type timeslotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter, which timeslot to fetch.
     */
    where: timeslotWhereUniqueInput
  }


  /**
   * timeslot base type for findFirst actions
   */
  export type timeslotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter, which timeslot to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: Enumerable<timeslotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timeslots.
     */
    distinct?: Enumerable<TimeslotScalarFieldEnum>
  }

  /**
   * timeslot findFirst
   */
  export interface timeslotFindFirstArgs extends timeslotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * timeslot findFirstOrThrow
   */
  export type timeslotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter, which timeslot to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: Enumerable<timeslotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timeslots.
     */
    distinct?: Enumerable<TimeslotScalarFieldEnum>
  }


  /**
   * timeslot findMany
   */
  export type timeslotFindManyArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter, which timeslots to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: Enumerable<timeslotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    distinct?: Enumerable<TimeslotScalarFieldEnum>
  }


  /**
   * timeslot create
   */
  export type timeslotCreateArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * The data needed to create a timeslot.
     */
    data: XOR<timeslotCreateInput, timeslotUncheckedCreateInput>
  }


  /**
   * timeslot createMany
   */
  export type timeslotCreateManyArgs = {
    /**
     * The data used to create many timeslots.
     */
    data: Enumerable<timeslotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * timeslot update
   */
  export type timeslotUpdateArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * The data needed to update a timeslot.
     */
    data: XOR<timeslotUpdateInput, timeslotUncheckedUpdateInput>
    /**
     * Choose, which timeslot to update.
     */
    where: timeslotWhereUniqueInput
  }


  /**
   * timeslot updateMany
   */
  export type timeslotUpdateManyArgs = {
    /**
     * The data used to update timeslots.
     */
    data: XOR<timeslotUpdateManyMutationInput, timeslotUncheckedUpdateManyInput>
    /**
     * Filter which timeslots to update
     */
    where?: timeslotWhereInput
  }


  /**
   * timeslot upsert
   */
  export type timeslotUpsertArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * The filter to search for the timeslot to update in case it exists.
     */
    where: timeslotWhereUniqueInput
    /**
     * In case the timeslot found by the `where` argument doesn't exist, create a new timeslot with this data.
     */
    create: XOR<timeslotCreateInput, timeslotUncheckedCreateInput>
    /**
     * In case the timeslot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timeslotUpdateInput, timeslotUncheckedUpdateInput>
  }


  /**
   * timeslot delete
   */
  export type timeslotDeleteArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
    /**
     * Filter which timeslot to delete.
     */
    where: timeslotWhereUniqueInput
  }


  /**
   * timeslot deleteMany
   */
  export type timeslotDeleteManyArgs = {
    /**
     * Filter which timeslots to delete
     */
    where?: timeslotWhereInput
  }


  /**
   * timeslot without action
   */
  export type timeslotArgs = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: timeslotInclude | null
  }



  /**
   * Model student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    regNo: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    gender: string | null
    birthdate: Date | null
    studentCnic: string | null
    class: string | null
    section: string | null
    parentId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    regNo: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    gender: string | null
    birthdate: Date | null
    studentCnic: string | null
    class: string | null
    section: string | null
    parentId: string | null
  }

  export type StudentCountAggregateOutputType = {
    regNo: number
    firstName: number
    lastName: number
    email: number
    gender: number
    birthdate: number
    studentCnic: number
    class: number
    section: number
    parentId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    regNo?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    birthdate?: true
    studentCnic?: true
    class?: true
    section?: true
    parentId?: true
  }

  export type StudentMaxAggregateInputType = {
    regNo?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    birthdate?: true
    studentCnic?: true
    class?: true
    section?: true
    parentId?: true
  }

  export type StudentCountAggregateInputType = {
    regNo?: true
    firstName?: true
    lastName?: true
    email?: true
    gender?: true
    birthdate?: true
    studentCnic?: true
    class?: true
    section?: true
    parentId?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
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
    where?: studentWhereInput
    orderBy?: Enumerable<studentOrderByWithAggregationInput>
    by: StudentScalarFieldEnum[]
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date
    studentCnic: string
    class: string
    section: string
    parentId: string | null
    _count: StudentCountAggregateOutputType | null
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


  export type studentSelect = {
    regNo?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    gender?: boolean
    birthdate?: boolean
    studentCnic?: boolean
    class?: boolean
    section?: boolean
    parentId?: boolean
    attendance?: boolean | student$attendanceArgs
    cgpa?: boolean | cgpaArgs
    disciplinary?: boolean | student$disciplinaryArgs
    failedsubject?: boolean | student$failedsubjectArgs
    history?: boolean | student$historyArgs
    meeting?: boolean | student$meetingArgs
    userlogin?: boolean | userloginArgs
    waiinglist?: boolean | student$waiinglistArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }


  export type studentInclude = {
    attendance?: boolean | student$attendanceArgs
    cgpa?: boolean | cgpaArgs
    disciplinary?: boolean | student$disciplinaryArgs
    failedsubject?: boolean | student$failedsubjectArgs
    history?: boolean | student$historyArgs
    meeting?: boolean | student$meetingArgs
    userlogin?: boolean | userloginArgs
    waiinglist?: boolean | student$waiinglistArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type studentGetPayload<S extends boolean | null | undefined | studentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? student :
    S extends undefined ? never :
    S extends { include: any } & (studentArgs | studentFindManyArgs)
    ? student  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'attendance' ? Array < attendanceGetPayload<S['include'][P]>>  :
        P extends 'cgpa' ? cgpaGetPayload<S['include'][P]> | null :
        P extends 'disciplinary' ? Array < disciplinaryGetPayload<S['include'][P]>>  :
        P extends 'failedsubject' ? Array < failedsubjectGetPayload<S['include'][P]>>  :
        P extends 'history' ? Array < historyGetPayload<S['include'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['include'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['include'][P]> | null :
        P extends 'waiinglist' ? Array < waitinglistGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (studentArgs | studentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'attendance' ? Array < attendanceGetPayload<S['select'][P]>>  :
        P extends 'cgpa' ? cgpaGetPayload<S['select'][P]> | null :
        P extends 'disciplinary' ? Array < disciplinaryGetPayload<S['select'][P]>>  :
        P extends 'failedsubject' ? Array < failedsubjectGetPayload<S['select'][P]>>  :
        P extends 'history' ? Array < historyGetPayload<S['select'][P]>>  :
        P extends 'meeting' ? Array < meetingGetPayload<S['select'][P]>>  :
        P extends 'userlogin' ? userloginGetPayload<S['select'][P]> | null :
        P extends 'waiinglist' ? Array < waitinglistGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof student ? student[P] : never
  } 
      : student


  type studentCountArgs = 
    Omit<studentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, studentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'student'> extends True ? Prisma__studentClient<studentGetPayload<T>> : Prisma__studentClient<studentGetPayload<T> | null, null>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, studentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'student'> extends True ? Prisma__studentClient<studentGetPayload<T>> : Prisma__studentClient<studentGetPayload<T> | null, null>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `regNo`
     * const studentWithRegNoOnly = await prisma.student.findMany({ select: { regNo: true } })
     * 
    **/
    findMany<T extends studentFindManyArgs>(
      args?: SelectSubset<T, studentFindManyArgs>
    ): PrismaPromise<Array<studentGetPayload<T>>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends studentCreateArgs>(
      args: SelectSubset<T, studentCreateArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends studentCreateManyArgs>(
      args?: SelectSubset<T, studentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends studentDeleteArgs>(
      args: SelectSubset<T, studentDeleteArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
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
    update<T extends studentUpdateArgs>(
      args: SelectSubset<T, studentUpdateArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studentDeleteManyArgs>(
      args?: SelectSubset<T, studentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends studentUpdateManyArgs>(
      args: SelectSubset<T, studentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
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
    upsert<T extends studentUpsertArgs>(
      args: SelectSubset<T, studentUpsertArgs>
    ): Prisma__studentClient<studentGetPayload<T>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__studentClient<T, Null = never> implements PrismaPromise<T> {
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

    attendance<T extends student$attendanceArgs= {}>(args?: Subset<T, student$attendanceArgs>): PrismaPromise<Array<attendanceGetPayload<T>>| Null>;

    cgpa<T extends cgpaArgs= {}>(args?: Subset<T, cgpaArgs>): Prisma__cgpaClient<cgpaGetPayload<T> | Null>;

    disciplinary<T extends student$disciplinaryArgs= {}>(args?: Subset<T, student$disciplinaryArgs>): PrismaPromise<Array<disciplinaryGetPayload<T>>| Null>;

    failedsubject<T extends student$failedsubjectArgs= {}>(args?: Subset<T, student$failedsubjectArgs>): PrismaPromise<Array<failedsubjectGetPayload<T>>| Null>;

    history<T extends student$historyArgs= {}>(args?: Subset<T, student$historyArgs>): PrismaPromise<Array<historyGetPayload<T>>| Null>;

    meeting<T extends student$meetingArgs= {}>(args?: Subset<T, student$meetingArgs>): PrismaPromise<Array<meetingGetPayload<T>>| Null>;

    userlogin<T extends userloginArgs= {}>(args?: Subset<T, userloginArgs>): Prisma__userloginClient<userloginGetPayload<T> | Null>;

    waiinglist<T extends student$waiinglistArgs= {}>(args?: Subset<T, student$waiinglistArgs>): PrismaPromise<Array<waitinglistGetPayload<T>>| Null>;

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
   * student base type for findUnique actions
   */
  export type studentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUnique
   */
  export interface studentFindUniqueArgs extends studentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student base type for findFirst actions
   */
  export type studentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * student findFirst
   */
  export interface studentFindFirstArgs extends studentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * student findMany
   */
  export type studentFindManyArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: Enumerable<studentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * student create
   */
  export type studentCreateArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }


  /**
   * student createMany
   */
  export type studentCreateManyArgs = {
    /**
     * The data used to create many students.
     */
    data: Enumerable<studentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * student update
   */
  export type studentUpdateArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student updateMany
   */
  export type studentUpdateManyArgs = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
  }


  /**
   * student upsert
   */
  export type studentUpsertArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }


  /**
   * student delete
   */
  export type studentDeleteArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
  }


  /**
   * student.attendance
   */
  export type student$attendanceArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    where?: attendanceWhereInput
    orderBy?: Enumerable<attendanceOrderByWithRelationInput>
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }


  /**
   * student.disciplinary
   */
  export type student$disciplinaryArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    where?: disciplinaryWhereInput
    orderBy?: Enumerable<disciplinaryOrderByWithRelationInput>
    cursor?: disciplinaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DisciplinaryScalarFieldEnum>
  }


  /**
   * student.failedsubject
   */
  export type student$failedsubjectArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    where?: failedsubjectWhereInput
    orderBy?: Enumerable<failedsubjectOrderByWithRelationInput>
    cursor?: failedsubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FailedsubjectScalarFieldEnum>
  }


  /**
   * student.history
   */
  export type student$historyArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    where?: historyWhereInput
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }


  /**
   * student.meeting
   */
  export type student$meetingArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    where?: meetingWhereInput
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    cursor?: meetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * student.waiinglist
   */
  export type student$waiinglistArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    where?: waitinglistWhereInput
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    cursor?: waitinglistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }


  /**
   * student without action
   */
  export type studentArgs = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude | null
  }



  /**
   * Model attendance
   */


  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    sid: number | null
    percentage: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    sid: number | null
    percentage: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    sid: number | null
    subject: string | null
    percentage: number | null
    regNo: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    sid: number | null
    subject: string | null
    percentage: number | null
    regNo: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    sid: number
    subject: number
    percentage: number
    regNo: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    sid?: true
    percentage?: true
  }

  export type AttendanceSumAggregateInputType = {
    sid?: true
    percentage?: true
  }

  export type AttendanceMinAggregateInputType = {
    sid?: true
    subject?: true
    percentage?: true
    regNo?: true
  }

  export type AttendanceMaxAggregateInputType = {
    sid?: true
    subject?: true
    percentage?: true
    regNo?: true
  }

  export type AttendanceCountAggregateInputType = {
    sid?: true
    subject?: true
    percentage?: true
    regNo?: true
    _all?: true
  }

  export type AttendanceAggregateArgs = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: Enumerable<attendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs = {
    where?: attendanceWhereInput
    orderBy?: Enumerable<attendanceOrderByWithAggregationInput>
    by: AttendanceScalarFieldEnum[]
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }


  export type AttendanceGroupByOutputType = {
    sid: number
    subject: string
    percentage: number
    regNo: string
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect = {
    sid?: boolean
    subject?: boolean
    percentage?: boolean
    regNo?: boolean
    student?: boolean | studentArgs
  }


  export type attendanceInclude = {
    student?: boolean | studentArgs
  }

  export type attendanceGetPayload<S extends boolean | null | undefined | attendanceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? attendance :
    S extends undefined ? never :
    S extends { include: any } & (attendanceArgs | attendanceFindManyArgs)
    ? attendance  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (attendanceArgs | attendanceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof attendance ? attendance[P] : never
  } 
      : attendance


  type attendanceCountArgs = 
    Omit<attendanceFindManyArgs, 'select' | 'include'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends attendanceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, attendanceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'attendance'> extends True ? Prisma__attendanceClient<attendanceGetPayload<T>> : Prisma__attendanceClient<attendanceGetPayload<T> | null, null>

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, attendanceFindUniqueOrThrowArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends attendanceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, attendanceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'attendance'> extends True ? Prisma__attendanceClient<attendanceGetPayload<T>> : Prisma__attendanceClient<attendanceGetPayload<T> | null, null>

    /**
     * Find the first Attendance that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, attendanceFindFirstOrThrowArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `sid`
     * const attendanceWithSidOnly = await prisma.attendance.findMany({ select: { sid: true } })
     * 
    **/
    findMany<T extends attendanceFindManyArgs>(
      args?: SelectSubset<T, attendanceFindManyArgs>
    ): PrismaPromise<Array<attendanceGetPayload<T>>>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
    **/
    create<T extends attendanceCreateArgs>(
      args: SelectSubset<T, attendanceCreateArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Create many Attendances.
     *     @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends attendanceCreateManyArgs>(
      args?: SelectSubset<T, attendanceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
    **/
    delete<T extends attendanceDeleteArgs>(
      args: SelectSubset<T, attendanceDeleteArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends attendanceUpdateArgs>(
      args: SelectSubset<T, attendanceUpdateArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends attendanceDeleteManyArgs>(
      args?: SelectSubset<T, attendanceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends attendanceUpdateManyArgs>(
      args: SelectSubset<T, attendanceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
    **/
    upsert<T extends attendanceUpsertArgs>(
      args: SelectSubset<T, attendanceUpsertArgs>
    ): Prisma__attendanceClient<attendanceGetPayload<T>>

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__attendanceClient<T, Null = never> implements PrismaPromise<T> {
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

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * attendance base type for findUnique actions
   */
  export type attendanceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUnique
   */
  export interface attendanceFindUniqueArgs extends attendanceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }


  /**
   * attendance base type for findFirst actions
   */
  export type attendanceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: Enumerable<attendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }

  /**
   * attendance findFirst
   */
  export interface attendanceFindFirstArgs extends attendanceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: Enumerable<attendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }


  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: Enumerable<attendanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: Enumerable<AttendanceScalarFieldEnum>
  }


  /**
   * attendance create
   */
  export type attendanceCreateArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }


  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs = {
    /**
     * The data used to create many attendances.
     */
    data: Enumerable<attendanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * attendance update
   */
  export type attendanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }


  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
  }


  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }


  /**
   * attendance delete
   */
  export type attendanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }


  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
  }


  /**
   * attendance without action
   */
  export type attendanceArgs = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude | null
  }



  /**
   * Model cgpa
   */


  export type AggregateCgpa = {
    _count: CgpaCountAggregateOutputType | null
    _avg: CgpaAvgAggregateOutputType | null
    _sum: CgpaSumAggregateOutputType | null
    _min: CgpaMinAggregateOutputType | null
    _max: CgpaMaxAggregateOutputType | null
  }

  export type CgpaAvgAggregateOutputType = {
    id: number | null
    cgpa: number | null
  }

  export type CgpaSumAggregateOutputType = {
    id: number | null
    cgpa: number | null
  }

  export type CgpaMinAggregateOutputType = {
    id: number | null
    cgpa: number | null
    regNo: string | null
  }

  export type CgpaMaxAggregateOutputType = {
    id: number | null
    cgpa: number | null
    regNo: string | null
  }

  export type CgpaCountAggregateOutputType = {
    id: number
    cgpa: number
    regNo: number
    _all: number
  }


  export type CgpaAvgAggregateInputType = {
    id?: true
    cgpa?: true
  }

  export type CgpaSumAggregateInputType = {
    id?: true
    cgpa?: true
  }

  export type CgpaMinAggregateInputType = {
    id?: true
    cgpa?: true
    regNo?: true
  }

  export type CgpaMaxAggregateInputType = {
    id?: true
    cgpa?: true
    regNo?: true
  }

  export type CgpaCountAggregateInputType = {
    id?: true
    cgpa?: true
    regNo?: true
    _all?: true
  }

  export type CgpaAggregateArgs = {
    /**
     * Filter which cgpa to aggregate.
     */
    where?: cgpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cgpas to fetch.
     */
    orderBy?: Enumerable<cgpaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cgpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cgpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cgpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cgpas
    **/
    _count?: true | CgpaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CgpaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CgpaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CgpaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CgpaMaxAggregateInputType
  }

  export type GetCgpaAggregateType<T extends CgpaAggregateArgs> = {
        [P in keyof T & keyof AggregateCgpa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCgpa[P]>
      : GetScalarType<T[P], AggregateCgpa[P]>
  }




  export type CgpaGroupByArgs = {
    where?: cgpaWhereInput
    orderBy?: Enumerable<cgpaOrderByWithAggregationInput>
    by: CgpaScalarFieldEnum[]
    having?: cgpaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CgpaCountAggregateInputType | true
    _avg?: CgpaAvgAggregateInputType
    _sum?: CgpaSumAggregateInputType
    _min?: CgpaMinAggregateInputType
    _max?: CgpaMaxAggregateInputType
  }


  export type CgpaGroupByOutputType = {
    id: number
    cgpa: number
    regNo: string
    _count: CgpaCountAggregateOutputType | null
    _avg: CgpaAvgAggregateOutputType | null
    _sum: CgpaSumAggregateOutputType | null
    _min: CgpaMinAggregateOutputType | null
    _max: CgpaMaxAggregateOutputType | null
  }

  type GetCgpaGroupByPayload<T extends CgpaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CgpaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CgpaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CgpaGroupByOutputType[P]>
            : GetScalarType<T[P], CgpaGroupByOutputType[P]>
        }
      >
    >


  export type cgpaSelect = {
    id?: boolean
    cgpa?: boolean
    regNo?: boolean
    student?: boolean | studentArgs
  }


  export type cgpaInclude = {
    student?: boolean | studentArgs
  }

  export type cgpaGetPayload<S extends boolean | null | undefined | cgpaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? cgpa :
    S extends undefined ? never :
    S extends { include: any } & (cgpaArgs | cgpaFindManyArgs)
    ? cgpa  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (cgpaArgs | cgpaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof cgpa ? cgpa[P] : never
  } 
      : cgpa


  type cgpaCountArgs = 
    Omit<cgpaFindManyArgs, 'select' | 'include'> & {
      select?: CgpaCountAggregateInputType | true
    }

  export interface cgpaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Cgpa that matches the filter.
     * @param {cgpaFindUniqueArgs} args - Arguments to find a Cgpa
     * @example
     * // Get one Cgpa
     * const cgpa = await prisma.cgpa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cgpaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cgpaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cgpa'> extends True ? Prisma__cgpaClient<cgpaGetPayload<T>> : Prisma__cgpaClient<cgpaGetPayload<T> | null, null>

    /**
     * Find one Cgpa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cgpaFindUniqueOrThrowArgs} args - Arguments to find a Cgpa
     * @example
     * // Get one Cgpa
     * const cgpa = await prisma.cgpa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cgpaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cgpaFindUniqueOrThrowArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Find the first Cgpa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cgpaFindFirstArgs} args - Arguments to find a Cgpa
     * @example
     * // Get one Cgpa
     * const cgpa = await prisma.cgpa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cgpaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cgpaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cgpa'> extends True ? Prisma__cgpaClient<cgpaGetPayload<T>> : Prisma__cgpaClient<cgpaGetPayload<T> | null, null>

    /**
     * Find the first Cgpa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cgpaFindFirstOrThrowArgs} args - Arguments to find a Cgpa
     * @example
     * // Get one Cgpa
     * const cgpa = await prisma.cgpa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cgpaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cgpaFindFirstOrThrowArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Find zero or more Cgpas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cgpaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cgpas
     * const cgpas = await prisma.cgpa.findMany()
     * 
     * // Get first 10 Cgpas
     * const cgpas = await prisma.cgpa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cgpaWithIdOnly = await prisma.cgpa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cgpaFindManyArgs>(
      args?: SelectSubset<T, cgpaFindManyArgs>
    ): PrismaPromise<Array<cgpaGetPayload<T>>>

    /**
     * Create a Cgpa.
     * @param {cgpaCreateArgs} args - Arguments to create a Cgpa.
     * @example
     * // Create one Cgpa
     * const Cgpa = await prisma.cgpa.create({
     *   data: {
     *     // ... data to create a Cgpa
     *   }
     * })
     * 
    **/
    create<T extends cgpaCreateArgs>(
      args: SelectSubset<T, cgpaCreateArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Create many Cgpas.
     *     @param {cgpaCreateManyArgs} args - Arguments to create many Cgpas.
     *     @example
     *     // Create many Cgpas
     *     const cgpa = await prisma.cgpa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cgpaCreateManyArgs>(
      args?: SelectSubset<T, cgpaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cgpa.
     * @param {cgpaDeleteArgs} args - Arguments to delete one Cgpa.
     * @example
     * // Delete one Cgpa
     * const Cgpa = await prisma.cgpa.delete({
     *   where: {
     *     // ... filter to delete one Cgpa
     *   }
     * })
     * 
    **/
    delete<T extends cgpaDeleteArgs>(
      args: SelectSubset<T, cgpaDeleteArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Update one Cgpa.
     * @param {cgpaUpdateArgs} args - Arguments to update one Cgpa.
     * @example
     * // Update one Cgpa
     * const cgpa = await prisma.cgpa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cgpaUpdateArgs>(
      args: SelectSubset<T, cgpaUpdateArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Delete zero or more Cgpas.
     * @param {cgpaDeleteManyArgs} args - Arguments to filter Cgpas to delete.
     * @example
     * // Delete a few Cgpas
     * const { count } = await prisma.cgpa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cgpaDeleteManyArgs>(
      args?: SelectSubset<T, cgpaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cgpas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cgpaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cgpas
     * const cgpa = await prisma.cgpa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cgpaUpdateManyArgs>(
      args: SelectSubset<T, cgpaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cgpa.
     * @param {cgpaUpsertArgs} args - Arguments to update or create a Cgpa.
     * @example
     * // Update or create a Cgpa
     * const cgpa = await prisma.cgpa.upsert({
     *   create: {
     *     // ... data to create a Cgpa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cgpa we want to update
     *   }
     * })
    **/
    upsert<T extends cgpaUpsertArgs>(
      args: SelectSubset<T, cgpaUpsertArgs>
    ): Prisma__cgpaClient<cgpaGetPayload<T>>

    /**
     * Count the number of Cgpas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cgpaCountArgs} args - Arguments to filter Cgpas to count.
     * @example
     * // Count the number of Cgpas
     * const count = await prisma.cgpa.count({
     *   where: {
     *     // ... the filter for the Cgpas we want to count
     *   }
     * })
    **/
    count<T extends cgpaCountArgs>(
      args?: Subset<T, cgpaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CgpaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cgpa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CgpaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CgpaAggregateArgs>(args: Subset<T, CgpaAggregateArgs>): PrismaPromise<GetCgpaAggregateType<T>>

    /**
     * Group by Cgpa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CgpaGroupByArgs} args - Group by arguments.
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
      T extends CgpaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CgpaGroupByArgs['orderBy'] }
        : { orderBy?: CgpaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CgpaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCgpaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cgpa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cgpaClient<T, Null = never> implements PrismaPromise<T> {
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

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * cgpa base type for findUnique actions
   */
  export type cgpaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter, which cgpa to fetch.
     */
    where: cgpaWhereUniqueInput
  }

  /**
   * cgpa findUnique
   */
  export interface cgpaFindUniqueArgs extends cgpaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cgpa findUniqueOrThrow
   */
  export type cgpaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter, which cgpa to fetch.
     */
    where: cgpaWhereUniqueInput
  }


  /**
   * cgpa base type for findFirst actions
   */
  export type cgpaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter, which cgpa to fetch.
     */
    where?: cgpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cgpas to fetch.
     */
    orderBy?: Enumerable<cgpaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cgpas.
     */
    cursor?: cgpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cgpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cgpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cgpas.
     */
    distinct?: Enumerable<CgpaScalarFieldEnum>
  }

  /**
   * cgpa findFirst
   */
  export interface cgpaFindFirstArgs extends cgpaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cgpa findFirstOrThrow
   */
  export type cgpaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter, which cgpa to fetch.
     */
    where?: cgpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cgpas to fetch.
     */
    orderBy?: Enumerable<cgpaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cgpas.
     */
    cursor?: cgpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cgpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cgpas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cgpas.
     */
    distinct?: Enumerable<CgpaScalarFieldEnum>
  }


  /**
   * cgpa findMany
   */
  export type cgpaFindManyArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter, which cgpas to fetch.
     */
    where?: cgpaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cgpas to fetch.
     */
    orderBy?: Enumerable<cgpaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cgpas.
     */
    cursor?: cgpaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cgpas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cgpas.
     */
    skip?: number
    distinct?: Enumerable<CgpaScalarFieldEnum>
  }


  /**
   * cgpa create
   */
  export type cgpaCreateArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * The data needed to create a cgpa.
     */
    data: XOR<cgpaCreateInput, cgpaUncheckedCreateInput>
  }


  /**
   * cgpa createMany
   */
  export type cgpaCreateManyArgs = {
    /**
     * The data used to create many cgpas.
     */
    data: Enumerable<cgpaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * cgpa update
   */
  export type cgpaUpdateArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * The data needed to update a cgpa.
     */
    data: XOR<cgpaUpdateInput, cgpaUncheckedUpdateInput>
    /**
     * Choose, which cgpa to update.
     */
    where: cgpaWhereUniqueInput
  }


  /**
   * cgpa updateMany
   */
  export type cgpaUpdateManyArgs = {
    /**
     * The data used to update cgpas.
     */
    data: XOR<cgpaUpdateManyMutationInput, cgpaUncheckedUpdateManyInput>
    /**
     * Filter which cgpas to update
     */
    where?: cgpaWhereInput
  }


  /**
   * cgpa upsert
   */
  export type cgpaUpsertArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * The filter to search for the cgpa to update in case it exists.
     */
    where: cgpaWhereUniqueInput
    /**
     * In case the cgpa found by the `where` argument doesn't exist, create a new cgpa with this data.
     */
    create: XOR<cgpaCreateInput, cgpaUncheckedCreateInput>
    /**
     * In case the cgpa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cgpaUpdateInput, cgpaUncheckedUpdateInput>
  }


  /**
   * cgpa delete
   */
  export type cgpaDeleteArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
    /**
     * Filter which cgpa to delete.
     */
    where: cgpaWhereUniqueInput
  }


  /**
   * cgpa deleteMany
   */
  export type cgpaDeleteManyArgs = {
    /**
     * Filter which cgpas to delete
     */
    where?: cgpaWhereInput
  }


  /**
   * cgpa without action
   */
  export type cgpaArgs = {
    /**
     * Select specific fields to fetch from the cgpa
     */
    select?: cgpaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cgpaInclude | null
  }



  /**
   * Model disciplinary
   */


  export type AggregateDisciplinary = {
    _count: DisciplinaryCountAggregateOutputType | null
    _avg: DisciplinaryAvgAggregateOutputType | null
    _sum: DisciplinarySumAggregateOutputType | null
    _min: DisciplinaryMinAggregateOutputType | null
    _max: DisciplinaryMaxAggregateOutputType | null
  }

  export type DisciplinaryAvgAggregateOutputType = {
    id: number | null
  }

  export type DisciplinarySumAggregateOutputType = {
    id: number | null
  }

  export type DisciplinaryMinAggregateOutputType = {
    id: number | null
    actions: string | null
    regNo: string | null
  }

  export type DisciplinaryMaxAggregateOutputType = {
    id: number | null
    actions: string | null
    regNo: string | null
  }

  export type DisciplinaryCountAggregateOutputType = {
    id: number
    actions: number
    regNo: number
    _all: number
  }


  export type DisciplinaryAvgAggregateInputType = {
    id?: true
  }

  export type DisciplinarySumAggregateInputType = {
    id?: true
  }

  export type DisciplinaryMinAggregateInputType = {
    id?: true
    actions?: true
    regNo?: true
  }

  export type DisciplinaryMaxAggregateInputType = {
    id?: true
    actions?: true
    regNo?: true
  }

  export type DisciplinaryCountAggregateInputType = {
    id?: true
    actions?: true
    regNo?: true
    _all?: true
  }

  export type DisciplinaryAggregateArgs = {
    /**
     * Filter which disciplinary to aggregate.
     */
    where?: disciplinaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinaries to fetch.
     */
    orderBy?: Enumerable<disciplinaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplinaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinaries
    **/
    _count?: true | DisciplinaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaryMaxAggregateInputType
  }

  export type GetDisciplinaryAggregateType<T extends DisciplinaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplinary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplinary[P]>
      : GetScalarType<T[P], AggregateDisciplinary[P]>
  }




  export type DisciplinaryGroupByArgs = {
    where?: disciplinaryWhereInput
    orderBy?: Enumerable<disciplinaryOrderByWithAggregationInput>
    by: DisciplinaryScalarFieldEnum[]
    having?: disciplinaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaryCountAggregateInputType | true
    _avg?: DisciplinaryAvgAggregateInputType
    _sum?: DisciplinarySumAggregateInputType
    _min?: DisciplinaryMinAggregateInputType
    _max?: DisciplinaryMaxAggregateInputType
  }


  export type DisciplinaryGroupByOutputType = {
    id: number
    actions: string
    regNo: string
    _count: DisciplinaryCountAggregateOutputType | null
    _avg: DisciplinaryAvgAggregateOutputType | null
    _sum: DisciplinarySumAggregateOutputType | null
    _min: DisciplinaryMinAggregateOutputType | null
    _max: DisciplinaryMaxAggregateOutputType | null
  }

  type GetDisciplinaryGroupByPayload<T extends DisciplinaryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DisciplinaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaryGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaryGroupByOutputType[P]>
        }
      >
    >


  export type disciplinarySelect = {
    id?: boolean
    actions?: boolean
    regNo?: boolean
    student?: boolean | studentArgs
  }


  export type disciplinaryInclude = {
    student?: boolean | studentArgs
  }

  export type disciplinaryGetPayload<S extends boolean | null | undefined | disciplinaryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? disciplinary :
    S extends undefined ? never :
    S extends { include: any } & (disciplinaryArgs | disciplinaryFindManyArgs)
    ? disciplinary  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (disciplinaryArgs | disciplinaryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof disciplinary ? disciplinary[P] : never
  } 
      : disciplinary


  type disciplinaryCountArgs = 
    Omit<disciplinaryFindManyArgs, 'select' | 'include'> & {
      select?: DisciplinaryCountAggregateInputType | true
    }

  export interface disciplinaryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Disciplinary that matches the filter.
     * @param {disciplinaryFindUniqueArgs} args - Arguments to find a Disciplinary
     * @example
     * // Get one Disciplinary
     * const disciplinary = await prisma.disciplinary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends disciplinaryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, disciplinaryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'disciplinary'> extends True ? Prisma__disciplinaryClient<disciplinaryGetPayload<T>> : Prisma__disciplinaryClient<disciplinaryGetPayload<T> | null, null>

    /**
     * Find one Disciplinary that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {disciplinaryFindUniqueOrThrowArgs} args - Arguments to find a Disciplinary
     * @example
     * // Get one Disciplinary
     * const disciplinary = await prisma.disciplinary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends disciplinaryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, disciplinaryFindUniqueOrThrowArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Find the first Disciplinary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaryFindFirstArgs} args - Arguments to find a Disciplinary
     * @example
     * // Get one Disciplinary
     * const disciplinary = await prisma.disciplinary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends disciplinaryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, disciplinaryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'disciplinary'> extends True ? Prisma__disciplinaryClient<disciplinaryGetPayload<T>> : Prisma__disciplinaryClient<disciplinaryGetPayload<T> | null, null>

    /**
     * Find the first Disciplinary that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaryFindFirstOrThrowArgs} args - Arguments to find a Disciplinary
     * @example
     * // Get one Disciplinary
     * const disciplinary = await prisma.disciplinary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends disciplinaryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, disciplinaryFindFirstOrThrowArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Find zero or more Disciplinaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinaries
     * const disciplinaries = await prisma.disciplinary.findMany()
     * 
     * // Get first 10 Disciplinaries
     * const disciplinaries = await prisma.disciplinary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinaryWithIdOnly = await prisma.disciplinary.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends disciplinaryFindManyArgs>(
      args?: SelectSubset<T, disciplinaryFindManyArgs>
    ): PrismaPromise<Array<disciplinaryGetPayload<T>>>

    /**
     * Create a Disciplinary.
     * @param {disciplinaryCreateArgs} args - Arguments to create a Disciplinary.
     * @example
     * // Create one Disciplinary
     * const Disciplinary = await prisma.disciplinary.create({
     *   data: {
     *     // ... data to create a Disciplinary
     *   }
     * })
     * 
    **/
    create<T extends disciplinaryCreateArgs>(
      args: SelectSubset<T, disciplinaryCreateArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Create many Disciplinaries.
     *     @param {disciplinaryCreateManyArgs} args - Arguments to create many Disciplinaries.
     *     @example
     *     // Create many Disciplinaries
     *     const disciplinary = await prisma.disciplinary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends disciplinaryCreateManyArgs>(
      args?: SelectSubset<T, disciplinaryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplinary.
     * @param {disciplinaryDeleteArgs} args - Arguments to delete one Disciplinary.
     * @example
     * // Delete one Disciplinary
     * const Disciplinary = await prisma.disciplinary.delete({
     *   where: {
     *     // ... filter to delete one Disciplinary
     *   }
     * })
     * 
    **/
    delete<T extends disciplinaryDeleteArgs>(
      args: SelectSubset<T, disciplinaryDeleteArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Update one Disciplinary.
     * @param {disciplinaryUpdateArgs} args - Arguments to update one Disciplinary.
     * @example
     * // Update one Disciplinary
     * const disciplinary = await prisma.disciplinary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends disciplinaryUpdateArgs>(
      args: SelectSubset<T, disciplinaryUpdateArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Delete zero or more Disciplinaries.
     * @param {disciplinaryDeleteManyArgs} args - Arguments to filter Disciplinaries to delete.
     * @example
     * // Delete a few Disciplinaries
     * const { count } = await prisma.disciplinary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends disciplinaryDeleteManyArgs>(
      args?: SelectSubset<T, disciplinaryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinaries
     * const disciplinary = await prisma.disciplinary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends disciplinaryUpdateManyArgs>(
      args: SelectSubset<T, disciplinaryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplinary.
     * @param {disciplinaryUpsertArgs} args - Arguments to update or create a Disciplinary.
     * @example
     * // Update or create a Disciplinary
     * const disciplinary = await prisma.disciplinary.upsert({
     *   create: {
     *     // ... data to create a Disciplinary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplinary we want to update
     *   }
     * })
    **/
    upsert<T extends disciplinaryUpsertArgs>(
      args: SelectSubset<T, disciplinaryUpsertArgs>
    ): Prisma__disciplinaryClient<disciplinaryGetPayload<T>>

    /**
     * Count the number of Disciplinaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaryCountArgs} args - Arguments to filter Disciplinaries to count.
     * @example
     * // Count the number of Disciplinaries
     * const count = await prisma.disciplinary.count({
     *   where: {
     *     // ... the filter for the Disciplinaries we want to count
     *   }
     * })
    **/
    count<T extends disciplinaryCountArgs>(
      args?: Subset<T, disciplinaryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplinary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaryAggregateArgs>(args: Subset<T, DisciplinaryAggregateArgs>): PrismaPromise<GetDisciplinaryAggregateType<T>>

    /**
     * Group by Disciplinary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaryGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaryGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplinary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__disciplinaryClient<T, Null = never> implements PrismaPromise<T> {
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

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * disciplinary base type for findUnique actions
   */
  export type disciplinaryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter, which disciplinary to fetch.
     */
    where: disciplinaryWhereUniqueInput
  }

  /**
   * disciplinary findUnique
   */
  export interface disciplinaryFindUniqueArgs extends disciplinaryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * disciplinary findUniqueOrThrow
   */
  export type disciplinaryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter, which disciplinary to fetch.
     */
    where: disciplinaryWhereUniqueInput
  }


  /**
   * disciplinary base type for findFirst actions
   */
  export type disciplinaryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter, which disciplinary to fetch.
     */
    where?: disciplinaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinaries to fetch.
     */
    orderBy?: Enumerable<disciplinaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinaries.
     */
    cursor?: disciplinaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinaries.
     */
    distinct?: Enumerable<DisciplinaryScalarFieldEnum>
  }

  /**
   * disciplinary findFirst
   */
  export interface disciplinaryFindFirstArgs extends disciplinaryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * disciplinary findFirstOrThrow
   */
  export type disciplinaryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter, which disciplinary to fetch.
     */
    where?: disciplinaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinaries to fetch.
     */
    orderBy?: Enumerable<disciplinaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinaries.
     */
    cursor?: disciplinaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinaries.
     */
    distinct?: Enumerable<DisciplinaryScalarFieldEnum>
  }


  /**
   * disciplinary findMany
   */
  export type disciplinaryFindManyArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter, which disciplinaries to fetch.
     */
    where?: disciplinaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinaries to fetch.
     */
    orderBy?: Enumerable<disciplinaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinaries.
     */
    cursor?: disciplinaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinaries.
     */
    skip?: number
    distinct?: Enumerable<DisciplinaryScalarFieldEnum>
  }


  /**
   * disciplinary create
   */
  export type disciplinaryCreateArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * The data needed to create a disciplinary.
     */
    data: XOR<disciplinaryCreateInput, disciplinaryUncheckedCreateInput>
  }


  /**
   * disciplinary createMany
   */
  export type disciplinaryCreateManyArgs = {
    /**
     * The data used to create many disciplinaries.
     */
    data: Enumerable<disciplinaryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * disciplinary update
   */
  export type disciplinaryUpdateArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * The data needed to update a disciplinary.
     */
    data: XOR<disciplinaryUpdateInput, disciplinaryUncheckedUpdateInput>
    /**
     * Choose, which disciplinary to update.
     */
    where: disciplinaryWhereUniqueInput
  }


  /**
   * disciplinary updateMany
   */
  export type disciplinaryUpdateManyArgs = {
    /**
     * The data used to update disciplinaries.
     */
    data: XOR<disciplinaryUpdateManyMutationInput, disciplinaryUncheckedUpdateManyInput>
    /**
     * Filter which disciplinaries to update
     */
    where?: disciplinaryWhereInput
  }


  /**
   * disciplinary upsert
   */
  export type disciplinaryUpsertArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * The filter to search for the disciplinary to update in case it exists.
     */
    where: disciplinaryWhereUniqueInput
    /**
     * In case the disciplinary found by the `where` argument doesn't exist, create a new disciplinary with this data.
     */
    create: XOR<disciplinaryCreateInput, disciplinaryUncheckedCreateInput>
    /**
     * In case the disciplinary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplinaryUpdateInput, disciplinaryUncheckedUpdateInput>
  }


  /**
   * disciplinary delete
   */
  export type disciplinaryDeleteArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
    /**
     * Filter which disciplinary to delete.
     */
    where: disciplinaryWhereUniqueInput
  }


  /**
   * disciplinary deleteMany
   */
  export type disciplinaryDeleteManyArgs = {
    /**
     * Filter which disciplinaries to delete
     */
    where?: disciplinaryWhereInput
  }


  /**
   * disciplinary without action
   */
  export type disciplinaryArgs = {
    /**
     * Select specific fields to fetch from the disciplinary
     */
    select?: disciplinarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: disciplinaryInclude | null
  }



  /**
   * Model failedsubject
   */


  export type AggregateFailedsubject = {
    _count: FailedsubjectCountAggregateOutputType | null
    _avg: FailedsubjectAvgAggregateOutputType | null
    _sum: FailedsubjectSumAggregateOutputType | null
    _min: FailedsubjectMinAggregateOutputType | null
    _max: FailedsubjectMaxAggregateOutputType | null
  }

  export type FailedsubjectAvgAggregateOutputType = {
    id: number | null
  }

  export type FailedsubjectSumAggregateOutputType = {
    id: number | null
  }

  export type FailedsubjectMinAggregateOutputType = {
    id: number | null
    semester: string | null
    subject: string | null
    grade: string | null
    regNo: string | null
  }

  export type FailedsubjectMaxAggregateOutputType = {
    id: number | null
    semester: string | null
    subject: string | null
    grade: string | null
    regNo: string | null
  }

  export type FailedsubjectCountAggregateOutputType = {
    id: number
    semester: number
    subject: number
    grade: number
    regNo: number
    _all: number
  }


  export type FailedsubjectAvgAggregateInputType = {
    id?: true
  }

  export type FailedsubjectSumAggregateInputType = {
    id?: true
  }

  export type FailedsubjectMinAggregateInputType = {
    id?: true
    semester?: true
    subject?: true
    grade?: true
    regNo?: true
  }

  export type FailedsubjectMaxAggregateInputType = {
    id?: true
    semester?: true
    subject?: true
    grade?: true
    regNo?: true
  }

  export type FailedsubjectCountAggregateInputType = {
    id?: true
    semester?: true
    subject?: true
    grade?: true
    regNo?: true
    _all?: true
  }

  export type FailedsubjectAggregateArgs = {
    /**
     * Filter which failedsubject to aggregate.
     */
    where?: failedsubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failedsubjects to fetch.
     */
    orderBy?: Enumerable<failedsubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: failedsubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failedsubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failedsubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failedsubjects
    **/
    _count?: true | FailedsubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FailedsubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FailedsubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailedsubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailedsubjectMaxAggregateInputType
  }

  export type GetFailedsubjectAggregateType<T extends FailedsubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateFailedsubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailedsubject[P]>
      : GetScalarType<T[P], AggregateFailedsubject[P]>
  }




  export type FailedsubjectGroupByArgs = {
    where?: failedsubjectWhereInput
    orderBy?: Enumerable<failedsubjectOrderByWithAggregationInput>
    by: FailedsubjectScalarFieldEnum[]
    having?: failedsubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailedsubjectCountAggregateInputType | true
    _avg?: FailedsubjectAvgAggregateInputType
    _sum?: FailedsubjectSumAggregateInputType
    _min?: FailedsubjectMinAggregateInputType
    _max?: FailedsubjectMaxAggregateInputType
  }


  export type FailedsubjectGroupByOutputType = {
    id: number
    semester: string
    subject: string
    grade: string
    regNo: string
    _count: FailedsubjectCountAggregateOutputType | null
    _avg: FailedsubjectAvgAggregateOutputType | null
    _sum: FailedsubjectSumAggregateOutputType | null
    _min: FailedsubjectMinAggregateOutputType | null
    _max: FailedsubjectMaxAggregateOutputType | null
  }

  type GetFailedsubjectGroupByPayload<T extends FailedsubjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FailedsubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailedsubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailedsubjectGroupByOutputType[P]>
            : GetScalarType<T[P], FailedsubjectGroupByOutputType[P]>
        }
      >
    >


  export type failedsubjectSelect = {
    id?: boolean
    semester?: boolean
    subject?: boolean
    grade?: boolean
    regNo?: boolean
    student?: boolean | studentArgs
  }


  export type failedsubjectInclude = {
    student?: boolean | studentArgs
  }

  export type failedsubjectGetPayload<S extends boolean | null | undefined | failedsubjectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? failedsubject :
    S extends undefined ? never :
    S extends { include: any } & (failedsubjectArgs | failedsubjectFindManyArgs)
    ? failedsubject  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (failedsubjectArgs | failedsubjectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof failedsubject ? failedsubject[P] : never
  } 
      : failedsubject


  type failedsubjectCountArgs = 
    Omit<failedsubjectFindManyArgs, 'select' | 'include'> & {
      select?: FailedsubjectCountAggregateInputType | true
    }

  export interface failedsubjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Failedsubject that matches the filter.
     * @param {failedsubjectFindUniqueArgs} args - Arguments to find a Failedsubject
     * @example
     * // Get one Failedsubject
     * const failedsubject = await prisma.failedsubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends failedsubjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, failedsubjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'failedsubject'> extends True ? Prisma__failedsubjectClient<failedsubjectGetPayload<T>> : Prisma__failedsubjectClient<failedsubjectGetPayload<T> | null, null>

    /**
     * Find one Failedsubject that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {failedsubjectFindUniqueOrThrowArgs} args - Arguments to find a Failedsubject
     * @example
     * // Get one Failedsubject
     * const failedsubject = await prisma.failedsubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends failedsubjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, failedsubjectFindUniqueOrThrowArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Find the first Failedsubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failedsubjectFindFirstArgs} args - Arguments to find a Failedsubject
     * @example
     * // Get one Failedsubject
     * const failedsubject = await prisma.failedsubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends failedsubjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, failedsubjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'failedsubject'> extends True ? Prisma__failedsubjectClient<failedsubjectGetPayload<T>> : Prisma__failedsubjectClient<failedsubjectGetPayload<T> | null, null>

    /**
     * Find the first Failedsubject that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failedsubjectFindFirstOrThrowArgs} args - Arguments to find a Failedsubject
     * @example
     * // Get one Failedsubject
     * const failedsubject = await prisma.failedsubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends failedsubjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, failedsubjectFindFirstOrThrowArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Find zero or more Failedsubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failedsubjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failedsubjects
     * const failedsubjects = await prisma.failedsubject.findMany()
     * 
     * // Get first 10 Failedsubjects
     * const failedsubjects = await prisma.failedsubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failedsubjectWithIdOnly = await prisma.failedsubject.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends failedsubjectFindManyArgs>(
      args?: SelectSubset<T, failedsubjectFindManyArgs>
    ): PrismaPromise<Array<failedsubjectGetPayload<T>>>

    /**
     * Create a Failedsubject.
     * @param {failedsubjectCreateArgs} args - Arguments to create a Failedsubject.
     * @example
     * // Create one Failedsubject
     * const Failedsubject = await prisma.failedsubject.create({
     *   data: {
     *     // ... data to create a Failedsubject
     *   }
     * })
     * 
    **/
    create<T extends failedsubjectCreateArgs>(
      args: SelectSubset<T, failedsubjectCreateArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Create many Failedsubjects.
     *     @param {failedsubjectCreateManyArgs} args - Arguments to create many Failedsubjects.
     *     @example
     *     // Create many Failedsubjects
     *     const failedsubject = await prisma.failedsubject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends failedsubjectCreateManyArgs>(
      args?: SelectSubset<T, failedsubjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Failedsubject.
     * @param {failedsubjectDeleteArgs} args - Arguments to delete one Failedsubject.
     * @example
     * // Delete one Failedsubject
     * const Failedsubject = await prisma.failedsubject.delete({
     *   where: {
     *     // ... filter to delete one Failedsubject
     *   }
     * })
     * 
    **/
    delete<T extends failedsubjectDeleteArgs>(
      args: SelectSubset<T, failedsubjectDeleteArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Update one Failedsubject.
     * @param {failedsubjectUpdateArgs} args - Arguments to update one Failedsubject.
     * @example
     * // Update one Failedsubject
     * const failedsubject = await prisma.failedsubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends failedsubjectUpdateArgs>(
      args: SelectSubset<T, failedsubjectUpdateArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Delete zero or more Failedsubjects.
     * @param {failedsubjectDeleteManyArgs} args - Arguments to filter Failedsubjects to delete.
     * @example
     * // Delete a few Failedsubjects
     * const { count } = await prisma.failedsubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends failedsubjectDeleteManyArgs>(
      args?: SelectSubset<T, failedsubjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failedsubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failedsubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failedsubjects
     * const failedsubject = await prisma.failedsubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends failedsubjectUpdateManyArgs>(
      args: SelectSubset<T, failedsubjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Failedsubject.
     * @param {failedsubjectUpsertArgs} args - Arguments to update or create a Failedsubject.
     * @example
     * // Update or create a Failedsubject
     * const failedsubject = await prisma.failedsubject.upsert({
     *   create: {
     *     // ... data to create a Failedsubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failedsubject we want to update
     *   }
     * })
    **/
    upsert<T extends failedsubjectUpsertArgs>(
      args: SelectSubset<T, failedsubjectUpsertArgs>
    ): Prisma__failedsubjectClient<failedsubjectGetPayload<T>>

    /**
     * Count the number of Failedsubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failedsubjectCountArgs} args - Arguments to filter Failedsubjects to count.
     * @example
     * // Count the number of Failedsubjects
     * const count = await prisma.failedsubject.count({
     *   where: {
     *     // ... the filter for the Failedsubjects we want to count
     *   }
     * })
    **/
    count<T extends failedsubjectCountArgs>(
      args?: Subset<T, failedsubjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailedsubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failedsubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedsubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FailedsubjectAggregateArgs>(args: Subset<T, FailedsubjectAggregateArgs>): PrismaPromise<GetFailedsubjectAggregateType<T>>

    /**
     * Group by Failedsubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedsubjectGroupByArgs} args - Group by arguments.
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
      T extends FailedsubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailedsubjectGroupByArgs['orderBy'] }
        : { orderBy?: FailedsubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FailedsubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailedsubjectGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for failedsubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__failedsubjectClient<T, Null = never> implements PrismaPromise<T> {
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

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * failedsubject base type for findUnique actions
   */
  export type failedsubjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter, which failedsubject to fetch.
     */
    where: failedsubjectWhereUniqueInput
  }

  /**
   * failedsubject findUnique
   */
  export interface failedsubjectFindUniqueArgs extends failedsubjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * failedsubject findUniqueOrThrow
   */
  export type failedsubjectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter, which failedsubject to fetch.
     */
    where: failedsubjectWhereUniqueInput
  }


  /**
   * failedsubject base type for findFirst actions
   */
  export type failedsubjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter, which failedsubject to fetch.
     */
    where?: failedsubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failedsubjects to fetch.
     */
    orderBy?: Enumerable<failedsubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failedsubjects.
     */
    cursor?: failedsubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failedsubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failedsubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failedsubjects.
     */
    distinct?: Enumerable<FailedsubjectScalarFieldEnum>
  }

  /**
   * failedsubject findFirst
   */
  export interface failedsubjectFindFirstArgs extends failedsubjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * failedsubject findFirstOrThrow
   */
  export type failedsubjectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter, which failedsubject to fetch.
     */
    where?: failedsubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failedsubjects to fetch.
     */
    orderBy?: Enumerable<failedsubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failedsubjects.
     */
    cursor?: failedsubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failedsubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failedsubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failedsubjects.
     */
    distinct?: Enumerable<FailedsubjectScalarFieldEnum>
  }


  /**
   * failedsubject findMany
   */
  export type failedsubjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter, which failedsubjects to fetch.
     */
    where?: failedsubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failedsubjects to fetch.
     */
    orderBy?: Enumerable<failedsubjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failedsubjects.
     */
    cursor?: failedsubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failedsubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failedsubjects.
     */
    skip?: number
    distinct?: Enumerable<FailedsubjectScalarFieldEnum>
  }


  /**
   * failedsubject create
   */
  export type failedsubjectCreateArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * The data needed to create a failedsubject.
     */
    data: XOR<failedsubjectCreateInput, failedsubjectUncheckedCreateInput>
  }


  /**
   * failedsubject createMany
   */
  export type failedsubjectCreateManyArgs = {
    /**
     * The data used to create many failedsubjects.
     */
    data: Enumerable<failedsubjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * failedsubject update
   */
  export type failedsubjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * The data needed to update a failedsubject.
     */
    data: XOR<failedsubjectUpdateInput, failedsubjectUncheckedUpdateInput>
    /**
     * Choose, which failedsubject to update.
     */
    where: failedsubjectWhereUniqueInput
  }


  /**
   * failedsubject updateMany
   */
  export type failedsubjectUpdateManyArgs = {
    /**
     * The data used to update failedsubjects.
     */
    data: XOR<failedsubjectUpdateManyMutationInput, failedsubjectUncheckedUpdateManyInput>
    /**
     * Filter which failedsubjects to update
     */
    where?: failedsubjectWhereInput
  }


  /**
   * failedsubject upsert
   */
  export type failedsubjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * The filter to search for the failedsubject to update in case it exists.
     */
    where: failedsubjectWhereUniqueInput
    /**
     * In case the failedsubject found by the `where` argument doesn't exist, create a new failedsubject with this data.
     */
    create: XOR<failedsubjectCreateInput, failedsubjectUncheckedCreateInput>
    /**
     * In case the failedsubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<failedsubjectUpdateInput, failedsubjectUncheckedUpdateInput>
  }


  /**
   * failedsubject delete
   */
  export type failedsubjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
    /**
     * Filter which failedsubject to delete.
     */
    where: failedsubjectWhereUniqueInput
  }


  /**
   * failedsubject deleteMany
   */
  export type failedsubjectDeleteManyArgs = {
    /**
     * Filter which failedsubjects to delete
     */
    where?: failedsubjectWhereInput
  }


  /**
   * failedsubject without action
   */
  export type failedsubjectArgs = {
    /**
     * Select specific fields to fetch from the failedsubject
     */
    select?: failedsubjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: failedsubjectInclude | null
  }



  /**
   * Model meeting
   */


  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    mid: number | null
    tsid: number | null
  }

  export type MeetingSumAggregateOutputType = {
    mid: number | null
    tsid: number | null
  }

  export type MeetingMinAggregateOutputType = {
    mid: number | null
    reason: string | null
    status: string | null
    referedTo: string | null
    tsid: number | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    date: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    mid: number | null
    reason: string | null
    status: string | null
    referedTo: string | null
    tsid: number | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    date: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    mid: number
    reason: number
    status: number
    referedTo: number
    tsid: number
    regNo: number
    adminId: number
    parentId: number
    date: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    mid?: true
    tsid?: true
  }

  export type MeetingSumAggregateInputType = {
    mid?: true
    tsid?: true
  }

  export type MeetingMinAggregateInputType = {
    mid?: true
    reason?: true
    status?: true
    referedTo?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    date?: true
  }

  export type MeetingMaxAggregateInputType = {
    mid?: true
    reason?: true
    status?: true
    referedTo?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    date?: true
  }

  export type MeetingCountAggregateInputType = {
    mid?: true
    reason?: true
    status?: true
    referedTo?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    date?: true
    _all?: true
  }

  export type MeetingAggregateArgs = {
    /**
     * Filter which meeting to aggregate.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetings
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
    where?: meetingWhereInput
    orderBy?: Enumerable<meetingOrderByWithAggregationInput>
    by: MeetingScalarFieldEnum[]
    having?: meetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }


  export type MeetingGroupByOutputType = {
    mid: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    date: Date
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


  export type meetingSelect = {
    mid?: boolean
    reason?: boolean
    status?: boolean
    referedTo?: boolean
    tsid?: boolean
    regNo?: boolean
    adminId?: boolean
    parentId?: boolean
    date?: boolean
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
    timeslot?: boolean | timeslotArgs
  }


  export type meetingInclude = {
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
    timeslot?: boolean | timeslotArgs
  }

  export type meetingGetPayload<S extends boolean | null | undefined | meetingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? meeting :
    S extends undefined ? never :
    S extends { include: any } & (meetingArgs | meetingFindManyArgs)
    ? meeting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin' ? adminGetPayload<S['include'][P]> :
        P extends 'parent' ? parentGetPayload<S['include'][P]> :
        P extends 'student' ? studentGetPayload<S['include'][P]> :
        P extends 'timeslot' ? timeslotGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (meetingArgs | meetingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin' ? adminGetPayload<S['select'][P]> :
        P extends 'parent' ? parentGetPayload<S['select'][P]> :
        P extends 'student' ? studentGetPayload<S['select'][P]> :
        P extends 'timeslot' ? timeslotGetPayload<S['select'][P]> :  P extends keyof meeting ? meeting[P] : never
  } 
      : meeting


  type meetingCountArgs = 
    Omit<meetingFindManyArgs, 'select' | 'include'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface meetingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Meeting that matches the filter.
     * @param {meetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends meetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, meetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'meeting'> extends True ? Prisma__meetingClient<meetingGetPayload<T>> : Prisma__meetingClient<meetingGetPayload<T> | null, null>

    /**
     * Find one Meeting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {meetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends meetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, meetingFindUniqueOrThrowArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends meetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, meetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'meeting'> extends True ? Prisma__meetingClient<meetingGetPayload<T>> : Prisma__meetingClient<meetingGetPayload<T> | null, null>

    /**
     * Find the first Meeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends meetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, meetingFindFirstOrThrowArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `mid`
     * const meetingWithMidOnly = await prisma.meeting.findMany({ select: { mid: true } })
     * 
    **/
    findMany<T extends meetingFindManyArgs>(
      args?: SelectSubset<T, meetingFindManyArgs>
    ): PrismaPromise<Array<meetingGetPayload<T>>>

    /**
     * Create a Meeting.
     * @param {meetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
    **/
    create<T extends meetingCreateArgs>(
      args: SelectSubset<T, meetingCreateArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Create many Meetings.
     *     @param {meetingCreateManyArgs} args - Arguments to create many Meetings.
     *     @example
     *     // Create many Meetings
     *     const meeting = await prisma.meeting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends meetingCreateManyArgs>(
      args?: SelectSubset<T, meetingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Meeting.
     * @param {meetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
    **/
    delete<T extends meetingDeleteArgs>(
      args: SelectSubset<T, meetingDeleteArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Update one Meeting.
     * @param {meetingUpdateArgs} args - Arguments to update one Meeting.
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
    update<T extends meetingUpdateArgs>(
      args: SelectSubset<T, meetingUpdateArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Delete zero or more Meetings.
     * @param {meetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends meetingDeleteManyArgs>(
      args?: SelectSubset<T, meetingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends meetingUpdateManyArgs>(
      args: SelectSubset<T, meetingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {meetingUpsertArgs} args - Arguments to update or create a Meeting.
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
    upsert<T extends meetingUpsertArgs>(
      args: SelectSubset<T, meetingUpsertArgs>
    ): Prisma__meetingClient<meetingGetPayload<T>>

    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends meetingCountArgs>(
      args?: Subset<T, meetingCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__meetingClient<T, Null = never> implements PrismaPromise<T> {
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

    admin<T extends adminArgs= {}>(args?: Subset<T, adminArgs>): Prisma__adminClient<adminGetPayload<T> | Null>;

    parent<T extends parentArgs= {}>(args?: Subset<T, parentArgs>): Prisma__parentClient<parentGetPayload<T> | Null>;

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

    timeslot<T extends timeslotArgs= {}>(args?: Subset<T, timeslotArgs>): Prisma__timeslotClient<timeslotGetPayload<T> | Null>;

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
   * meeting base type for findUnique actions
   */
  export type meetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting findUnique
   */
  export interface meetingFindUniqueArgs extends meetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * meeting findUniqueOrThrow
   */
  export type meetingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }


  /**
   * meeting base type for findFirst actions
   */
  export type meetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }

  /**
   * meeting findFirst
   */
  export interface meetingFindFirstArgs extends meetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * meeting findFirstOrThrow
   */
  export type meetingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * meeting findMany
   */
  export type meetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: Enumerable<meetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    distinct?: Enumerable<MeetingScalarFieldEnum>
  }


  /**
   * meeting create
   */
  export type meetingCreateArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * The data needed to create a meeting.
     */
    data: XOR<meetingCreateInput, meetingUncheckedCreateInput>
  }


  /**
   * meeting createMany
   */
  export type meetingCreateManyArgs = {
    /**
     * The data used to create many meetings.
     */
    data: Enumerable<meetingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * meeting update
   */
  export type meetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * The data needed to update a meeting.
     */
    data: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
    /**
     * Choose, which meeting to update.
     */
    where: meetingWhereUniqueInput
  }


  /**
   * meeting updateMany
   */
  export type meetingUpdateManyArgs = {
    /**
     * The data used to update meetings.
     */
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyInput>
    /**
     * Filter which meetings to update
     */
    where?: meetingWhereInput
  }


  /**
   * meeting upsert
   */
  export type meetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * The filter to search for the meeting to update in case it exists.
     */
    where: meetingWhereUniqueInput
    /**
     * In case the meeting found by the `where` argument doesn't exist, create a new meeting with this data.
     */
    create: XOR<meetingCreateInput, meetingUncheckedCreateInput>
    /**
     * In case the meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
  }


  /**
   * meeting delete
   */
  export type meetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
    /**
     * Filter which meeting to delete.
     */
    where: meetingWhereUniqueInput
  }


  /**
   * meeting deleteMany
   */
  export type meetingDeleteManyArgs = {
    /**
     * Filter which meetings to delete
     */
    where?: meetingWhereInput
  }


  /**
   * meeting without action
   */
  export type meetingArgs = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: meetingInclude | null
  }



  /**
   * Model waitinglist
   */


  export type AggregateWaitinglist = {
    _count: WaitinglistCountAggregateOutputType | null
    _avg: WaitinglistAvgAggregateOutputType | null
    _sum: WaitinglistSumAggregateOutputType | null
    _min: WaitinglistMinAggregateOutputType | null
    _max: WaitinglistMaxAggregateOutputType | null
  }

  export type WaitinglistAvgAggregateOutputType = {
    id: number | null
    tsid: number | null
  }

  export type WaitinglistSumAggregateOutputType = {
    id: number | null
    tsid: number | null
  }

  export type WaitinglistMinAggregateOutputType = {
    id: number | null
    reason: string | null
    date: Date | null
    tsid: number | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    status: string | null
  }

  export type WaitinglistMaxAggregateOutputType = {
    id: number | null
    reason: string | null
    date: Date | null
    tsid: number | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    status: string | null
  }

  export type WaitinglistCountAggregateOutputType = {
    id: number
    reason: number
    date: number
    tsid: number
    regNo: number
    adminId: number
    parentId: number
    status: number
    _all: number
  }


  export type WaitinglistAvgAggregateInputType = {
    id?: true
    tsid?: true
  }

  export type WaitinglistSumAggregateInputType = {
    id?: true
    tsid?: true
  }

  export type WaitinglistMinAggregateInputType = {
    id?: true
    reason?: true
    date?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    status?: true
  }

  export type WaitinglistMaxAggregateInputType = {
    id?: true
    reason?: true
    date?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    status?: true
  }

  export type WaitinglistCountAggregateInputType = {
    id?: true
    reason?: true
    date?: true
    tsid?: true
    regNo?: true
    adminId?: true
    parentId?: true
    status?: true
    _all?: true
  }

  export type WaitinglistAggregateArgs = {
    /**
     * Filter which waitinglist to aggregate.
     */
    where?: waitinglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitinglists to fetch.
     */
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waitinglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitinglists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitinglists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waitinglists
    **/
    _count?: true | WaitinglistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitinglistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitinglistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitinglistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitinglistMaxAggregateInputType
  }

  export type GetWaitinglistAggregateType<T extends WaitinglistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitinglist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitinglist[P]>
      : GetScalarType<T[P], AggregateWaitinglist[P]>
  }




  export type WaitinglistGroupByArgs = {
    where?: waitinglistWhereInput
    orderBy?: Enumerable<waitinglistOrderByWithAggregationInput>
    by: WaitinglistScalarFieldEnum[]
    having?: waitinglistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitinglistCountAggregateInputType | true
    _avg?: WaitinglistAvgAggregateInputType
    _sum?: WaitinglistSumAggregateInputType
    _min?: WaitinglistMinAggregateInputType
    _max?: WaitinglistMaxAggregateInputType
  }


  export type WaitinglistGroupByOutputType = {
    id: number
    reason: string
    date: Date
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    status: string | null
    _count: WaitinglistCountAggregateOutputType | null
    _avg: WaitinglistAvgAggregateOutputType | null
    _sum: WaitinglistSumAggregateOutputType | null
    _min: WaitinglistMinAggregateOutputType | null
    _max: WaitinglistMaxAggregateOutputType | null
  }

  type GetWaitinglistGroupByPayload<T extends WaitinglistGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WaitinglistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitinglistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitinglistGroupByOutputType[P]>
            : GetScalarType<T[P], WaitinglistGroupByOutputType[P]>
        }
      >
    >


  export type waitinglistSelect = {
    id?: boolean
    reason?: boolean
    date?: boolean
    tsid?: boolean
    regNo?: boolean
    adminId?: boolean
    parentId?: boolean
    status?: boolean
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }


  export type waitinglistInclude = {
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }

  export type waitinglistGetPayload<S extends boolean | null | undefined | waitinglistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? waitinglist :
    S extends undefined ? never :
    S extends { include: any } & (waitinglistArgs | waitinglistFindManyArgs)
    ? waitinglist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin' ? adminGetPayload<S['include'][P]> :
        P extends 'parent' ? parentGetPayload<S['include'][P]> :
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (waitinglistArgs | waitinglistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin' ? adminGetPayload<S['select'][P]> :
        P extends 'parent' ? parentGetPayload<S['select'][P]> :
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof waitinglist ? waitinglist[P] : never
  } 
      : waitinglist


  type waitinglistCountArgs = 
    Omit<waitinglistFindManyArgs, 'select' | 'include'> & {
      select?: WaitinglistCountAggregateInputType | true
    }

  export interface waitinglistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Waitinglist that matches the filter.
     * @param {waitinglistFindUniqueArgs} args - Arguments to find a Waitinglist
     * @example
     * // Get one Waitinglist
     * const waitinglist = await prisma.waitinglist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends waitinglistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, waitinglistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'waitinglist'> extends True ? Prisma__waitinglistClient<waitinglistGetPayload<T>> : Prisma__waitinglistClient<waitinglistGetPayload<T> | null, null>

    /**
     * Find one Waitinglist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {waitinglistFindUniqueOrThrowArgs} args - Arguments to find a Waitinglist
     * @example
     * // Get one Waitinglist
     * const waitinglist = await prisma.waitinglist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends waitinglistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, waitinglistFindUniqueOrThrowArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Find the first Waitinglist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitinglistFindFirstArgs} args - Arguments to find a Waitinglist
     * @example
     * // Get one Waitinglist
     * const waitinglist = await prisma.waitinglist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends waitinglistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, waitinglistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'waitinglist'> extends True ? Prisma__waitinglistClient<waitinglistGetPayload<T>> : Prisma__waitinglistClient<waitinglistGetPayload<T> | null, null>

    /**
     * Find the first Waitinglist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitinglistFindFirstOrThrowArgs} args - Arguments to find a Waitinglist
     * @example
     * // Get one Waitinglist
     * const waitinglist = await prisma.waitinglist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends waitinglistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, waitinglistFindFirstOrThrowArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Find zero or more Waitinglists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitinglistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waitinglists
     * const waitinglists = await prisma.waitinglist.findMany()
     * 
     * // Get first 10 Waitinglists
     * const waitinglists = await prisma.waitinglist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitinglistWithIdOnly = await prisma.waitinglist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends waitinglistFindManyArgs>(
      args?: SelectSubset<T, waitinglistFindManyArgs>
    ): PrismaPromise<Array<waitinglistGetPayload<T>>>

    /**
     * Create a Waitinglist.
     * @param {waitinglistCreateArgs} args - Arguments to create a Waitinglist.
     * @example
     * // Create one Waitinglist
     * const Waitinglist = await prisma.waitinglist.create({
     *   data: {
     *     // ... data to create a Waitinglist
     *   }
     * })
     * 
    **/
    create<T extends waitinglistCreateArgs>(
      args: SelectSubset<T, waitinglistCreateArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Create many Waitinglists.
     *     @param {waitinglistCreateManyArgs} args - Arguments to create many Waitinglists.
     *     @example
     *     // Create many Waitinglists
     *     const waitinglist = await prisma.waitinglist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends waitinglistCreateManyArgs>(
      args?: SelectSubset<T, waitinglistCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Waitinglist.
     * @param {waitinglistDeleteArgs} args - Arguments to delete one Waitinglist.
     * @example
     * // Delete one Waitinglist
     * const Waitinglist = await prisma.waitinglist.delete({
     *   where: {
     *     // ... filter to delete one Waitinglist
     *   }
     * })
     * 
    **/
    delete<T extends waitinglistDeleteArgs>(
      args: SelectSubset<T, waitinglistDeleteArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Update one Waitinglist.
     * @param {waitinglistUpdateArgs} args - Arguments to update one Waitinglist.
     * @example
     * // Update one Waitinglist
     * const waitinglist = await prisma.waitinglist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends waitinglistUpdateArgs>(
      args: SelectSubset<T, waitinglistUpdateArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Delete zero or more Waitinglists.
     * @param {waitinglistDeleteManyArgs} args - Arguments to filter Waitinglists to delete.
     * @example
     * // Delete a few Waitinglists
     * const { count } = await prisma.waitinglist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends waitinglistDeleteManyArgs>(
      args?: SelectSubset<T, waitinglistDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitinglists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitinglistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waitinglists
     * const waitinglist = await prisma.waitinglist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends waitinglistUpdateManyArgs>(
      args: SelectSubset<T, waitinglistUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Waitinglist.
     * @param {waitinglistUpsertArgs} args - Arguments to update or create a Waitinglist.
     * @example
     * // Update or create a Waitinglist
     * const waitinglist = await prisma.waitinglist.upsert({
     *   create: {
     *     // ... data to create a Waitinglist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waitinglist we want to update
     *   }
     * })
    **/
    upsert<T extends waitinglistUpsertArgs>(
      args: SelectSubset<T, waitinglistUpsertArgs>
    ): Prisma__waitinglistClient<waitinglistGetPayload<T>>

    /**
     * Count the number of Waitinglists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitinglistCountArgs} args - Arguments to filter Waitinglists to count.
     * @example
     * // Count the number of Waitinglists
     * const count = await prisma.waitinglist.count({
     *   where: {
     *     // ... the filter for the Waitinglists we want to count
     *   }
     * })
    **/
    count<T extends waitinglistCountArgs>(
      args?: Subset<T, waitinglistCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitinglistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waitinglist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitinglistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaitinglistAggregateArgs>(args: Subset<T, WaitinglistAggregateArgs>): PrismaPromise<GetWaitinglistAggregateType<T>>

    /**
     * Group by Waitinglist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitinglistGroupByArgs} args - Group by arguments.
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
      T extends WaitinglistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitinglistGroupByArgs['orderBy'] }
        : { orderBy?: WaitinglistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaitinglistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitinglistGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for waitinglist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__waitinglistClient<T, Null = never> implements PrismaPromise<T> {
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

    admin<T extends adminArgs= {}>(args?: Subset<T, adminArgs>): Prisma__adminClient<adminGetPayload<T> | Null>;

    parent<T extends parentArgs= {}>(args?: Subset<T, parentArgs>): Prisma__parentClient<parentGetPayload<T> | Null>;

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * waitinglist base type for findUnique actions
   */
  export type waitinglistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter, which waitinglist to fetch.
     */
    where: waitinglistWhereUniqueInput
  }

  /**
   * waitinglist findUnique
   */
  export interface waitinglistFindUniqueArgs extends waitinglistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * waitinglist findUniqueOrThrow
   */
  export type waitinglistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter, which waitinglist to fetch.
     */
    where: waitinglistWhereUniqueInput
  }


  /**
   * waitinglist base type for findFirst actions
   */
  export type waitinglistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter, which waitinglist to fetch.
     */
    where?: waitinglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitinglists to fetch.
     */
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitinglists.
     */
    cursor?: waitinglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitinglists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitinglists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitinglists.
     */
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }

  /**
   * waitinglist findFirst
   */
  export interface waitinglistFindFirstArgs extends waitinglistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * waitinglist findFirstOrThrow
   */
  export type waitinglistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter, which waitinglist to fetch.
     */
    where?: waitinglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitinglists to fetch.
     */
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitinglists.
     */
    cursor?: waitinglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitinglists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitinglists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitinglists.
     */
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }


  /**
   * waitinglist findMany
   */
  export type waitinglistFindManyArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter, which waitinglists to fetch.
     */
    where?: waitinglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitinglists to fetch.
     */
    orderBy?: Enumerable<waitinglistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waitinglists.
     */
    cursor?: waitinglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitinglists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitinglists.
     */
    skip?: number
    distinct?: Enumerable<WaitinglistScalarFieldEnum>
  }


  /**
   * waitinglist create
   */
  export type waitinglistCreateArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * The data needed to create a waitinglist.
     */
    data: XOR<waitinglistCreateInput, waitinglistUncheckedCreateInput>
  }


  /**
   * waitinglist createMany
   */
  export type waitinglistCreateManyArgs = {
    /**
     * The data used to create many waitinglists.
     */
    data: Enumerable<waitinglistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * waitinglist update
   */
  export type waitinglistUpdateArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * The data needed to update a waitinglist.
     */
    data: XOR<waitinglistUpdateInput, waitinglistUncheckedUpdateInput>
    /**
     * Choose, which waitinglist to update.
     */
    where: waitinglistWhereUniqueInput
  }


  /**
   * waitinglist updateMany
   */
  export type waitinglistUpdateManyArgs = {
    /**
     * The data used to update waitinglists.
     */
    data: XOR<waitinglistUpdateManyMutationInput, waitinglistUncheckedUpdateManyInput>
    /**
     * Filter which waitinglists to update
     */
    where?: waitinglistWhereInput
  }


  /**
   * waitinglist upsert
   */
  export type waitinglistUpsertArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * The filter to search for the waitinglist to update in case it exists.
     */
    where: waitinglistWhereUniqueInput
    /**
     * In case the waitinglist found by the `where` argument doesn't exist, create a new waitinglist with this data.
     */
    create: XOR<waitinglistCreateInput, waitinglistUncheckedCreateInput>
    /**
     * In case the waitinglist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waitinglistUpdateInput, waitinglistUncheckedUpdateInput>
  }


  /**
   * waitinglist delete
   */
  export type waitinglistDeleteArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
    /**
     * Filter which waitinglist to delete.
     */
    where: waitinglistWhereUniqueInput
  }


  /**
   * waitinglist deleteMany
   */
  export type waitinglistDeleteManyArgs = {
    /**
     * Filter which waitinglists to delete
     */
    where?: waitinglistWhereInput
  }


  /**
   * waitinglist without action
   */
  export type waitinglistArgs = {
    /**
     * Select specific fields to fetch from the waitinglist
     */
    select?: waitinglistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: waitinglistInclude | null
  }



  /**
   * Model history
   */


  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    hid: number | null
  }

  export type HistorySumAggregateOutputType = {
    hid: number | null
  }

  export type HistoryMinAggregateOutputType = {
    hid: number | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    reason: string | null
    status: Status | null
    referedTo: string | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    adminFeedback: string | null
    suggestion: string | null
  }

  export type HistoryMaxAggregateOutputType = {
    hid: number | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    reason: string | null
    status: Status | null
    referedTo: string | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
    adminFeedback: string | null
    suggestion: string | null
  }

  export type HistoryCountAggregateOutputType = {
    hid: number
    date: number
    startTime: number
    endTime: number
    reason: number
    status: number
    referedTo: number
    regNo: number
    adminId: number
    parentId: number
    adminFeedback: number
    suggestion: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    hid?: true
  }

  export type HistorySumAggregateInputType = {
    hid?: true
  }

  export type HistoryMinAggregateInputType = {
    hid?: true
    date?: true
    startTime?: true
    endTime?: true
    reason?: true
    status?: true
    referedTo?: true
    regNo?: true
    adminId?: true
    parentId?: true
    adminFeedback?: true
    suggestion?: true
  }

  export type HistoryMaxAggregateInputType = {
    hid?: true
    date?: true
    startTime?: true
    endTime?: true
    reason?: true
    status?: true
    referedTo?: true
    regNo?: true
    adminId?: true
    parentId?: true
    adminFeedback?: true
    suggestion?: true
  }

  export type HistoryCountAggregateInputType = {
    hid?: true
    date?: true
    startTime?: true
    endTime?: true
    reason?: true
    status?: true
    referedTo?: true
    regNo?: true
    adminId?: true
    parentId?: true
    adminFeedback?: true
    suggestion?: true
    _all?: true
  }

  export type HistoryAggregateArgs = {
    /**
     * Filter which history to aggregate.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs = {
    where?: historyWhereInput
    orderBy?: Enumerable<historyOrderByWithAggregationInput>
    by: HistoryScalarFieldEnum[]
    having?: historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }


  export type HistoryGroupByOutputType = {
    hid: number
    date: Date
    startTime: Date
    endTime: Date
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    parentId: string
    adminFeedback: string | null
    suggestion: string | null
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type historySelect = {
    hid?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    reason?: boolean
    status?: boolean
    referedTo?: boolean
    regNo?: boolean
    adminId?: boolean
    parentId?: boolean
    adminFeedback?: boolean
    suggestion?: boolean
    feedback?: boolean | feedbackArgs
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }


  export type historyInclude = {
    feedback?: boolean | feedbackArgs
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }

  export type historyGetPayload<S extends boolean | null | undefined | historyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? history :
    S extends undefined ? never :
    S extends { include: any } & (historyArgs | historyFindManyArgs)
    ? history  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'feedback' ? feedbackGetPayload<S['include'][P]> | null :
        P extends 'admin' ? adminGetPayload<S['include'][P]> :
        P extends 'parent' ? parentGetPayload<S['include'][P]> :
        P extends 'student' ? studentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (historyArgs | historyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'feedback' ? feedbackGetPayload<S['select'][P]> | null :
        P extends 'admin' ? adminGetPayload<S['select'][P]> :
        P extends 'parent' ? parentGetPayload<S['select'][P]> :
        P extends 'student' ? studentGetPayload<S['select'][P]> :  P extends keyof history ? history[P] : never
  } 
      : history


  type historyCountArgs = 
    Omit<historyFindManyArgs, 'select' | 'include'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface historyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one History that matches the filter.
     * @param {historyFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends historyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, historyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'history'> extends True ? Prisma__historyClient<historyGetPayload<T>> : Prisma__historyClient<historyGetPayload<T> | null, null>

    /**
     * Find one History that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {historyFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends historyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, historyFindUniqueOrThrowArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends historyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, historyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'history'> extends True ? Prisma__historyClient<historyGetPayload<T>> : Prisma__historyClient<historyGetPayload<T> | null, null>

    /**
     * Find the first History that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends historyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, historyFindFirstOrThrowArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `hid`
     * const historyWithHidOnly = await prisma.history.findMany({ select: { hid: true } })
     * 
    **/
    findMany<T extends historyFindManyArgs>(
      args?: SelectSubset<T, historyFindManyArgs>
    ): PrismaPromise<Array<historyGetPayload<T>>>

    /**
     * Create a History.
     * @param {historyCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
    **/
    create<T extends historyCreateArgs>(
      args: SelectSubset<T, historyCreateArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Create many Histories.
     *     @param {historyCreateManyArgs} args - Arguments to create many Histories.
     *     @example
     *     // Create many Histories
     *     const history = await prisma.history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends historyCreateManyArgs>(
      args?: SelectSubset<T, historyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {historyDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
    **/
    delete<T extends historyDeleteArgs>(
      args: SelectSubset<T, historyDeleteArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Update one History.
     * @param {historyUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends historyUpdateArgs>(
      args: SelectSubset<T, historyUpdateArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Delete zero or more Histories.
     * @param {historyDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends historyDeleteManyArgs>(
      args?: SelectSubset<T, historyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends historyUpdateManyArgs>(
      args: SelectSubset<T, historyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {historyUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
    **/
    upsert<T extends historyUpsertArgs>(
      args: SelectSubset<T, historyUpsertArgs>
    ): Prisma__historyClient<historyGetPayload<T>>

    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends historyCountArgs>(
      args?: Subset<T, historyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__historyClient<T, Null = never> implements PrismaPromise<T> {
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

    feedback<T extends feedbackArgs= {}>(args?: Subset<T, feedbackArgs>): Prisma__feedbackClient<feedbackGetPayload<T> | Null>;

    admin<T extends adminArgs= {}>(args?: Subset<T, adminArgs>): Prisma__adminClient<adminGetPayload<T> | Null>;

    parent<T extends parentArgs= {}>(args?: Subset<T, parentArgs>): Prisma__parentClient<parentGetPayload<T> | Null>;

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * history base type for findUnique actions
   */
  export type historyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history findUnique
   */
  export interface historyFindUniqueArgs extends historyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * history findUniqueOrThrow
   */
  export type historyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history base type for findFirst actions
   */
  export type historyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }

  /**
   * history findFirst
   */
  export interface historyFindFirstArgs extends historyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * history findFirstOrThrow
   */
  export type historyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }


  /**
   * history findMany
   */
  export type historyFindManyArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter, which histories to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: Enumerable<historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    distinct?: Enumerable<HistoryScalarFieldEnum>
  }


  /**
   * history create
   */
  export type historyCreateArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * The data needed to create a history.
     */
    data: XOR<historyCreateInput, historyUncheckedCreateInput>
  }


  /**
   * history createMany
   */
  export type historyCreateManyArgs = {
    /**
     * The data used to create many histories.
     */
    data: Enumerable<historyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * history update
   */
  export type historyUpdateArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * The data needed to update a history.
     */
    data: XOR<historyUpdateInput, historyUncheckedUpdateInput>
    /**
     * Choose, which history to update.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history updateMany
   */
  export type historyUpdateManyArgs = {
    /**
     * The data used to update histories.
     */
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyInput>
    /**
     * Filter which histories to update
     */
    where?: historyWhereInput
  }


  /**
   * history upsert
   */
  export type historyUpsertArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * The filter to search for the history to update in case it exists.
     */
    where: historyWhereUniqueInput
    /**
     * In case the history found by the `where` argument doesn't exist, create a new history with this data.
     */
    create: XOR<historyCreateInput, historyUncheckedCreateInput>
    /**
     * In case the history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historyUpdateInput, historyUncheckedUpdateInput>
  }


  /**
   * history delete
   */
  export type historyDeleteArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
    /**
     * Filter which history to delete.
     */
    where: historyWhereUniqueInput
  }


  /**
   * history deleteMany
   */
  export type historyDeleteManyArgs = {
    /**
     * Filter which histories to delete
     */
    where?: historyWhereInput
  }


  /**
   * history without action
   */
  export type historyArgs = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: historyInclude | null
  }



  /**
   * Model userlogin
   */


  export type AggregateUserlogin = {
    _count: UserloginCountAggregateOutputType | null
    _avg: UserloginAvgAggregateOutputType | null
    _sum: UserloginSumAggregateOutputType | null
    _min: UserloginMinAggregateOutputType | null
    _max: UserloginMaxAggregateOutputType | null
  }

  export type UserloginAvgAggregateOutputType = {
    id: number | null
  }

  export type UserloginSumAggregateOutputType = {
    id: number | null
  }

  export type UserloginMinAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    email: string | null
    role: Role | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
  }

  export type UserloginMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    email: string | null
    role: Role | null
    regNo: string | null
    adminId: string | null
    parentId: string | null
  }

  export type UserloginCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    email: number
    role: number
    regNo: number
    adminId: number
    parentId: number
    _all: number
  }


  export type UserloginAvgAggregateInputType = {
    id?: true
  }

  export type UserloginSumAggregateInputType = {
    id?: true
  }

  export type UserloginMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    regNo?: true
    adminId?: true
    parentId?: true
  }

  export type UserloginMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    regNo?: true
    adminId?: true
    parentId?: true
  }

  export type UserloginCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    email?: true
    role?: true
    regNo?: true
    adminId?: true
    parentId?: true
    _all?: true
  }

  export type UserloginAggregateArgs = {
    /**
     * Filter which userlogin to aggregate.
     */
    where?: userloginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userlogins to fetch.
     */
    orderBy?: Enumerable<userloginOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userloginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userlogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userlogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userlogins
    **/
    _count?: true | UserloginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserloginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserloginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserloginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserloginMaxAggregateInputType
  }

  export type GetUserloginAggregateType<T extends UserloginAggregateArgs> = {
        [P in keyof T & keyof AggregateUserlogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserlogin[P]>
      : GetScalarType<T[P], AggregateUserlogin[P]>
  }




  export type UserloginGroupByArgs = {
    where?: userloginWhereInput
    orderBy?: Enumerable<userloginOrderByWithAggregationInput>
    by: UserloginScalarFieldEnum[]
    having?: userloginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserloginCountAggregateInputType | true
    _avg?: UserloginAvgAggregateInputType
    _sum?: UserloginSumAggregateInputType
    _min?: UserloginMinAggregateInputType
    _max?: UserloginMaxAggregateInputType
  }


  export type UserloginGroupByOutputType = {
    id: number
    userName: string
    password: string
    email: string
    role: Role
    regNo: string | null
    adminId: string | null
    parentId: string | null
    _count: UserloginCountAggregateOutputType | null
    _avg: UserloginAvgAggregateOutputType | null
    _sum: UserloginSumAggregateOutputType | null
    _min: UserloginMinAggregateOutputType | null
    _max: UserloginMaxAggregateOutputType | null
  }

  type GetUserloginGroupByPayload<T extends UserloginGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserloginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserloginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserloginGroupByOutputType[P]>
            : GetScalarType<T[P], UserloginGroupByOutputType[P]>
        }
      >
    >


  export type userloginSelect = {
    id?: boolean
    userName?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    regNo?: boolean
    adminId?: boolean
    parentId?: boolean
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }


  export type userloginInclude = {
    admin?: boolean | adminArgs
    parent?: boolean | parentArgs
    student?: boolean | studentArgs
  }

  export type userloginGetPayload<S extends boolean | null | undefined | userloginArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? userlogin :
    S extends undefined ? never :
    S extends { include: any } & (userloginArgs | userloginFindManyArgs)
    ? userlogin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'admin' ? adminGetPayload<S['include'][P]> | null :
        P extends 'parent' ? parentGetPayload<S['include'][P]> | null :
        P extends 'student' ? studentGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (userloginArgs | userloginFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'admin' ? adminGetPayload<S['select'][P]> | null :
        P extends 'parent' ? parentGetPayload<S['select'][P]> | null :
        P extends 'student' ? studentGetPayload<S['select'][P]> | null :  P extends keyof userlogin ? userlogin[P] : never
  } 
      : userlogin


  type userloginCountArgs = 
    Omit<userloginFindManyArgs, 'select' | 'include'> & {
      select?: UserloginCountAggregateInputType | true
    }

  export interface userloginDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Userlogin that matches the filter.
     * @param {userloginFindUniqueArgs} args - Arguments to find a Userlogin
     * @example
     * // Get one Userlogin
     * const userlogin = await prisma.userlogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userloginFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userloginFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'userlogin'> extends True ? Prisma__userloginClient<userloginGetPayload<T>> : Prisma__userloginClient<userloginGetPayload<T> | null, null>

    /**
     * Find one Userlogin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userloginFindUniqueOrThrowArgs} args - Arguments to find a Userlogin
     * @example
     * // Get one Userlogin
     * const userlogin = await prisma.userlogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userloginFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userloginFindUniqueOrThrowArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Find the first Userlogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userloginFindFirstArgs} args - Arguments to find a Userlogin
     * @example
     * // Get one Userlogin
     * const userlogin = await prisma.userlogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userloginFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userloginFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'userlogin'> extends True ? Prisma__userloginClient<userloginGetPayload<T>> : Prisma__userloginClient<userloginGetPayload<T> | null, null>

    /**
     * Find the first Userlogin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userloginFindFirstOrThrowArgs} args - Arguments to find a Userlogin
     * @example
     * // Get one Userlogin
     * const userlogin = await prisma.userlogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userloginFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userloginFindFirstOrThrowArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Find zero or more Userlogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userloginFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userlogins
     * const userlogins = await prisma.userlogin.findMany()
     * 
     * // Get first 10 Userlogins
     * const userlogins = await prisma.userlogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userloginWithIdOnly = await prisma.userlogin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userloginFindManyArgs>(
      args?: SelectSubset<T, userloginFindManyArgs>
    ): PrismaPromise<Array<userloginGetPayload<T>>>

    /**
     * Create a Userlogin.
     * @param {userloginCreateArgs} args - Arguments to create a Userlogin.
     * @example
     * // Create one Userlogin
     * const Userlogin = await prisma.userlogin.create({
     *   data: {
     *     // ... data to create a Userlogin
     *   }
     * })
     * 
    **/
    create<T extends userloginCreateArgs>(
      args: SelectSubset<T, userloginCreateArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Create many Userlogins.
     *     @param {userloginCreateManyArgs} args - Arguments to create many Userlogins.
     *     @example
     *     // Create many Userlogins
     *     const userlogin = await prisma.userlogin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userloginCreateManyArgs>(
      args?: SelectSubset<T, userloginCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Userlogin.
     * @param {userloginDeleteArgs} args - Arguments to delete one Userlogin.
     * @example
     * // Delete one Userlogin
     * const Userlogin = await prisma.userlogin.delete({
     *   where: {
     *     // ... filter to delete one Userlogin
     *   }
     * })
     * 
    **/
    delete<T extends userloginDeleteArgs>(
      args: SelectSubset<T, userloginDeleteArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Update one Userlogin.
     * @param {userloginUpdateArgs} args - Arguments to update one Userlogin.
     * @example
     * // Update one Userlogin
     * const userlogin = await prisma.userlogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userloginUpdateArgs>(
      args: SelectSubset<T, userloginUpdateArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Delete zero or more Userlogins.
     * @param {userloginDeleteManyArgs} args - Arguments to filter Userlogins to delete.
     * @example
     * // Delete a few Userlogins
     * const { count } = await prisma.userlogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userloginDeleteManyArgs>(
      args?: SelectSubset<T, userloginDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userlogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userloginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userlogins
     * const userlogin = await prisma.userlogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userloginUpdateManyArgs>(
      args: SelectSubset<T, userloginUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Userlogin.
     * @param {userloginUpsertArgs} args - Arguments to update or create a Userlogin.
     * @example
     * // Update or create a Userlogin
     * const userlogin = await prisma.userlogin.upsert({
     *   create: {
     *     // ... data to create a Userlogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userlogin we want to update
     *   }
     * })
    **/
    upsert<T extends userloginUpsertArgs>(
      args: SelectSubset<T, userloginUpsertArgs>
    ): Prisma__userloginClient<userloginGetPayload<T>>

    /**
     * Count the number of Userlogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userloginCountArgs} args - Arguments to filter Userlogins to count.
     * @example
     * // Count the number of Userlogins
     * const count = await prisma.userlogin.count({
     *   where: {
     *     // ... the filter for the Userlogins we want to count
     *   }
     * })
    **/
    count<T extends userloginCountArgs>(
      args?: Subset<T, userloginCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserloginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userlogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserloginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserloginAggregateArgs>(args: Subset<T, UserloginAggregateArgs>): PrismaPromise<GetUserloginAggregateType<T>>

    /**
     * Group by Userlogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserloginGroupByArgs} args - Group by arguments.
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
      T extends UserloginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserloginGroupByArgs['orderBy'] }
        : { orderBy?: UserloginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserloginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserloginGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for userlogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userloginClient<T, Null = never> implements PrismaPromise<T> {
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

    admin<T extends adminArgs= {}>(args?: Subset<T, adminArgs>): Prisma__adminClient<adminGetPayload<T> | Null>;

    parent<T extends parentArgs= {}>(args?: Subset<T, parentArgs>): Prisma__parentClient<parentGetPayload<T> | Null>;

    student<T extends studentArgs= {}>(args?: Subset<T, studentArgs>): Prisma__studentClient<studentGetPayload<T> | Null>;

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
   * userlogin base type for findUnique actions
   */
  export type userloginFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter, which userlogin to fetch.
     */
    where: userloginWhereUniqueInput
  }

  /**
   * userlogin findUnique
   */
  export interface userloginFindUniqueArgs extends userloginFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userlogin findUniqueOrThrow
   */
  export type userloginFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter, which userlogin to fetch.
     */
    where: userloginWhereUniqueInput
  }


  /**
   * userlogin base type for findFirst actions
   */
  export type userloginFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter, which userlogin to fetch.
     */
    where?: userloginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userlogins to fetch.
     */
    orderBy?: Enumerable<userloginOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userlogins.
     */
    cursor?: userloginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userlogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userlogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userlogins.
     */
    distinct?: Enumerable<UserloginScalarFieldEnum>
  }

  /**
   * userlogin findFirst
   */
  export interface userloginFindFirstArgs extends userloginFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userlogin findFirstOrThrow
   */
  export type userloginFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter, which userlogin to fetch.
     */
    where?: userloginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userlogins to fetch.
     */
    orderBy?: Enumerable<userloginOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userlogins.
     */
    cursor?: userloginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userlogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userlogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userlogins.
     */
    distinct?: Enumerable<UserloginScalarFieldEnum>
  }


  /**
   * userlogin findMany
   */
  export type userloginFindManyArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter, which userlogins to fetch.
     */
    where?: userloginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userlogins to fetch.
     */
    orderBy?: Enumerable<userloginOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userlogins.
     */
    cursor?: userloginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userlogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userlogins.
     */
    skip?: number
    distinct?: Enumerable<UserloginScalarFieldEnum>
  }


  /**
   * userlogin create
   */
  export type userloginCreateArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * The data needed to create a userlogin.
     */
    data: XOR<userloginCreateInput, userloginUncheckedCreateInput>
  }


  /**
   * userlogin createMany
   */
  export type userloginCreateManyArgs = {
    /**
     * The data used to create many userlogins.
     */
    data: Enumerable<userloginCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * userlogin update
   */
  export type userloginUpdateArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * The data needed to update a userlogin.
     */
    data: XOR<userloginUpdateInput, userloginUncheckedUpdateInput>
    /**
     * Choose, which userlogin to update.
     */
    where: userloginWhereUniqueInput
  }


  /**
   * userlogin updateMany
   */
  export type userloginUpdateManyArgs = {
    /**
     * The data used to update userlogins.
     */
    data: XOR<userloginUpdateManyMutationInput, userloginUncheckedUpdateManyInput>
    /**
     * Filter which userlogins to update
     */
    where?: userloginWhereInput
  }


  /**
   * userlogin upsert
   */
  export type userloginUpsertArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * The filter to search for the userlogin to update in case it exists.
     */
    where: userloginWhereUniqueInput
    /**
     * In case the userlogin found by the `where` argument doesn't exist, create a new userlogin with this data.
     */
    create: XOR<userloginCreateInput, userloginUncheckedCreateInput>
    /**
     * In case the userlogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userloginUpdateInput, userloginUncheckedUpdateInput>
  }


  /**
   * userlogin delete
   */
  export type userloginDeleteArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
    /**
     * Filter which userlogin to delete.
     */
    where: userloginWhereUniqueInput
  }


  /**
   * userlogin deleteMany
   */
  export type userloginDeleteManyArgs = {
    /**
     * Filter which userlogins to delete
     */
    where?: userloginWhereInput
  }


  /**
   * userlogin without action
   */
  export type userloginArgs = {
    /**
     * Select specific fields to fetch from the userlogin
     */
    select?: userloginSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userloginInclude | null
  }



  /**
   * Model feedback
   */


  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    attentive: number | null
    polite: number | null
    rude: number | null
    hid: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    attentive: number | null
    polite: number | null
    rude: number | null
    hid: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    attentive: number | null
    polite: number | null
    rude: number | null
    suggestion: string | null
    hid: number | null
  }

  export type FeedbackMaxAggregateOutputType = {
    attentive: number | null
    polite: number | null
    rude: number | null
    suggestion: string | null
    hid: number | null
  }

  export type FeedbackCountAggregateOutputType = {
    attentive: number
    polite: number
    rude: number
    suggestion: number
    hid: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    attentive?: true
    polite?: true
    rude?: true
    hid?: true
  }

  export type FeedbackSumAggregateInputType = {
    attentive?: true
    polite?: true
    rude?: true
    hid?: true
  }

  export type FeedbackMinAggregateInputType = {
    attentive?: true
    polite?: true
    rude?: true
    suggestion?: true
    hid?: true
  }

  export type FeedbackMaxAggregateInputType = {
    attentive?: true
    polite?: true
    rude?: true
    suggestion?: true
    hid?: true
  }

  export type FeedbackCountAggregateInputType = {
    attentive?: true
    polite?: true
    rude?: true
    suggestion?: true
    hid?: true
    _all?: true
  }

  export type FeedbackAggregateArgs = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: Enumerable<feedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
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
    where?: feedbackWhereInput
    orderBy?: Enumerable<feedbackOrderByWithAggregationInput>
    by: FeedbackScalarFieldEnum[]
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }


  export type FeedbackGroupByOutputType = {
    attentive: number | null
    polite: number | null
    rude: number | null
    suggestion: string
    hid: number
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


  export type feedbackSelect = {
    attentive?: boolean
    polite?: boolean
    rude?: boolean
    suggestion?: boolean
    hid?: boolean
    history?: boolean | historyArgs
  }


  export type feedbackInclude = {
    history?: boolean | historyArgs
  }

  export type feedbackGetPayload<S extends boolean | null | undefined | feedbackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? feedback :
    S extends undefined ? never :
    S extends { include: any } & (feedbackArgs | feedbackFindManyArgs)
    ? feedback  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'history' ? historyGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (feedbackArgs | feedbackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'history' ? historyGetPayload<S['select'][P]> :  P extends keyof feedback ? feedback[P] : never
  } 
      : feedback


  type feedbackCountArgs = 
    Omit<feedbackFindManyArgs, 'select' | 'include'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends feedbackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, feedbackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'feedback'> extends True ? Prisma__feedbackClient<feedbackGetPayload<T>> : Prisma__feedbackClient<feedbackGetPayload<T> | null, null>

    /**
     * Find one Feedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, feedbackFindUniqueOrThrowArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends feedbackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, feedbackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'feedback'> extends True ? Prisma__feedbackClient<feedbackGetPayload<T>> : Prisma__feedbackClient<feedbackGetPayload<T> | null, null>

    /**
     * Find the first Feedback that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, feedbackFindFirstOrThrowArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `attentive`
     * const feedbackWithAttentiveOnly = await prisma.feedback.findMany({ select: { attentive: true } })
     * 
    **/
    findMany<T extends feedbackFindManyArgs>(
      args?: SelectSubset<T, feedbackFindManyArgs>
    ): PrismaPromise<Array<feedbackGetPayload<T>>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends feedbackCreateArgs>(
      args: SelectSubset<T, feedbackCreateArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Create many Feedbacks.
     *     @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends feedbackCreateManyArgs>(
      args?: SelectSubset<T, feedbackCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends feedbackDeleteArgs>(
      args: SelectSubset<T, feedbackDeleteArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
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
    update<T extends feedbackUpdateArgs>(
      args: SelectSubset<T, feedbackUpdateArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends feedbackDeleteManyArgs>(
      args?: SelectSubset<T, feedbackDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends feedbackUpdateManyArgs>(
      args: SelectSubset<T, feedbackUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
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
    upsert<T extends feedbackUpsertArgs>(
      args: SelectSubset<T, feedbackUpsertArgs>
    ): Prisma__feedbackClient<feedbackGetPayload<T>>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__feedbackClient<T, Null = never> implements PrismaPromise<T> {
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

    history<T extends historyArgs= {}>(args?: Subset<T, historyArgs>): Prisma__historyClient<historyGetPayload<T> | Null>;

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
   * feedback base type for findUnique actions
   */
  export type feedbackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUnique
   */
  export interface feedbackFindUniqueArgs extends feedbackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }


  /**
   * feedback base type for findFirst actions
   */
  export type feedbackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: Enumerable<feedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }

  /**
   * feedback findFirst
   */
  export interface feedbackFindFirstArgs extends feedbackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: Enumerable<feedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: Enumerable<feedbackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * feedback create
   */
  export type feedbackCreateArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * The data needed to create a feedback.
     */
    data: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }


  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs = {
    /**
     * The data used to create many feedbacks.
     */
    data: Enumerable<feedbackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * feedback update
   */
  export type feedbackUpdateArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }


  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
  }


  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }


  /**
   * feedback delete
   */
  export type feedbackDeleteArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }


  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
  }


  /**
   * feedback without action
   */
  export type feedbackArgs = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: feedbackInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    cnic: 'cnic',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    gender: 'gender',
    phone: 'phone',
    role: 'role',
    desgination: 'desgination',
    generalavail: 'generalavail'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    sid: 'sid',
    subject: 'subject',
    percentage: 'percentage',
    regNo: 'regNo'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const CgpaScalarFieldEnum: {
    id: 'id',
    cgpa: 'cgpa',
    regNo: 'regNo'
  };

  export type CgpaScalarFieldEnum = (typeof CgpaScalarFieldEnum)[keyof typeof CgpaScalarFieldEnum]


  export const DisciplinaryScalarFieldEnum: {
    id: 'id',
    actions: 'actions',
    regNo: 'regNo'
  };

  export type DisciplinaryScalarFieldEnum = (typeof DisciplinaryScalarFieldEnum)[keyof typeof DisciplinaryScalarFieldEnum]


  export const FailedsubjectScalarFieldEnum: {
    id: 'id',
    semester: 'semester',
    subject: 'subject',
    grade: 'grade',
    regNo: 'regNo'
  };

  export type FailedsubjectScalarFieldEnum = (typeof FailedsubjectScalarFieldEnum)[keyof typeof FailedsubjectScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    attentive: 'attentive',
    polite: 'polite',
    rude: 'rude',
    suggestion: 'suggestion',
    hid: 'hid'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    hid: 'hid',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    reason: 'reason',
    status: 'status',
    referedTo: 'referedTo',
    regNo: 'regNo',
    adminId: 'adminId',
    parentId: 'parentId',
    adminFeedback: 'adminFeedback',
    suggestion: 'suggestion'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    mid: 'mid',
    reason: 'reason',
    status: 'status',
    referedTo: 'referedTo',
    tsid: 'tsid',
    regNo: 'regNo',
    adminId: 'adminId',
    parentId: 'parentId',
    date: 'date'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    cnic: 'cnic',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    address: 'address'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentScalarFieldEnum: {
    regNo: 'regNo',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    gender: 'gender',
    birthdate: 'birthdate',
    studentCnic: 'studentCnic',
    class: 'class',
    section: 'section',
    parentId: 'parentId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TimeslotScalarFieldEnum: {
    tsid: 'tsid',
    startTime: 'startTime',
    endTime: 'endTime',
    availibility: 'availibility',
    adminId: 'adminId',
    day: 'day'
  };

  export type TimeslotScalarFieldEnum = (typeof TimeslotScalarFieldEnum)[keyof typeof TimeslotScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserloginScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    email: 'email',
    role: 'role',
    regNo: 'regNo',
    adminId: 'adminId',
    parentId: 'parentId'
  };

  export type UserloginScalarFieldEnum = (typeof UserloginScalarFieldEnum)[keyof typeof UserloginScalarFieldEnum]


  export const WaitinglistScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    date: 'date',
    tsid: 'tsid',
    regNo: 'regNo',
    adminId: 'adminId',
    parentId: 'parentId',
    status: 'status'
  };

  export type WaitinglistScalarFieldEnum = (typeof WaitinglistScalarFieldEnum)[keyof typeof WaitinglistScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type parentWhereInput = {
    AND?: Enumerable<parentWhereInput>
    OR?: Enumerable<parentWhereInput>
    NOT?: Enumerable<parentWhereInput>
    cnic?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    address?: StringFilter | string
    history?: HistoryListRelationFilter
    meeting?: MeetingListRelationFilter
    userlogin?: XOR<UserloginRelationFilter, userloginWhereInput> | null
    waitinglist?: WaitinglistListRelationFilter
  }

  export type parentOrderByWithRelationInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    history?: historyOrderByRelationAggregateInput
    meeting?: meetingOrderByRelationAggregateInput
    userlogin?: userloginOrderByWithRelationInput
    waitinglist?: waitinglistOrderByRelationAggregateInput
  }

  export type parentWhereUniqueInput = {
    cnic?: string
  }

  export type parentOrderByWithAggregationInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    address?: SortOrder
    _count?: parentCountOrderByAggregateInput
    _max?: parentMaxOrderByAggregateInput
    _min?: parentMinOrderByAggregateInput
  }

  export type parentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<parentScalarWhereWithAggregatesInput>
    OR?: Enumerable<parentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<parentScalarWhereWithAggregatesInput>
    cnic?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
  }

  export type adminWhereInput = {
    AND?: Enumerable<adminWhereInput>
    OR?: Enumerable<adminWhereInput>
    NOT?: Enumerable<adminWhereInput>
    cnic?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    gender?: StringFilter | string
    phone?: StringFilter | string
    role?: StringFilter | string
    desgination?: StringFilter | string
    generalavail?: BoolNullableFilter | boolean | null
    history?: HistoryListRelationFilter
    meeting?: MeetingListRelationFilter
    timeslot?: TimeslotListRelationFilter
    userlogin?: XOR<UserloginRelationFilter, userloginWhereInput> | null
    waitinglist?: WaitinglistListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    desgination?: SortOrder
    generalavail?: SortOrder
    history?: historyOrderByRelationAggregateInput
    meeting?: meetingOrderByRelationAggregateInput
    timeslot?: timeslotOrderByRelationAggregateInput
    userlogin?: userloginOrderByWithRelationInput
    waitinglist?: waitinglistOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = {
    cnic?: string
  }

  export type adminOrderByWithAggregationInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    desgination?: SortOrder
    generalavail?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<adminScalarWhereWithAggregatesInput>
    OR?: Enumerable<adminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<adminScalarWhereWithAggregatesInput>
    cnic?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    gender?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    desgination?: StringWithAggregatesFilter | string
    generalavail?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type timeslotWhereInput = {
    AND?: Enumerable<timeslotWhereInput>
    OR?: Enumerable<timeslotWhereInput>
    NOT?: Enumerable<timeslotWhereInput>
    tsid?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    availibility?: BoolFilter | boolean
    adminId?: StringFilter | string
    day?: StringNullableFilter | string | null
    meeting?: XOR<MeetingRelationFilter, meetingWhereInput> | null
    admin?: XOR<AdminRelationFilter, adminWhereInput>
  }

  export type timeslotOrderByWithRelationInput = {
    tsid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availibility?: SortOrder
    adminId?: SortOrder
    day?: SortOrder
    meeting?: meetingOrderByWithRelationInput
    admin?: adminOrderByWithRelationInput
  }

  export type timeslotWhereUniqueInput = {
    tsid?: number
  }

  export type timeslotOrderByWithAggregationInput = {
    tsid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availibility?: SortOrder
    adminId?: SortOrder
    day?: SortOrder
    _count?: timeslotCountOrderByAggregateInput
    _avg?: timeslotAvgOrderByAggregateInput
    _max?: timeslotMaxOrderByAggregateInput
    _min?: timeslotMinOrderByAggregateInput
    _sum?: timeslotSumOrderByAggregateInput
  }

  export type timeslotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<timeslotScalarWhereWithAggregatesInput>
    OR?: Enumerable<timeslotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<timeslotScalarWhereWithAggregatesInput>
    tsid?: IntWithAggregatesFilter | number
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    availibility?: BoolWithAggregatesFilter | boolean
    adminId?: StringWithAggregatesFilter | string
    day?: StringNullableWithAggregatesFilter | string | null
  }

  export type studentWhereInput = {
    AND?: Enumerable<studentWhereInput>
    OR?: Enumerable<studentWhereInput>
    NOT?: Enumerable<studentWhereInput>
    regNo?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
    gender?: StringFilter | string
    birthdate?: DateTimeFilter | Date | string
    studentCnic?: StringFilter | string
    class?: StringFilter | string
    section?: StringFilter | string
    parentId?: StringNullableFilter | string | null
    attendance?: AttendanceListRelationFilter
    cgpa?: XOR<CgpaRelationFilter, cgpaWhereInput> | null
    disciplinary?: DisciplinaryListRelationFilter
    failedsubject?: FailedsubjectListRelationFilter
    history?: HistoryListRelationFilter
    meeting?: MeetingListRelationFilter
    userlogin?: XOR<UserloginRelationFilter, userloginWhereInput> | null
    waiinglist?: WaitinglistListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    regNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    studentCnic?: SortOrder
    class?: SortOrder
    section?: SortOrder
    parentId?: SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    cgpa?: cgpaOrderByWithRelationInput
    disciplinary?: disciplinaryOrderByRelationAggregateInput
    failedsubject?: failedsubjectOrderByRelationAggregateInput
    history?: historyOrderByRelationAggregateInput
    meeting?: meetingOrderByRelationAggregateInput
    userlogin?: userloginOrderByWithRelationInput
    waiinglist?: waitinglistOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = {
    regNo?: string
  }

  export type studentOrderByWithAggregationInput = {
    regNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    studentCnic?: SortOrder
    class?: SortOrder
    section?: SortOrder
    parentId?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<studentScalarWhereWithAggregatesInput>
    OR?: Enumerable<studentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<studentScalarWhereWithAggregatesInput>
    regNo?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    gender?: StringWithAggregatesFilter | string
    birthdate?: DateTimeWithAggregatesFilter | Date | string
    studentCnic?: StringWithAggregatesFilter | string
    class?: StringWithAggregatesFilter | string
    section?: StringWithAggregatesFilter | string
    parentId?: StringNullableWithAggregatesFilter | string | null
  }

  export type attendanceWhereInput = {
    AND?: Enumerable<attendanceWhereInput>
    OR?: Enumerable<attendanceWhereInput>
    NOT?: Enumerable<attendanceWhereInput>
    sid?: IntFilter | number
    subject?: StringFilter | string
    percentage?: IntFilter | number
    regNo?: StringFilter | string
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type attendanceOrderByWithRelationInput = {
    sid?: SortOrder
    subject?: SortOrder
    percentage?: SortOrder
    regNo?: SortOrder
    student?: studentOrderByWithRelationInput
  }

  export type attendanceWhereUniqueInput = {
    sid?: number
  }

  export type attendanceOrderByWithAggregationInput = {
    sid?: SortOrder
    subject?: SortOrder
    percentage?: SortOrder
    regNo?: SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _avg?: attendanceAvgOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
    _sum?: attendanceSumOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<attendanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<attendanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<attendanceScalarWhereWithAggregatesInput>
    sid?: IntWithAggregatesFilter | number
    subject?: StringWithAggregatesFilter | string
    percentage?: IntWithAggregatesFilter | number
    regNo?: StringWithAggregatesFilter | string
  }

  export type cgpaWhereInput = {
    AND?: Enumerable<cgpaWhereInput>
    OR?: Enumerable<cgpaWhereInput>
    NOT?: Enumerable<cgpaWhereInput>
    id?: IntFilter | number
    cgpa?: FloatFilter | number
    regNo?: StringFilter | string
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type cgpaOrderByWithRelationInput = {
    id?: SortOrder
    cgpa?: SortOrder
    regNo?: SortOrder
    student?: studentOrderByWithRelationInput
  }

  export type cgpaWhereUniqueInput = {
    id?: number
    regNo?: string
  }

  export type cgpaOrderByWithAggregationInput = {
    id?: SortOrder
    cgpa?: SortOrder
    regNo?: SortOrder
    _count?: cgpaCountOrderByAggregateInput
    _avg?: cgpaAvgOrderByAggregateInput
    _max?: cgpaMaxOrderByAggregateInput
    _min?: cgpaMinOrderByAggregateInput
    _sum?: cgpaSumOrderByAggregateInput
  }

  export type cgpaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cgpaScalarWhereWithAggregatesInput>
    OR?: Enumerable<cgpaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cgpaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cgpa?: FloatWithAggregatesFilter | number
    regNo?: StringWithAggregatesFilter | string
  }

  export type disciplinaryWhereInput = {
    AND?: Enumerable<disciplinaryWhereInput>
    OR?: Enumerable<disciplinaryWhereInput>
    NOT?: Enumerable<disciplinaryWhereInput>
    id?: IntFilter | number
    actions?: StringFilter | string
    regNo?: StringFilter | string
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type disciplinaryOrderByWithRelationInput = {
    id?: SortOrder
    actions?: SortOrder
    regNo?: SortOrder
    student?: studentOrderByWithRelationInput
  }

  export type disciplinaryWhereUniqueInput = {
    id?: number
  }

  export type disciplinaryOrderByWithAggregationInput = {
    id?: SortOrder
    actions?: SortOrder
    regNo?: SortOrder
    _count?: disciplinaryCountOrderByAggregateInput
    _avg?: disciplinaryAvgOrderByAggregateInput
    _max?: disciplinaryMaxOrderByAggregateInput
    _min?: disciplinaryMinOrderByAggregateInput
    _sum?: disciplinarySumOrderByAggregateInput
  }

  export type disciplinaryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<disciplinaryScalarWhereWithAggregatesInput>
    OR?: Enumerable<disciplinaryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<disciplinaryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    actions?: StringWithAggregatesFilter | string
    regNo?: StringWithAggregatesFilter | string
  }

  export type failedsubjectWhereInput = {
    AND?: Enumerable<failedsubjectWhereInput>
    OR?: Enumerable<failedsubjectWhereInput>
    NOT?: Enumerable<failedsubjectWhereInput>
    id?: IntFilter | number
    semester?: StringFilter | string
    subject?: StringFilter | string
    grade?: StringFilter | string
    regNo?: StringFilter | string
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type failedsubjectOrderByWithRelationInput = {
    id?: SortOrder
    semester?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    regNo?: SortOrder
    student?: studentOrderByWithRelationInput
  }

  export type failedsubjectWhereUniqueInput = {
    id?: number
  }

  export type failedsubjectOrderByWithAggregationInput = {
    id?: SortOrder
    semester?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    regNo?: SortOrder
    _count?: failedsubjectCountOrderByAggregateInput
    _avg?: failedsubjectAvgOrderByAggregateInput
    _max?: failedsubjectMaxOrderByAggregateInput
    _min?: failedsubjectMinOrderByAggregateInput
    _sum?: failedsubjectSumOrderByAggregateInput
  }

  export type failedsubjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<failedsubjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<failedsubjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<failedsubjectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    semester?: StringWithAggregatesFilter | string
    subject?: StringWithAggregatesFilter | string
    grade?: StringWithAggregatesFilter | string
    regNo?: StringWithAggregatesFilter | string
  }

  export type meetingWhereInput = {
    AND?: Enumerable<meetingWhereInput>
    OR?: Enumerable<meetingWhereInput>
    NOT?: Enumerable<meetingWhereInput>
    mid?: IntFilter | number
    reason?: StringFilter | string
    status?: StringFilter | string
    referedTo?: StringFilter | string
    tsid?: IntFilter | number
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    admin?: XOR<AdminRelationFilter, adminWhereInput>
    parent?: XOR<ParentRelationFilter, parentWhereInput>
    student?: XOR<StudentRelationFilter, studentWhereInput>
    timeslot?: XOR<TimeslotRelationFilter, timeslotWhereInput>
  }

  export type meetingOrderByWithRelationInput = {
    mid?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    date?: SortOrder
    admin?: adminOrderByWithRelationInput
    parent?: parentOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    timeslot?: timeslotOrderByWithRelationInput
  }

  export type meetingWhereUniqueInput = {
    mid?: number
    tsid?: number
  }

  export type meetingOrderByWithAggregationInput = {
    mid?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    date?: SortOrder
    _count?: meetingCountOrderByAggregateInput
    _avg?: meetingAvgOrderByAggregateInput
    _max?: meetingMaxOrderByAggregateInput
    _min?: meetingMinOrderByAggregateInput
    _sum?: meetingSumOrderByAggregateInput
  }

  export type meetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<meetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<meetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<meetingScalarWhereWithAggregatesInput>
    mid?: IntWithAggregatesFilter | number
    reason?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    referedTo?: StringWithAggregatesFilter | string
    tsid?: IntWithAggregatesFilter | number
    regNo?: StringWithAggregatesFilter | string
    adminId?: StringWithAggregatesFilter | string
    parentId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type waitinglistWhereInput = {
    AND?: Enumerable<waitinglistWhereInput>
    OR?: Enumerable<waitinglistWhereInput>
    NOT?: Enumerable<waitinglistWhereInput>
    id?: IntFilter | number
    reason?: StringFilter | string
    date?: DateTimeFilter | Date | string
    tsid?: IntFilter | number
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    status?: StringNullableFilter | string | null
    admin?: XOR<AdminRelationFilter, adminWhereInput>
    parent?: XOR<ParentRelationFilter, parentWhereInput>
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type waitinglistOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    admin?: adminOrderByWithRelationInput
    parent?: parentOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type waitinglistWhereUniqueInput = {
    id?: number
  }

  export type waitinglistOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    _count?: waitinglistCountOrderByAggregateInput
    _avg?: waitinglistAvgOrderByAggregateInput
    _max?: waitinglistMaxOrderByAggregateInput
    _min?: waitinglistMinOrderByAggregateInput
    _sum?: waitinglistSumOrderByAggregateInput
  }

  export type waitinglistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<waitinglistScalarWhereWithAggregatesInput>
    OR?: Enumerable<waitinglistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<waitinglistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    reason?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    tsid?: IntWithAggregatesFilter | number
    regNo?: StringWithAggregatesFilter | string
    adminId?: StringWithAggregatesFilter | string
    parentId?: StringWithAggregatesFilter | string
    status?: StringNullableWithAggregatesFilter | string | null
  }

  export type historyWhereInput = {
    AND?: Enumerable<historyWhereInput>
    OR?: Enumerable<historyWhereInput>
    NOT?: Enumerable<historyWhereInput>
    hid?: IntFilter | number
    date?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    reason?: StringFilter | string
    status?: EnumStatusFilter | Status
    referedTo?: StringFilter | string
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    adminFeedback?: StringNullableFilter | string | null
    suggestion?: StringNullableFilter | string | null
    feedback?: XOR<FeedbackRelationFilter, feedbackWhereInput> | null
    admin?: XOR<AdminRelationFilter, adminWhereInput>
    parent?: XOR<ParentRelationFilter, parentWhereInput>
    student?: XOR<StudentRelationFilter, studentWhereInput>
  }

  export type historyOrderByWithRelationInput = {
    hid?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    adminFeedback?: SortOrder
    suggestion?: SortOrder
    feedback?: feedbackOrderByWithRelationInput
    admin?: adminOrderByWithRelationInput
    parent?: parentOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type historyWhereUniqueInput = {
    hid?: number
  }

  export type historyOrderByWithAggregationInput = {
    hid?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    adminFeedback?: SortOrder
    suggestion?: SortOrder
    _count?: historyCountOrderByAggregateInput
    _avg?: historyAvgOrderByAggregateInput
    _max?: historyMaxOrderByAggregateInput
    _min?: historyMinOrderByAggregateInput
    _sum?: historySumOrderByAggregateInput
  }

  export type historyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<historyScalarWhereWithAggregatesInput>
    OR?: Enumerable<historyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<historyScalarWhereWithAggregatesInput>
    hid?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    endTime?: DateTimeWithAggregatesFilter | Date | string
    reason?: StringWithAggregatesFilter | string
    status?: EnumStatusWithAggregatesFilter | Status
    referedTo?: StringWithAggregatesFilter | string
    regNo?: StringWithAggregatesFilter | string
    adminId?: StringWithAggregatesFilter | string
    parentId?: StringWithAggregatesFilter | string
    adminFeedback?: StringNullableWithAggregatesFilter | string | null
    suggestion?: StringNullableWithAggregatesFilter | string | null
  }

  export type userloginWhereInput = {
    AND?: Enumerable<userloginWhereInput>
    OR?: Enumerable<userloginWhereInput>
    NOT?: Enumerable<userloginWhereInput>
    id?: IntFilter | number
    userName?: StringFilter | string
    password?: StringFilter | string
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    regNo?: StringNullableFilter | string | null
    adminId?: StringNullableFilter | string | null
    parentId?: StringNullableFilter | string | null
    admin?: XOR<AdminRelationFilter, adminWhereInput> | null
    parent?: XOR<ParentRelationFilter, parentWhereInput> | null
    student?: XOR<StudentRelationFilter, studentWhereInput> | null
  }

  export type userloginOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    admin?: adminOrderByWithRelationInput
    parent?: parentOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type userloginWhereUniqueInput = {
    id?: number
    regNo?: string
    adminId?: string
    parentId?: string
  }

  export type userloginOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    _count?: userloginCountOrderByAggregateInput
    _avg?: userloginAvgOrderByAggregateInput
    _max?: userloginMaxOrderByAggregateInput
    _min?: userloginMinOrderByAggregateInput
    _sum?: userloginSumOrderByAggregateInput
  }

  export type userloginScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userloginScalarWhereWithAggregatesInput>
    OR?: Enumerable<userloginScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userloginScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userName?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    regNo?: StringNullableWithAggregatesFilter | string | null
    adminId?: StringNullableWithAggregatesFilter | string | null
    parentId?: StringNullableWithAggregatesFilter | string | null
  }

  export type feedbackWhereInput = {
    AND?: Enumerable<feedbackWhereInput>
    OR?: Enumerable<feedbackWhereInput>
    NOT?: Enumerable<feedbackWhereInput>
    attentive?: FloatNullableFilter | number | null
    polite?: FloatNullableFilter | number | null
    rude?: FloatNullableFilter | number | null
    suggestion?: StringFilter | string
    hid?: IntFilter | number
    history?: XOR<HistoryRelationFilter, historyWhereInput>
  }

  export type feedbackOrderByWithRelationInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    suggestion?: SortOrder
    hid?: SortOrder
    history?: historyOrderByWithRelationInput
  }

  export type feedbackWhereUniqueInput = {
    hid?: number
  }

  export type feedbackOrderByWithAggregationInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    suggestion?: SortOrder
    hid?: SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<feedbackScalarWhereWithAggregatesInput>
    OR?: Enumerable<feedbackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<feedbackScalarWhereWithAggregatesInput>
    attentive?: FloatNullableWithAggregatesFilter | number | null
    polite?: FloatNullableWithAggregatesFilter | number | null
    rude?: FloatNullableWithAggregatesFilter | number | null
    suggestion?: StringWithAggregatesFilter | string
    hid?: IntWithAggregatesFilter | number
  }

  export type parentCreateInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyCreateNestedManyWithoutParentInput
    meeting?: meetingCreateNestedManyWithoutParentInput
    userlogin?: userloginCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistCreateNestedManyWithoutParentInput
  }

  export type parentUncheckedCreateInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyUncheckedCreateNestedManyWithoutParentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutParentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutParentInput
  }

  export type parentUpdateInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutParentNestedInput
    meeting?: meetingUpdateManyWithoutParentNestedInput
    userlogin?: userloginUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUpdateManyWithoutParentNestedInput
  }

  export type parentUncheckedUpdateInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutParentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutParentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutParentNestedInput
  }

  export type parentCreateManyInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
  }

  export type parentUpdateManyMutationInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type parentUncheckedUpdateManyInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyCreateNestedManyWithoutAdminInput
    meeting?: meetingCreateNestedManyWithoutAdminInput
    timeslot?: timeslotCreateNestedManyWithoutAdminInput
    userlogin?: userloginCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyUncheckedCreateNestedManyWithoutAdminInput
    meeting?: meetingUncheckedCreateNestedManyWithoutAdminInput
    timeslot?: timeslotUncheckedCreateNestedManyWithoutAdminInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUpdateManyWithoutAdminNestedInput
    meeting?: meetingUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUncheckedUpdateManyWithoutAdminNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUncheckedUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
  }

  export type adminUpdateManyMutationInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adminUncheckedUpdateManyInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type timeslotCreateInput = {
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    day?: string | null
    meeting?: meetingCreateNestedOneWithoutTimeslotInput
    admin: adminCreateNestedOneWithoutTimeslotInput
  }

  export type timeslotUncheckedCreateInput = {
    tsid?: number
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    adminId: string
    day?: string | null
    meeting?: meetingUncheckedCreateNestedOneWithoutTimeslotInput
  }

  export type timeslotUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: meetingUpdateOneWithoutTimeslotNestedInput
    admin?: adminUpdateOneRequiredWithoutTimeslotNestedInput
  }

  export type timeslotUncheckedUpdateInput = {
    tsid?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: meetingUncheckedUpdateOneWithoutTimeslotNestedInput
  }

  export type timeslotCreateManyInput = {
    tsid?: number
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    adminId: string
    day?: string | null
  }

  export type timeslotUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type timeslotUncheckedUpdateManyInput = {
    tsid?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentCreateInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
  }

  export type studentUpdateManyMutationInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUncheckedUpdateManyInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendanceCreateInput = {
    subject: string
    percentage: number
    student: studentCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateInput = {
    sid?: number
    subject: string
    percentage: number
    regNo: string
  }

  export type attendanceUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    student?: studentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    sid?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type attendanceCreateManyInput = {
    sid?: number
    subject: string
    percentage: number
    regNo: string
  }

  export type attendanceUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceUncheckedUpdateManyInput = {
    sid?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type cgpaCreateInput = {
    cgpa: number
    student: studentCreateNestedOneWithoutCgpaInput
  }

  export type cgpaUncheckedCreateInput = {
    id?: number
    cgpa: number
    regNo: string
  }

  export type cgpaUpdateInput = {
    cgpa?: FloatFieldUpdateOperationsInput | number
    student?: studentUpdateOneRequiredWithoutCgpaNestedInput
  }

  export type cgpaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type cgpaCreateManyInput = {
    id?: number
    cgpa: number
    regNo: string
  }

  export type cgpaUpdateManyMutationInput = {
    cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type cgpaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaryCreateInput = {
    actions: string
    student: studentCreateNestedOneWithoutDisciplinaryInput
  }

  export type disciplinaryUncheckedCreateInput = {
    id?: number
    actions: string
    regNo: string
  }

  export type disciplinaryUpdateInput = {
    actions?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutDisciplinaryNestedInput
  }

  export type disciplinaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    actions?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaryCreateManyInput = {
    id?: number
    actions: string
    regNo: string
  }

  export type disciplinaryUpdateManyMutationInput = {
    actions?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    actions?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectCreateInput = {
    semester: string
    subject: string
    grade: string
    student: studentCreateNestedOneWithoutFailedsubjectInput
  }

  export type failedsubjectUncheckedCreateInput = {
    id?: number
    semester: string
    subject: string
    grade: string
    regNo: string
  }

  export type failedsubjectUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutFailedsubjectNestedInput
  }

  export type failedsubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectCreateManyInput = {
    id?: number
    semester: string
    subject: string
    grade: string
    regNo: string
  }

  export type failedsubjectUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
  }

  export type meetingCreateInput = {
    reason: string
    status: string
    referedTo: string
    date: Date | string
    admin: adminCreateNestedOneWithoutMeetingInput
    parent: parentCreateNestedOneWithoutMeetingInput
    student: studentCreateNestedOneWithoutMeetingInput
    timeslot: timeslotCreateNestedOneWithoutMeetingInput
  }

  export type meetingUncheckedCreateInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    date: Date | string
  }

  export type meetingUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutMeetingNestedInput
    parent?: parentUpdateOneRequiredWithoutMeetingNestedInput
    student?: studentUpdateOneRequiredWithoutMeetingNestedInput
    timeslot?: timeslotUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingCreateManyInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    date: Date | string
  }

  export type meetingUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUncheckedUpdateManyInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitinglistCreateInput = {
    reason: string
    date: Date | string
    tsid: number
    status?: string | null
    admin: adminCreateNestedOneWithoutWaitinglistInput
    parent: parentCreateNestedOneWithoutWaitinglistInput
    student: studentCreateNestedOneWithoutWaiinglistInput
  }

  export type waitinglistUncheckedCreateInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    status?: string | null
  }

  export type waitinglistUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutWaitinglistNestedInput
    parent?: parentUpdateOneRequiredWithoutWaitinglistNestedInput
    student?: studentUpdateOneRequiredWithoutWaiinglistNestedInput
  }

  export type waitinglistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistCreateManyInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    adminId: string
    parentId: string
    status?: string | null
  }

  export type waitinglistUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historyCreateInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackCreateNestedOneWithoutHistoryInput
    admin: adminCreateNestedOneWithoutHistoryInput
    parent: parentCreateNestedOneWithoutHistoryInput
    student: studentCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackUncheckedCreateNestedOneWithoutHistoryInput
  }

  export type historyUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUpdateOneWithoutHistoryNestedInput
    admin?: adminUpdateOneRequiredWithoutHistoryNestedInput
    parent?: parentUpdateOneRequiredWithoutHistoryNestedInput
    student?: studentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUncheckedUpdateOneWithoutHistoryNestedInput
  }

  export type historyCreateManyInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
  }

  export type historyUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historyUncheckedUpdateManyInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userloginCreateInput = {
    userName: string
    password: string
    email: string
    role: Role
    admin?: adminCreateNestedOneWithoutUserloginInput
    parent?: parentCreateNestedOneWithoutUserloginInput
    student?: studentCreateNestedOneWithoutUserloginInput
  }

  export type userloginUncheckedCreateInput = {
    id?: number
    userName: string
    password: string
    email: string
    role: Role
    regNo?: string | null
    adminId?: string | null
    parentId?: string | null
  }

  export type userloginUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    admin?: adminUpdateOneWithoutUserloginNestedInput
    parent?: parentUpdateOneWithoutUserloginNestedInput
    student?: studentUpdateOneWithoutUserloginNestedInput
  }

  export type userloginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    regNo?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userloginCreateManyInput = {
    id?: number
    userName: string
    password: string
    email: string
    role: Role
    regNo?: string | null
    adminId?: string | null
    parentId?: string | null
  }

  export type userloginUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type userloginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    regNo?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type feedbackCreateInput = {
    attentive?: number | null
    polite?: number | null
    rude?: number | null
    suggestion: string
    history?: historyCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateInput = {
    attentive?: number | null
    polite?: number | null
    rude?: number | null
    suggestion: string
    hid?: number
  }

  export type feedbackUpdateInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
    hid?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackCreateManyInput = {
    attentive?: number | null
    polite?: number | null
    rude?: number | null
    suggestion: string
    hid?: number
  }

  export type feedbackUpdateManyMutationInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
  }

  export type feedbackUncheckedUpdateManyInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
    hid?: IntFieldUpdateOperationsInput | number
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

  export type HistoryListRelationFilter = {
    every?: historyWhereInput
    some?: historyWhereInput
    none?: historyWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: meetingWhereInput
    some?: meetingWhereInput
    none?: meetingWhereInput
  }

  export type UserloginRelationFilter = {
    is?: userloginWhereInput | null
    isNot?: userloginWhereInput | null
  }

  export type WaitinglistListRelationFilter = {
    every?: waitinglistWhereInput
    some?: waitinglistWhereInput
    none?: waitinglistWhereInput
  }

  export type historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type waitinglistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type parentCountOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type parentMaxOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    address?: SortOrder
  }

  export type parentMinOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    address?: SortOrder
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

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type TimeslotListRelationFilter = {
    every?: timeslotWhereInput
    some?: timeslotWhereInput
    none?: timeslotWhereInput
  }

  export type timeslotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    desgination?: SortOrder
    generalavail?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    desgination?: SortOrder
    generalavail?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    cnic?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    desgination?: SortOrder
    generalavail?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type MeetingRelationFilter = {
    is?: meetingWhereInput | null
    isNot?: meetingWhereInput | null
  }

  export type AdminRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type timeslotCountOrderByAggregateInput = {
    tsid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availibility?: SortOrder
    adminId?: SortOrder
    day?: SortOrder
  }

  export type timeslotAvgOrderByAggregateInput = {
    tsid?: SortOrder
  }

  export type timeslotMaxOrderByAggregateInput = {
    tsid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availibility?: SortOrder
    adminId?: SortOrder
    day?: SortOrder
  }

  export type timeslotMinOrderByAggregateInput = {
    tsid?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    availibility?: SortOrder
    adminId?: SortOrder
    day?: SortOrder
  }

  export type timeslotSumOrderByAggregateInput = {
    tsid?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type CgpaRelationFilter = {
    is?: cgpaWhereInput | null
    isNot?: cgpaWhereInput | null
  }

  export type DisciplinaryListRelationFilter = {
    every?: disciplinaryWhereInput
    some?: disciplinaryWhereInput
    none?: disciplinaryWhereInput
  }

  export type FailedsubjectListRelationFilter = {
    every?: failedsubjectWhereInput
    some?: failedsubjectWhereInput
    none?: failedsubjectWhereInput
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type disciplinaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type failedsubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    regNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    studentCnic?: SortOrder
    class?: SortOrder
    section?: SortOrder
    parentId?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    regNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    studentCnic?: SortOrder
    class?: SortOrder
    section?: SortOrder
    parentId?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    regNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    studentCnic?: SortOrder
    class?: SortOrder
    section?: SortOrder
    parentId?: SortOrder
  }

  export type StudentRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type attendanceCountOrderByAggregateInput = {
    sid?: SortOrder
    subject?: SortOrder
    percentage?: SortOrder
    regNo?: SortOrder
  }

  export type attendanceAvgOrderByAggregateInput = {
    sid?: SortOrder
    percentage?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    sid?: SortOrder
    subject?: SortOrder
    percentage?: SortOrder
    regNo?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    sid?: SortOrder
    subject?: SortOrder
    percentage?: SortOrder
    regNo?: SortOrder
  }

  export type attendanceSumOrderByAggregateInput = {
    sid?: SortOrder
    percentage?: SortOrder
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

  export type cgpaCountOrderByAggregateInput = {
    id?: SortOrder
    cgpa?: SortOrder
    regNo?: SortOrder
  }

  export type cgpaAvgOrderByAggregateInput = {
    id?: SortOrder
    cgpa?: SortOrder
  }

  export type cgpaMaxOrderByAggregateInput = {
    id?: SortOrder
    cgpa?: SortOrder
    regNo?: SortOrder
  }

  export type cgpaMinOrderByAggregateInput = {
    id?: SortOrder
    cgpa?: SortOrder
    regNo?: SortOrder
  }

  export type cgpaSumOrderByAggregateInput = {
    id?: SortOrder
    cgpa?: SortOrder
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

  export type disciplinaryCountOrderByAggregateInput = {
    id?: SortOrder
    actions?: SortOrder
    regNo?: SortOrder
  }

  export type disciplinaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type disciplinaryMaxOrderByAggregateInput = {
    id?: SortOrder
    actions?: SortOrder
    regNo?: SortOrder
  }

  export type disciplinaryMinOrderByAggregateInput = {
    id?: SortOrder
    actions?: SortOrder
    regNo?: SortOrder
  }

  export type disciplinarySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type failedsubjectCountOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    regNo?: SortOrder
  }

  export type failedsubjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type failedsubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    regNo?: SortOrder
  }

  export type failedsubjectMinOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    regNo?: SortOrder
  }

  export type failedsubjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParentRelationFilter = {
    is?: parentWhereInput | null
    isNot?: parentWhereInput | null
  }

  export type TimeslotRelationFilter = {
    is?: timeslotWhereInput
    isNot?: timeslotWhereInput
  }

  export type meetingCountOrderByAggregateInput = {
    mid?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    date?: SortOrder
  }

  export type meetingAvgOrderByAggregateInput = {
    mid?: SortOrder
    tsid?: SortOrder
  }

  export type meetingMaxOrderByAggregateInput = {
    mid?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    date?: SortOrder
  }

  export type meetingMinOrderByAggregateInput = {
    mid?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    date?: SortOrder
  }

  export type meetingSumOrderByAggregateInput = {
    mid?: SortOrder
    tsid?: SortOrder
  }

  export type waitinglistCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type waitinglistAvgOrderByAggregateInput = {
    id?: SortOrder
    tsid?: SortOrder
  }

  export type waitinglistMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type waitinglistMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    tsid?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
  }

  export type waitinglistSumOrderByAggregateInput = {
    id?: SortOrder
    tsid?: SortOrder
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type FeedbackRelationFilter = {
    is?: feedbackWhereInput | null
    isNot?: feedbackWhereInput | null
  }

  export type historyCountOrderByAggregateInput = {
    hid?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    adminFeedback?: SortOrder
    suggestion?: SortOrder
  }

  export type historyAvgOrderByAggregateInput = {
    hid?: SortOrder
  }

  export type historyMaxOrderByAggregateInput = {
    hid?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    adminFeedback?: SortOrder
    suggestion?: SortOrder
  }

  export type historyMinOrderByAggregateInput = {
    hid?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    referedTo?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
    adminFeedback?: SortOrder
    suggestion?: SortOrder
  }

  export type historySumOrderByAggregateInput = {
    hid?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type userloginCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
  }

  export type userloginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userloginMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
  }

  export type userloginMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    regNo?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
  }

  export type userloginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type HistoryRelationFilter = {
    is?: historyWhereInput
    isNot?: historyWhereInput
  }

  export type feedbackCountOrderByAggregateInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    suggestion?: SortOrder
    hid?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    hid?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    suggestion?: SortOrder
    hid?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    suggestion?: SortOrder
    hid?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    attentive?: SortOrder
    polite?: SortOrder
    rude?: SortOrder
    hid?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type historyCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<historyCreateWithoutParentInput>, Enumerable<historyUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutParentInput>
    createMany?: historyCreateManyParentInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<meetingCreateWithoutParentInput>, Enumerable<meetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutParentInput>
    createMany?: meetingCreateManyParentInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type userloginCreateNestedOneWithoutParentInput = {
    create?: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutParentInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutParentInput>, Enumerable<waitinglistUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutParentInput>
    createMany?: waitinglistCreateManyParentInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type historyUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<historyCreateWithoutParentInput>, Enumerable<historyUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutParentInput>
    createMany?: historyCreateManyParentInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<meetingCreateWithoutParentInput>, Enumerable<meetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutParentInput>
    createMany?: meetingCreateManyParentInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type userloginUncheckedCreateNestedOneWithoutParentInput = {
    create?: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutParentInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutParentInput>, Enumerable<waitinglistUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutParentInput>
    createMany?: waitinglistCreateManyParentInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type historyUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutParentInput>, Enumerable<historyUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutParentInput>
    createMany?: historyCreateManyParentInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutParentInput>, Enumerable<meetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutParentInput>
    createMany?: meetingCreateManyParentInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type userloginUpdateOneWithoutParentNestedInput = {
    create?: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutParentInput
    upsert?: userloginUpsertWithoutParentInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutParentInput, userloginUncheckedUpdateWithoutParentInput>
  }

  export type waitinglistUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutParentInput>, Enumerable<waitinglistUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutParentInput>
    createMany?: waitinglistCreateManyParentInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type historyUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutParentInput>, Enumerable<historyUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutParentInput>
    createMany?: historyCreateManyParentInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutParentInput>, Enumerable<meetingUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutParentInput>
    createMany?: meetingCreateManyParentInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type userloginUncheckedUpdateOneWithoutParentNestedInput = {
    create?: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutParentInput
    upsert?: userloginUpsertWithoutParentInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutParentInput, userloginUncheckedUpdateWithoutParentInput>
  }

  export type waitinglistUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutParentInput>, Enumerable<waitinglistUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutParentInput>
    createMany?: waitinglistCreateManyParentInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type historyCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<historyCreateWithoutAdminInput>, Enumerable<historyUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutAdminInput>
    createMany?: historyCreateManyAdminInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<meetingCreateWithoutAdminInput>, Enumerable<meetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutAdminInput>
    createMany?: meetingCreateManyAdminInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type timeslotCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<timeslotCreateWithoutAdminInput>, Enumerable<timeslotUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<timeslotCreateOrConnectWithoutAdminInput>
    createMany?: timeslotCreateManyAdminInputEnvelope
    connect?: Enumerable<timeslotWhereUniqueInput>
  }

  export type userloginCreateNestedOneWithoutAdminInput = {
    create?: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userloginCreateOrConnectWithoutAdminInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutAdminInput>, Enumerable<waitinglistUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutAdminInput>
    createMany?: waitinglistCreateManyAdminInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type historyUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<historyCreateWithoutAdminInput>, Enumerable<historyUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutAdminInput>
    createMany?: historyCreateManyAdminInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<meetingCreateWithoutAdminInput>, Enumerable<meetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutAdminInput>
    createMany?: meetingCreateManyAdminInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type timeslotUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<timeslotCreateWithoutAdminInput>, Enumerable<timeslotUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<timeslotCreateOrConnectWithoutAdminInput>
    createMany?: timeslotCreateManyAdminInputEnvelope
    connect?: Enumerable<timeslotWhereUniqueInput>
  }

  export type userloginUncheckedCreateNestedOneWithoutAdminInput = {
    create?: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userloginCreateOrConnectWithoutAdminInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutAdminInput>, Enumerable<waitinglistUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutAdminInput>
    createMany?: waitinglistCreateManyAdminInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type historyUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutAdminInput>, Enumerable<historyUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: historyCreateManyAdminInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutAdminInput>, Enumerable<meetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: meetingCreateManyAdminInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type timeslotUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<timeslotCreateWithoutAdminInput>, Enumerable<timeslotUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<timeslotCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<timeslotUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: timeslotCreateManyAdminInputEnvelope
    set?: Enumerable<timeslotWhereUniqueInput>
    disconnect?: Enumerable<timeslotWhereUniqueInput>
    delete?: Enumerable<timeslotWhereUniqueInput>
    connect?: Enumerable<timeslotWhereUniqueInput>
    update?: Enumerable<timeslotUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<timeslotUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<timeslotScalarWhereInput>
  }

  export type userloginUpdateOneWithoutAdminNestedInput = {
    create?: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userloginCreateOrConnectWithoutAdminInput
    upsert?: userloginUpsertWithoutAdminInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutAdminInput, userloginUncheckedUpdateWithoutAdminInput>
  }

  export type waitinglistUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutAdminInput>, Enumerable<waitinglistUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: waitinglistCreateManyAdminInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type historyUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutAdminInput>, Enumerable<historyUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: historyCreateManyAdminInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutAdminInput>, Enumerable<meetingUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: meetingCreateManyAdminInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type timeslotUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<timeslotCreateWithoutAdminInput>, Enumerable<timeslotUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<timeslotCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<timeslotUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: timeslotCreateManyAdminInputEnvelope
    set?: Enumerable<timeslotWhereUniqueInput>
    disconnect?: Enumerable<timeslotWhereUniqueInput>
    delete?: Enumerable<timeslotWhereUniqueInput>
    connect?: Enumerable<timeslotWhereUniqueInput>
    update?: Enumerable<timeslotUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<timeslotUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<timeslotScalarWhereInput>
  }

  export type userloginUncheckedUpdateOneWithoutAdminNestedInput = {
    create?: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userloginCreateOrConnectWithoutAdminInput
    upsert?: userloginUpsertWithoutAdminInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutAdminInput, userloginUncheckedUpdateWithoutAdminInput>
  }

  export type waitinglistUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutAdminInput>, Enumerable<waitinglistUncheckedCreateWithoutAdminInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutAdminInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutAdminInput>
    createMany?: waitinglistCreateManyAdminInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutAdminInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutAdminInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type meetingCreateNestedOneWithoutTimeslotInput = {
    create?: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: meetingCreateOrConnectWithoutTimeslotInput
    connect?: meetingWhereUniqueInput
  }

  export type adminCreateNestedOneWithoutTimeslotInput = {
    create?: XOR<adminCreateWithoutTimeslotInput, adminUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: adminCreateOrConnectWithoutTimeslotInput
    connect?: adminWhereUniqueInput
  }

  export type meetingUncheckedCreateNestedOneWithoutTimeslotInput = {
    create?: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: meetingCreateOrConnectWithoutTimeslotInput
    connect?: meetingWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type meetingUpdateOneWithoutTimeslotNestedInput = {
    create?: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: meetingCreateOrConnectWithoutTimeslotInput
    upsert?: meetingUpsertWithoutTimeslotInput
    disconnect?: boolean
    delete?: boolean
    connect?: meetingWhereUniqueInput
    update?: XOR<meetingUpdateWithoutTimeslotInput, meetingUncheckedUpdateWithoutTimeslotInput>
  }

  export type adminUpdateOneRequiredWithoutTimeslotNestedInput = {
    create?: XOR<adminCreateWithoutTimeslotInput, adminUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: adminCreateOrConnectWithoutTimeslotInput
    upsert?: adminUpsertWithoutTimeslotInput
    connect?: adminWhereUniqueInput
    update?: XOR<adminUpdateWithoutTimeslotInput, adminUncheckedUpdateWithoutTimeslotInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type meetingUncheckedUpdateOneWithoutTimeslotNestedInput = {
    create?: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
    connectOrCreate?: meetingCreateOrConnectWithoutTimeslotInput
    upsert?: meetingUpsertWithoutTimeslotInput
    disconnect?: boolean
    delete?: boolean
    connect?: meetingWhereUniqueInput
    update?: XOR<meetingUpdateWithoutTimeslotInput, meetingUncheckedUpdateWithoutTimeslotInput>
  }

  export type attendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<attendanceCreateWithoutStudentInput>, Enumerable<attendanceUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<attendanceCreateOrConnectWithoutStudentInput>
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: Enumerable<attendanceWhereUniqueInput>
  }

  export type cgpaCreateNestedOneWithoutStudentInput = {
    create?: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
    connectOrCreate?: cgpaCreateOrConnectWithoutStudentInput
    connect?: cgpaWhereUniqueInput
  }

  export type disciplinaryCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<disciplinaryCreateWithoutStudentInput>, Enumerable<disciplinaryUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<disciplinaryCreateOrConnectWithoutStudentInput>
    createMany?: disciplinaryCreateManyStudentInputEnvelope
    connect?: Enumerable<disciplinaryWhereUniqueInput>
  }

  export type failedsubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<failedsubjectCreateWithoutStudentInput>, Enumerable<failedsubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<failedsubjectCreateOrConnectWithoutStudentInput>
    createMany?: failedsubjectCreateManyStudentInputEnvelope
    connect?: Enumerable<failedsubjectWhereUniqueInput>
  }

  export type historyCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<historyCreateWithoutStudentInput>, Enumerable<historyUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutStudentInput>
    createMany?: historyCreateManyStudentInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<meetingCreateWithoutStudentInput>, Enumerable<meetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutStudentInput>
    createMany?: meetingCreateManyStudentInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type userloginCreateNestedOneWithoutStudentInput = {
    create?: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutStudentInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutStudentInput>, Enumerable<waitinglistUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutStudentInput>
    createMany?: waitinglistCreateManyStudentInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type attendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<attendanceCreateWithoutStudentInput>, Enumerable<attendanceUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<attendanceCreateOrConnectWithoutStudentInput>
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: Enumerable<attendanceWhereUniqueInput>
  }

  export type cgpaUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
    connectOrCreate?: cgpaCreateOrConnectWithoutStudentInput
    connect?: cgpaWhereUniqueInput
  }

  export type disciplinaryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<disciplinaryCreateWithoutStudentInput>, Enumerable<disciplinaryUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<disciplinaryCreateOrConnectWithoutStudentInput>
    createMany?: disciplinaryCreateManyStudentInputEnvelope
    connect?: Enumerable<disciplinaryWhereUniqueInput>
  }

  export type failedsubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<failedsubjectCreateWithoutStudentInput>, Enumerable<failedsubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<failedsubjectCreateOrConnectWithoutStudentInput>
    createMany?: failedsubjectCreateManyStudentInputEnvelope
    connect?: Enumerable<failedsubjectWhereUniqueInput>
  }

  export type historyUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<historyCreateWithoutStudentInput>, Enumerable<historyUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutStudentInput>
    createMany?: historyCreateManyStudentInputEnvelope
    connect?: Enumerable<historyWhereUniqueInput>
  }

  export type meetingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<meetingCreateWithoutStudentInput>, Enumerable<meetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutStudentInput>
    createMany?: meetingCreateManyStudentInputEnvelope
    connect?: Enumerable<meetingWhereUniqueInput>
  }

  export type userloginUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutStudentInput
    connect?: userloginWhereUniqueInput
  }

  export type waitinglistUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutStudentInput>, Enumerable<waitinglistUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutStudentInput>
    createMany?: waitinglistCreateManyStudentInputEnvelope
    connect?: Enumerable<waitinglistWhereUniqueInput>
  }

  export type attendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<attendanceCreateWithoutStudentInput>, Enumerable<attendanceUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<attendanceCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<attendanceUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: Enumerable<attendanceWhereUniqueInput>
    disconnect?: Enumerable<attendanceWhereUniqueInput>
    delete?: Enumerable<attendanceWhereUniqueInput>
    connect?: Enumerable<attendanceWhereUniqueInput>
    update?: Enumerable<attendanceUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<attendanceUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<attendanceScalarWhereInput>
  }

  export type cgpaUpdateOneWithoutStudentNestedInput = {
    create?: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
    connectOrCreate?: cgpaCreateOrConnectWithoutStudentInput
    upsert?: cgpaUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: cgpaWhereUniqueInput
    update?: XOR<cgpaUpdateWithoutStudentInput, cgpaUncheckedUpdateWithoutStudentInput>
  }

  export type disciplinaryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<disciplinaryCreateWithoutStudentInput>, Enumerable<disciplinaryUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<disciplinaryCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<disciplinaryUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: disciplinaryCreateManyStudentInputEnvelope
    set?: Enumerable<disciplinaryWhereUniqueInput>
    disconnect?: Enumerable<disciplinaryWhereUniqueInput>
    delete?: Enumerable<disciplinaryWhereUniqueInput>
    connect?: Enumerable<disciplinaryWhereUniqueInput>
    update?: Enumerable<disciplinaryUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<disciplinaryUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<disciplinaryScalarWhereInput>
  }

  export type failedsubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<failedsubjectCreateWithoutStudentInput>, Enumerable<failedsubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<failedsubjectCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<failedsubjectUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: failedsubjectCreateManyStudentInputEnvelope
    set?: Enumerable<failedsubjectWhereUniqueInput>
    disconnect?: Enumerable<failedsubjectWhereUniqueInput>
    delete?: Enumerable<failedsubjectWhereUniqueInput>
    connect?: Enumerable<failedsubjectWhereUniqueInput>
    update?: Enumerable<failedsubjectUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<failedsubjectUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<failedsubjectScalarWhereInput>
  }

  export type historyUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutStudentInput>, Enumerable<historyUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: historyCreateManyStudentInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutStudentInput>, Enumerable<meetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: meetingCreateManyStudentInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type userloginUpdateOneWithoutStudentNestedInput = {
    create?: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutStudentInput
    upsert?: userloginUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutStudentInput, userloginUncheckedUpdateWithoutStudentInput>
  }

  export type waitinglistUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutStudentInput>, Enumerable<waitinglistUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: waitinglistCreateManyStudentInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type attendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<attendanceCreateWithoutStudentInput>, Enumerable<attendanceUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<attendanceCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<attendanceUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: Enumerable<attendanceWhereUniqueInput>
    disconnect?: Enumerable<attendanceWhereUniqueInput>
    delete?: Enumerable<attendanceWhereUniqueInput>
    connect?: Enumerable<attendanceWhereUniqueInput>
    update?: Enumerable<attendanceUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<attendanceUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<attendanceScalarWhereInput>
  }

  export type cgpaUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
    connectOrCreate?: cgpaCreateOrConnectWithoutStudentInput
    upsert?: cgpaUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: cgpaWhereUniqueInput
    update?: XOR<cgpaUpdateWithoutStudentInput, cgpaUncheckedUpdateWithoutStudentInput>
  }

  export type disciplinaryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<disciplinaryCreateWithoutStudentInput>, Enumerable<disciplinaryUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<disciplinaryCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<disciplinaryUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: disciplinaryCreateManyStudentInputEnvelope
    set?: Enumerable<disciplinaryWhereUniqueInput>
    disconnect?: Enumerable<disciplinaryWhereUniqueInput>
    delete?: Enumerable<disciplinaryWhereUniqueInput>
    connect?: Enumerable<disciplinaryWhereUniqueInput>
    update?: Enumerable<disciplinaryUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<disciplinaryUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<disciplinaryScalarWhereInput>
  }

  export type failedsubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<failedsubjectCreateWithoutStudentInput>, Enumerable<failedsubjectUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<failedsubjectCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<failedsubjectUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: failedsubjectCreateManyStudentInputEnvelope
    set?: Enumerable<failedsubjectWhereUniqueInput>
    disconnect?: Enumerable<failedsubjectWhereUniqueInput>
    delete?: Enumerable<failedsubjectWhereUniqueInput>
    connect?: Enumerable<failedsubjectWhereUniqueInput>
    update?: Enumerable<failedsubjectUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<failedsubjectUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<failedsubjectScalarWhereInput>
  }

  export type historyUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<historyCreateWithoutStudentInput>, Enumerable<historyUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<historyCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<historyUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: historyCreateManyStudentInputEnvelope
    set?: Enumerable<historyWhereUniqueInput>
    disconnect?: Enumerable<historyWhereUniqueInput>
    delete?: Enumerable<historyWhereUniqueInput>
    connect?: Enumerable<historyWhereUniqueInput>
    update?: Enumerable<historyUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<historyUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<historyScalarWhereInput>
  }

  export type meetingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<meetingCreateWithoutStudentInput>, Enumerable<meetingUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<meetingCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<meetingUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: meetingCreateManyStudentInputEnvelope
    set?: Enumerable<meetingWhereUniqueInput>
    disconnect?: Enumerable<meetingWhereUniqueInput>
    delete?: Enumerable<meetingWhereUniqueInput>
    connect?: Enumerable<meetingWhereUniqueInput>
    update?: Enumerable<meetingUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<meetingUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<meetingScalarWhereInput>
  }

  export type userloginUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
    connectOrCreate?: userloginCreateOrConnectWithoutStudentInput
    upsert?: userloginUpsertWithoutStudentInput
    disconnect?: boolean
    delete?: boolean
    connect?: userloginWhereUniqueInput
    update?: XOR<userloginUpdateWithoutStudentInput, userloginUncheckedUpdateWithoutStudentInput>
  }

  export type waitinglistUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<waitinglistCreateWithoutStudentInput>, Enumerable<waitinglistUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<waitinglistCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<waitinglistUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: waitinglistCreateManyStudentInputEnvelope
    set?: Enumerable<waitinglistWhereUniqueInput>
    disconnect?: Enumerable<waitinglistWhereUniqueInput>
    delete?: Enumerable<waitinglistWhereUniqueInput>
    connect?: Enumerable<waitinglistWhereUniqueInput>
    update?: Enumerable<waitinglistUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<waitinglistUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<waitinglistScalarWhereInput>
  }

  export type studentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput
    connect?: studentWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput
    upsert?: studentUpsertWithoutAttendanceInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>
  }

  export type studentCreateNestedOneWithoutCgpaInput = {
    create?: XOR<studentCreateWithoutCgpaInput, studentUncheckedCreateWithoutCgpaInput>
    connectOrCreate?: studentCreateOrConnectWithoutCgpaInput
    connect?: studentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type studentUpdateOneRequiredWithoutCgpaNestedInput = {
    create?: XOR<studentCreateWithoutCgpaInput, studentUncheckedCreateWithoutCgpaInput>
    connectOrCreate?: studentCreateOrConnectWithoutCgpaInput
    upsert?: studentUpsertWithoutCgpaInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutCgpaInput, studentUncheckedUpdateWithoutCgpaInput>
  }

  export type studentCreateNestedOneWithoutDisciplinaryInput = {
    create?: XOR<studentCreateWithoutDisciplinaryInput, studentUncheckedCreateWithoutDisciplinaryInput>
    connectOrCreate?: studentCreateOrConnectWithoutDisciplinaryInput
    connect?: studentWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutDisciplinaryNestedInput = {
    create?: XOR<studentCreateWithoutDisciplinaryInput, studentUncheckedCreateWithoutDisciplinaryInput>
    connectOrCreate?: studentCreateOrConnectWithoutDisciplinaryInput
    upsert?: studentUpsertWithoutDisciplinaryInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutDisciplinaryInput, studentUncheckedUpdateWithoutDisciplinaryInput>
  }

  export type studentCreateNestedOneWithoutFailedsubjectInput = {
    create?: XOR<studentCreateWithoutFailedsubjectInput, studentUncheckedCreateWithoutFailedsubjectInput>
    connectOrCreate?: studentCreateOrConnectWithoutFailedsubjectInput
    connect?: studentWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutFailedsubjectNestedInput = {
    create?: XOR<studentCreateWithoutFailedsubjectInput, studentUncheckedCreateWithoutFailedsubjectInput>
    connectOrCreate?: studentCreateOrConnectWithoutFailedsubjectInput
    upsert?: studentUpsertWithoutFailedsubjectInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutFailedsubjectInput, studentUncheckedUpdateWithoutFailedsubjectInput>
  }

  export type adminCreateNestedOneWithoutMeetingInput = {
    create?: XOR<adminCreateWithoutMeetingInput, adminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: adminCreateOrConnectWithoutMeetingInput
    connect?: adminWhereUniqueInput
  }

  export type parentCreateNestedOneWithoutMeetingInput = {
    create?: XOR<parentCreateWithoutMeetingInput, parentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: parentCreateOrConnectWithoutMeetingInput
    connect?: parentWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutMeetingInput = {
    create?: XOR<studentCreateWithoutMeetingInput, studentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: studentCreateOrConnectWithoutMeetingInput
    connect?: studentWhereUniqueInput
  }

  export type timeslotCreateNestedOneWithoutMeetingInput = {
    create?: XOR<timeslotCreateWithoutMeetingInput, timeslotUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: timeslotCreateOrConnectWithoutMeetingInput
    connect?: timeslotWhereUniqueInput
  }

  export type adminUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<adminCreateWithoutMeetingInput, adminUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: adminCreateOrConnectWithoutMeetingInput
    upsert?: adminUpsertWithoutMeetingInput
    connect?: adminWhereUniqueInput
    update?: XOR<adminUpdateWithoutMeetingInput, adminUncheckedUpdateWithoutMeetingInput>
  }

  export type parentUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<parentCreateWithoutMeetingInput, parentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: parentCreateOrConnectWithoutMeetingInput
    upsert?: parentUpsertWithoutMeetingInput
    connect?: parentWhereUniqueInput
    update?: XOR<parentUpdateWithoutMeetingInput, parentUncheckedUpdateWithoutMeetingInput>
  }

  export type studentUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<studentCreateWithoutMeetingInput, studentUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: studentCreateOrConnectWithoutMeetingInput
    upsert?: studentUpsertWithoutMeetingInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutMeetingInput, studentUncheckedUpdateWithoutMeetingInput>
  }

  export type timeslotUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<timeslotCreateWithoutMeetingInput, timeslotUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: timeslotCreateOrConnectWithoutMeetingInput
    upsert?: timeslotUpsertWithoutMeetingInput
    connect?: timeslotWhereUniqueInput
    update?: XOR<timeslotUpdateWithoutMeetingInput, timeslotUncheckedUpdateWithoutMeetingInput>
  }

  export type adminCreateNestedOneWithoutWaitinglistInput = {
    create?: XOR<adminCreateWithoutWaitinglistInput, adminUncheckedCreateWithoutWaitinglistInput>
    connectOrCreate?: adminCreateOrConnectWithoutWaitinglistInput
    connect?: adminWhereUniqueInput
  }

  export type parentCreateNestedOneWithoutWaitinglistInput = {
    create?: XOR<parentCreateWithoutWaitinglistInput, parentUncheckedCreateWithoutWaitinglistInput>
    connectOrCreate?: parentCreateOrConnectWithoutWaitinglistInput
    connect?: parentWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutWaiinglistInput = {
    create?: XOR<studentCreateWithoutWaiinglistInput, studentUncheckedCreateWithoutWaiinglistInput>
    connectOrCreate?: studentCreateOrConnectWithoutWaiinglistInput
    connect?: studentWhereUniqueInput
  }

  export type adminUpdateOneRequiredWithoutWaitinglistNestedInput = {
    create?: XOR<adminCreateWithoutWaitinglistInput, adminUncheckedCreateWithoutWaitinglistInput>
    connectOrCreate?: adminCreateOrConnectWithoutWaitinglistInput
    upsert?: adminUpsertWithoutWaitinglistInput
    connect?: adminWhereUniqueInput
    update?: XOR<adminUpdateWithoutWaitinglistInput, adminUncheckedUpdateWithoutWaitinglistInput>
  }

  export type parentUpdateOneRequiredWithoutWaitinglistNestedInput = {
    create?: XOR<parentCreateWithoutWaitinglistInput, parentUncheckedCreateWithoutWaitinglistInput>
    connectOrCreate?: parentCreateOrConnectWithoutWaitinglistInput
    upsert?: parentUpsertWithoutWaitinglistInput
    connect?: parentWhereUniqueInput
    update?: XOR<parentUpdateWithoutWaitinglistInput, parentUncheckedUpdateWithoutWaitinglistInput>
  }

  export type studentUpdateOneRequiredWithoutWaiinglistNestedInput = {
    create?: XOR<studentCreateWithoutWaiinglistInput, studentUncheckedCreateWithoutWaiinglistInput>
    connectOrCreate?: studentCreateOrConnectWithoutWaiinglistInput
    upsert?: studentUpsertWithoutWaiinglistInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutWaiinglistInput, studentUncheckedUpdateWithoutWaiinglistInput>
  }

  export type feedbackCreateNestedOneWithoutHistoryInput = {
    create?: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutHistoryInput
    connect?: feedbackWhereUniqueInput
  }

  export type adminCreateNestedOneWithoutHistoryInput = {
    create?: XOR<adminCreateWithoutHistoryInput, adminUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: adminCreateOrConnectWithoutHistoryInput
    connect?: adminWhereUniqueInput
  }

  export type parentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<parentCreateWithoutHistoryInput, parentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: parentCreateOrConnectWithoutHistoryInput
    connect?: parentWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<studentCreateWithoutHistoryInput, studentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: studentCreateOrConnectWithoutHistoryInput
    connect?: studentWhereUniqueInput
  }

  export type feedbackUncheckedCreateNestedOneWithoutHistoryInput = {
    create?: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutHistoryInput
    connect?: feedbackWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type feedbackUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutHistoryInput
    upsert?: feedbackUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: feedbackWhereUniqueInput
    update?: XOR<feedbackUpdateWithoutHistoryInput, feedbackUncheckedUpdateWithoutHistoryInput>
  }

  export type adminUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<adminCreateWithoutHistoryInput, adminUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: adminCreateOrConnectWithoutHistoryInput
    upsert?: adminUpsertWithoutHistoryInput
    connect?: adminWhereUniqueInput
    update?: XOR<adminUpdateWithoutHistoryInput, adminUncheckedUpdateWithoutHistoryInput>
  }

  export type parentUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<parentCreateWithoutHistoryInput, parentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: parentCreateOrConnectWithoutHistoryInput
    upsert?: parentUpsertWithoutHistoryInput
    connect?: parentWhereUniqueInput
    update?: XOR<parentUpdateWithoutHistoryInput, parentUncheckedUpdateWithoutHistoryInput>
  }

  export type studentUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<studentCreateWithoutHistoryInput, studentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: studentCreateOrConnectWithoutHistoryInput
    upsert?: studentUpsertWithoutHistoryInput
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutHistoryInput, studentUncheckedUpdateWithoutHistoryInput>
  }

  export type feedbackUncheckedUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: feedbackCreateOrConnectWithoutHistoryInput
    upsert?: feedbackUpsertWithoutHistoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: feedbackWhereUniqueInput
    update?: XOR<feedbackUpdateWithoutHistoryInput, feedbackUncheckedUpdateWithoutHistoryInput>
  }

  export type adminCreateNestedOneWithoutUserloginInput = {
    create?: XOR<adminCreateWithoutUserloginInput, adminUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserloginInput
    connect?: adminWhereUniqueInput
  }

  export type parentCreateNestedOneWithoutUserloginInput = {
    create?: XOR<parentCreateWithoutUserloginInput, parentUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: parentCreateOrConnectWithoutUserloginInput
    connect?: parentWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutUserloginInput = {
    create?: XOR<studentCreateWithoutUserloginInput, studentUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: studentCreateOrConnectWithoutUserloginInput
    connect?: studentWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type adminUpdateOneWithoutUserloginNestedInput = {
    create?: XOR<adminCreateWithoutUserloginInput, adminUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserloginInput
    upsert?: adminUpsertWithoutUserloginInput
    disconnect?: boolean
    delete?: boolean
    connect?: adminWhereUniqueInput
    update?: XOR<adminUpdateWithoutUserloginInput, adminUncheckedUpdateWithoutUserloginInput>
  }

  export type parentUpdateOneWithoutUserloginNestedInput = {
    create?: XOR<parentCreateWithoutUserloginInput, parentUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: parentCreateOrConnectWithoutUserloginInput
    upsert?: parentUpsertWithoutUserloginInput
    disconnect?: boolean
    delete?: boolean
    connect?: parentWhereUniqueInput
    update?: XOR<parentUpdateWithoutUserloginInput, parentUncheckedUpdateWithoutUserloginInput>
  }

  export type studentUpdateOneWithoutUserloginNestedInput = {
    create?: XOR<studentCreateWithoutUserloginInput, studentUncheckedCreateWithoutUserloginInput>
    connectOrCreate?: studentCreateOrConnectWithoutUserloginInput
    upsert?: studentUpsertWithoutUserloginInput
    disconnect?: boolean
    delete?: boolean
    connect?: studentWhereUniqueInput
    update?: XOR<studentUpdateWithoutUserloginInput, studentUncheckedUpdateWithoutUserloginInput>
  }

  export type historyCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<historyCreateWithoutFeedbackInput, historyUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: historyCreateOrConnectWithoutFeedbackInput
    connect?: historyWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type historyUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<historyCreateWithoutFeedbackInput, historyUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: historyCreateOrConnectWithoutFeedbackInput
    upsert?: historyUpsertWithoutFeedbackInput
    connect?: historyWhereUniqueInput
    update?: XOR<historyUpdateWithoutFeedbackInput, historyUncheckedUpdateWithoutFeedbackInput>
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
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

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type historyCreateWithoutParentInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackCreateNestedOneWithoutHistoryInput
    admin: adminCreateNestedOneWithoutHistoryInput
    student: studentCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutParentInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackUncheckedCreateNestedOneWithoutHistoryInput
  }

  export type historyCreateOrConnectWithoutParentInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutParentInput, historyUncheckedCreateWithoutParentInput>
  }

  export type historyCreateManyParentInputEnvelope = {
    data: Enumerable<historyCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type meetingCreateWithoutParentInput = {
    reason: string
    status: string
    referedTo: string
    date: Date | string
    admin: adminCreateNestedOneWithoutMeetingInput
    student: studentCreateNestedOneWithoutMeetingInput
    timeslot: timeslotCreateNestedOneWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutParentInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    adminId: string
    date: Date | string
  }

  export type meetingCreateOrConnectWithoutParentInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutParentInput, meetingUncheckedCreateWithoutParentInput>
  }

  export type meetingCreateManyParentInputEnvelope = {
    data: Enumerable<meetingCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type userloginCreateWithoutParentInput = {
    userName: string
    password: string
    email: string
    role: Role
    admin?: adminCreateNestedOneWithoutUserloginInput
    student?: studentCreateNestedOneWithoutUserloginInput
  }

  export type userloginUncheckedCreateWithoutParentInput = {
    id?: number
    userName: string
    password: string
    email: string
    role: Role
    regNo?: string | null
    adminId?: string | null
  }

  export type userloginCreateOrConnectWithoutParentInput = {
    where: userloginWhereUniqueInput
    create: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
  }

  export type waitinglistCreateWithoutParentInput = {
    reason: string
    date: Date | string
    tsid: number
    status?: string | null
    admin: adminCreateNestedOneWithoutWaitinglistInput
    student: studentCreateNestedOneWithoutWaiinglistInput
  }

  export type waitinglistUncheckedCreateWithoutParentInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    adminId: string
    status?: string | null
  }

  export type waitinglistCreateOrConnectWithoutParentInput = {
    where: waitinglistWhereUniqueInput
    create: XOR<waitinglistCreateWithoutParentInput, waitinglistUncheckedCreateWithoutParentInput>
  }

  export type waitinglistCreateManyParentInputEnvelope = {
    data: Enumerable<waitinglistCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type historyUpsertWithWhereUniqueWithoutParentInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutParentInput, historyUncheckedUpdateWithoutParentInput>
    create: XOR<historyCreateWithoutParentInput, historyUncheckedCreateWithoutParentInput>
  }

  export type historyUpdateWithWhereUniqueWithoutParentInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutParentInput, historyUncheckedUpdateWithoutParentInput>
  }

  export type historyUpdateManyWithWhereWithoutParentInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutHistoryInput>
  }

  export type historyScalarWhereInput = {
    AND?: Enumerable<historyScalarWhereInput>
    OR?: Enumerable<historyScalarWhereInput>
    NOT?: Enumerable<historyScalarWhereInput>
    hid?: IntFilter | number
    date?: DateTimeFilter | Date | string
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    reason?: StringFilter | string
    status?: EnumStatusFilter | Status
    referedTo?: StringFilter | string
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    adminFeedback?: StringNullableFilter | string | null
    suggestion?: StringNullableFilter | string | null
  }

  export type meetingUpsertWithWhereUniqueWithoutParentInput = {
    where: meetingWhereUniqueInput
    update: XOR<meetingUpdateWithoutParentInput, meetingUncheckedUpdateWithoutParentInput>
    create: XOR<meetingCreateWithoutParentInput, meetingUncheckedCreateWithoutParentInput>
  }

  export type meetingUpdateWithWhereUniqueWithoutParentInput = {
    where: meetingWhereUniqueInput
    data: XOR<meetingUpdateWithoutParentInput, meetingUncheckedUpdateWithoutParentInput>
  }

  export type meetingUpdateManyWithWhereWithoutParentInput = {
    where: meetingScalarWhereInput
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type meetingScalarWhereInput = {
    AND?: Enumerable<meetingScalarWhereInput>
    OR?: Enumerable<meetingScalarWhereInput>
    NOT?: Enumerable<meetingScalarWhereInput>
    mid?: IntFilter | number
    reason?: StringFilter | string
    status?: StringFilter | string
    referedTo?: StringFilter | string
    tsid?: IntFilter | number
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    date?: DateTimeFilter | Date | string
  }

  export type userloginUpsertWithoutParentInput = {
    update: XOR<userloginUpdateWithoutParentInput, userloginUncheckedUpdateWithoutParentInput>
    create: XOR<userloginCreateWithoutParentInput, userloginUncheckedCreateWithoutParentInput>
  }

  export type userloginUpdateWithoutParentInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    admin?: adminUpdateOneWithoutUserloginNestedInput
    student?: studentUpdateOneWithoutUserloginNestedInput
  }

  export type userloginUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    regNo?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUpsertWithWhereUniqueWithoutParentInput = {
    where: waitinglistWhereUniqueInput
    update: XOR<waitinglistUpdateWithoutParentInput, waitinglistUncheckedUpdateWithoutParentInput>
    create: XOR<waitinglistCreateWithoutParentInput, waitinglistUncheckedCreateWithoutParentInput>
  }

  export type waitinglistUpdateWithWhereUniqueWithoutParentInput = {
    where: waitinglistWhereUniqueInput
    data: XOR<waitinglistUpdateWithoutParentInput, waitinglistUncheckedUpdateWithoutParentInput>
  }

  export type waitinglistUpdateManyWithWhereWithoutParentInput = {
    where: waitinglistScalarWhereInput
    data: XOR<waitinglistUpdateManyMutationInput, waitinglistUncheckedUpdateManyWithoutWaitinglistInput>
  }

  export type waitinglistScalarWhereInput = {
    AND?: Enumerable<waitinglistScalarWhereInput>
    OR?: Enumerable<waitinglistScalarWhereInput>
    NOT?: Enumerable<waitinglistScalarWhereInput>
    id?: IntFilter | number
    reason?: StringFilter | string
    date?: DateTimeFilter | Date | string
    tsid?: IntFilter | number
    regNo?: StringFilter | string
    adminId?: StringFilter | string
    parentId?: StringFilter | string
    status?: StringNullableFilter | string | null
  }

  export type historyCreateWithoutAdminInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackCreateNestedOneWithoutHistoryInput
    parent: parentCreateNestedOneWithoutHistoryInput
    student: studentCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutAdminInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackUncheckedCreateNestedOneWithoutHistoryInput
  }

  export type historyCreateOrConnectWithoutAdminInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutAdminInput, historyUncheckedCreateWithoutAdminInput>
  }

  export type historyCreateManyAdminInputEnvelope = {
    data: Enumerable<historyCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type meetingCreateWithoutAdminInput = {
    reason: string
    status: string
    referedTo: string
    date: Date | string
    parent: parentCreateNestedOneWithoutMeetingInput
    student: studentCreateNestedOneWithoutMeetingInput
    timeslot: timeslotCreateNestedOneWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutAdminInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    parentId: string
    date: Date | string
  }

  export type meetingCreateOrConnectWithoutAdminInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutAdminInput, meetingUncheckedCreateWithoutAdminInput>
  }

  export type meetingCreateManyAdminInputEnvelope = {
    data: Enumerable<meetingCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type timeslotCreateWithoutAdminInput = {
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    day?: string | null
    meeting?: meetingCreateNestedOneWithoutTimeslotInput
  }

  export type timeslotUncheckedCreateWithoutAdminInput = {
    tsid?: number
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    day?: string | null
    meeting?: meetingUncheckedCreateNestedOneWithoutTimeslotInput
  }

  export type timeslotCreateOrConnectWithoutAdminInput = {
    where: timeslotWhereUniqueInput
    create: XOR<timeslotCreateWithoutAdminInput, timeslotUncheckedCreateWithoutAdminInput>
  }

  export type timeslotCreateManyAdminInputEnvelope = {
    data: Enumerable<timeslotCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type userloginCreateWithoutAdminInput = {
    userName: string
    password: string
    email: string
    role: Role
    parent?: parentCreateNestedOneWithoutUserloginInput
    student?: studentCreateNestedOneWithoutUserloginInput
  }

  export type userloginUncheckedCreateWithoutAdminInput = {
    id?: number
    userName: string
    password: string
    email: string
    role: Role
    regNo?: string | null
    parentId?: string | null
  }

  export type userloginCreateOrConnectWithoutAdminInput = {
    where: userloginWhereUniqueInput
    create: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
  }

  export type waitinglistCreateWithoutAdminInput = {
    reason: string
    date: Date | string
    tsid: number
    status?: string | null
    parent: parentCreateNestedOneWithoutWaitinglistInput
    student: studentCreateNestedOneWithoutWaiinglistInput
  }

  export type waitinglistUncheckedCreateWithoutAdminInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    parentId: string
    status?: string | null
  }

  export type waitinglistCreateOrConnectWithoutAdminInput = {
    where: waitinglistWhereUniqueInput
    create: XOR<waitinglistCreateWithoutAdminInput, waitinglistUncheckedCreateWithoutAdminInput>
  }

  export type waitinglistCreateManyAdminInputEnvelope = {
    data: Enumerable<waitinglistCreateManyAdminInput>
    skipDuplicates?: boolean
  }

  export type historyUpsertWithWhereUniqueWithoutAdminInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutAdminInput, historyUncheckedUpdateWithoutAdminInput>
    create: XOR<historyCreateWithoutAdminInput, historyUncheckedCreateWithoutAdminInput>
  }

  export type historyUpdateWithWhereUniqueWithoutAdminInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutAdminInput, historyUncheckedUpdateWithoutAdminInput>
  }

  export type historyUpdateManyWithWhereWithoutAdminInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutHistoryInput>
  }

  export type meetingUpsertWithWhereUniqueWithoutAdminInput = {
    where: meetingWhereUniqueInput
    update: XOR<meetingUpdateWithoutAdminInput, meetingUncheckedUpdateWithoutAdminInput>
    create: XOR<meetingCreateWithoutAdminInput, meetingUncheckedCreateWithoutAdminInput>
  }

  export type meetingUpdateWithWhereUniqueWithoutAdminInput = {
    where: meetingWhereUniqueInput
    data: XOR<meetingUpdateWithoutAdminInput, meetingUncheckedUpdateWithoutAdminInput>
  }

  export type meetingUpdateManyWithWhereWithoutAdminInput = {
    where: meetingScalarWhereInput
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type timeslotUpsertWithWhereUniqueWithoutAdminInput = {
    where: timeslotWhereUniqueInput
    update: XOR<timeslotUpdateWithoutAdminInput, timeslotUncheckedUpdateWithoutAdminInput>
    create: XOR<timeslotCreateWithoutAdminInput, timeslotUncheckedCreateWithoutAdminInput>
  }

  export type timeslotUpdateWithWhereUniqueWithoutAdminInput = {
    where: timeslotWhereUniqueInput
    data: XOR<timeslotUpdateWithoutAdminInput, timeslotUncheckedUpdateWithoutAdminInput>
  }

  export type timeslotUpdateManyWithWhereWithoutAdminInput = {
    where: timeslotScalarWhereInput
    data: XOR<timeslotUpdateManyMutationInput, timeslotUncheckedUpdateManyWithoutTimeslotInput>
  }

  export type timeslotScalarWhereInput = {
    AND?: Enumerable<timeslotScalarWhereInput>
    OR?: Enumerable<timeslotScalarWhereInput>
    NOT?: Enumerable<timeslotScalarWhereInput>
    tsid?: IntFilter | number
    startTime?: DateTimeFilter | Date | string
    endTime?: DateTimeFilter | Date | string
    availibility?: BoolFilter | boolean
    adminId?: StringFilter | string
    day?: StringNullableFilter | string | null
  }

  export type userloginUpsertWithoutAdminInput = {
    update: XOR<userloginUpdateWithoutAdminInput, userloginUncheckedUpdateWithoutAdminInput>
    create: XOR<userloginCreateWithoutAdminInput, userloginUncheckedCreateWithoutAdminInput>
  }

  export type userloginUpdateWithoutAdminInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    parent?: parentUpdateOneWithoutUserloginNestedInput
    student?: studentUpdateOneWithoutUserloginNestedInput
  }

  export type userloginUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    regNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUpsertWithWhereUniqueWithoutAdminInput = {
    where: waitinglistWhereUniqueInput
    update: XOR<waitinglistUpdateWithoutAdminInput, waitinglistUncheckedUpdateWithoutAdminInput>
    create: XOR<waitinglistCreateWithoutAdminInput, waitinglistUncheckedCreateWithoutAdminInput>
  }

  export type waitinglistUpdateWithWhereUniqueWithoutAdminInput = {
    where: waitinglistWhereUniqueInput
    data: XOR<waitinglistUpdateWithoutAdminInput, waitinglistUncheckedUpdateWithoutAdminInput>
  }

  export type waitinglistUpdateManyWithWhereWithoutAdminInput = {
    where: waitinglistScalarWhereInput
    data: XOR<waitinglistUpdateManyMutationInput, waitinglistUncheckedUpdateManyWithoutWaitinglistInput>
  }

  export type meetingCreateWithoutTimeslotInput = {
    reason: string
    status: string
    referedTo: string
    date: Date | string
    admin: adminCreateNestedOneWithoutMeetingInput
    parent: parentCreateNestedOneWithoutMeetingInput
    student: studentCreateNestedOneWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutTimeslotInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    regNo: string
    adminId: string
    parentId: string
    date: Date | string
  }

  export type meetingCreateOrConnectWithoutTimeslotInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
  }

  export type adminCreateWithoutTimeslotInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyCreateNestedManyWithoutAdminInput
    meeting?: meetingCreateNestedManyWithoutAdminInput
    userlogin?: userloginCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutTimeslotInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyUncheckedCreateNestedManyWithoutAdminInput
    meeting?: meetingUncheckedCreateNestedManyWithoutAdminInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutTimeslotInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutTimeslotInput, adminUncheckedCreateWithoutTimeslotInput>
  }

  export type meetingUpsertWithoutTimeslotInput = {
    update: XOR<meetingUpdateWithoutTimeslotInput, meetingUncheckedUpdateWithoutTimeslotInput>
    create: XOR<meetingCreateWithoutTimeslotInput, meetingUncheckedCreateWithoutTimeslotInput>
  }

  export type meetingUpdateWithoutTimeslotInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutMeetingNestedInput
    parent?: parentUpdateOneRequiredWithoutMeetingNestedInput
    student?: studentUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutTimeslotInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUpsertWithoutTimeslotInput = {
    update: XOR<adminUpdateWithoutTimeslotInput, adminUncheckedUpdateWithoutTimeslotInput>
    create: XOR<adminCreateWithoutTimeslotInput, adminUncheckedCreateWithoutTimeslotInput>
  }

  export type adminUpdateWithoutTimeslotInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUpdateManyWithoutAdminNestedInput
    meeting?: meetingUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutTimeslotInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUncheckedUpdateManyWithoutAdminNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type attendanceCreateWithoutStudentInput = {
    subject: string
    percentage: number
  }

  export type attendanceUncheckedCreateWithoutStudentInput = {
    sid?: number
    subject: string
    percentage: number
  }

  export type attendanceCreateOrConnectWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceCreateManyStudentInputEnvelope = {
    data: Enumerable<attendanceCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type cgpaCreateWithoutStudentInput = {
    cgpa: number
  }

  export type cgpaUncheckedCreateWithoutStudentInput = {
    id?: number
    cgpa: number
  }

  export type cgpaCreateOrConnectWithoutStudentInput = {
    where: cgpaWhereUniqueInput
    create: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
  }

  export type disciplinaryCreateWithoutStudentInput = {
    actions: string
  }

  export type disciplinaryUncheckedCreateWithoutStudentInput = {
    id?: number
    actions: string
  }

  export type disciplinaryCreateOrConnectWithoutStudentInput = {
    where: disciplinaryWhereUniqueInput
    create: XOR<disciplinaryCreateWithoutStudentInput, disciplinaryUncheckedCreateWithoutStudentInput>
  }

  export type disciplinaryCreateManyStudentInputEnvelope = {
    data: Enumerable<disciplinaryCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type failedsubjectCreateWithoutStudentInput = {
    semester: string
    subject: string
    grade: string
  }

  export type failedsubjectUncheckedCreateWithoutStudentInput = {
    id?: number
    semester: string
    subject: string
    grade: string
  }

  export type failedsubjectCreateOrConnectWithoutStudentInput = {
    where: failedsubjectWhereUniqueInput
    create: XOR<failedsubjectCreateWithoutStudentInput, failedsubjectUncheckedCreateWithoutStudentInput>
  }

  export type failedsubjectCreateManyStudentInputEnvelope = {
    data: Enumerable<failedsubjectCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type historyCreateWithoutStudentInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackCreateNestedOneWithoutHistoryInput
    admin: adminCreateNestedOneWithoutHistoryInput
    parent: parentCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutStudentInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminId: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
    feedback?: feedbackUncheckedCreateNestedOneWithoutHistoryInput
  }

  export type historyCreateOrConnectWithoutStudentInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutStudentInput, historyUncheckedCreateWithoutStudentInput>
  }

  export type historyCreateManyStudentInputEnvelope = {
    data: Enumerable<historyCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type meetingCreateWithoutStudentInput = {
    reason: string
    status: string
    referedTo: string
    date: Date | string
    admin: adminCreateNestedOneWithoutMeetingInput
    parent: parentCreateNestedOneWithoutMeetingInput
    timeslot: timeslotCreateNestedOneWithoutMeetingInput
  }

  export type meetingUncheckedCreateWithoutStudentInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    adminId: string
    parentId: string
    date: Date | string
  }

  export type meetingCreateOrConnectWithoutStudentInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutStudentInput, meetingUncheckedCreateWithoutStudentInput>
  }

  export type meetingCreateManyStudentInputEnvelope = {
    data: Enumerable<meetingCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type userloginCreateWithoutStudentInput = {
    userName: string
    password: string
    email: string
    role: Role
    admin?: adminCreateNestedOneWithoutUserloginInput
    parent?: parentCreateNestedOneWithoutUserloginInput
  }

  export type userloginUncheckedCreateWithoutStudentInput = {
    id?: number
    userName: string
    password: string
    email: string
    role: Role
    adminId?: string | null
    parentId?: string | null
  }

  export type userloginCreateOrConnectWithoutStudentInput = {
    where: userloginWhereUniqueInput
    create: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
  }

  export type waitinglistCreateWithoutStudentInput = {
    reason: string
    date: Date | string
    tsid: number
    status?: string | null
    admin: adminCreateNestedOneWithoutWaitinglistInput
    parent: parentCreateNestedOneWithoutWaitinglistInput
  }

  export type waitinglistUncheckedCreateWithoutStudentInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    adminId: string
    parentId: string
    status?: string | null
  }

  export type waitinglistCreateOrConnectWithoutStudentInput = {
    where: waitinglistWhereUniqueInput
    create: XOR<waitinglistCreateWithoutStudentInput, waitinglistUncheckedCreateWithoutStudentInput>
  }

  export type waitinglistCreateManyStudentInputEnvelope = {
    data: Enumerable<waitinglistCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type attendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
  }

  export type attendanceUpdateManyWithWhereWithoutStudentInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutAttendanceInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: Enumerable<attendanceScalarWhereInput>
    OR?: Enumerable<attendanceScalarWhereInput>
    NOT?: Enumerable<attendanceScalarWhereInput>
    sid?: IntFilter | number
    subject?: StringFilter | string
    percentage?: IntFilter | number
    regNo?: StringFilter | string
  }

  export type cgpaUpsertWithoutStudentInput = {
    update: XOR<cgpaUpdateWithoutStudentInput, cgpaUncheckedUpdateWithoutStudentInput>
    create: XOR<cgpaCreateWithoutStudentInput, cgpaUncheckedCreateWithoutStudentInput>
  }

  export type cgpaUpdateWithoutStudentInput = {
    cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type cgpaUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
  }

  export type disciplinaryUpsertWithWhereUniqueWithoutStudentInput = {
    where: disciplinaryWhereUniqueInput
    update: XOR<disciplinaryUpdateWithoutStudentInput, disciplinaryUncheckedUpdateWithoutStudentInput>
    create: XOR<disciplinaryCreateWithoutStudentInput, disciplinaryUncheckedCreateWithoutStudentInput>
  }

  export type disciplinaryUpdateWithWhereUniqueWithoutStudentInput = {
    where: disciplinaryWhereUniqueInput
    data: XOR<disciplinaryUpdateWithoutStudentInput, disciplinaryUncheckedUpdateWithoutStudentInput>
  }

  export type disciplinaryUpdateManyWithWhereWithoutStudentInput = {
    where: disciplinaryScalarWhereInput
    data: XOR<disciplinaryUpdateManyMutationInput, disciplinaryUncheckedUpdateManyWithoutDisciplinaryInput>
  }

  export type disciplinaryScalarWhereInput = {
    AND?: Enumerable<disciplinaryScalarWhereInput>
    OR?: Enumerable<disciplinaryScalarWhereInput>
    NOT?: Enumerable<disciplinaryScalarWhereInput>
    id?: IntFilter | number
    actions?: StringFilter | string
    regNo?: StringFilter | string
  }

  export type failedsubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: failedsubjectWhereUniqueInput
    update: XOR<failedsubjectUpdateWithoutStudentInput, failedsubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<failedsubjectCreateWithoutStudentInput, failedsubjectUncheckedCreateWithoutStudentInput>
  }

  export type failedsubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: failedsubjectWhereUniqueInput
    data: XOR<failedsubjectUpdateWithoutStudentInput, failedsubjectUncheckedUpdateWithoutStudentInput>
  }

  export type failedsubjectUpdateManyWithWhereWithoutStudentInput = {
    where: failedsubjectScalarWhereInput
    data: XOR<failedsubjectUpdateManyMutationInput, failedsubjectUncheckedUpdateManyWithoutFailedsubjectInput>
  }

  export type failedsubjectScalarWhereInput = {
    AND?: Enumerable<failedsubjectScalarWhereInput>
    OR?: Enumerable<failedsubjectScalarWhereInput>
    NOT?: Enumerable<failedsubjectScalarWhereInput>
    id?: IntFilter | number
    semester?: StringFilter | string
    subject?: StringFilter | string
    grade?: StringFilter | string
    regNo?: StringFilter | string
  }

  export type historyUpsertWithWhereUniqueWithoutStudentInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutStudentInput, historyUncheckedUpdateWithoutStudentInput>
    create: XOR<historyCreateWithoutStudentInput, historyUncheckedCreateWithoutStudentInput>
  }

  export type historyUpdateWithWhereUniqueWithoutStudentInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutStudentInput, historyUncheckedUpdateWithoutStudentInput>
  }

  export type historyUpdateManyWithWhereWithoutStudentInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutHistoryInput>
  }

  export type meetingUpsertWithWhereUniqueWithoutStudentInput = {
    where: meetingWhereUniqueInput
    update: XOR<meetingUpdateWithoutStudentInput, meetingUncheckedUpdateWithoutStudentInput>
    create: XOR<meetingCreateWithoutStudentInput, meetingUncheckedCreateWithoutStudentInput>
  }

  export type meetingUpdateWithWhereUniqueWithoutStudentInput = {
    where: meetingWhereUniqueInput
    data: XOR<meetingUpdateWithoutStudentInput, meetingUncheckedUpdateWithoutStudentInput>
  }

  export type meetingUpdateManyWithWhereWithoutStudentInput = {
    where: meetingScalarWhereInput
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyWithoutMeetingInput>
  }

  export type userloginUpsertWithoutStudentInput = {
    update: XOR<userloginUpdateWithoutStudentInput, userloginUncheckedUpdateWithoutStudentInput>
    create: XOR<userloginCreateWithoutStudentInput, userloginUncheckedCreateWithoutStudentInput>
  }

  export type userloginUpdateWithoutStudentInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    admin?: adminUpdateOneWithoutUserloginNestedInput
    parent?: parentUpdateOneWithoutUserloginNestedInput
  }

  export type userloginUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUpsertWithWhereUniqueWithoutStudentInput = {
    where: waitinglistWhereUniqueInput
    update: XOR<waitinglistUpdateWithoutStudentInput, waitinglistUncheckedUpdateWithoutStudentInput>
    create: XOR<waitinglistCreateWithoutStudentInput, waitinglistUncheckedCreateWithoutStudentInput>
  }

  export type waitinglistUpdateWithWhereUniqueWithoutStudentInput = {
    where: waitinglistWhereUniqueInput
    data: XOR<waitinglistUpdateWithoutStudentInput, waitinglistUncheckedUpdateWithoutStudentInput>
  }

  export type waitinglistUpdateManyWithWhereWithoutStudentInput = {
    where: waitinglistScalarWhereInput
    data: XOR<waitinglistUpdateManyMutationInput, waitinglistUncheckedUpdateManyWithoutWaiinglistInput>
  }

  export type studentCreateWithoutAttendanceInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutAttendanceInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutAttendanceInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
  }

  export type studentUpsertWithoutAttendanceInput = {
    update: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
  }

  export type studentUpdateWithoutAttendanceInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutAttendanceInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateWithoutCgpaInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCgpaInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCgpaInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCgpaInput, studentUncheckedCreateWithoutCgpaInput>
  }

  export type studentUpsertWithoutCgpaInput = {
    update: XOR<studentUpdateWithoutCgpaInput, studentUncheckedUpdateWithoutCgpaInput>
    create: XOR<studentCreateWithoutCgpaInput, studentUncheckedCreateWithoutCgpaInput>
  }

  export type studentUpdateWithoutCgpaInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCgpaInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateWithoutDisciplinaryInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutDisciplinaryInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutDisciplinaryInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutDisciplinaryInput, studentUncheckedCreateWithoutDisciplinaryInput>
  }

  export type studentUpsertWithoutDisciplinaryInput = {
    update: XOR<studentUpdateWithoutDisciplinaryInput, studentUncheckedUpdateWithoutDisciplinaryInput>
    create: XOR<studentCreateWithoutDisciplinaryInput, studentUncheckedCreateWithoutDisciplinaryInput>
  }

  export type studentUpdateWithoutDisciplinaryInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutDisciplinaryInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateWithoutFailedsubjectInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutFailedsubjectInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutFailedsubjectInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutFailedsubjectInput, studentUncheckedCreateWithoutFailedsubjectInput>
  }

  export type studentUpsertWithoutFailedsubjectInput = {
    update: XOR<studentUpdateWithoutFailedsubjectInput, studentUncheckedUpdateWithoutFailedsubjectInput>
    create: XOR<studentCreateWithoutFailedsubjectInput, studentUncheckedCreateWithoutFailedsubjectInput>
  }

  export type studentUpdateWithoutFailedsubjectInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutFailedsubjectInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type adminCreateWithoutMeetingInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyCreateNestedManyWithoutAdminInput
    timeslot?: timeslotCreateNestedManyWithoutAdminInput
    userlogin?: userloginCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutMeetingInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyUncheckedCreateNestedManyWithoutAdminInput
    timeslot?: timeslotUncheckedCreateNestedManyWithoutAdminInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutMeetingInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutMeetingInput, adminUncheckedCreateWithoutMeetingInput>
  }

  export type parentCreateWithoutMeetingInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyCreateNestedManyWithoutParentInput
    userlogin?: userloginCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistCreateNestedManyWithoutParentInput
  }

  export type parentUncheckedCreateWithoutMeetingInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyUncheckedCreateNestedManyWithoutParentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutParentInput
  }

  export type parentCreateOrConnectWithoutMeetingInput = {
    where: parentWhereUniqueInput
    create: XOR<parentCreateWithoutMeetingInput, parentUncheckedCreateWithoutMeetingInput>
  }

  export type studentCreateWithoutMeetingInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutMeetingInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutMeetingInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutMeetingInput, studentUncheckedCreateWithoutMeetingInput>
  }

  export type timeslotCreateWithoutMeetingInput = {
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    day?: string | null
    admin: adminCreateNestedOneWithoutTimeslotInput
  }

  export type timeslotUncheckedCreateWithoutMeetingInput = {
    tsid?: number
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    adminId: string
    day?: string | null
  }

  export type timeslotCreateOrConnectWithoutMeetingInput = {
    where: timeslotWhereUniqueInput
    create: XOR<timeslotCreateWithoutMeetingInput, timeslotUncheckedCreateWithoutMeetingInput>
  }

  export type adminUpsertWithoutMeetingInput = {
    update: XOR<adminUpdateWithoutMeetingInput, adminUncheckedUpdateWithoutMeetingInput>
    create: XOR<adminCreateWithoutMeetingInput, adminUncheckedCreateWithoutMeetingInput>
  }

  export type adminUpdateWithoutMeetingInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutMeetingInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUncheckedUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUncheckedUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type parentUpsertWithoutMeetingInput = {
    update: XOR<parentUpdateWithoutMeetingInput, parentUncheckedUpdateWithoutMeetingInput>
    create: XOR<parentCreateWithoutMeetingInput, parentUncheckedCreateWithoutMeetingInput>
  }

  export type parentUpdateWithoutMeetingInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutParentNestedInput
    userlogin?: userloginUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUpdateManyWithoutParentNestedInput
  }

  export type parentUncheckedUpdateWithoutMeetingInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutParentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutParentNestedInput
  }

  export type studentUpsertWithoutMeetingInput = {
    update: XOR<studentUpdateWithoutMeetingInput, studentUncheckedUpdateWithoutMeetingInput>
    create: XOR<studentCreateWithoutMeetingInput, studentUncheckedCreateWithoutMeetingInput>
  }

  export type studentUpdateWithoutMeetingInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutMeetingInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type timeslotUpsertWithoutMeetingInput = {
    update: XOR<timeslotUpdateWithoutMeetingInput, timeslotUncheckedUpdateWithoutMeetingInput>
    create: XOR<timeslotCreateWithoutMeetingInput, timeslotUncheckedCreateWithoutMeetingInput>
  }

  export type timeslotUpdateWithoutMeetingInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutTimeslotNestedInput
  }

  export type timeslotUncheckedUpdateWithoutMeetingInput = {
    tsid?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    day?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminCreateWithoutWaitinglistInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyCreateNestedManyWithoutAdminInput
    meeting?: meetingCreateNestedManyWithoutAdminInput
    timeslot?: timeslotCreateNestedManyWithoutAdminInput
    userlogin?: userloginCreateNestedOneWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutWaitinglistInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyUncheckedCreateNestedManyWithoutAdminInput
    meeting?: meetingUncheckedCreateNestedManyWithoutAdminInput
    timeslot?: timeslotUncheckedCreateNestedManyWithoutAdminInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutWaitinglistInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutWaitinglistInput, adminUncheckedCreateWithoutWaitinglistInput>
  }

  export type parentCreateWithoutWaitinglistInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyCreateNestedManyWithoutParentInput
    meeting?: meetingCreateNestedManyWithoutParentInput
    userlogin?: userloginCreateNestedOneWithoutParentInput
  }

  export type parentUncheckedCreateWithoutWaitinglistInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyUncheckedCreateNestedManyWithoutParentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutParentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutParentInput
  }

  export type parentCreateOrConnectWithoutWaitinglistInput = {
    where: parentWhereUniqueInput
    create: XOR<parentCreateWithoutWaitinglistInput, parentUncheckedCreateWithoutWaitinglistInput>
  }

  export type studentCreateWithoutWaiinglistInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutWaiinglistInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutWaiinglistInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutWaiinglistInput, studentUncheckedCreateWithoutWaiinglistInput>
  }

  export type adminUpsertWithoutWaitinglistInput = {
    update: XOR<adminUpdateWithoutWaitinglistInput, adminUncheckedUpdateWithoutWaitinglistInput>
    create: XOR<adminCreateWithoutWaitinglistInput, adminUncheckedCreateWithoutWaitinglistInput>
  }

  export type adminUpdateWithoutWaitinglistInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUpdateManyWithoutAdminNestedInput
    meeting?: meetingUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUpdateOneWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutWaitinglistInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUncheckedUpdateManyWithoutAdminNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUncheckedUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type parentUpsertWithoutWaitinglistInput = {
    update: XOR<parentUpdateWithoutWaitinglistInput, parentUncheckedUpdateWithoutWaitinglistInput>
    create: XOR<parentCreateWithoutWaitinglistInput, parentUncheckedCreateWithoutWaitinglistInput>
  }

  export type parentUpdateWithoutWaitinglistInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutParentNestedInput
    meeting?: meetingUpdateManyWithoutParentNestedInput
    userlogin?: userloginUpdateOneWithoutParentNestedInput
  }

  export type parentUncheckedUpdateWithoutWaitinglistInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutParentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutParentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutParentNestedInput
  }

  export type studentUpsertWithoutWaiinglistInput = {
    update: XOR<studentUpdateWithoutWaiinglistInput, studentUncheckedUpdateWithoutWaiinglistInput>
    create: XOR<studentCreateWithoutWaiinglistInput, studentUncheckedCreateWithoutWaiinglistInput>
  }

  export type studentUpdateWithoutWaiinglistInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutWaiinglistInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type feedbackCreateWithoutHistoryInput = {
    attentive?: number | null
    polite?: number | null
    rude?: number | null
    suggestion: string
  }

  export type feedbackUncheckedCreateWithoutHistoryInput = {
    attentive?: number | null
    polite?: number | null
    rude?: number | null
    suggestion: string
  }

  export type feedbackCreateOrConnectWithoutHistoryInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
  }

  export type adminCreateWithoutHistoryInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    meeting?: meetingCreateNestedManyWithoutAdminInput
    timeslot?: timeslotCreateNestedManyWithoutAdminInput
    userlogin?: userloginCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutHistoryInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    meeting?: meetingUncheckedCreateNestedManyWithoutAdminInput
    timeslot?: timeslotUncheckedCreateNestedManyWithoutAdminInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutAdminInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutHistoryInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutHistoryInput, adminUncheckedCreateWithoutHistoryInput>
  }

  export type parentCreateWithoutHistoryInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    meeting?: meetingCreateNestedManyWithoutParentInput
    userlogin?: userloginCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistCreateNestedManyWithoutParentInput
  }

  export type parentUncheckedCreateWithoutHistoryInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    meeting?: meetingUncheckedCreateNestedManyWithoutParentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutParentInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutParentInput
  }

  export type parentCreateOrConnectWithoutHistoryInput = {
    where: parentWhereUniqueInput
    create: XOR<parentCreateWithoutHistoryInput, parentUncheckedCreateWithoutHistoryInput>
  }

  export type studentCreateWithoutHistoryInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    userlogin?: userloginCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutHistoryInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    userlogin?: userloginUncheckedCreateNestedOneWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutHistoryInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutHistoryInput, studentUncheckedCreateWithoutHistoryInput>
  }

  export type feedbackUpsertWithoutHistoryInput = {
    update: XOR<feedbackUpdateWithoutHistoryInput, feedbackUncheckedUpdateWithoutHistoryInput>
    create: XOR<feedbackCreateWithoutHistoryInput, feedbackUncheckedCreateWithoutHistoryInput>
  }

  export type feedbackUpdateWithoutHistoryInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
  }

  export type feedbackUncheckedUpdateWithoutHistoryInput = {
    attentive?: NullableFloatFieldUpdateOperationsInput | number | null
    polite?: NullableFloatFieldUpdateOperationsInput | number | null
    rude?: NullableFloatFieldUpdateOperationsInput | number | null
    suggestion?: StringFieldUpdateOperationsInput | string
  }

  export type adminUpsertWithoutHistoryInput = {
    update: XOR<adminUpdateWithoutHistoryInput, adminUncheckedUpdateWithoutHistoryInput>
    create: XOR<adminCreateWithoutHistoryInput, adminUncheckedCreateWithoutHistoryInput>
  }

  export type adminUpdateWithoutHistoryInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meeting?: meetingUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutHistoryInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meeting?: meetingUncheckedUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUncheckedUpdateManyWithoutAdminNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutAdminNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type parentUpsertWithoutHistoryInput = {
    update: XOR<parentUpdateWithoutHistoryInput, parentUncheckedUpdateWithoutHistoryInput>
    create: XOR<parentCreateWithoutHistoryInput, parentUncheckedCreateWithoutHistoryInput>
  }

  export type parentUpdateWithoutHistoryInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    meeting?: meetingUpdateManyWithoutParentNestedInput
    userlogin?: userloginUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUpdateManyWithoutParentNestedInput
  }

  export type parentUncheckedUpdateWithoutHistoryInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    meeting?: meetingUncheckedUpdateManyWithoutParentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutParentNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutParentNestedInput
  }

  export type studentUpsertWithoutHistoryInput = {
    update: XOR<studentUpdateWithoutHistoryInput, studentUncheckedUpdateWithoutHistoryInput>
    create: XOR<studentCreateWithoutHistoryInput, studentUncheckedCreateWithoutHistoryInput>
  }

  export type studentUpdateWithoutHistoryInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutHistoryInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    userlogin?: userloginUncheckedUpdateOneWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type adminCreateWithoutUserloginInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyCreateNestedManyWithoutAdminInput
    meeting?: meetingCreateNestedManyWithoutAdminInput
    timeslot?: timeslotCreateNestedManyWithoutAdminInput
    waitinglist?: waitinglistCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutUserloginInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    role: string
    desgination: string
    generalavail?: boolean | null
    history?: historyUncheckedCreateNestedManyWithoutAdminInput
    meeting?: meetingUncheckedCreateNestedManyWithoutAdminInput
    timeslot?: timeslotUncheckedCreateNestedManyWithoutAdminInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutUserloginInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutUserloginInput, adminUncheckedCreateWithoutUserloginInput>
  }

  export type parentCreateWithoutUserloginInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyCreateNestedManyWithoutParentInput
    meeting?: meetingCreateNestedManyWithoutParentInput
    waitinglist?: waitinglistCreateNestedManyWithoutParentInput
  }

  export type parentUncheckedCreateWithoutUserloginInput = {
    cnic: string
    firstName: string
    lastName: string
    email: string
    address: string
    history?: historyUncheckedCreateNestedManyWithoutParentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutParentInput
    waitinglist?: waitinglistUncheckedCreateNestedManyWithoutParentInput
  }

  export type parentCreateOrConnectWithoutUserloginInput = {
    where: parentWhereUniqueInput
    create: XOR<parentCreateWithoutUserloginInput, parentUncheckedCreateWithoutUserloginInput>
  }

  export type studentCreateWithoutUserloginInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    cgpa?: cgpaCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectCreateNestedManyWithoutStudentInput
    history?: historyCreateNestedManyWithoutStudentInput
    meeting?: meetingCreateNestedManyWithoutStudentInput
    waiinglist?: waitinglistCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutUserloginInput = {
    regNo: string
    firstName: string
    lastName: string
    email: string
    gender: string
    birthdate: Date | string
    studentCnic: string
    class: string
    section: string
    parentId?: string | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    cgpa?: cgpaUncheckedCreateNestedOneWithoutStudentInput
    disciplinary?: disciplinaryUncheckedCreateNestedManyWithoutStudentInput
    failedsubject?: failedsubjectUncheckedCreateNestedManyWithoutStudentInput
    history?: historyUncheckedCreateNestedManyWithoutStudentInput
    meeting?: meetingUncheckedCreateNestedManyWithoutStudentInput
    waiinglist?: waitinglistUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutUserloginInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutUserloginInput, studentUncheckedCreateWithoutUserloginInput>
  }

  export type adminUpsertWithoutUserloginInput = {
    update: XOR<adminUpdateWithoutUserloginInput, adminUncheckedUpdateWithoutUserloginInput>
    create: XOR<adminCreateWithoutUserloginInput, adminUncheckedCreateWithoutUserloginInput>
  }

  export type adminUpdateWithoutUserloginInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUpdateManyWithoutAdminNestedInput
    meeting?: meetingUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUpdateManyWithoutAdminNestedInput
    waitinglist?: waitinglistUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutUserloginInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    desgination?: StringFieldUpdateOperationsInput | string
    generalavail?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: historyUncheckedUpdateManyWithoutAdminNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutAdminNestedInput
    timeslot?: timeslotUncheckedUpdateManyWithoutAdminNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type parentUpsertWithoutUserloginInput = {
    update: XOR<parentUpdateWithoutUserloginInput, parentUncheckedUpdateWithoutUserloginInput>
    create: XOR<parentCreateWithoutUserloginInput, parentUncheckedCreateWithoutUserloginInput>
  }

  export type parentUpdateWithoutUserloginInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUpdateManyWithoutParentNestedInput
    meeting?: meetingUpdateManyWithoutParentNestedInput
    waitinglist?: waitinglistUpdateManyWithoutParentNestedInput
  }

  export type parentUncheckedUpdateWithoutUserloginInput = {
    cnic?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    history?: historyUncheckedUpdateManyWithoutParentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutParentNestedInput
    waitinglist?: waitinglistUncheckedUpdateManyWithoutParentNestedInput
  }

  export type studentUpsertWithoutUserloginInput = {
    update: XOR<studentUpdateWithoutUserloginInput, studentUncheckedUpdateWithoutUserloginInput>
    create: XOR<studentCreateWithoutUserloginInput, studentUncheckedCreateWithoutUserloginInput>
  }

  export type studentUpdateWithoutUserloginInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUpdateManyWithoutStudentNestedInput
    history?: historyUpdateManyWithoutStudentNestedInput
    meeting?: meetingUpdateManyWithoutStudentNestedInput
    waiinglist?: waitinglistUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutUserloginInput = {
    regNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentCnic?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    cgpa?: cgpaUncheckedUpdateOneWithoutStudentNestedInput
    disciplinary?: disciplinaryUncheckedUpdateManyWithoutStudentNestedInput
    failedsubject?: failedsubjectUncheckedUpdateManyWithoutStudentNestedInput
    history?: historyUncheckedUpdateManyWithoutStudentNestedInput
    meeting?: meetingUncheckedUpdateManyWithoutStudentNestedInput
    waiinglist?: waitinglistUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type historyCreateWithoutFeedbackInput = {
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminFeedback?: string | null
    suggestion?: string | null
    admin: adminCreateNestedOneWithoutHistoryInput
    parent: parentCreateNestedOneWithoutHistoryInput
    student: studentCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutFeedbackInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
  }

  export type historyCreateOrConnectWithoutFeedbackInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutFeedbackInput, historyUncheckedCreateWithoutFeedbackInput>
  }

  export type historyUpsertWithoutFeedbackInput = {
    update: XOR<historyUpdateWithoutFeedbackInput, historyUncheckedUpdateWithoutFeedbackInput>
    create: XOR<historyCreateWithoutFeedbackInput, historyUncheckedCreateWithoutFeedbackInput>
  }

  export type historyUpdateWithoutFeedbackInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutHistoryNestedInput
    parent?: parentUpdateOneRequiredWithoutHistoryNestedInput
    student?: studentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutFeedbackInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historyCreateManyParentInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    adminId: string
    adminFeedback?: string | null
    suggestion?: string | null
  }

  export type meetingCreateManyParentInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    adminId: string
    date: Date | string
  }

  export type waitinglistCreateManyParentInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    adminId: string
    status?: string | null
  }

  export type historyUpdateWithoutParentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUpdateOneWithoutHistoryNestedInput
    admin?: adminUpdateOneRequiredWithoutHistoryNestedInput
    student?: studentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutParentInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUncheckedUpdateOneWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateManyWithoutHistoryInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingUpdateWithoutParentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutMeetingNestedInput
    student?: studentUpdateOneRequiredWithoutMeetingNestedInput
    timeslot?: timeslotUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutParentInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUncheckedUpdateManyWithoutMeetingInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitinglistUpdateWithoutParentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutWaitinglistNestedInput
    student?: studentUpdateOneRequiredWithoutWaiinglistNestedInput
  }

  export type waitinglistUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUncheckedUpdateManyWithoutWaitinglistInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historyCreateManyAdminInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    regNo: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
  }

  export type meetingCreateManyAdminInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    regNo: string
    parentId: string
    date: Date | string
  }

  export type timeslotCreateManyAdminInput = {
    tsid?: number
    startTime: Date | string
    endTime: Date | string
    availibility: boolean
    day?: string | null
  }

  export type waitinglistCreateManyAdminInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    regNo: string
    parentId: string
    status?: string | null
  }

  export type historyUpdateWithoutAdminInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUpdateOneWithoutHistoryNestedInput
    parent?: parentUpdateOneRequiredWithoutHistoryNestedInput
    student?: studentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutAdminInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    regNo?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUncheckedUpdateOneWithoutHistoryNestedInput
  }

  export type meetingUpdateWithoutAdminInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: parentUpdateOneRequiredWithoutMeetingNestedInput
    student?: studentUpdateOneRequiredWithoutMeetingNestedInput
    timeslot?: timeslotUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutAdminInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timeslotUpdateWithoutAdminInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: meetingUpdateOneWithoutTimeslotNestedInput
  }

  export type timeslotUncheckedUpdateWithoutAdminInput = {
    tsid?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
    meeting?: meetingUncheckedUpdateOneWithoutTimeslotNestedInput
  }

  export type timeslotUncheckedUpdateManyWithoutTimeslotInput = {
    tsid?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    availibility?: BoolFieldUpdateOperationsInput | boolean
    day?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUpdateWithoutAdminInput = {
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: parentUpdateOneRequiredWithoutWaitinglistNestedInput
    student?: studentUpdateOneRequiredWithoutWaiinglistNestedInput
  }

  export type waitinglistUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    regNo?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendanceCreateManyStudentInput = {
    sid?: number
    subject: string
    percentage: number
  }

  export type disciplinaryCreateManyStudentInput = {
    id?: number
    actions: string
  }

  export type failedsubjectCreateManyStudentInput = {
    id?: number
    semester: string
    subject: string
    grade: string
  }

  export type historyCreateManyStudentInput = {
    hid?: number
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    reason: string
    status: Status
    referedTo: string
    adminId: string
    parentId: string
    adminFeedback?: string | null
    suggestion?: string | null
  }

  export type meetingCreateManyStudentInput = {
    mid?: number
    reason: string
    status: string
    referedTo: string
    tsid: number
    adminId: string
    parentId: string
    date: Date | string
  }

  export type waitinglistCreateManyStudentInput = {
    id?: number
    reason: string
    date: Date | string
    tsid: number
    adminId: string
    parentId: string
    status?: string | null
  }

  export type attendanceUpdateWithoutStudentInput = {
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceUncheckedUpdateWithoutStudentInput = {
    sid?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceUncheckedUpdateManyWithoutAttendanceInput = {
    sid?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type disciplinaryUpdateWithoutStudentInput = {
    actions?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaryUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    actions?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaryUncheckedUpdateManyWithoutDisciplinaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    actions?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectUpdateWithoutStudentInput = {
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type failedsubjectUncheckedUpdateManyWithoutFailedsubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type historyUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUpdateOneWithoutHistoryNestedInput
    admin?: adminUpdateOneRequiredWithoutHistoryNestedInput
    parent?: parentUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutStudentInput = {
    hid?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    referedTo?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: feedbackUncheckedUpdateOneWithoutHistoryNestedInput
  }

  export type meetingUpdateWithoutStudentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutMeetingNestedInput
    parent?: parentUpdateOneRequiredWithoutMeetingNestedInput
    timeslot?: timeslotUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type meetingUncheckedUpdateWithoutStudentInput = {
    mid?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referedTo?: StringFieldUpdateOperationsInput | string
    tsid?: IntFieldUpdateOperationsInput | number
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitinglistUpdateWithoutStudentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutWaitinglistNestedInput
    parent?: parentUpdateOneRequiredWithoutWaitinglistNestedInput
  }

  export type waitinglistUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitinglistUncheckedUpdateManyWithoutWaiinglistInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tsid?: IntFieldUpdateOperationsInput | number
    adminId?: StringFieldUpdateOperationsInput | string
    parentId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
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
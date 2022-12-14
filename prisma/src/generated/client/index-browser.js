
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  cnic: 'cnic',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  gender: 'gender',
  phone: 'phone',
  role: 'role',
  desgination: 'desgination'
});

exports.Prisma.AttendanceScalarFieldEnum = makeEnum({
  sid: 'sid',
  subject: 'subject',
  percentage: 'percentage',
  regNo: 'regNo'
});

exports.Prisma.CgpaScalarFieldEnum = makeEnum({
  id: 'id',
  cgpa: 'cgpa',
  regNo: 'regNo'
});

exports.Prisma.DisciplinaryScalarFieldEnum = makeEnum({
  id: 'id',
  actions: 'actions',
  regNo: 'regNo'
});

exports.Prisma.FailedsubjectScalarFieldEnum = makeEnum({
  id: 'id',
  semester: 'semester',
  subject: 'subject',
  grade: 'grade',
  regNo: 'regNo'
});

exports.Prisma.HistoryScalarFieldEnum = makeEnum({
  hid: 'hid',
  date: 'date',
  startTime: 'startTime',
  endTime: 'endTime',
  reason: 'reason',
  status: 'status',
  referedTo: 'referedTo',
  feedback: 'feedback',
  rating: 'rating',
  regNo: 'regNo',
  adminId: 'adminId',
  parentId: 'parentId'
});

exports.Prisma.MeetingScalarFieldEnum = makeEnum({
  mid: 'mid',
  reason: 'reason',
  status: 'status',
  referedTo: 'referedTo',
  tsid: 'tsid',
  regNo: 'regNo',
  adminId: 'adminId',
  parentId: 'parentId'
});

exports.Prisma.ParentScalarFieldEnum = makeEnum({
  cnic: 'cnic',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  address: 'address'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TimeslotScalarFieldEnum = makeEnum({
  tsid: 'tsid',
  date: 'date',
  startTime: 'startTime',
  endTime: 'endTime',
  availibility: 'availibility',
  adminId: 'adminId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserloginScalarFieldEnum = makeEnum({
  id: 'id',
  userName: 'userName',
  password: 'password',
  email: 'email',
  role: 'role',
  regNo: 'regNo',
  adminId: 'adminId',
  parentId: 'parentId'
});

exports.Prisma.WaitinglistScalarFieldEnum = makeEnum({
  id: 'id',
  reason: 'reason',
  date: 'date',
  tsid: 'tsid',
  regNo: 'regNo',
  adminId: 'adminId',
  parentId: 'parentId'
});
exports.Role = makeEnum({
  Admin: 'Admin',
  Parent: 'Parent',
  Student: 'Student'
});

exports.Status = makeEnum({
  held: 'held',
  pending: 'pending',
  completed: 'completed'
});

exports.Prisma.ModelName = makeEnum({
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
  userlogin: 'userlogin'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

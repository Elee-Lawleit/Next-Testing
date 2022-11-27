
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
  id: 'id',
  adminName: 'adminName',
  adminPassword: 'adminPassword',
  adminGender: 'adminGender',
  adminCnic: 'adminCnic',
  adminEmail: 'adminEmail',
  adminDesignation: 'adminDesignation'
});

exports.Prisma.DayTimeScalarFieldEnum = makeEnum({
  id: 'id',
  day: 'day',
  startTime: 'startTime',
  endTime: 'endTime',
  adminId: 'adminId'
});

exports.Prisma.DepartmentScalarFieldEnum = makeEnum({
  id: 'id',
  departmentName: 'departmentName'
});

exports.Prisma.FacultyScalarFieldEnum = makeEnum({
  id: 'id',
  userName: 'userName',
  departmentId: 'departmentId'
});

exports.Prisma.FeedbackScalarFieldEnum = makeEnum({
  id: 'id',
  meetingId: 'meetingId',
  adminRemarks: 'adminRemarks',
  parentRemarks: 'parentRemarks'
});

exports.Prisma.MeetingScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ParentScalarFieldEnum = makeEnum({
  id: 'id',
  parentEmail: 'parentEmail',
  parentName: 'parentName',
  parentCnic: 'parentCnic',
  parentPhone: 'parentPhone',
  parentPassword: 'parentPassword'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RequestedMeetingsScalarFieldEnum = makeEnum({
  id: 'id',
  meetingReason: 'meetingReason',
  parentId: 'parentId',
  studentId: 'studentId',
  adminId: 'adminId'
});

exports.Prisma.ScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  day: 'day',
  start: 'start',
  end: 'end',
  startTime: 'startTime',
  EndTime: 'EndTime',
  adminId: 'adminId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentInfoScalarFieldEnum = makeEnum({
  infoCgpa: 'infoCgpa',
  infoAttendance: 'infoAttendance',
  studentId: 'studentId'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  id: 'id',
  studentRegNo: 'studentRegNo',
  studentName: 'studentName',
  studentPassword: 'studentPassword',
  parentId: 'parentId'
});

exports.Prisma.SubjectScalarFieldEnum = makeEnum({
  subjectName: 'subjectName',
  studentId: 'studentId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
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

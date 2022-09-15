-- CreateTable
CREATE TABLE "Parent" (
    "id" SERIAL NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "parentName" TEXT NOT NULL,
    "parentCnic" TEXT NOT NULL,
    "parentPhone" TEXT NOT NULL,
    "parentPassword" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminPassword" TEXT NOT NULL,
    "adminGender" TEXT NOT NULL,
    "adminCnic" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "adminDesignation" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "studentRegNo" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "studentPassword" TEXT NOT NULL,
    "parentId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentInfo" (
    "infoCgpa" DOUBLE PRECISION NOT NULL,
    "infoAttendance" BOOLEAN NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "StudentInfo_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "Subject" (
    "subjectName" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subjectName","studentId")
);

-- CreateTable
CREATE TABLE "Meeting" (
    "id" SERIAL NOT NULL,
    "meetingDay" TEXT NOT NULL,
    "meetingStatus" BOOLEAN NOT NULL,
    "meetingReason" TEXT,
    "adminId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "meetingStartTime" TIME(2) NOT NULL,
    "meetingEndTime" TIME(2) NOT NULL,

    CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "meetingId" INTEGER NOT NULL,
    "adminRemarks" TEXT,
    "parentRemarks" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parent_parentEmail_key" ON "Parent"("parentEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_parentName_key" ON "Parent"("parentName");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_parentCnic_key" ON "Parent"("parentCnic");

-- CreateIndex
CREATE UNIQUE INDEX "Parent_parentPhone_key" ON "Parent"("parentPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentRegNo_key" ON "Student"("studentRegNo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentName_key" ON "Student"("studentName");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentInfo" ADD CONSTRAINT "StudentInfo_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "Meeting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

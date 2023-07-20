import useGetAttendance from 'hooks/students/use-get-attendance';
import React from 'react'
import AppSkeloton from 'components/AppSkeleton';
import { Text, Table, Title } from '@mantine/core';
import useGetFailedSubjects from 'hooks/students/use-get-failed-subjects';
import useGetCgpa from 'hooks/students/use-get-cgpa';
import useGetDisciplinary from 'hooks/students/use-get-disciplinary';

const StudentInfo = ({session}) => {

  const{data: students, isLoading: attendanceLoading, isError: attendanceError} = useGetAttendance(session?.user.id);
  const { data: fs, isLoading: fsLoading, isError: fsError } = useGetFailedSubjects(session?.user.id)
    const { data: cgpa, isLoading: cgpaLoading, isError: cgpaError } = useGetCgpa(session?.user.id);
    const { data: ds, isLoading: dsLoading, isError: dsError } = useGetDisciplinary(session?.user.id);

  console.log("data: ", students)

  return (
      <AppSkeloton session={session}>
        <div>
              <Title order={2} align="center" className="text-gray-900 font-Montserrat">
                  Attendance
              </Title>
        </div>
        <div className='mt-4'>
              <Table>
                  <thead>
                      <tr>
                          <th>Subject</th>
                          <th>Percentage</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                          students?.attendance.map((std)=>{
                            return <tr key={std}>
                                <td>{std.subject}</td>
                                <td>{std.percentage}</td>
                            </tr>
                          })
                    }
                  </tbody>
              </Table>
        </div>
          <div className='mt-4'>
              <Title order={2} align="center" className="text-gray-900 font-Montserrat">
                  CGPA
              </Title>
        </div>
        <div className='mt-4'>
              <Table>
                  <thead>
                      <tr>
                          <th>CGPA</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                          cgpa?.cgpa.map((std)=>{
                            return <tr key={std}>
                                <td>{std.cgpa}</td>
                            </tr>
                          })
                    }
                  </tbody>
              </Table>
        </div>
        <div className='mt-4'>
              <Title order={2} align="center" className="text-gray-900 font-Montserrat">
                  Failed Subjects
              </Title>
        </div>
        <div className='mt-4'>
              <Table>
                  <thead>
                      <tr>
                          <th>Semester</th>
                          <th>Subject</th>
                          <th>Grade</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                          fs?.failedsubjects.map((std)=>{
                            return <tr key={std}>
                                <td>{std.semester}</td>
                                <td>{std.subject}</td>
                                <td>{std.grade}</td>
                            </tr>
                          })
                    }
                  </tbody>
              </Table>
        </div>
        <div className='mt-4'>
              <Title order={2} align="center" className="text-gray-900 font-Montserrat">
                  Disciplinary Actions
              </Title>
        </div>
        <div className='mt-4'>
              <Table>
                  <thead>
                      <tr>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                          ds?.disciplinary.map((std)=>{
                            return <tr key={std}>
                                <td>{std.actions}</td>
                            </tr>
                          })
                    }
                  </tbody>
              </Table>
        </div>
    </AppSkeloton>
  )
}

export default StudentInfo;
import AppSkeloton from "components/AppSkeleton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { meetingSchema } from "schemas/meetingSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLessThanEqual,
  faCalendarCheck,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { DatePicker, TimeRangeInput } from "@mantine/dates";
import { useState, useEffect } from "react";
import {
  NativeSelect,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import useSelectStudentsGPA from "hooks/students/use-select-students-gpa";
import useSelectStudentsAtt from "hooks/students/use-select-students-att";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

const Create = ({ session }) => {
  
  const [meetingMethod, setMeetingMethod] = useState();
  const [bulkReason, setBulkReason] = useState("");
  const [gpa, setGpa] = useState(2.5);
  const [attendane, setAttendance] = useState(75);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(meetingSchema),

  });

  const { data: students, isLoading, isError } = useSelectStudentsGPA(gpa);
  const { data: studentsAtt, isLoading: loadingAtt, isError: errorAtt } = useSelectStudentsAtt(attendane);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedStudentsAtt, setSelectedStudentsAtt] = useState([]);

  useEffect(() => {
    setSelectedStudents(
      students?.students?.map((student) => student.Student.studentRegNo)
    );

    console.log("gpa value: ", gpa);
  }, [gpa, students]);

  useEffect(()=>{
    setSelectedStudentsAtt(studentsAtt?.students?.map((student) => student.Student.studentRegNo));
  }, [attendane, studentsAtt])

  const onCreate = async (data) => {
    //does some database stuff
    console.log("onCreate function running on form submit");
    bulkReason === "Attendance" ? data.students = selectedStudentsAtt : data.students = selectedStudents;
    console.log("Meeting form data: ", data);
    // console.log("start time is: ", data.time[0].getHours() + ":" + data.time[0].getMinutes())
    // console.log("start time is: ", data.time[1].getHours() + ":"+ data.time[1].getMinutes())
  };



  
  


  console.log(errors);

  return (
    <AppSkeloton session={session}>
      <div className="min-h-full flex flex-col gap-3">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold font-Hack text-center mt-3 flex justify-center items-center gap-3">
            Set a Meeting
            <FontAwesomeIcon icon={faCalendarCheck} />
          </h1>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onCreate)}
            className="gap-2 form-control w-full"
          >
            <div>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    placeholder="Pick meeting day"
                    label="Meeting day"
                    initialMonth={new Date()}
                    excludeDate={(date) =>
                      date.getDay() === 0 || date.getDay() === 6
                    }
                    onChange={onChange}
                    allowLevelChange={false}
                    minDate={new Date()}
                    error={errors?.date ? "this field is required" : false}
                    withAsterisk
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="time"
                render={({ field: { onChange } }) => (
                  <TimeRangeInput
                    label="Choose meeting time"
                    description="meeting time should be an hour max"
                    onChange={onChange}
                    error={errors?.time ? (errors?.time?.message === "end time should be greater" ? "start time should be less than starting" : "this field is required") : false}
                    clearable
                    withAsterisk
                  />
                )}
              />
            </div>
            <div>
              <NativeSelect
                data={["...", "Individual Meeting", "Bulk Meeting"]}
                label="How do you want to arrange the meeting?"
                description="Choose one"
                withAsterisk
                {...register("meetingCriteria", {
                  onChange: (event) =>
                    setMeetingMethod(event.currentTarget.value),
                })}
                error={errors?.meetingCriteria? "Please select one" : false}
              />
            </div>

            {meetingMethod === "Individual Meeting" && (
              <TextInput
                placeholder="xx-ARID-xxxx"
                label="Enter arid number"
                withAsterisk
                {...register("resgistrationNumber")}
                error={errors?.resgistrationNumber? "this field is required" : false}
              />
            )}
            {meetingMethod === "Bulk Meeting" && (
              <NativeSelect
                data={["...", "Attendance", "GPA"]}
                label="Choose meeting criteria"
                desccription="Choose one"
                withAsterisk
                {...register("bulkWay", {
                  onChange: (event) => setBulkReason(event.currentTarget.value),
                })}
              />
            )}

            {bulkReason === "Attendance" && meetingMethod !== "Individual Meeting" && (
               <>
                <Controller
                  name="attendance"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <NumberInput
                      max={100}
                      min={0}
                      defaultValue={75}
                      icon={
                        <FontAwesomeIcon icon={faLessThanEqual} className="text-sm" />
                      }
                      onChange={(event)=>setAttendance(event)}
                    />
                  )}
                />
                {students && (
                  <div className="min-h-6">
                    <p className="text-xs text-gray-400 mb-1">
                      Selected Students
                    </p>
                    {selectedStudentsAtt?.map((stud) => {
                      return (
                        <span
                          key={stud}
                          className="bg-purple-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                        >
                          {stud}
                          <button
                            type="button"
                            title="exclude student"
                            className="ml-1"
                            onClick={(event) =>
                              setSelectedStudents(
                                selectedStudents.filter((stud) => stud != event.currentTarget.parentNode.textContent)
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faClose} className="hover:text-red-600" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            {bulkReason === "GPA" && meetingMethod !== "Individual Meeting" && (
              <>
                <Controller
                  name="gpa"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <NumberInput
                      max={4.0}
                      min={0.0}
                      precision={2}
                      defaultValue={2.5}
                      value={gpa}
                      step={0.5}
                      icon={
                        <FontAwesomeIcon
                          icon={faLessThanEqual}
                          className="text-sm"
                        />
                      }
                      onChange={(event) => setGpa(event)}
                    />
                  )}
                />
                {students && (
                  <div className="min-h-6">
                    <p className="text-xs text-gray-400 mb-1">
                      Selected Students
                    </p>
                    {selectedStudents?.map((stud) => {
                      return (
                        <span
                          key={stud}
                          className="bg-purple-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                        >
                          {stud}
                          <button
                            type="button"
                            title="exclude student"
                            className="ml-1"
                            onClick={(event) =>
                              setSelectedStudents(
                                selectedStudents.filter((stud) => stud != event.currentTarget.parentNode.textContent)
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faClose} className="hover:text-red-600" />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            <Textarea
              label="Enter meeting reason"
              description="Enter atleast 30 characters"
              placeholder="You have low attendane and futhermore...."
              autosize
              minRows={3}
              maxRows={5}
              withAsterisk
              {...register("reasonMeeting")}
            />
            <div className="text-center text-white">
              <input
                type="submit"
                value="Create"
                name=""
                id=""
                className="w-full rounded-xl btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </AppSkeloton>
  );
};

export default Create;

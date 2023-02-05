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
import { useState, useEffect, useRef } from "react";
import {
  LoadingOverlay,
  NativeSelect,
  NumberInput,
  Radio,
  Textarea,
  TextInput,
  Text,
  useMantineTheme,
} from "@mantine/core";
import useSelectStudentsGPA from "hooks/students/use-select-students-gpa";
import useSelectStudentsAtt from "hooks/students/use-select-students-att";
import useCreateMeetingMutation from "hooks/meetings/use-create-meeting";
import useFetchTimeSlots from "hooks/admin/use-fetch-timeslots";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import clsx from "clsx";
import useFetchAdmins from "hooks/admin/use-fetch-admins";
import useSelectAssocStudents from "hooks/students/use-select-assoc-students";
import { useQueryClient } from "react-query";

const Create = ({ session }) => {
  const theme = useMantineTheme();

  const [gpa, setGpa] = useState(2.5);
  const [attendance, setAttendance] = useState(75);
  const [subject, setSubject] = useState("default");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    unregister,
    control,
  } = useForm({
    resolver: yupResolver(meetingSchema),
  });
  const meetingCriteria = watch("meetingCriteria");
  const bulkReason = watch("bulkReason");

  useEffect(() => {
    if (meetingCriteria === "Individual Meeting") {
      unregister("bulkReason");
    }
    if (meetingCriteria === "Bulk Meeting") {
      unregister("registrationNumber");
    }
    if (session?.user.role === "Parent") {
      unregister(["meetingCriteria", "bulkReason"]);
    }
    if (session?.user.role === "Admin") {
      unregister("assocRegno");
    }
  }, [meetingCriteria, bulkReason]);

  const { data: students, isLoading, isError } = useSelectStudentsGPA(gpa);
  const {
    data: studentsAtt,
    isLoading: loadingAtt,
    isError: errorAtt,
  } = useSelectStudentsAtt(attendance, subject);
  const {
    data: timeSlots,
    isLoading: tsLoading,
    isError: tsError,
  } = useFetchTimeSlots(session?.user.id);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedStudentsAtt, setSelectedStudentsAtt] = useState([]);

  useEffect(() => {
    setSelectedStudents(students?.students?.map((student) => student.regNo));
  }, [gpa, students]);

  useEffect(() => {
    setSelectedStudentsAtt(
      studentsAtt?.students?.map((student) => student.regNo)
    );
  }, [attendance, studentsAtt, subject]);

  const { mutate: createMeeting, isLoading: isSettingMeeting } =
    useCreateMeetingMutation();
    
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [date, setDate] = useState(new Date());
  const {
    data: assocStuds,
    isLoading: assocStudsLoading,
    isError: assocStudsError,
  } = useSelectAssocStudents(session?.user.id);

  const queryClient = useQueryClient();

  const nativeSelectData = assocStuds?.students.map((stud) => stud.regNo);
  const [dateError, setDateError] = useState(false);
  const onCreate = async (data) => {
    if (meetingCriteria === "Bulk Meeting") {
      bulkReason === "Attendance"
        ? (data.students = selectedStudentsAtt)
        : (data.students = selectedStudents);
    }
    data.userId = session?.user.id;
    data.userRole = session?.user.role;

    if(date){
      data.date = date;
    }
    else{
      setDateError(true); return;
    }

    console.log(data);
    createMeeting(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success("Meeting created.");
          queryClient.refetchQueries("all-admin-timeslots");
        },
        onError: () => {
          toast.error("Could not create meeting");
        },
      }
    );
  };

  // this is being used for caching, don't worry about this and DON'T CHANGE IT
  // const [val, setVal] = useState(1);

  const {
    data: admins,
    isLoading: adminLoading,
    isError: adminError,
  } = useFetchAdmins();

  // console.log("ADMINS: ", admins);


  const ts = admins?.admin.map((admin)=>admin.timeslot);
  // console.log("timeslots: ", JSON.stringify(ts));


  // function written by chat gpt btw, not me
  // the easiet and simplest solution I've seen so far
  function removeDuplicateTimeSlots(dataSet) {

    let uniqueTimeSlots = {};
    let distinctTimeSlots = [];
    dataSet?.forEach(innerArr => {
      innerArr.forEach(timeSlot => {

        // creating a unique key by concatinating date and startTime
        // if this already exists then, we don't wanna add it to the unique array
        let key = timeSlot.startTime + timeSlot.day;
        if (!uniqueTimeSlots[key]) {
          uniqueTimeSlots[key] = true;
          distinctTimeSlots.push(timeSlot);
        }
      });
    });
    return distinctTimeSlots;
  }

  // had to slightly edit this one to get the correct result
  // or just change 2 characters in total, I should say while not taking away any credit from chap gpt
  function extractTimeSlotsForDay(dataSet, day) {
    let distinctTimeSlots = removeDuplicateTimeSlots(dataSet);
    //filter the time slots based on the day
    let filteredTimeSlots = distinctTimeSlots.filter(timeSlot => {
      if (timeSlot) {
        return timeSlot.day === day;
      }
    });
    if (filteredTimeSlots.length === 0) {
      return [];
    } else {
      return filteredTimeSlots;
    }
  }
  
  // console.log("DATE: ", date)
  return (
    <AppSkeloton session={session}>
      <div className="flex flex-col min-h-full gap-3">
        <div>
          <h1 className="flex items-center justify-center gap-3 mt-3 text-xl font-bold text-center lg:text-2xl font-Hack">
            Set a Meeting
            <FontAwesomeIcon icon={faCalendarCheck} />
          </h1>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onCreate)}
            className="relative w-full gap-2 form-control"
          >
            <LoadingOverlay visible={isSettingMeeting} />
            <div className="mt-2">
              <div>
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange } }) => (
                    <DatePicker
                    value={date}
                    placeholder="Pick meeting day"
                    label="Meeting day"
                    initialMonth={new Date()}
                    excludeDate={(date) =>
                      date.getDay() === 0 || date.getDay() === 6
                    }
                    onChange={setDate}
                      allowLevelChange={false}
                      minDate={new Date()}
                      error={dateError ? "Please fill this field properly" : false}
                      withAsterisk
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-regular mt-4 font-semibold">
                  Select meeting time
                </p>
                {session?.user.role === "Parent" && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {admins &&
                      extractTimeSlotsForDay(ts, days[new Date(date).getDay() -1]).map((ts) => (
                        <div
                          key={ts.tsid}
                          className="flex flex-col items-center justify-center col-span-1 gap-0"
                        >
                          <Radio
                            value={[ts.startTime, ts.endTime, ts.adminId, ts.day]}
                            onClick={()=>console.log("Timeslot: ", ts)}
                            label={
                              dayjs(ts.startTime).subtract(5, "hours").hour() +
                              ":" +
                              dayjs(ts.startTime)
                                .subtract(5, "hours")
                                .minute() +
                              " - " +
                              dayjs(ts.endTime).subtract(5, "hours").hour() +
                              ":" +
                              dayjs(ts.endTime).subtract(5, "hours").minute()
                            }
                            {...register("time")}
                          />
                        </div>
                      ))}
                    {!adminLoading && extractTimeSlotsForDay(ts, days[new Date(date).getDay() - 1]).length === 0 && (
                      <Text ta="center" fw={500} color="red">
                        No free timeslots available.
                      </Text>
                    )}
                  </div>
                )}
                {session?.user.role === "Admin" && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {extractTimeSlotsForDay(ts, days[new Date(date).getDay() - 1]).map((ts) => (
                      <div className="flex flex-col items-center justify-center col-span-1 gap-0">
                        <Radio
                          value={[ts.startTime, ts.endTime, ts.day]}
                          label={
                            dayjs(ts.startTime).subtract(5, "hours").hour() +
                            ":" +
                            dayjs(ts.startTime).subtract(5, "hours").minute() +
                            " - " +
                            dayjs(ts.endTime).subtract(5, "hours").hour() +
                            ":" +
                            dayjs(ts.endTime).subtract(5, "hours").minute()
                          }
                          {...register("time")}
                        />
                      </div>
                    ))}
                    {!tsLoading && extractTimeSlotsForDay(ts, days[new Date(date).getDay() - 1]).length === 0 && (
                      <Text ta="center" fw={500} color="red">
                        No free timeslots available.
                      </Text>
                    )}
                  </div>
                )}
                <div>
                  <p
                    className={clsx(
                      "text-red-400 hidden text-xs",
                      errors?.time && "block"
                    )}
                  >
                    Select meeting time
                  </p>
                </div>
              </div>
            </div>
            {session?.user.role === "Admin" && (
              <div>
                <NativeSelect
                  data={["...", "Individual Meeting", "Bulk Meeting"]}
                  label="How do you want to arrange the meeting?"
                  description="Choose one"
                  withAsterisk
                  {...register("meetingCriteria", {
                    onChange: (event) =>
                      (meetingCriteria = event.currentTarget.value),
                  })}
                  error={errors?.meetingCriteria ? "Please select one" : false}
                />
              </div>
            )}

            {session?.user.role === "Admin" &&
              meetingCriteria === "Individual Meeting" && (
                <TextInput
                  placeholder="xx-ARID-xxxx"
                  label="Enter arid number"
                  withAsterisk
                  {...register("registrationNumber")}
                  error={
                    errors?.resgistrationNumber
                      ? "this field is required"
                      : false
                  }
                />
              )}
            {session?.user.role === "Parent" && (
              <NativeSelect
                label="Select student registration number"
                withAsterisk
                // defaultValue={"Select student"}
                data={assocStudsLoading ? [] : ["select student", ...nativeSelectData]}
                {...register("assocRegno")}
              />
            )}
            {meetingCriteria === "Bulk Meeting" && (
              <NativeSelect
                data={["...", "Attendance", "GPA"]}
                label="Choose meeting criteria"
                desccription="Choose one"
                withAsterisk
                {...register("bulkReason", {
                  onChange: (event) => (bulkReason = event.currentTarget.value),
                })}
                error={errors?.bulkReason ? "Please select one" : false}
              />
            )}

            {bulkReason === "Attendance" &&
              meetingCriteria !== "Individual Meeting" && (
                <>
                  <NumberInput
                    max={100}
                    min={0}
                    defaultValue={75}
                    icon={
                      <FontAwesomeIcon
                        icon={faLessThanEqual}
                        className="text-sm"
                      />
                    }
                    onChange={(event) => setAttendance(event)}
                  />
                  <TextInput
                    placeholder="Modern Programming Languages..."
                    label="Enter subject"
                    withAsterisk
                    onChange={(event) => setSubject(event.currentTarget.value)}
                  />
                  {students && (
                    <div className="min-h-6">
                      <p className="mb-1 text-xs text-gray-400">
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
                                setSelectedStudentsAtt(
                                  selectedStudentsAtt.filter(
                                    (stud) =>
                                      stud !=
                                      event.currentTarget.parentNode.textContent
                                  )
                                )
                              }
                            >
                              <FontAwesomeIcon
                                icon={faClose}
                                className="hover:text-red-600"
                              />
                            </button>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            {bulkReason === "GPA" &&
              meetingCriteria !== "Individual Meeting" && (
                <>
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
                    error={errors?.gpa ? "this field is required" : false}
                  />
                  {students && (
                    <div className="min-h-6">
                      <p className="mb-1 text-xs text-gray-400">
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
                                  selectedStudents.filter(
                                    (stud) =>
                                      stud !=
                                      event.currentTarget.parentNode.textContent
                                  )
                                )
                              }
                            >
                              <FontAwesomeIcon
                                icon={faClose}
                                className="hover:text-red-600"
                              />
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
              {...register("reason")}
              error={
                errors?.reason
                  ? errors?.reason?.message === "30-characters"
                    ? "reason should be at least be 30 characters long"
                    : "this field is required"
                  : false
              }
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

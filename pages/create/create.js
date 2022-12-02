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
  LoadingOverlay,
  NativeSelect,
  NumberInput,
  Textarea,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import useSelectStudentsGPA from "hooks/students/use-select-students-gpa";
import useSelectStudentsAtt from "hooks/students/use-select-students-att";
import useCreateMeetingMutation from "hooks/meetings/use-create-meeting";
import toast from "react-hot-toast";

const Create = ({ session }) => {
  const theme = useMantineTheme();

  const [gpa, setGpa] = useState(2.5);
  const [attendane, setAttendance] = useState(75);

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
    if(meetingCriteria === "Individual Meeting"){
      unregister("bulkReason");
    }
    if(meetingCriteria === "Bulk Meeting"){
      unregister("registrationNumber");
    }
  }, [meetingCriteria, bulkReason])
  


  const { data: students, isLoading, isError } = useSelectStudentsGPA(gpa);
  const {
    data: studentsAtt,
    isLoading: loadingAtt,
    isError: errorAtt,
  } = useSelectStudentsAtt(attendane);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedStudentsAtt, setSelectedStudentsAtt] = useState([]);

  useEffect(() => {
    setSelectedStudents(
      students?.students?.map((student) => student.Student.studentRegNo)
    );
  }, [gpa, students]);

  useEffect(() => {
    setSelectedStudentsAtt(
      studentsAtt?.students?.map((student) => student.Student.studentRegNo)
    );
  }, [attendane, studentsAtt]);

  const { mutate: createMeeting, isLoading: isSettingMeeting } =
    useCreateMeetingMutation();

  const onCreate = async (data) => {

    if(meetingCriteria === "Bulk Meeting"){
      bulkReason === "Attendance"
        ? (data.students = selectedStudentsAtt)
        : (data.students = selectedStudents);
    }


    console.log(data);
    createMeeting(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success("Meeting created.");
        },
        onError: () => {
          toast.error("Could not create meeting");
        },
      }
    );
  };

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
            className="gap-2 form-control w-full relative"
          >
            <LoadingOverlay visible={isSettingMeeting} />
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
                    // format="12"
                    onChange={onChange}
                    error={
                      errors?.time
                        ? errors?.time?.message === "end time should be greater"
                          ? "start time should be less than starting"
                          : "this field is required"
                        : false
                    }
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
                  onChange: (event) => meetingCriteria = event.currentTarget.value
                })}
                error={errors?.meetingCriteria ? "Please select one" : false}
              />
            </div>

            {meetingCriteria === "Individual Meeting" && (
              <TextInput
                placeholder="xx-ARID-xxxx"
                label="Enter arid number"
                withAsterisk
                {...register("registrationNumber")}
                error={
                  errors?.resgistrationNumber ? "this field is required" : false
                }
              />
            )}
            {meetingCriteria === "Bulk Meeting" && (
              <NativeSelect
                data={["...", "Attendance", "GPA"]}
                label="Choose meeting criteria"
                desccription="Choose one"
                withAsterisk
                {...register("bulkReason", {
                  onChange: (event) => bulkReason = event.currentTarget.value
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
            {bulkReason === "GPA" && meetingCriteria !== "Individual Meeting" && (
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

import AppSkeloton from "components/AppSkeleton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { meetingSchema } from "schemas/meetingSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThanEqual, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { DatePicker, TimeRangeInput } from "@mantine/dates";
import { useState } from "react";
import { Badge, CloseButton, NativeSelect, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import useSelectStudents from "hooks/students/use-select-students";

export default function ({ session }) {
  const theme = useMantineTheme();
  const [meetingMethod, setMeetingMethod] = useState("");
  const [bulkReason, setBulkReason] = useState("");
  const [gpa, setGpa] = useState(null);



  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(meetingSchema),

  });

  const {data: students, isLoading, isError} = useSelectStudents(gpa);

  const studs = students?.students?.map((student) => {
    return student.Student.studentRegNo;
  })
  

  const onCreate = async (data) => {
    //does some meaningful stuff
    console.log("onCreate function running on form submit");
    data.students = studs;
    console.log("Meeting form data: ", data);

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
                    // minDate={dayjs()}
                    // maxDate={dayjs().add(dayjs.duration({ 'days': 30 }))}
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
                // onChange={(event) =>
                //   {setMeetingMethod(event.currentTarget.value)
                //     console.log("HTML element target value is: ", event.target);
                //   }
                // }
                {...register("meetingCriteria", {
                  onChange: (event) =>
                    setMeetingMethod(event.currentTarget.value),
                })}
              />
            </div>

            {meetingMethod === "Individual Meeting" && (
              <TextInput
                placeholder="xx-ARID-xxxx"
                label="Enter arid number"
                withAsterisk
                {...register("resgistration number")}
              />
            )}
            {meetingMethod === "Bulk Meeting" && (
              <NativeSelect
                data={["...", "Attendance", "GPA"]}
                label="Choose meeting criteria"
                desccription="Choose one"
                withAsterisk
                {...register("meetingWay", {
                  onChange: (event) => setBulkReason(event.currentTarget.value),
                })}
              />
            )}

            {bulkReason === "Attendance" && (
              <NumberInput
                max={100}
                min={0}
                defaultValue={75}
                icon={<FontAwesomeIcon icon={faLessThanEqual} className="text-sm" />}
                {...register("reasonBulk")}
              />
            )}
            {bulkReason === "GPA" && (
              <Controller
              name="reason"
              control={control}
                render={({ field: { onChange } }) => (
                <NumberInput
                  max={4.0}
                  min={0.0}
                  precision={2}
                  defaultValue={2.5}
                  value={gpa}
                  step={0.5}
                    icon={<FontAwesomeIcon icon={faLessThanEqual} className="text-sm" />}
                  onChange={(event)=> setGpa(event)}
                />
                )}
              />
            )}

            {gpa && students &&
              <div className="min-h-6">
                <p className="text-xs text-gray-400 mb-1">Selected Students</p>
                {students?.students?.map((student) => {
                  return <Badge radius="xs" p="xs" ml="xs">{student.Student.studentRegNo}</Badge>;
                })}

              </div>
            }
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
}

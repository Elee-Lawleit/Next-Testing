import AppSkeloton from "components/AppSkeleton";
import { useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  Checkbox,
  LoadingOverlay,
  Table,
  Title,
  Modal,
  Button,
  Text,
} from "@mantine/core";
import { useState, useReducer } from "react";
import useFetchAllTimeSlots from "hooks/admin/use-fetch-all-timeslots";
import dayjs from "dayjs";
import useUpdateTimeslotStatus from "hooks/admin/use-update-timeslot-status";
import useUpdateMeetingCW from "hooks/meetings/use-update-meeting-cw";
import useAdjustMeeting from "hooks/meetings/use-adjust-meeting";
import { getSession } from "next-auth/react";

const Timeslots = ({ session }) => {
  const queryClient = useQueryClient();
  const {
    data: timeslots,
    isLoading: isLoadingTs,
    isError: timeslotError,
  } = useFetchAllTimeSlots(session?.user.id);
  const {
    mutate: updateAvail,
    isLoading: settingStatus,
    isError: statusError,
  } = useUpdateTimeslotStatus();

  const {
    mutate: adjustMeeting,
    isLoading: adjustingMeeting,
    isError: errorAdjusting,
  } = useAdjustMeeting();

  // console.log("ts: ", timeslots)

  const [availModal, setAvailModal] = useState(null);
  const dayMap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
  };

  const {
    mutate: updateStatusCW,
    isLoading: CWLoading,
    isError: CWError,
  } = useUpdateMeetingCW();

  //clearly, the "ignored" variable should be ignored, don't touch it
  // to reset the modal
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  let t830 = [];
  let t8450 = [];
  let t9000 = [];
  let t9150 = [];
  let t9300 = [];
  let t9450 = [];
  let t1000 = [];
  let t1015 = [];
  let t1030 = [];
  let t1045 = [];
  let t1100 = [];
  let t1115 = [];
  let t1130 = [];
  let t1145 = [];
  let t1200 = [];
  let t1215 = [];
  let t1230 = [];
  let t1245 = [];
  let t130 = [];
  let t145 = [];
  let t200 = [];
  let t215 = [];
  let t230 = [];
  let t245 = [];
  let t300 = [];
  let t315 = [];
  let t330 = [];
  let t345 = [];
  let t400 = [];
  let t415 = [];

  timeslots?.timeslots.forEach((ts, index) => {
    if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 8 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t830.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 8 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t8450.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 9 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t9000.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 9 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t9150.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 9 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t9300.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 9 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t9450.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 10 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t1000.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 10 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t1015.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 10 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t1030.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 10 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t1045.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 11 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t1100.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 11 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t1115.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 11 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t1130.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 11 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t1145.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 12 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t1200.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 12 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t1215.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 12 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t1230.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 12 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t1245.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 1 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t130.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 1 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t145.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 2 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t200.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 2 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t215.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 2 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t230.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 2 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t245.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 3 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t300.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 3 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t315.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 3 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 30
    ) {
      t330.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 3 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 45
    ) {
      t345.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 4 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 0
    ) {
      t400.push(ts);
    } else if (
      dayjs(ts.startTime).subtract(5, "hour").hour() == 4 &&
      dayjs(ts.startTime).subtract(5, "hour").minute() == 15
    ) {
      t415.push(ts);
    }
  });

  const sortedDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const matrix = [
    t830.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t8450.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t9000.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t9150.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t9300.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t9450.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1000.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1015.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1030.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1045.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1100.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1115.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1130.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1145.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1200.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1215.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1230.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t1245.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t130.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t145.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t200.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t215.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t230.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t245.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t300.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t315.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t330.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t345.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t400.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
    t415.sort((a, b) => sortedDays.indexOf(a.day) - sortedDays.indexOf(b.day)),
  ];

  // console.log("SORTED TIMESLOTS: ", matrix);

  const [disableBtn, setDisableBtn] = useState();

  return (
    <AppSkeloton session={session}>
      <div className="flex items-center justify-center relative">
        <Title
          order={1}
          align="center"
          className="text-gray-900 font-Montserrat"
        >
          Timeslots
        </Title>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {matrix?.map((timeslot, index) => {
              return (
                <tr key={index}>
                  <td>
                    {dayjs(matrix[index][0]?.startTime)
                      .subtract(5, "hour")
                      .hour() +
                      ":" +
                      dayjs(matrix[index][0]?.startTime)
                        .subtract(5, "hour")
                        .minute() +
                      " - " +
                      dayjs(matrix[index][0]?.endTime)
                        .subtract(5, "hour")
                        .hour() +
                      ":" +
                      dayjs(matrix[index][0]?.endTime)
                        .subtract(5, "hour")
                        .minute()}
                  </td>
                  <td>
                    <Checkbox
                      defaultValue={false}
                      checked={matrix[index][0]?.availibility}
                      onClick={() => {
                        setAvailModal(matrix[index][0]);
                        setDisableBtn(
                          matrix[index][0]?.meeting?.status === "pending"
                            ? true
                            : false
                        );
                      }}
                    />
                  </td>
                  <td>
                    <Checkbox
                      defaultValue={false}
                      checked={matrix[index][1]?.availibility}
                      onClick={() => {
                        setAvailModal(matrix[index][1]);
                        setDisableBtn(
                          matrix[index][1]?.meeting?.status === "pending"
                            ? true
                            : false
                        );
                      }}
                    />
                  </td>
                  <td>
                    <Checkbox
                      defaultValue={false}
                      checked={matrix[index][2]?.availibility}
                      onClick={() => {
                        setAvailModal(matrix[index][2]);
                        setDisableBtn(
                          matrix[index][2]?.meeting?.status === "pending"
                            ? true
                            : false
                        );
                      }}
                    />
                  </td>
                  <td>
                    <Checkbox
                      defaultValue={false}
                      checked={matrix[index][3]?.availibility}
                      onClick={() => {
                        setAvailModal(matrix[index][3]);
                        setDisableBtn(
                          matrix[index][3]?.meeting?.status === "pending"
                            ? true
                            : false
                        );
                      }}
                    />
                  </td>
                  <td>
                    <Checkbox
                      defaultValue={false}
                      checked={matrix[index][4]?.availibility}
                      onClick={() => {
                        setAvailModal(matrix[index][4]);
                        setDisableBtn(
                          matrix[index][4]?.meeting?.status === "pending"
                            ? true
                            : false
                        );
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Modal
        opened={availModal}
        title="Set availibility"
        onClose={() => setAvailModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
        styles={{
          title: { fontWeight: "500" },
        }}
      >
        <LoadingOverlay
          visible={settingStatus || CWLoading || adjustingMeeting}
        />
        {availModal?.meeting &&
        availModal?.meeting?.status === "pending" &&
        disableBtn ? (
          <>
            <Text className="font-semibold">
              There is a meeting for this timeslot. How do you want to proceed?
            </Text>
            <div className="flex gap-4 justify-start mt-5">
              <Button
                className="bg-purple-500 hover:bg-purple-600 relative"
                onClick={() => {
                  updateStatusCW(
                    {
                      meetingId: availModal?.meeting?.mid,
                      action: "confirmWait",
                      feedback: null,
                    },
                    {
                      onSuccess: () => {
                        queryClient.refetchQueries([
                          "all-meetings",
                          "timeslots-all",
                        ]);
                        toast.success("Meeting status updated successfully.");
                        setDisableBtn(false);
                      },
                      onError: () => {
                        toast.error("Error updating meeting status.");
                      },
                    }
                  );
                  console.log(availModal);
                }}
              >
                Put on hold
              </Button>

              <Button
                className="bg-purple-500 hover:bg-purple-600 relative"
                onClick={() => {
                  console.log(availModal);
                  adjustMeeting(
                    {
                      meetingId: availModal?.meeting?.mid,
                      startTime: availModal?.startTime,
                      endTime: availModal?.endTime,
                      day: availModal?.day,
                      adminId: availModal?.meeting?.adminId,
                    },
                    {
                      onSuccess: () => {
                        queryClient.refetchQueries([
                          "all-meetings",
                          "timeslots-all",
                        ]);
                        toast.success("Meeting adjusted successfully.");
                        setDisableBtn(false);
                      },
                      onError: () => {
                        toast.error("Error updating meeting status.");
                      },
                    }
                  );
                }}
              >
                Adjust with other admin
              </Button>
            </div>
          </>
        ) : (
          <>
            <Text className="font-semibold">
              You&apos;re all set, no meetings for this timeslot.
            </Text>
          </>
        )}
        <div className="flex gap-4 justify-start mt-5">
          <Button
            disabled={
              // availModal?.meeting && availModal?.meeting?.status === "pending"
              disableBtn
            }
            className="bg-purple-500 hover:bg-purple-600 relative"
            onClick={() => {
              let currentDate = new Date();
              let currentDay = currentDate.getDay();
              let slotDay = dayMap[availModal?.day];

              //to get the date of the timeslot
              if (slotDay === currentDay) {
                currentDate = new Date();
                console.log(currentDate);
              } else if (slotDay > currentDay) {
                currentDate.setDate(
                  currentDate.getDate() + (slotDay - currentDay)
                );
                console.log(currentDate);
              } else {
                currentDate.setDate(
                  currentDate.getDate() + (7 - currentDay + slotDay)
                );
                console.log(currentDate);
              }
              updateAvail(
                {
                  timeslotId: availModal?.tsid,
                  status: !availModal?.availibility,
                  date: currentDate,
                },
                {
                  onSuccess: () => {
                    queryClient.refetchQueries("timeslots-all");
                    toast.success("Availability updated successfully.");
                    setAvailModal(false);
                  },
                  onError: () => {
                    toast.error("Error updating availability.");
                  },
                }
              );
            }}
          >
            Update availability
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setAvailModal(null)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </AppSkeloton>
  );
};

export default Timeslots;


export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  else if (session?.user.role === "Parent" || session?.user.role === "Student") {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
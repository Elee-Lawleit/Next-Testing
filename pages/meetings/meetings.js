import {
  Radio,
  Tabs,
  Table,
  Menu,
  ActionIcon,
  Modal,
  NativeSelect,
  Button,
  Rating,
  Tooltip,
  Dialog,
  Text
} from "@mantine/core";
import AppSkeloton from "components/AppSkeleton";
import useFetchAllMeetings from "hooks/meetings/use-fetch-all-meetings";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import useReferMeeting from "hooks/meetings/use-refer-meeting";
import { useQueryClient } from "react-query";
import useUpdateMeetingStatus from "hooks/meetings/use-update-meeting-status";
import useFetchTimeSlots from "hooks/admin/use-fetch-timeslots";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import {
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
  IconAlertCircle
} from "@tabler/icons";
import useFetchCompletedMeetings from "hooks/meetings/use-fetch-completed-meetings";
import useUpdateFeedback from "hooks/meetings/use-upate-feedback";
import useFetchAdmins from "hooks/admin/use-fetch-admins";
import useSwitchAdmin from "hooks/meetings/use-switch-meeting-admin";
import customParseFormat from "dayjs/plugin/customParseFormat"

const Meetings = ({ session }) => {
  const [activeTab, setActiveTab] = useState("pending");

  const { data, isLoading, isError } = useFetchAllMeetings(session.user.id);
  console.log("Meetings are: ", data)

  const {
    data: completedMeetings,
    isLoading: completedMeetingsLoading,
    isError: completedMeetingsError,
  } = useFetchCompletedMeetings(session.user.id);

  const [referModal, setReferModal] = useState(null);
  const [statusModal, setStatusModal] = useState(null);
  const [rescheduleModal, setRescheduleModal] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(null);
  const [adminLeftDialog, setAdminLeftDialog] = useState(false);
  const referalRef = useRef();
  const timeslotRef = useRef();
  const feedbackRef = useRef();

  const [rating, setRating] = useState(0);


  const {
    data: timeSlots,
    isLoading: tsLoading,
    isError: tsError,
  } = useFetchTimeSlots(session.user.id);
  const {
    mutate: refer,
    isLoading: submittingReferal,
    isError: referalError,
  } = useReferMeeting();
  const {
    mutate: updateStatus,
    isLoading: updatingStatus,
    isError: statusUpdationError,
  } = useUpdateMeetingStatus();
  const {
    mutate: updateMeetingFeedback,
    isLoading: updatingFeedback,
    isError: feedbackUpdationError,
  } = useUpdateFeedback();

  // console.log("TIMESLOTS: ", timeSlots);

  //redering the loading overlay on client
  const Loading = dynamic(() => import("components/Loading"), {
    ssr: false,
  });

  const queryClient = useQueryClient();

  //perform database call to refer the meeting
  const referMeeting = async (meetingId, referal) => {
    refer(
      { meetingId, referal },
      {
        onSuccess: () => {
          queryClient.refetchQueries("all-meetings");
          toast.success("Meeing referred successfully");
        },
        onError: () => {
          toast.error("Error referring");
        },
      }
    );
  };

  const updateMeetingStatus = async (meetingId, action) => {
    updateStatus(
      { meetingId, action },
      {
        onSuccess: () => {
          queryClient.refetchQueries("all-meetings");
          queryClient.refetchQueries("meetings-for-calendar");
          toast.success("Meeting status updated");
        },
        onError: () => {
          toast.error("Error updating status");
        },
      }
    );
  };

  const updateFeedback = (meetingId, feedback, rating) => {
    updateMeetingFeedback(
      { meetingId, feedback, rating },
      {
        onSuccess: () => {
          queryClient.refetchQueries("all-meetings");
          toast.success("Meeting feedback updated");
        },
        onError: () => {
          toast.error("Error updating feedback");
        },
      }
    );
  };

  //to get rating icons
  const getEmptyIcon = (value) => {
    const defaultProps = {
      size: 30,
      color: "gray",
    };
    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} />;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return (
          <span title="feedback required">
            <IconMoodEmpty {...defaultProps} />
          </span>
        );
    }
  };

  const getFullIcon = (value) => {
    const defaultProps = {
      size: 30,
    };
    switch (value) {
      case 1:
        return (
          <span title="very poor">
            <IconMoodCry {...defaultProps} color="red" />
          </span>
        );
      case 2:
        return (
          <span title="poor">
            {" "}
            <IconMoodSad {...defaultProps} color="orange" />
          </span>
        );
      case 3:
        return (
          <span title="average">
            <IconMoodSmile {...defaultProps} className="text-yellow-400" />
          </span>
        );
      case 4:
        return (
          <span title="good">
            <IconMoodHappy {...defaultProps} color="lime" />
          </span>
        );
      case 5:
        return (
          <span title="very good">
            <IconMoodCrazyHappy {...defaultProps} color="green" />
          </span>
        );
      default:
        return (
          <span title="feedback required">
            <IconMoodEmpty {...defaultProps} />
          </span>
        );
    }
  };

  const [val, setVal] = useState(1);

  const {
    data: admins,
    isLoading: adminsLoading,
    isError: adminsError,
  } = useFetchAdmins(1);

  console.log("admins: ", admins)

  // const freeAdmins = admins?.admin
  //   .filter((admin) => admin.generalavail === true)
  //   .map((admin) => admin.meeting)
  //   .map((row) => row
  //   .map((ts) => ts.timeslot))
  //   .filter((ts)=>ts.date === new Date())


  // returns free admins
  // const freeAdmins = admins?.admin.filter((admin) => admin.generalavail === true)

  // returns meeting objects
  // const meetings = freeAdmins.map((admin) => admin.meeting)

  // console.log("TADADAS: ", meetings[0][0].timeslot)

  dayjs.extend(customParseFormat)

  // const timeslots = meetings.map((row) => row.map((ts) => {
  //   return ts.timeslot;
    // console.log("is after: ", dayjs("10:02:00", "HH:mm:ss").isAfter(dayjs(ts.startTime).subtract(5, "hours")))
    // console.log("is before: ", dayjs("10:02:00", "HH:mm:ss").isBefore(dayjs(ts.endTime).subtract(5, "hours")))
    // console.log("TIME: ", dayjs(ts.startTime).subtract(5, 'hours').minute(), "\tADASD:  ", dayjs(ts.endTime).subtract(5, 'hours').minute())
  // }))
  
  // console.log("is after: ", dayjs("10:02:00", "HH:mm:ss").isAfter(dayjs(timeslots[0][0].startTime).subtract(5, "hours")))
  // console.log("is before: ", dayjs("10:02:00", "HH:mm:ss").isBefore(dayjs(timeslots[0][0].endTime).subtract(5, "hours")))
  // console.log("TIME: ", dayjs(timeslots[0][0].startTime).subtract(5, 'hours').minute(), "\tADASD:  ", dayjs(timeslots[0][0].endTime).subtract(5, 'hours').minute())


  // console.log("TIMESLOTS: ", timeslots);
  // console.log("Meetings: ", meetings)
  // console.log("FREE ADMINS: ", freeAdmins)

  // const ts = admins?.admin.meeting.timeslot.map((ts)=>ts);
  // console.log("ADASD: ", ts)

  // const freeAdmins = admins?.admin.filter((admin)=>admin.generalavail === true).map((admin)=>admin.cnic)
  // console.log("free admins: ", freeAdmins)

  const { mutate: switchAdmin, isLoadind: isSwitching, isError: errorSwitching } = useSwitchAdmin();

  const handleAdminSwitch = (meeting) => {
    console.log("meeting obj inside switch function: ", meeting)
    if (freeAdmins.length === 0) {
      toast.error("No free admins available. Please reschedule.");
    }
    else {
      console.log("AASDASD: ", meeting.mid, freeAdmins[0]);
      switchAdmin({ meetingId: meeting.mid, adminId: freeAdmins[0] }, {
        onSuccess: () => {
          queryClient.refetchQueries("all-meetings")
          toast.success("Meet with another admin right now!");
        },
        onError: () => {
          toast.error("Couldn't perform action, retry again or reschedule");
        }
      })
    }
  }

  return (
    <AppSkeloton session={session}>
      <Dialog
        className="border-red-500"
        opened={adminLeftDialog}
        size="xl"
        onClose={() => setAdminLeftDialog(false)}
        withCloseButton
      >
        <Text size="sm" display={"flex"} style={{ marginBottom: 10 }} weight={500}>
          <IconAlertCircle className="mr-1" color="red" />
          The admin for this meeting is currently unavailable.
        </Text>
        <div className="flex gap-3">
          <Button className="bg-purple-500 hover:bg-purple-600" onClick={() => handleAdminSwitch(adminLeftDialog)} loading={isSwitching}>Switch admin</Button>
          <Button className="bg-purple-500 hover:bg-purple-600">Reschedule</Button>
        </div>
      </Dialog>
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List position="center">
          <Tabs.Tab value="pending">Pending</Tabs.Tab>
          <Tabs.Tab value="waiting">Waiting</Tabs.Tab>
          <Tabs.Tab value="completed">Completed</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pending">
          <Table className="relative" highlightOnHover>
            <thead>
              <tr>
                <th>Meeting ID</th>
                <th>Status</th>
                <th>Arid Number</th>
                <th>Reason</th>
                <th>Refered To</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Loading visible={isLoading} />
              {data?.meetings
                ?.filter((meeting) => meeting.status === "pending")
                .map((meeting) => {
                  return (
                    <tr key={meeting.mid}>
                      <td>{meeting.mid}</td>
                      <td>{meeting.status}</td>
                      <td>{meeting.regNo}</td>
                      <td>{meeting.reason}</td>
                      <td>{meeting.referedTo}</td>
                      <td>
                        <Menu width={200} shadow="sm">
                          <Menu.Target>
                            <ActionIcon>
                              <FontAwesomeIcon icon={faEllipsis} />
                            </ActionIcon>
                          </Menu.Target>

                          <Menu.Dropdown>
                            <Menu.Label>Change meeting state</Menu.Label>
                            {session?.user.role === "Admin" && (
                              <Menu.Item
                                onClick={() => {
                                  meeting.action = "held";
                                  setStatusModal(meeting);
                                }}
                              >
                                Put on hold
                              </Menu.Item>
                            )}
                            {session?.user.role === "Admin" && (
                              <Menu.Item
                                onClick={() => {
                                  meeting.action = "completed";
                                  setStatusModal(meeting);
                                }}
                              >
                                Mark as completed
                              </Menu.Item>
                            )}
                            <Menu.Item
                              onClick={() => {
                                setRescheduleModal(meeting);
                              }}
                            >
                              Rescedule
                            </Menu.Item>
                            {session?.user.role === "Admin" && (
                              <Menu.Item
                                onClick={() => {
                                  setReferModal(meeting);
                                }}
                              >
                                Refer
                              </Menu.Item>
                            )}
                          </Menu.Dropdown>
                        </Menu>
                      </td>
                      {/* DON'T FORGET TO CHANGE THIS */}
                      {meeting.mid == 5 && <td>
                        <Tooltip label="admin unavailable">
                          <ActionIcon onClick={() => {
                            setAdminLeftDialog(meeting)
                          }}>
                            <IconAlertCircle color="red" />
                          </ActionIcon>
                        </Tooltip>
                      </td>}
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tabs.Panel>

        <Tabs.Panel value="waiting" className="relative">
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>Meeting ID</th>
                <th>Status</th>
                <th>Arid Number</th>
                <th>Reason</th>
                <th>Refered To</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Loading visible={isLoading} />
              {data?.meetings
                ?.filter((meeting) => meeting.status === "held")
                .map((meeting) => {
                  return (
                    <tr key={meeting.mid}>
                      <td>{meeting.mid}</td>
                      <td>{meeting.status}</td>
                      <td>{meeting.regNo}</td>
                      <td>{meeting.reason}</td>
                      <td>{meeting.referedTo}</td>
                       
                        <td>
                          <Menu width={200} shadow="sm">
                            <Menu.Target>
                              <ActionIcon>
                                <FontAwesomeIcon icon={faEllipsis} />
                              </ActionIcon>
                            </Menu.Target>

                            <Menu.Dropdown>
                              <Menu.Label>Change meeting state</Menu.Label>
                              <Menu.Item
                                onClick={() => {
                                  meeting.action = "pending";
                                  setStatusModal(meeting);
                                }}
                              >
                                Mark as pending
                              </Menu.Item>
                              <Menu.Item
                                onClick={() => {
                                  meeting.action = "completed";
                                  setStatusModal(meeting);
                                }}
                              >
                                Mark as completed
                              </Menu.Item>
                              <Menu.Item
                                onClick={() => {
                                  setRescheduleModal(meeting);
                                }}
                              >
                                Rescedule
                              </Menu.Item>
                              <Menu.Item
                                onClick={() => {
                                  setReferModal(meeting);
                                }}
                              >
                                Refer
                              </Menu.Item>
                            </Menu.Dropdown>
                          </Menu>
                        </td>
                      
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tabs.Panel>

        <Tabs.Panel value="completed" className="relative">
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>Meeting ID</th>
                <th>Status</th>
                <th>Arid Number</th>
                <th>Reason</th>
                <th>Refered To</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Loading visible={isLoading} />
              {completedMeetings?.meetings?.map((meeting) => {
                return (
                  <tr key={meeting.mid}>
                    <td>{meeting.hid}</td>
                    <td>{meeting.status}</td>
                    <td>{meeting.regNo}</td>
                    <td>{meeting.reason}</td>
                    <td>{meeting.referedTo}</td>
                    <td>{meeting.feedback}</td>
                    <td>{getFullIcon(meeting.rating)}</td>
                    {!meeting.feedback && (
                      <td>
                        <Menu width={200} shadow="sm">
                          <Menu.Target>
                            <ActionIcon>
                              <FontAwesomeIcon icon={faEllipsis} />
                            </ActionIcon>
                          </Menu.Target>

                          {session?.user.role === "Parent" && (
                            <Menu.Dropdown>
                              <Menu.Label>Feedback</Menu.Label>
                              <Menu.Item
                                onClick={() => setFeedbackModal(meeting)}
                              >
                                Provide feedback
                              </Menu.Item>
                            </Menu.Dropdown>
                          )}
                        </Menu>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tabs.Panel>
      </Tabs>
      <Modal
        opened={referModal}
        title={"Who do you want to refer to?"}
        onClose={() => setReferModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <NativeSelect
          data={["Datacell", "Attendance", "Project Committee"]}
          ref={referalRef}
        />
        <div className="flex gap-4 justify-start mt-3">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              referMeeting(referModal?.mid, referalRef.current.value);
            }}
          >
            Refer
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setReferModal(null)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Modal
        opened={statusModal}
        title="Are you sure?"
        onClose={() => setStatusModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <div className="flex gap-4 justify-start">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              updateMeetingStatus(statusModal?.mid, statusModal?.action);
            }}
          >
            Yes
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setStatusModal(null)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Modal
        opened={rescheduleModal}
        title="Select time slot"
        onClose={() => setRescheduleModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <div className="grid grid-cols-2 gap-3">
          {timeSlots?.timeSlots?.map((ts) => (
            <div className="flex flex-col col-span-1 gap-0">
              <Radio
                value={ts.tsid}
                label={
                  dayjs(ts.startTime).subtract(5, "hours").hour() +
                  ":" +
                  dayjs(ts.startTime).subtract(5, "hours").minute() +
                  " - " +
                  dayjs(ts.endTime).subtract(5, "hours").hour() +
                  ":" +
                  dayjs(ts.endTime).subtract(5, "hours").minute()
                }
                name="time"
                ref={timeslotRef}
              />
              <p className="ml-10 text-xs">
                {new Date(ts.date).toDateString()}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-start mt-3">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              updateMeetingStatus(
                rescheduleModal?.mid,
                timeslotRef.current.value
              );
            }}
          >
            Update
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setRescheduleModal(null)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Modal
        opened={feedbackModal}
        title={"Enter feedback details"}
        onClose={() => setFeedbackModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <NativeSelect
          label="How was the teacher behaviour?"
          data={["Attentive", "Rude", "Unattentive"]}
          ref={feedbackRef}
        />
        <p className="font-semibold mt-3 text-sm mb-1">
          How satisfied are you?
        </p>
        <Rating
          emptySymbol={getEmptyIcon}
          fullSymbol={getFullIcon}
          highlightSelectedOnly
          value={rating}
          onChange={setRating}
        />
        <div className="flex gap-4 justify-start mt-4">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              updateFeedback(
                feedbackModal?.hid,
                feedbackRef.current.value,
                rating
              );
            }}
          >
            Update
          </Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setStatusModal(null)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </AppSkeloton>
  );
};

export default Meetings;

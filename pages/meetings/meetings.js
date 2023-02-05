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
  Text,
  ScrollArea,
  LoadingOverlay,
  Textarea,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
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
  IconAlertCircle,
} from "@tabler/icons";
import useFetchCompletedMeetings from "hooks/meetings/use-fetch-completed-meetings";
import useUpdateFeedback from "hooks/meetings/use-upate-feedback";
import useFetchAdmins from "hooks/admin/use-fetch-admins";
import useSwitchAdmin from "hooks/meetings/use-switch-meeting-admin";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { rescheduleSchema } from "schemas/rescheduleSchema";
import useUpdateMeetingCW from "hooks/meetings/use-update-meeting-cw";
import useFetchWaitingList from "hooks/meetings/use-fetch-waiting-meetings";
import clsx from "clsx";
import useChangeWaitToRes from "hooks/meetings/use-change-wait-to-res";

const Meetings = ({ session }) => {
  const [activeTab, setActiveTab] = useState("pending");

  const { data, isLoading, isError } = useFetchAllMeetings(session?.user.id);
  console.log("Meetings areasdas: ", data);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    unregister,
    control,
  } = useForm({
    resolver: yupResolver(rescheduleSchema),
  });

  const {
    data: completedMeetings,
    isLoading: completedMeetingsLoading,
    isError: completedMeetingsError,
  } = useFetchCompletedMeetings(session?.user.id);

  const {
    data: waitingList,
    isLoading: waitintListLoading,
    isError: watingListError,
  } = useFetchWaitingList(
    session?.user.role === "Parent" ? session?.user.id : null
  );


  const [referModal, setReferModal] = useState(null);
  const [statusModal, setStatusModal] = useState(null);
  const [rescheduleModal, setRescheduleModal] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(null);
  const [adminLeftDialog, setAdminLeftDialog] = useState(false);
  const referalRef = useRef();
  const suggesstionRef = useRef();

  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState(false);
  const [rudeRating, setRudeRating] = useState(0);
  const [attentiveRating, setAttentiveRating] = useState(0);
  const [politeRating, setPoliteRating] = useState(0);

  const [waitToResDate, setWaitToResDate] = useState(new Date());

  const {
    data: timeSlots,
    isLoading: tsLoading,
    isError: tsError,
  } = useFetchTimeSlots(session?.user.id);
  const {
    mutate: refer,
    isLoading: submittingReferal,
    isError: referalError,
  } = useReferMeeting();

  //for completed & waiting list
  const {
    mutate: updateStatusCW,
    isLoading: CWLoading,
    isError: CWError,
  } = useUpdateMeetingCW();

  //for rescheduling
  const {
    mutate: updateStatus,
    isLoading: updatingStatus,
    isError: statusUpdationError,
  } = useUpdateMeetingStatus();

  //for feedback
  const {
    mutate: updateMeetingFeedback,
    isLoading: updatingFeedback,
    isError: feedbackUpdationError,
  } = useUpdateFeedback();

  //getting all admins and their timeslots
  const {
    data: admins,
    isLoading: adminLoading,
    isError: adminError,
  } = useFetchAdmins();

  console.log("admins asdasd asdas: ", admins);

  //extracting timeslots from the admins data
  const ts = admins?.admin.map((admin) => admin.timeslot);

  console.log("timeslots: ", ts)

  // function written by chat gpt btw, not me
  // the easiet and simplest solution I've seen so far
  function removeDuplicateTimeSlots(dataSet) {
    let uniqueTimeSlots = {};
    let distinctTimeSlots = [];
    dataSet?.forEach((innerArr) => {
      innerArr?.forEach((timeSlot) => {
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
    let filteredTimeSlots = distinctTimeSlots.filter((timeSlot) => {
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

  dayjs.extend(customParseFormat);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const {
    mutate: switchAdmin,
    isLoadind: isSwitching,
    isError: errorSwitching,
  } = useSwitchAdmin();

  const handleAdminSwitch = (meeting) => {
    // console.log("meeting obj inside switch function: ", meeting)
    if (freeAdmins.length === 0) {
      toast.error("No free admins available. Please reschedule.");
    } else {
      // console.log("AASDASD: ", meeting.mid, freeAdmins[0]);
      switchAdmin(
        { meetingId: meeting.mid, adminId: freeAdmins[0] },
        {
          onSuccess: () => {
            queryClient.refetchQueries("all-meetings");
            toast.success("Meet with another admin right now!");
          },
          onError: () => {
            toast.error("Couldn't perform action, retry again or reschedule");
          },
        }
      );
    }
  };

  const onUpdate = (data) => {
    if (!date) {
      setDateError(true);
      return;
    }

    data.date = date.toDateString();

    updateStatus(
      { ...data },
      {
        onSuccess: () => {
          toast.success("Meeting rescheduled successfully.");
          queryClient.refetchQueries("all-meetings");
        },
        onError: () => {
          toast.error("Error rescheduling meeting.");
        },
      }
    );
  };

  const {mutate: changeWaitToRes, isLoading: changingtoRes, isError: changingToResError} = useChangeWaitToRes();

  const onWaitToRes = (data)=>{
    if(!waitToResDate){
      setDateError(true);
      return;
    }

    data.date = waitToResDate;

    console.log("WAITORES: ", data)
    //make hook
    changeWaitToRes({ ...data }, {
      onSuccess: () => {
        toast.success("Meeting rescheduled successfully.");
        queryClient.refetchQueries(["all-meetings", "waiting-meetings"]);
        setWaitDialog(false);
        setWaitToResModal(false);
      },
      onError: () => {
        toast.error("Error rescheduling meeting.");
      },
    })
  }

  const [feedbackError, setFeedbackError] = useState(false);
  const adminFeedbackRef = useRef(null);

  const [waitDialog, setWaitDialog] = useState();
  const [ratingModal, setRatingModal] = useState(false);
  const [suggestionError, setSuggestionError] = useState(false);
  const [waitToResModal, setWaitToResModal] = useState(false);



  return (
    <AppSkeloton session={session}>
      <Dialog
        className="border-red-500"
        opened={adminLeftDialog}
        size="xl"
        onClose={() => setAdminLeftDialog(false)}
        withCloseButton
      >
        <Text
          size="sm"
          display={"flex"}
          style={{ marginBottom: 10 }}
          weight={500}
        >
          <IconAlertCircle className="mr-1" color="red" />
          The admin for this meeting is currently unavailable.
        </Text>
        <div className="flex gap-3">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => handleAdminSwitch(adminLeftDialog)}
            loading={isSwitching}
          >
            Switch admin
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600">
            Reschedule
          </Button>
        </div>
      </Dialog>
      <Dialog
        className="border-red-500"
        opened={waitDialog}
        size="xl"
        onClose={() => setWaitDialog(false)}
        withCloseButton
      >
        <LoadingOverlay visible={CWLoading} />
        <Text
          size="sm"
          display={"flex"}
          style={{ marginBottom: 10 }}
          weight={500}
        >
          <IconAlertCircle className="mr-1" color="red" />
          {session?.user.role === "Parent"
            ? "Please confirm to wait or reschedule"
            : "Waiting for parent to confirm or reschedule"}
        </Text>
        {session?.user.role === "Parent" && (
          <div className="flex gap-3">
            {console.log("wait dialog: ", waitDialog)}
            <Button
              className="bg-purple-500 hover:bg-purple-600"
              onClick={() => {
                updateStatusCW(
                  {
                    meetingId: waitDialog?.id,
                    action: "waiting",
                    feedback: "",
                  },
                  {
                    onSuccess: () => {
                      toast.success("Status updated successfully");
                    },
                    onError: () => {
                      toast.error("Error updating status");
                    },
                  }
                );
              }}
            >
              Wait
            </Button>
            <Button
              className="bg-purple-500 hover:bg-purple-600"
              onClick={() =>{ 
                waitDialog.action = "ResFromWait"
                setWaitToResModal(waitDialog)
              }}
            >
              Reschedule
            </Button>
          </div>
        )}
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
                ?.filter(
                  (meeting) =>
                    meeting.status === "pending" && meeting.referedTo === "n/a"
                )
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
                                  meeting.action = "confirmWait";
                                  setStatusModal(meeting);
                                }}
                              >
                                Put on hold
                              </Menu.Item>
                            )}
                            {session?.user.role === "Admin" && (
                              <Menu.Item
                                onClick={() => {
                                  meeting.action = "held";
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
                      {meeting.mid == 5 && (
                        <td>
                          <Tooltip label="admin unavailable">
                            <ActionIcon
                              onClick={() => {
                                setAdminLeftDialog(meeting);
                              }}
                            >
                              <IconAlertCircle color="red" />
                            </ActionIcon>
                          </Tooltip>
                        </td>
                      )}
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
                <th>Status</th>
                <th>Arid Number</th>
                <th>Reason</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Loading visible={isLoading} />
              {waitingList?.meetings.map((meeting) => {
                return (
                  <tr key={meeting.mid}>
                    <td>waiting</td>
                    <td>{meeting.regNo}</td>
                    <td>{meeting.reason}</td>
                    {meeting.status === "confirmWait" && (
                      <td>
                        <Tooltip label="admin unavailable">
                          <ActionIcon
                            onClick={() => {
                              setWaitDialog(meeting);
                            }}
                          >
                            <IconAlertCircle color="red" />
                          </ActionIcon>
                        </Tooltip>
                      </td>
                    )}

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
                                meeting.action = "pending";
                                setStatusModal(meeting);
                              }}
                            >
                              Mark as pending
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
                <th>Suggestion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Loading visible={isLoading} />
              {completedMeetings?.meetings?.map((meeting) => {
                console.log("Completed meetings: ASDASD: ", meeting)
                return (
                  <tr key={meeting.mid}>
                    <td>{meeting.hid}</td>
                    <td>{meeting.status}</td>
                    <td>{meeting.regNo}</td>
                    <td>{meeting.reason}</td>
                    <td>{meeting.referedTo}</td>
                    <td>{meeting.feedback?.suggestion ? meeting.feedback?.suggestion : "required"}</td>
                    <td>
                      <Menu width={200} shadow="sm">
                        <Menu.Target>
                          <ActionIcon>
                            <FontAwesomeIcon icon={faEllipsis} />
                          </ActionIcon>
                        </Menu.Target>

                        {session?.user.role === "Parent" && (
                          <Menu.Dropdown>

                            {
                              !meeting.feedback ? <><Menu.Item
                                onClick={() => setFeedbackModal(meeting)}
                              >
                                Provide feedback
                              </Menu.Item></> :
                                <>
                                  <Menu.Label>Feedback</Menu.Label>
                                  <Menu.Item
                                    onClick={() => setRatingModal(meeting)}
                                  >
                                    View rating
                                  </Menu.Item>
                                </>
                            }

                          </Menu.Dropdown>
                        )}
                      </Menu>
                    </td>
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
        <LoadingOverlay visible={submittingReferal} />
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
        <LoadingOverlay visible={CWLoading} />
        {console.log("Meeting", statusModal)}

        {statusModal?.action === "held" && (
          <Textarea
            error={feedbackError}
            ref={adminFeedbackRef}
            label="provide feedback"
          />
        )}
        <div className="flex gap-4 justify-start mt-3">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              if(statusModal?.action === "confirmWait"){
                updateStatusCW(
                  {
                    meetingId: statusModal?.mid,
                    action: statusModal?.action,
                    feedback: adminFeedbackRef?.current?.value,
                  },
                  {
                    onSuccess: () => {
                      queryClient.refetchQueries([
                        "all-meetings",
                        "completed-meetings",
                      ]);
                      toast.success("Meeting status updated successfully.");
                    },
                    onError: () => {
                      toast.error("Error updating meeting status.");
                    },
                  }
                );
              }
              else{
                if (!adminFeedbackRef?.current?.value) {
                  setFeedbackError(true);
                  return;
                }
                updateStatusCW(
                  {
                    meetingId: statusModal?.mid,
                    action: statusModal?.action,
                    feedback: adminFeedbackRef?.current?.value,
                  },
                  {
                    onSuccess: () => {
                      queryClient.refetchQueries([
                        "all-meetings",
                        "completed-meetings",
                      ]);
                      toast.success("Meeting status updated successfully.");
                    },
                    onError: () => {
                      toast.error("Error updating meeting status.");
                    },
                  }
                );
              }
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
        <LoadingOverlay visible={updatingStatus} />
        <form action="" onSubmit={handleSubmit(onUpdate)}>
          <div>
            <DatePicker
              value={date}
              placeholder="Pick meeting day"
              label="Meeting day"
              initialMonth={new Date()}
              excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
              onChange={setDate}
              allowLevelChange={false}
              minDate={new Date()}
              error={dateError ? "Please fill this field properly" : false}
              withAsterisk
            />
          </div>
          <ScrollArea style={{ height: 220 }}>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {extractTimeSlotsForDay(
                ts,
                days[new Date(date).getDay() - 1]
              ).map((ts) => (
                <div className="flex flex-col col-span-1 gap-0">
                  <Radio
                    value={[rescheduleModal?.mid, ts.tsid]}
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
            </div>
          </ScrollArea>
          <div className="flex gap-4 justify-start mt-3">
            <Button className="bg-purple-500 hover:bg-purple-600" type="submit">
              Update
            </Button>
            <Button
              className="bg-red-400 hover:bg-red-500"
              onClick={() => setRescheduleModal(null)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        opened={feedbackModal}
        title={"Enter feedback details"}
        onClose={() => setFeedbackModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <LoadingOverlay visible={updatingFeedback} />
        <Table>
          <tr className="mb-2">
            <th className="font-semibold">Rude</th>
            <td>
              {" "}
              <Rating
                emptySymbol={getEmptyIcon}
                fullSymbol={getFullIcon}
                highlightSelectedOnly
                value={rudeRating}
                onChange={setRudeRating}
              />
            </td>
          </tr>
          <tr className="mb-2">
            <th className="font-semibold">Attentive</th>
            <td>
              {" "}
              <Rating
                emptySymbol={getEmptyIcon}
                fullSymbol={getFullIcon}
                highlightSelectedOnly
                value={attentiveRating}
                onChange={setAttentiveRating}
              />
            </td>
          </tr>
          <tr className="mb-2">
            <th className="font-semibold">Polite</th>
            <td>
              {" "}
              <Rating
                emptySymbol={getEmptyIcon}
                fullSymbol={getFullIcon}
                highlightSelectedOnly
                value={politeRating}
                onChange={setPoliteRating}
              />
            </td>
          </tr>
        </Table>
        <div>
          <Textarea ref={suggesstionRef} error={suggestionError} label="Enter suggesstion for improvement" />
        </div>
        <span className={clsx(rudeRating < 1 || politeRating < 1 || attentiveRating < 1 || !suggesstionRef.current?.value ? "visible text-xs text-red-500" : "hidden")}>
          Please fill feedback details properly
        </span>
        <div className="flex gap-4 justify-start mt-4">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              if (!suggesstionRef.current.value) {
                setSuggestionError(true)
              }
              if (rudeRating < 1 || politeRating < 1 || attentiveRating < 1) {

              }
              updateMeetingFeedback(
                {
                  meetingId: feedbackModal?.hid,
                  suggesstion: suggesstionRef.current.value,
                  rude: rudeRating,
                  polite: politeRating,
                  attentive: attentiveRating
                },
                {
                  onSuccess: () => {
                    queryClient.refetchQueries("completed-meetings")
                    toast.success("Feedback updated successfully.")
                    setFeedbackModal(false);
                  },
                  onError: () => {
                    toast.error("Error updating feedback.");
                  }
                }
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
      <Modal
        opened={ratingModal}
        title="Parent Feedback"
        onClose={() => setRatingModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        {console.log("Meeting", ratingModal)}
        <div className="flex gap-4 justify-start mt-3">
          <Table>
            <tbody>
              <tr>
                <td className="font-semibold">
                  Polite
                </td>
                <td>
                  {getFullIcon(ratingModal?.feedback?.polite)}
                </td>
              </tr>
              <tr>
                <td className="font-semibold">
                  Attentive
                </td>
                <td>
                  {getFullIcon(ratingModal?.feedback?.attentive)}
                </td>
              </tr>
              <tr>
                <td className="font-semibold">
                  Rude
                </td>
                <td>
                  {getFullIcon(ratingModal?.feedback?.rude)}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal>


      {/* A very shitty approach indeed, but I'm not really looking for the 
      best appraoches right now so, SUE ME */}
      <Modal
        opened={waitToResModal}
        title="Select time slot"
        onClose={() => setWaitToResModal(null)}
        shadow="sm"
        overlayOpacity={0.1}
        centered
      >
        <LoadingOverlay visible={changingtoRes} />
          <form action="" onSubmit={handleSubmit(onWaitToRes)}>
            <div>
              <DatePicker
                value={waitToResDate}
                placeholder="Pick meeting day"
                label="Meeting day"
                initialMonth={new Date()}
                excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
                onChange={setWaitToResDate}
                allowLevelChange={false}
                minDate={new Date()}
                error={dateError ? "Please fill this field properly" : false}
                withAsterisk
              />
            </div>
          <ScrollArea style={{ height: 220 }}>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {extractTimeSlotsForDay(
                ts,
                days[new Date(waitToResDate).getDay() - 1]
              ).map((ts) => (
                <div className="flex flex-col col-span-1 gap-0">
                  <Radio
                  
                    value={[waitToResModal?.tsid, ts.tsid]}
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
            </div>
          </ScrollArea>
          <div className="flex gap-4 justify-start mt-3">
            <Button className="bg-purple-500 hover:bg-purple-600"
              type="submit"
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
        </form>
      </Modal>
    </AppSkeloton>
  );
};

export default Meetings;

import { Radio, Tabs, Table, Menu, ActionIcon, Modal, NativeSelect, Button, Rating } from "@mantine/core";
import AppSkeloton from "components/AppSkeleton";
import useFetchAllMeetings from "hooks/meetings/use-fetch-all-meetings";
import { useRef, useState } from "react";
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
} from '@tabler/icons';
import useFetchCompletedMeetings from "hooks/meetings/use-fetch-completed-meetings";
import useUpdateFeedback from "hooks/meetings/use-upate-feedback";

const Meetings = ({ session }) => {

  const [activeTab, setActiveTab] = useState("pending");

  const { data, isLoading, isError } = useFetchAllMeetings(session.user.id);
  const { data: completedMeetings, isLoading: completedMeetingsLoading, isError: completedMeetingsError } = useFetchCompletedMeetings(session.user.id);
  console.log("Meetings: ", data);

  const [referModal, setReferModal] = useState(null);
  const [statusModal, setStatusModal] = useState(null);
  const [rescheduleModal, setRescheduleModal] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(null);
  const referalRef = useRef();
  const timeslotRef = useRef();
  const feedbackRef = useRef();
  const ratingRef = useRef();

  const [rating, setRating] = useState(0);

  const { data: timeSlots, isLoading: tsLoading, isError: tsError } = useFetchTimeSlots(session.user.id);
  const { mutate: refer, isLoading: submittingReferal, isError: referalError } = useReferMeeting()
  const { mutate: updateStatus, isLoading: updatingStatus, isError: statusUpdationError } = useUpdateMeetingStatus()
  const { mutate: updateMeetingFeedback, isLoading: updatingFeedback, isError: feedbackUpdationError } = useUpdateFeedback()

  console.log("TimeSLots: ", timeSlots)

  //redering the loading overlay on client
  const Loading = dynamic(() => import("components/Loading"), {
    ssr: false
  });

  

  const queryClient = useQueryClient();


  //perform database call to refer the meeting
  const referMeeting = async (meetingId, referal) => {
    console.log("meeting id: ", meetingId, "referal: ", referal)
    refer({ meetingId, referal }, {
      onSuccess: () => {
        queryClient.refetchQueries("all-meetings");
        toast.success("Meeing referred successfully")
      },
      onError: () => {
        toast.error("Error referring")
      }
    });
  }

  const updateMeetingStatus = async (meetingId, action) => {
    updateStatus({meetingId, action}, {
      onSuccess: ()=>{
        queryClient.refetchQueries("all-meetings");
        queryClient.refetchQueries("meetings-for-calendar");
        toast.success("Meeting status updated");
      },
      onError: ()=>{
        toast.error("Error updating status");
      }
    })
  }

  const updateFeedback = (meetingId, feedback, rating)=>{
    updateMeetingFeedback({ meetingId, feedback, rating }, {
      onSuccess: () => {
        queryClient.refetchQueries("all-meetings");
        toast.success("Meeting feedback updated");
      },
      onError: () => {
        toast.error("Error updating feedback");
      }
    });
  }

  //to get rating icons
  const getEmptyIcon = (value) => {
    const defaultProps = {
      size: 30,
      color: 'gray',
    };
    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} enableBackground="0"/>;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  const getFullIcon = (value) => {
    const defaultProps = {
      size: 30,
    };
   

    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} color="red" />;
      case 2:
        return <IconMoodSad {...defaultProps} color="orange" />;
      case 3:
        return <IconMoodSmile {...defaultProps} className="text-yellow-400" />;
      case 4:
        return <IconMoodHappy {...defaultProps} color="lime" />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} color="green" />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  return (
    <AppSkeloton session={session}>
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
              </tr>
            </thead>
            <tbody>
            <Loading visible={isLoading}/>
              {data?.meetings?.filter((meeting)=>meeting.status === "pending").map((meeting) => {
                  return (<tr key={meeting.mid}>
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
                          <Menu.Item onClick={() => {
                            meeting.action = "held";
                            setStatusModal(meeting)
                          }}>
                            Put on hold
                          </Menu.Item>
                          <Menu.Item onClick={() => {
                            meeting.action = "completed";
                            setStatusModal(meeting)
                          }}>Mark as completed</Menu.Item>
                          <Menu.Item onClick={()=>{
                            setRescheduleModal(meeting)
                          }}>
                            Rescedule
                          </Menu.Item>
                          <Menu.Item onClick={() => {
                            setReferModal(meeting)
                          }}>
                            Refer
                          </Menu.Item>
                        </Menu.Dropdown>

                      </Menu>
                    </td>
                  </tr>)
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
              {data?.meetings?.filter((meeting) => meeting.status === "held").map((meeting) => {
                return (<tr key={meeting.mid}>
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
                        <Menu.Item onClick={() => {
                          meeting.action = "pending";
                          setStatusModal(meeting)
                        }}>Mark as pending</Menu.Item>
                        <Menu.Item onClick={() => {
                          meeting.action = "completed";
                          setStatusModal(meeting)
                        }}>Mark as completed</Menu.Item>
                        <Menu.Item onClick={() => {
                          setRescheduleModal(meeting)
                        }}>
                          Rescedule
                        </Menu.Item>
                        <Menu.Item onClick={() => {
                          setReferModal(meeting)
                        }}>
                          Refer
                        </Menu.Item>
                      </Menu.Dropdown>

                    </Menu>
                  </td>
                </tr>)
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
                return (<tr key={meeting.mid}>
                  <td>{meeting.hid}</td>
                  <td>{meeting.status}</td>
                  <td>{meeting.regNo}</td>
                  <td>{meeting.reason}</td>
                  <td>{meeting.referedTo}</td>
                  <td>{meeting.feedback}</td>
                  <td>{getFullIcon(meeting.rating)}</td>
                  {!meeting.feedback && <td>
                    <Menu width={200} shadow="sm">
                      <Menu.Target>
                        <ActionIcon>
                          <FontAwesomeIcon icon={faEllipsis} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Label>Feedback</Menu.Label>
                        <Menu.Item onClick={()=>setFeedbackModal(meeting)}>
                          Provide feedback
                        </Menu.Item>
                      </Menu.Dropdown>

                    </Menu>
                  </td>}
                </tr>)
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
              // console.log("meeting is in map: ", meeting.mid, " ", meeting.reason)
              referMeeting(referModal?.mid, referalRef.current.value)
            }}
          >Refer</Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setReferModal(null)}
          >Cancel</Button>
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
              // console.log("meeting is in map: ", meeting.mid, " ", meeting.reason)
              updateMeetingStatus(statusModal?.mid, statusModal?.action)
            }}
          >Yes</Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setStatusModal(null)}
          >Cancel</Button>
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
          {
            timeSlots?.timeSlots?.map((ts) =>
              <div className="flex flex-col col-span-1 gap-0">
                <Radio value={ts.tsid}
                  label={
                    dayjs(ts.startTime).subtract(5, 'hours').hour() + ":" +
                    dayjs(ts.startTime).subtract(5, 'hours').minute() + " - " +
                    dayjs(ts.endTime).subtract(5, 'hours').hour() + ":" +
                    dayjs(ts.endTime).subtract(5, 'hours').minute()
                  }
                  name="time"
                  ref={timeslotRef}
                />
                <p className="ml-10 text-xs">{new Date(ts.date).toDateString()}</p>
              </div>
            )
          }
        </div>
        <div className="flex gap-4 justify-start mt-3">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              // console.log("meeting is in map: ", meeting.mid, " ", meeting.reason)
              updateMeetingStatus(rescheduleModal?.mid, timeslotRef.current.value)
            }}
          >Update</Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setRescheduleModal(null)}
          >Cancel</Button>
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
        <p className="font-semibold mt-3 text-sm mb-1">How satisfied are you?</p>
        <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly value={rating} onChange={setRating}  />
        <div className="flex gap-4 justify-start mt-4">
          <Button
            className="bg-purple-500 hover:bg-purple-600"
            onClick={() => {
              // console.log("meeting is in map: ", meeting.mid, " ", meeting.reason)
              updateFeedback(feedbackModal?.hid, feedbackRef.current.value, rating);
            }}
          >Update</Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setStatusModal(null)}
          >Cancel</Button>
        </div>
      </Modal>
    </AppSkeloton>
  )
}

export default Meetings;

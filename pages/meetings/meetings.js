import { LoadingOverlay, Radio, Tabs, Notification, Table, Menu, ActionIcon, Modal, NativeSelect, Button } from "@mantine/core";
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

const Meetings = ({ session }) => {

  const [activeTab, setActiveTab] = useState("pending");

  const { data, isLoading, isError } = useFetchAllMeetings(session.user.id);
  console.log("Meetings: ", data);

  const [referModal, setReferModal] = useState(null);
  const [statusModal, setStatusModal] = useState(null);
  const [rescheduleModal, setRescheduleModal] = useState(null);
  const referalRef = useRef();

  const { data: timeSlots, isLoading: tsLoading, isError: tsError } = useFetchTimeSlots(session.user.id);
  const { mutate: refer, isLoading: submittingReferal, isError: referalError } = useReferMeeting()
  const { mutate: updateStatus, isLoading: updatingStatus, isError: statusUpdationError } = useUpdateMeetingStatus()

  console.log("TimeSLots: ", timeSlots)

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
        toast.success("Meeting status updated");
      },
      onError: ()=>{
        toast.error("Error updating status");
      }
    })
  }

  return (
    <AppSkeloton session={session}>
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List position="center">
          <Tabs.Tab value="pending">Pending</Tabs.Tab>
          <Tabs.Tab value="held">Held</Tabs.Tab>
          <Tabs.Tab value="completed">Completed</Tabs.Tab>
        </Tabs.List>


        <Tabs.Panel value="pending" className="relative">
          <Table>
            <LoadingOverlay visible={isLoading} />
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
              {data?.meetings?.filter((meeting)=>meeting.status === "pending").map((meeting) => {
                  return (<tr key={meeting.mid}>
                    <td>{meeting.mid}</td>
                    <td>{meeting.status}</td>
                    <td>{meeting.regNo}</td>
                    <td>{meeting.reason}</td>
                    <td className="relative">
                      {meeting.referedTo}
                    </td>
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

        <Tabs.Panel value="held" className="relative">
          <Table>
            <LoadingOverlay visible={isLoading} />
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
              {data?.meetings?.filter((meeting) => meeting.status === "held").map((meeting) => {
                return (<tr key={meeting.mid}>
                  <td>{meeting.mid}</td>
                  <td>{meeting.status}</td>
                  <td>{meeting.regNo}</td>
                  <td>{meeting.reason}</td>
                  <td className="relative">
                    {meeting.referedTo}
                  </td>
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
                        }}>Put on hold</Menu.Item>
                        <Menu.Item onClick={() => {
                          meeting.action = "completed";
                          setStatusModal(meeting)
                        }}>Mark as completed</Menu.Item>
                        <Menu.Item>Rescedule</Menu.Item>
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
          <Table>
            <LoadingOverlay visible={isLoading} />
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
              {data?.meetings?.filter((meeting) => meeting.status === "completed").map((meeting) => {
                return (<tr key={meeting.mid}>
                  <td>{meeting.mid}</td>
                  <td>{meeting.status}</td>
                  <td>{meeting.regNo}</td>
                  <td>{meeting.reason}</td>
                  <td className="relative">
                    {meeting.referedTo}
                  </td>
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
                        }}>
                          Mark as completed
                        </Menu.Item>
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
              referMeeting(statusModal?.mid, referalRef.current.value)
            }}
          >Yes</Button>
          <Button
            className="bg-red-400 hover:bg-red-500"
            onClick={() => setStatusModal(null)}
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
        overflow="inside"
        centered
      >
        <div className="grid grid-cols-2 gap-3">
          {
            timeSlots?.timeSlots?.map((ts) =>
              <div className="flex flex-col col-span-1 gap-0">
                <Radio value={[ts.startTime, ts.endTime, ts.date]}
                  label={
                    dayjs(ts.startTime).subtract(5, 'hours').hour() + ":" +
                    dayjs(ts.startTime).subtract(5, 'hours').minute() + " - " +
                    dayjs(ts.endTime).subtract(5, 'hours').hour() + ":" +
                    dayjs(ts.endTime).subtract(5, 'hours').minute()
                  }
                  name="time"
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
              updateMeetingStatus(statusModal?.mid, statusModal?.action)
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

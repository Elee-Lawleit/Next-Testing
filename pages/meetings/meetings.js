import { LoadingOverlay, ScrollArea, Tabs, Notification, Table, Menu, ActionIcon, Modal, NativeSelect, Button } from "@mantine/core";
import AppSkeloton from "components/AppSkeleton";
import useFetchAllMeetings from "hooks/meetings/use-fetch-all-meetings";
import {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import useReferMeeting from "hooks/meetings/use-refer-meeting";

const Meetings = ({ session }) => {

  const [activeTab, setActiveTab] = useState("pending");

  const {data, isLoading, isError} = useFetchAllMeetings(session.user.id);
  console.log("Meetings: ", data);

  const [referModal, setReferModal] = useState(false);
  const referalRef = useRef();

  const {mutate: refer, isLoading: submittingReferal, isError: referalError} = useReferMeeting()


  //perform database call to refer the meeting
  const referMeeting = async(meetingId, referal)=>{
    console.log("meeting id: ", meetingId, "referal: ", referal)
    refer({meetingId, referal},{
      onSuccess: ()=>{
        toast.success("Meeing referred successfully")
      },
      onError: ()=>{
        toast.error("Error referring")
      }
    });
  }

  return(
  <AppSkeloton session={session}>
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List position="center">
        <Tabs.Tab value="pending">Pending</Tabs.Tab>
        <Tabs.Tab value="held">Held</Tabs.Tab>
        <Tabs.Tab value="completed">Completed</Tabs.Tab>
      </Tabs.List>


      <Tabs.Panel value="pending" className="relative">
        <Table>
          <LoadingOverlay visible={isLoading}/>
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
          {data?.meetings?.map((meeting)=>{
            if(meeting.status === "pending"){
              console.log("mapping meeting: ", meeting.mid);
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
                      <FontAwesomeIcon icon={faEllipsis}/>
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Label>Change meeting state</Menu.Label>
                      <Menu.Item>Mark as Done</Menu.Item>
                      <Menu.Item>Rescedule</Menu.Item>
                      <Menu.Item onClick={()=>setReferModal(true)}>
                        Refer {"   " + meeting.mid}
                      </Menu.Item>
                    </Menu.Dropdown>
                    <Modal
                      opened={referModal} 
                      title={"Who do you want to refer to?" + "  " +  meeting.mid} 
                      onClose={()=>setReferModal(false)}
                      shadow="sm"
                      overlayOpacity={0.1}
                      centered
                    >
                          <NativeSelect
                            data={["Datacell", "Attendance", "Project Committee"]}
                            ref={referalRef}
                          />
                          <Button 
                            className="block m-auto mt-3 bg-purple-500 hover:bg-purple-600"
                            onClick={()=>{console.log("meeting is in map: ", meeting.mid, " ", meeting.reason) 
                              referMeeting(meeting.mid, referalRef.current.value)}}
                          >Done</Button>
                        </Modal>
                  </Menu>
                  </td>
              </tr>)
            }
          })}
          </tbody>
        </Table>
      </Tabs.Panel>

      <Tabs.Panel value="held" className="relative">
      <ScrollArea>
            <LoadingOverlay visible={isLoading}/>
          {data?.meetings?.map((meeting)=>{
            if(meeting.status === "held")
            {return <Notification key={meeting.mid} title="meeting" disallowClose
            className='before:bg-purple-500'>
              {meeting.reason}
              {meeting.regNo}
              {meeting.status}
            </Notification>}
          })}
        </ScrollArea>
      </Tabs.Panel>

      <Tabs.Panel value="completed" className="relative">
      <ScrollArea>
          <LoadingOverlay visible={isLoading}/>
          {data?.meetings?.map((meeting)=>{
            if(meeting.status === "completed")
            {return <Notification key={meeting.mid} title="meeting" disallowClose
            className='before:bg-purple-500'>
              {meeting.reason}
              {meeting.regNo}
              {meeting.status}
            </Notification>}
          })}
        </ScrollArea>
      </Tabs.Panel>

    </Tabs>
  </AppSkeloton>
  )
}

export default Meetings;

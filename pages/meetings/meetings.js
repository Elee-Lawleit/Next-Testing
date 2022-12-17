import { ScrollArea, Tabs } from "@mantine/core";
import AppSkeloton from "components/AppSkeleton";
import useFetchAllMeetings from "hooks/meetings/use-fetch-all-meetings";

const Meetings = ({ session }) => {

  const [activeTab, setActiveTab] = useState("pending");

  const {data, isLoading, isError} = useFetchAllMeetings(session.user.id);

  return(
  <AppSkeloton session={session}>
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="pending">Pending</Tabs.Tab>
        <Tabs.Tab value="held">Held</Tabs.Tab>
        <Tabs.Tab value="completed">Completed</Tabs.Tab>
      </Tabs.List>


      <Tabs.Panel value="pending">
        <ScrollArea>
          {data?.meetings?.map((meeting)=>{
            if(meeting.status === "pending")
            {return <Notification key={meeting.mid} title="meeting" disallowClose
            className='before:bg-purple-500'>
              {meeting.reason}
              {meeting.regNo}
              {meeting.status}
            </Notification>}
          })}
        </ScrollArea>
      </Tabs.Panel>

      <Tabs.Panel value="held">
      <ScrollArea>
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

      <Tabs.Panel value="completed">
      <ScrollArea>
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

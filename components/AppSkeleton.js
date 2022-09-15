import { useState} from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Divider,
  Stack,
  ScrollArea,
  Notification,
  LoadingOverlay,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripHorizontal,
  faChartArea
} from '@fortawesome/free-solid-svg-icons';
import { Calendar } from '@mantine/dates';
import useFetchMeetings from 'hooks/meetings/use-fetch-meetings';

const AppSkeloton = ({children, ...props}) => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [date, setDate] = useState(new Date());

  //will send date string to database
  const { isLoading, data } = useFetchMeetings(date.toDateString(), props.session?.user?.id, props.session?.user?.role);

  //checking whether session is accessible inside app skele
  // console.log("Session inside app skele is: ", props.session);
  // console.log("The user role is: ", props.session?.user?.role);

  // console.log("Data on app skele is: ", data?.meetings);
  // console.log("CHildren are: ", children);

  console.log("Meetings inside app skele are: ", typeof(data?.meetings?.Meeting))

  return (
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "white"
          },
        }}
        navbarOffsetBreakpoint="xs"
        asideOffsetBreakpoint="xs"
        navbar={
          <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ md: 170, lg: 250 }}>
            <Text>
              <div className='h-max'>
                <h1 className='font-bold'>Logo goes here</h1>
              </div>
              <div>
                <li><span><FontAwesomeIcon icon={faGripHorizontal} /></span> Dashboard</li>
                <li><span><FontAwesomeIcon icon={faChartArea} /></span> Second</li>
                <li>Third</li>
              </div>
              <hr className='h-1' />
              <div>
                <li>More List Items</li>
                <li>MOre</li>
                <li>Even more</li>
              </div>
            </Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="md" width={{ md: 300, lg: 350 }}>
              <Stack spacing={20}>
                <Calendar
                  allowLevelChange={false}
                  disableOutsideEvents
                  firstDayOfWeek='monday'
                  month={new Date(date)}
                  weekendDays={[0, 6]}
                  className="m-auto shadow rounded-md"
                  value={date}
                  onChange={setDate}
                />
                <Divider />
                <Text className='font-bold'>Upcoming Meetings</Text>
                <ScrollArea style={{ height: 270 }}>
                  <LoadingOverlay visible={isLoading} />
                  {data?.meetings?.Meeting?.map((meeting) => {
                    return <Notification key={meeting.id} title="meeting notification" disallowClose>
                      {meeting.meetingReason}
                    </Notification>
                  })}
                  {!data && !isLoading && <Text>No upcoming meetings!</Text>}
                </ScrollArea>
              </Stack>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        {children}

      </AppShell>
  );
}

export default AppSkeloton;
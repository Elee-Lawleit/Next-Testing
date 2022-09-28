import { useState } from 'react';
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
  Button,
  NavLink,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import useFetchMeetings from 'hooks/meetings/use-fetch-meetings';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import {useRouter} from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faHome } from '@fortawesome/free-solid-svg-icons';

const AppSkeloton = ({ children, ...props }) => {

  const router = useRouter();

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [date, setDate] = useState(new Date());
  

  //will send date string to database
  //not converting date to 'date.toDateString()' anymore bc I changed the type to Date Object in database
  const { isLoading, data } = useFetchMeetings(date, props.session?.user?.id, props.session?.user?.role);

  //checking whether session is accessible inside app skele
  // console.log("Session inside app skele is: ", props.session);
  // console.log("The user role is: ", props.session?.user?.role);

  // console.log("Data on app skele is: ", data?.meetings);
  // console.log("CHildren are: ", children);

  // console.log("Meetings inside app skele are: ", typeof (data?.meetings?.Meeting))

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          paddingBlock: "5rem"

        },
      }}

      navbar={
        <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ md: 170, lg: 250 }}>
            {/* will  do something about the logo */}
            <div className='h-max'>
              <h1 className='font-bold'>Logo goes here</h1>
            </div>
            <div className='flex flex-col'>
                <Link href='/'>
                  <NavLink  component='a' label="Home" active={router.pathname === "/"} icon={<FontAwesomeIcon icon={faHome}/>}/>
                </Link>
                <Link href='/dashboard'>
              <NavLink component='a' label="Dashboard" active={router.pathname === "/dashboard"} icon={<FontAwesomeIcon icon={faWaveSquare} />} />
                </Link>
            {props.session && <Link href='#'>
                  <NavLink onClick={signOut}  component='a' label="Logout" active={router.pathname === "/logout"}/>
                </Link>}
            </div>
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
                  return <Notification key={meeting.id} title="meeting notification" disallowClose
                  >
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
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
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
  NavLink,
  Overlay,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import useFetchMeetings from 'hooks/meetings/use-fetch-meetings';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faHome, faLock, faHourglass, faCalendar } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const AppSkeloton = ({ children, ...props }) => {

  const router = useRouter();

  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false); //for navbar
  const [asideOpened, setAsideOpened] = useState(false); //for aside

  const [date, setDate] = useState(new Date());



  const { isLoading, data } = useFetchMeetings(date, props.session?.user?.id, props.session?.user?.role);

  // console.log("Meetings are: ", data?.meetings);
  console.log(props.session)

  return (
    <MediaQuery>
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
            {!props.session && <Overlay blur={1} zIndex={49} />}
            <div className='h-max'>
              
            </div>
            <div className='flex flex-col'>
              <Link href='/'>
                <NavLink component='a' label="Home" active={router.pathname === "/"} icon={<FontAwesomeIcon icon={faHome} />} />
              </Link>
              <Link href='/dashboard'>
                <NavLink component='a' label="Dashboard" active={router.pathname === "/dashboard"} icon={<FontAwesomeIcon icon={faWaveSquare} />} />
              </Link>
              {(props.session?.user.role === "Admin" || props.session?.user.role === "Parent") && <Link href='/create'>
                <NavLink component='a' label="Create Meeting" active={router.pathname === "/create"} icon={<FontAwesomeIcon icon={faHourglass} />} />
              </Link>}
              {props.session?.user.role !== "Student" && <Link href='/meetings'>
                <NavLink component='a' label="Meetings" active={router.pathname === "/meetings"} icon={<FontAwesomeIcon icon={faHourglass} />} />
              </Link>}
              {props.session?.user.role === "Student" && <Link href='/student-info'>
                <NavLink component='a' label="Student-info" active={router.pathname === "/student-info"} icon={<FontAwesomeIcon icon={faHourglass} />} />
              </Link>}
              {props.session?.user.role !== "Parent" && props.session?.user.role !== "Student"  && <Link href='/timeslots'>
                <NavLink component='a' label="Timeslots" active={router.pathname === "/timeslots"} icon={<FontAwesomeIcon icon={faHourglass} />} />
              </Link>}
              {props.session?.user.role === "Director" && <Link href='/admin-info'>
                <NavLink component='a' label="Admin Info" active={router.pathname === "/admin-info"} icon={<FontAwesomeIcon icon={faHourglass} />} />
              </Link>}
              {props.session && <Link href='#'>
                <NavLink onClick={signOut} component='a' label="Logout" active={router.pathname === "/logout"} />
              </Link>}
            </div>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="md" styles={{ paddingBlock: "3rem" }}>
          <Aside p="md" hiddenBreakpoint="md" hidden={!asideOpened} width={{ md: 300, lg: 350 }}>
            {!props.session && <Overlay blur={1} />}
            <Stack spacing={20}>
              <Calendar
                allowLevelChange={false}
                disableOutsideEvents
                firstDayOfWeek='monday'
                month={new Date(date)}
                weekendDays={[0, 6]}
                className="m-auto rounded-md shadow"
                value={date}
                onChange={setDate}
                excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
              />
              <Divider />
              <Text className='font-bold'>Upcoming Meetings</Text>
              <ScrollArea style={{ height: 270 }}>
                <LoadingOverlay visible={isLoading} />
                {data?.meetings?.map((meeting) => {
                  return <Notification key={meeting.mid} title="meeting notification" disallowClose
                  className='before:bg-purple-500'>
                    {meeting.reason}
                  </Notification>
                })}
                {!isLoading && data?.meetings?.length === 0  && <p>No upcoming meetings!</p>}
              </ScrollArea>
            </Stack>
          </Aside>
          </MediaQuery>
        }
        header={
          <Header height={70} p="md">
            <div className="flex items-center justify-around h-full">
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((opened) => !opened)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text className='m-auto text-xl font-bold text-center font-Montserrat'>BIIT Appointment System</Text>
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <button
                  className={clsx("text-gray-400 text-lg ml-6", asideOpened && "text-purple-600")}
                  onClick={() => {
                    setAsideOpened((asideOpened) => !asideOpened)
                  }}
                >
                  <FontAwesomeIcon icon={faCalendar} />
                </button>
              </MediaQuery>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </MediaQuery>
  );
}

export default AppSkeloton;
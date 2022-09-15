import AppSkeloton from "components/AppSkeleton";
import { Button, Divider } from "@mantine/core";
import dayjs from "dayjs";
import { signOut } from "next-auth/react";
import useFetchTotalMeetings from "hooks/meetings/use-fetch-total-meetings-for-user";


export default function ({session}) {


  console.log("Session inside index page is: ", session)

  const hour = dayjs().get("hour")
  const min = dayjs().get("minute")

  const {data, isLoading} = useFetchTotalMeetings(session.user.id, session.user.role);

  console.log("Meetings count inside inside page is: ", data?.meetings);
  

  return (
    <AppSkeloton session={session}>
      {console.log("This is working")}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 font-['Roboto']">
          {/* Hello div */}
        <div className="sm:col-span-2 md:col-span-3 bg-cyan-100">
            <div className="flex gap-1 font-light text-gray-300">
              <p className=" text-xs">
                {new Date().toDateString()} 
              </p>
              <Divider my="4px" orientation="vertical"/>
            <p className=" text-xs">
              {hour}:{min}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Hello Mr. {session?.user?.name}</h1>
              <p>You have <span className="text-green-200"> {data?.meetings} </span>today</p>
            </div>
          </div>

          {/* Stats div */}
          <div className="bg-purple-300 md:row-span-2">Stats</div>

          {/* Some other div */}
          <div className="bg-blue-400 lg:col-span-2">Some other content</div>

          {/* more div */}
          <div className="bg-green-400">More of some other content probably</div>
          {session && <Button onClick={signOut}>Logout</Button>}
        </div>
    </AppSkeloton>
  )
}

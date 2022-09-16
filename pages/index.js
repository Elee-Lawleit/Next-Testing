import AppSkeloton from "components/AppSkeleton";
import dayjs from "dayjs";
import useFetchTotalMeetings from "hooks/meetings/use-fetch-total-meetings-for-user";
import React from "react";
import dynamic from "next/dynamic";
import {
  Divider,
  ScrollArea,
  Notification,
  Button,
  useMantineTheme
} from "@mantine/core";
import Link from "next/link";
import themes from "daisyui/src/colors/themes";
import useFetchMeetingStats from "hooks/meetings/use-fetch-meeting-stats";

export default function ({ session }) {

  const theme = useMantineTheme();

  const hour = dayjs().get("hour")
  const min = dayjs().get("minute")

  //fetch total meetings
  const { data, isLoading } = useFetchTotalMeetings(session.user.id, session.user.role);

  //fetch meeting stats
  const { data: statsData, isLoading: statsLoading } = useFetchMeetingStats(session.user.id, session.user.role)
  console.log("meeting stats are: ", statsData);


  //import meetings chart
  const MeetingAreaChart = dynamic(() => import("components/MeetingAreaChart/"), {
    ssr: false
  })
  const MeetingPieChart = dynamic(() => import("components/MeetingSatisfactionPieChart.js"), {
    ssr: false
  })

  return (
    <AppSkeloton session={session}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 font-sans">

        {/* Hello div */}
        <div className="sm:col-span-2 shadow-sm md:col-span-3 bg-white flex flex-col justify-between p-2 gap-2 sm:order-1">
          <div className="flex gap-1 font-medium text-xs text-gray-500">
            <p>
              {new Date().toDateString()}
            </p>
            <Divider my="2px" orientation="vertical" />
            <p>
              {hour}:{min}
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-700">Hello Mr. {session?.user?.name}</h1>
          </div>

          <div className="font-medium text-gray-500">
            <p>You have <span className="text-purple-500"> {data?.meetings} meetings </span>today</p>
          </div>

        </div>

        {/* Top meetings div */}
        <div className="bg-white sm:col-span-2 lg:col-span-2 p-2 px-3 sm:order-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Top meetings for today</p>
            <Link href=""><a className="text-sm font-medium text-purple-400">See all</a></Link>
          </div>
          <ScrollArea className="h-32">
            <Notification className="before:bg-purple-500" title="meeting notification">First Meeting for today</Notification>
            <Notification className="before:bg-purple-500" disallowClose title="meeting notification">second Meeting for today</Notification>
            <Notification className="before:bg-purple-500" disallowClose title="meeting notification">Third Meeting for today</Notification>
          </ScrollArea>
        </div>

        {/* Area chart div */}
        <div className="col-span-1 bg-white sm:order-3">
          <MeetingAreaChart />
        </div>

        {/* Meeting Satisfaction Pie Chart div */}
        <div className="bg-white lg:row-span-2 sm:order-5">
          <MeetingPieChart/>
        </div>


        {/* more div */}
        <div className="bg-green-400 sm:order-4
        ">More of some other content probably</div>
       
      </div>
    </AppSkeloton>
  )
}

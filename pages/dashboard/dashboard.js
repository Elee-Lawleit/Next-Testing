import AppSkeloton from "components/AppSkeleton";
import useFetchTotalMeetings from "hooks/meetings/use-fetch-total-meetings-for-user";
import React from "react";
import dynamic from "next/dynamic";
import {
    ScrollArea,
    Notification,
} from "@mantine/core";
import Link from "next/link";
import useFetchMeetingStats from "hooks/meetings/use-fetch-meeting-stats";
import { useRouter } from "next/router";

const Dashboard =  ({ session }) => {


    const router = useRouter();
    
    //fetch total meetings
    const { data, isLoading } = useFetchTotalMeetings(session?.user?.id, session?.user?.role);
    console.log("total meetings are: ", data?.count)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    console.log(session)
    
    //fetch meeting stats
    const { data: statsData, isLoading: areStatsLoading } = useFetchMeetingStats(session?.user?.id, session?.user?.role)

    // console.log("meeting stats are: ", statsData);


    const Time = dynamic(()=> import("components/Time"), {
        ssr: false
    });

    //import meetings chart
    const MeetingAreaChart = dynamic(() => import("components/MeetingAreaChart/"), {
        ssr: false
    })
    const MeetingPieChart = dynamic(() => import("components/MeetingSatisfactionPieChart.js"), {
        ssr: false
    })
    

    console.log("This is data on dashboard", data);
    return (
        <AppSkeloton session={session}>
            <div className="grid grid-cols-1 gap-3 font-sans">

                {/* Hello div */}
                <div className="shadow-sm bg-white flex flex-col justify-between p-2 gap-2">
                    {/* <div className="flex gap-1 font-medium text-xs text-gray-500">
                        <p>
                            {new Date().toDateString()}
                        </p>
                        <Divider my="2px" orientation="vertical" />
                        <p>
                            {hour.toString().length == 1 ? `0${hour}` : hour}:{min.toString().length == 1 ? `0${min}` : min}
                        </p>
                    </div> */}

                    <Time/>
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-700">Hello Mr. {session?.user?.name}</h1>
                    </div>

                    <div className="font-medium text-gray-500">
                        <p>You have <span className="text-purple-500"> {data?.count} meetings </span>today</p>
                    </div>

                </div>

                {/* Top meetings div */}
                <div className="bg-white p-2 px-3">
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
                <div className="col-span-1 bg-white">
                    <div className="relative text-center font-semibold text-lg mt-2">
                        Meeting Analysis ({months[new Date().getMonth()]})
                    </div>
                    <MeetingAreaChart />
                </div>

                {/* Meeting Satisfaction Pie Chart div */}
                <div className="bg-white relative">
                    <div className="relative font-semibold text-2xl">
                        <p className="absolute top-10 bottom-0 m-auto left-0 right-0 text-center">
                            Parent satisfaction rate
                        </p>
                    </div>
                    <MeetingPieChart />
                </div>


                {/* more div */}
                <div className="bg-green-400">More of some other content probably</div>

            </div>
        </AppSkeloton>
    )
}

export default Dashboard;
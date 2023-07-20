import AppSkeloton from "components/AppSkeleton";
import useFetchTotalMeetings from "hooks/meetings/use-fetch-total-meetings-for-user";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  ScrollArea,
  Notification,
  Button,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useLayoutEffect } from "react";
import { Switch } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import useSetGeneralAvail from "hooks/admin/use-set-general-avail";
import { toast } from "react-hot-toast";
import useFetchAvail from "hooks/admin/use-fetch-availibility";
import { useToggle } from "@mantine/hooks";

const Dashboard = ({ session }) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const router = useRouter();

  //fetch total meetings
  const { data, isLoading } = useFetchTotalMeetings(
    session?.user?.id,
    session?.user?.role
  );

  // console.log("COUNT: ", data)
  // console.log("USER: ", session)


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const Time = dynamic(() => import("components/Time"), {
    ssr: false,
  });

  //import meetings chart
  const MeetingAreaChart = dynamic(
    () => import("components/MeetingAreaChart/"),
    {
      ssr: false,
    }
  );
  const MeetingPieChart = dynamic(
    () => import("components/MeetingSatisfactionPieChart.js"),
    {
      ssr: false,
    }
  );

  const {
    mutate: setAvail,
    isLoading: setAvailLoading,
    isError,
  } = useSetGeneralAvail();

  const {
    data: availibility,
    isLoading: fetchAvailLoading,
    isError: fetchAvailError,
  } = useFetchAvail(session?.user.id);

  const [checked, toggle] = useToggle(["true", "false"]);

  const updateAvail = ()=>{
      setAvail({ adminId: session?.user.id, state: checked == "true"? false: true }, {
        onSuccess: () => {
          toast.success("Availibility updated.")
        },
        onError: () => {
          toast.error("Error updating availibility.")
        }
      })
    toggle();
  }
  
  // session?.user.role === "Admin" ? useEffect(() => {
  //   availibility?.availibility[0]?.generalavail? toggle("true") : toggle("false");
  // }, [availibility]) : null

  const theme = useMantineTheme();
  return (
    <AppSkeloton session={session}>
      <div className="grid grid-cols-1 gap-3 font-sans">
        {/* Hello div */}
        <div className="shadow-sm bg-white flex flex-col justify-between p-2 gap-2">
          <div className="bg-white flex justify-between gap-2">
            <Time />
            {/* {availibility && session?.user.role === "Admin" && (
              <Switch
                size="lg"
                label="Set availibility"
                labelPosition="left"
                checked={checked == "true"}
                onClick={updateAvail}
                color={"#ba68c8"}
              />
            )} */}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Hello, {session?.user?.name}
            </h1>
          </div>

          <div className="font-medium text-gray-500">
            <p>
              You have{" "}
              <span className="text-purple-500">
                {" "}
                {data?.count} meeting(s){" "}
              </span>
              today
            </p>
          </div>
        </div>

        {/* Top meetings div */}
        <div className="bg-white p-2 px-3">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Top meetings for today</p>
            <Link href="">
              <a className="text-sm font-medium text-purple-400">See all</a>
            </Link>
          </div>
          <ScrollArea className="h-32">
            <Notification
              className="before:bg-purple-500"
              title="meeting notification"
            >
              First Meeting for today
            </Notification>
            <Notification
              className="before:bg-purple-500"
              disallowClose
              title="meeting notification"
            >
              second Meeting for today
            </Notification>
            <Notification
              className="before:bg-purple-500"
              disallowClose
              title="meeting notification"
            >
              Third Meeting for today
            </Notification>
          </ScrollArea>
        </div>

        {/* Area chart div */}
        <div className="col-span-1 bg-white">
          <div className="flex justify-around items-center mt-4">
            <div>
              <Button
                className="bg-purple-400 hover:bg-purple-600"
                onClick={() => setMonth(month - 1)}
                disabled={month == 1}
              >
                {"<"}
              </Button>
            </div>
            <div className="relative text-center font-semibold text-lg mt-2">
              Meeting Analysis ({months[month - 1]})
            </div>
            <div>
              <Button
                className="bg-purple-400 hover:bg-purple-600"
                onClick={() => setMonth(month + 1)}
                disabled={month == 12}
              >
                {">"}
              </Button>
            </div>
          </div>
          <MeetingAreaChart session={session} month={month} />
        </div>

        {/* Meeting Satisfaction Pie Chart div */}
        {session?.user.role === "Admin" &&<div className="bg-white relative">
          <div className="relative font-semibold text-2xl">
            <p className="absolute top-10 bottom-0 m-auto left-0 right-0 text-center">
              Parent feedback analysis
            </p>
          </div>
          <MeetingPieChart session={session} />
        </div>}
      </div>
    </AppSkeloton>
  );
};

export default Dashboard;

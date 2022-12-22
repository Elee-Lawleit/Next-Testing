import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetchMonthlyMeetings from "hooks/meetings/use-fetch-monthly-meetings";


const MeetingsAreaChart = (props) => {
  
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const { data: monthlyMeetings, isLoading: areaChartLoading, isError: areaChartError } = useFetchMonthlyMeetings(props.session.user.id,
    month, year);

  const week1 = monthlyMeetings?.totalMonthlyMeetings.filter(
    (meeting) => meeting.week_number === 1
  );
  const week2 = monthlyMeetings?.totalMonthlyMeetings.filter(
    (meeting) => meeting.week_number === 2
  );
  const week3 = monthlyMeetings?.totalMonthlyMeetings.filter(
    (meeting) => meeting.week_number === 3
  );
  const week4 = monthlyMeetings?.totalMonthlyMeetings.filter(
    (meeting) => meeting.week_number === 4
  );
  const week5 = monthlyMeetings?.totalMonthlyMeetings.filter(
    (meeting) => meeting.week_number === 5
  );

  const one = week1 != null ? week1[0]?.meetings_in_week : 0;
  const two = week2 != null ? week2[0]?.meetings_in_week : 0;
  const three = week3 != null ? week3[0]?.meetings_in_week : 0;
  const four = week4 != null ? week4[0]?.meetings_in_week : 0;
  const five = week5 != null ? week5[0]?.meetings_in_week : 0;

  const pweek1 = monthlyMeetings?.totalPendingMeetings.filter(
    (meeting) => meeting.week_number === 1
  );
  const pweek2 = monthlyMeetings?.totalPendingMeetings.filter(
    (meeting) => meeting.week_number === 2
  );
  const pweek3 = monthlyMeetings?.totalPendingMeetings.filter(
    (meeting) => meeting.week_number === 3
  );
  const pweek4 = monthlyMeetings?.totalPendingMeetings.filter(
    (meeting) => meeting.week_number === 4
  );
  const pweek5 = monthlyMeetings?.totalPendingMeetings.filter(
    (meeting) => meeting.week_number === 5
  );

  const pone = pweek1 != null ? pweek1[0]?.meetings_in_week : 0;
  const ptwo = pweek2 != null ? pweek2[0]?.meetings_in_week : 0;
  const pthree = pweek3 != null ? pweek3[0]?.meetings_in_week : 0;
  const pfour = pweek4 != null ? pweek4[0]?.meetings_in_week : 0;
  const pfive = pweek5 != null ? pweek5[0]?.meetings_in_week : 0;


  const cweek1 = monthlyMeetings?.totalCompletedMeetings.filter(
    (meeting) => meeting.week_number === 1
  );
  const cweek2 = monthlyMeetings?.totalCompletedMeetings.filter(
    (meeting) => meeting.week_number === 2
  );
  const cweek3 = monthlyMeetings?.totalCompletedMeetings.filter(
    (meeting) => meeting.week_number === 3
  );
  const cweek4 = monthlyMeetings?.totalCompletedMeetings.filter(
    (meeting) => meeting.week_number === 4
  );
  const cweek5 = monthlyMeetings?.totalCompletedMeetings.filter(
    (meeting) => meeting.week_number === 5
  );

  const cone = cweek1 != null ? cweek1[0]?.meetings_in_week : 0;
  const ctwo = cweek2 != null ? cweek2[0]?.meetings_in_week : 0;
  const cthree = cweek3 != null ? cweek3[0]?.meetings_in_week : 0;
  const cfour = cweek4 != null ? cweek4[0]?.meetings_in_week : 0;
  const cfive = cweek5 != null ? cweek5[0]?.meetings_in_week : 0;


  console.log(monthlyMeetings)


  const data = [
    {
      name: "Week 1",
      "total meetings": one,
      "pending meetings": pone,
      "completed meetings": cone
    },
    {
      name: "Week 2",
      "total meetings": two,
      "pending meetings": ptwo,
      "completed meetings": ctwo
    },
    {
      name: "Week 3",
      "total meetings": three,
      "pending meetings": pthree,
      "completed meetings": cthree
    },
    {
      name: "Week 4",
      "total meetings": four,
      "pending meetings": pfour,
      "completed meetings": cfour
    },
    {
      name: "Extra days",
      "total meetings": five,
      "pending meetings": pfive,
      "completed meetings": cfive
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: -26,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          connectNulls
          type="monotone"
          dataKey="total meetings"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          connectNulls
          type="monotone"
          dataKey="pending meetings"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          connectNulls
          type="monotone"
          dataKey="completed meetings"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MeetingsAreaChart;

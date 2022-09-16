import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const sampleData = [
    {
        "name": "Week 1",
        "totalMeetings": 40,
        "attendedMeetings": 34,
        "pendingMeetings": 6
    },
    {
        "name": "Week 2",
        "totalMeetings": 30,
        "attendedMeetings": 12,
        "pendingMeetings": 18
    },
    {
        "name": "Week 3",
        "totalMeetings": 18,
        "attendedMeetings": 17,
        "pendingMeetings": 1
    },
    {
        "name": "Week 4",
        "totalMeetings": 27,
        "attendedMeetings": 25,
        "pendingMeetings": 2
    }
];

const MeetingsAreaChart = () => {
  return (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
              data={sampleData}
              margin={{
                top: 20,
                right: 30,
                left: -26,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="totalMeetings"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="attendedMeetings"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="pendingMeetings"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
        </ResponsiveContainer>
  )
}

export default MeetingsAreaChart;
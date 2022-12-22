import useFetchMeetingsRatings from "hooks/meetings/use-get-meetings-ratings";
import { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";


const renderActiveShape = (props) => {

    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`PV ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

export default function MeetingSatisfactionPieChart({ session }) {

    const{data: ratings, isLoading, isError} = useFetchMeetingsRatings(session.user.id);

    const one = ratings?.ratings.filter((rating) => rating.rating == 1)
    const two = ratings?.ratings.filter((rating) => rating.rating == 2)
    const three = ratings?.ratings.filter((rating) => rating.rating == 3)
    const four = ratings?.ratings.filter((rating) => rating.rating == 4)
    const five = ratings?.ratings.filter((rating) => rating.rating == 5)

    const data = [
        { name: "Very Dissatisfied", value: one != null ? one[0]?.rating: 0 },
        { name: "Dissatisfied", value: two != null ? two[0]?.rating : 0 },
        { name: "Average", value: three != null ? three[0]?.rating : 0 },
        { name: "Satisfied", value: four != null ? four[0]?.rating : 0 },
        { name: "Very Satisfied", value: five != null ? five[0]?.rating : 0 },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart className="mx-auto">
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

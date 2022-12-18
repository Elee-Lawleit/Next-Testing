// const actualWeekOfMonth = Math.ceil(new Date("2022-01-01").getDate() / 7);

// console.log("Actual Week: ", actualWeekOfMonth);



// const falseMeetings = Meeting.filter((meeting) =>  Math.ceil(new Date(meeting.meetingDay).getDate()/7))




//FOR YOUR OWN SANITY, DON'T TRY TO UNDERSTAND THIS FILE

let data;
const falseMeetings = [];
const trueMeetings = [];
// Meeting.forEach( meeting => {
//    data = meeting.meetingStatus ? trueMeetings.push(Math.ceil(new Date(meeting.meetingDay).getDate() / 7)) : falseMeetings.push(Math.ceil(new Date(meeting.meetingDay).getDate() / 7))
//    console.log(data);
// });

console.log("Pending Meetings: ", falseMeetings, "Attended Meetings: ", trueMeetings);

const Meeting = [
    {
        id: 1,
        meetingDay: new Date("2022-09-01"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-02"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-03"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-04"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-09"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-10"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-11"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-12"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-20"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-21"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-22"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-23"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-24"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-25"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-26"),
        meetingStatus: true,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-27"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-28"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
    {
        id: 1,
        meetingDay: new Date("2022-09-30"),
        meetingStatus: false,
        meetingReason: 'some reason',
        adminId: 1,
        studentId: 1,
        parentId: 1,
        meetingStartTime: '08:00',
        meetingEndTime: '10:00'
    },
]



let weekOneFalse = 0;
let weekTwoFalse = 0;
let weekThreeFalse = 0;
let weekFourFalse = 0;
let extraDaysFalse = 0;

let weekOneTrue = 0;
let weekTwoTrue = 0;
let weekThreeTrue = 0;
let weekFourTrue = 0;
let extraDaysTrue = 0;

Meeting.forEach((meeting)=>{
    if (meeting.meetingStatus === false && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 1){
        weekOneFalse++;
    }
    else if (meeting.meetingStatus === false && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 2){
        weekTwoFalse++;
    }
    else if (meeting.meetingStatus === false && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 3){
        weekThreeFalse++;
    }
    else if (meeting.meetingStatus === false && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 4){
        weekFourFalse++;
    }
    else if (meeting.meetingStatus === true && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 1){
        weekOneTrue++;
    }
    else if (meeting.meetingStatus === true && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 2){
        weekTwoTrue++;
    }
    else if (meeting.meetingStatus === true && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 3){
        weekThreeTrue++;
    }
    else if (meeting.meetingStatus === true && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) == 4){
        weekFourTrue++;
    }
    else if (meeting.meetingStatus === false && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) > 4) {
        extraDaysFalse++;
    }
    else if (meeting.meetingStatus === true && Math.ceil(new Date(meeting.meetingDay).getDate() / 7) > 4) {
        extraDaysTrue++;
    }
})

const falseByWeek = new Array(weekOneFalse, weekTwoFalse, weekThreeFalse, weekFourFalse, extraDaysFalse);
const trueByWeek = new Array(weekOneTrue, weekTwoTrue, weekThreeTrue, weekFourTrue, extraDaysTrue)
const totalMeetings = [];

for (let i = 0; i < falseByWeek.length && trueByWeek.length; i++) {
    totalMeetings.push(falseByWeek[i] + trueByWeek[i]);
    
}

console.log("False Meetings: ", falseByWeek, "True Meetings: ", trueByWeek, "Total Meetings: ", totalMeetings);


// step 1.
//     SELECT "meetingDay"
//     FROM Meeting
//     WHERE "meetingStatus" === false;


// step 2.

//     SELECT to_char(meetingDay, 'W') AS "weekOfMonth";



// psqlQuery = "SELECT TO_CHAR(SELECT meetingDay
//     FROM Meeting
//     WHERE meetingStatus = false
//     AND
//     SELECT (EXTRACT MONTH FROM meetingDay), 'W')";
import * as yup from "yup"
import dayjs from "dayjs";

export const meetingSchema = yup.object().shape({
    date: yup.date().required(),
    
    time: yup.array().of(yup.date()).length(2).required("time is a required field").test("is-greater", "end time should be greater", (time) => {
        if (!time) {return false;}
        return dayjs({ h: time[0].getHours(), m: time[0].getMinutes() }).isBefore(dayjs({ h: time[1].getHours(), m: time[1].getMinutes() })) ? true : false
    }),

    meetingCriteria: yup.mixed().oneOf(["Individual Meeting", "Bulk Meeting"]),

    resgistrationNumber: yup.string().when("meetingCriteria", {
        is: "Individual Meeting",
        then: yup.string().required()
    }),

    meetingWay: yup.mixed().when("meetingCriteria", {
        is: "Bulk Meeting",
        then: yup.mixed().oneOf(["Attendance", "GPA"]).required()
    }),

    attendance: yup.number().required().when("meetingWay", {
        is: "Attendance",
        then: yup.number().min(0).max(100).required()
    }),

    gpa: yup.number().required().when("meetingWay", {
        is: "GPA",
        then: yup.number().min(0.00).max(4.00).required()
    })

})
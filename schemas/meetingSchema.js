import * as yup from "yup"
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport);

export const meetingSchema = yup.object().shape({
    date: yup.date().required(),
    
    time: yup.array().of(yup.date()).length(2).required("time is a required field").test("is-greater", "end time should be greater", (time) => {
        if (!time) {return;}
        return dayjs({ h: time[0].getHours(), m: time[0].getMinutes() }).isBefore(dayjs({ h: time[1].getHours(), m: time[1].getMinutes() })) ? true : false
    }),

    meetingCriteria: yup.mixed().oneOf(["Individual Meeting", "Bulk Meeting"]),

    registrationNumber: yup.string().when("meetingCriteria", {
        is: "Individual Meeting",
        then: yup.string().required()
    }),

    bulkWay: yup.mixed().when("meetingCriteria", {
        is: "Bulk Meeting",
        then: yup.mixed().oneOf(["Attendance", "GPA"])
    }),

    reason: yup.string().required("required").min(30, "30-characters")

})
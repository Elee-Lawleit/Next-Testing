import * as yup from "yup"
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport);

export const meetingSchema = yup.object().shape({
    
    // date: yup.date().required(),

    meetingCriteria: yup.mixed().oneOf(["Individual Meeting", "Bulk Meeting"]),

    registrationNumber: yup.string().when("meetingCriteria", {
        is: "Individual Meeting",
        then: yup.string().required()
    }),

    bulkWay: yup.mixed().when("meetingCriteria", {
        is: "Bulk Meeting",
        then: yup.mixed().oneOf(["Attendance", "GPA"])
    }),

    reason: yup.string().required("required").min(5, "5-characters")

})
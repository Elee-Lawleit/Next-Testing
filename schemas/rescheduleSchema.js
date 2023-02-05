import * as yup from "yup"
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport);

export const rescheduleSchema = yup.object().shape({

    // date: yup.date().required(),

    time: yup.mixed().required()

})
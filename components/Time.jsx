import dayjs from "dayjs";
import { Divider } from "@mantine/core";

const Time = () => {

    const hour = dayjs().get("hour")
    const min = dayjs().get("minute")

  return (
      <div className="flex gap-1 font-medium text-xs text-gray-500">
          <p>
              {new Date().toDateString()}
          </p>
          <Divider size="xs" mb="sm" orientation="vertical" />
          <p>
              {hour.toString().length == 1 ? `0${hour}` : hour}:{min.toString().length == 1 ? `0${min}` : min}
          </p>
      </div>
  )
}

export default Time;
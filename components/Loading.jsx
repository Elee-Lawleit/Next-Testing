import { LoadingOverlay } from "@mantine/core";


const Loading = (props) => {
  return (
    <LoadingOverlay visible={props.visible} />
  )
}


export default Loading;
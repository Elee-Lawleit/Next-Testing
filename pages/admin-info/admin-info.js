import AppSkeloton from "components/AppSkeleton";
import useFetchAdminInfo from "hooks/admin/use-fetch-admin-info";

const adminInfo = ({session}) => {


    const{data, isLoading, isError} = useFetchAdminInfo();

    console.log("DATA: ", data);

  console.log(data?.groupedItems[0]?.length)

  return (
    <AppSkeloton session={session}>
        <div>Admin info here</div>
    </AppSkeloton>
  )
}

export default adminInfo;
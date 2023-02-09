import AppSkeloton from "components/AppSkeleton";
import useFetchAdminInfo from "hooks/admin/use-fetch-admin-info";
import { Title, Table } from "@mantine/core";

const adminInfo = ({session}) => {


    const{data, isLoading, isError} = useFetchAdminInfo();

    console.log("DATA: ", data);

  return (
    <AppSkeloton session={session}>
        <div>
          <Title order={2} align="center" className="text-gray-900 font-Montserrat">
            Meetings Information
          </Title>
          <Table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Designation</th>
                <th>Cnic</th>
                <th>Pending meetings</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.info.map((ad)=>{
                  return <tr>
                    <td>{ad.firstName}</td>
                    <td>{ad.lastName}</td>
                    <td>{ad.desgination}</td>
                    <td>{ad.adminId}</td>
                    <td>{ad.meetings_attended}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>
        <div className="mt-4">
          <Title order={2} align="center" className="text-gray-900 font-Montserrat">
            Leave Information
          </Title>
          <Table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Designation</th>
                <th>Cnic</th>
                <th>Total leaves</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.leaves.map((ad)=>{
                  return <tr>
                    <td>{ad.firstName}</td>
                    <td>{ad.lastName}</td>
                    <td>{ad.desgination}</td>
                    <td>{ad.adminId}</td>
                    <td>{ad.total_leaves}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>
    </AppSkeloton>
  )
}

export default adminInfo;
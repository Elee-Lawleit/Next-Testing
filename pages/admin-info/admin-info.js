import AppSkeloton from "components/AppSkeleton";
import useFetchAdminInfo from "hooks/admin/use-fetch-admin-info";
import { Title, Table, Menu, ActionIcon, Modal, Text  } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import useFetchAllMeetings from "hooks/meetings/use-fetch-all-meetings";
import { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import {
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
  IconAlertCircle,
} from "@tabler/icons";
import useGetPairStats from "hooks/meetings/use-get-admin-parent-pair-statistics";
import useFetchBestAdmin from "hooks/admin/use-get-avarage-rating";

const adminInfo = ({session}) => {


    const{data, isLoading, isError} = useFetchAdminInfo();
    const{data: pairStats, isLoading: statsLoading, isError: statsError} = useGetPairStats();
    console.log("pair stats: ", pairStats)
    // console.log("DATA: ", data);

    const [meetingModal, setMeetingModal] = useState();
    const [ratingModal, setRatingModal] = useState();

    const [activeTab, setActiveTab] = useState("pending");

    const [adminId, setAdminId] = useState(0);

    const{data: meetings, isLoading: meetingsLoading, isError: meetingsError} = useFetchAllMeetings(adminId);
    const{data: avgRating, isLoading: bestAdminLoading, isError: bestAdminError} = useFetchBestAdmin();

  const bestRating = avgRating?.avgRating.reduce((prev, curr) => (prev.average_rating > curr.average_rating ? prev : curr), 0);
  console.log("BEST: ", bestRating)

  let processedData = [];

  // loop through meetings array and create a unique object for each admin-parent pair
  // pairStats?.pairStats.forEach((meeting) => {
  //   let found = false;
  //   processedData.forEach((data) => {
  //     if (data.admin === meeting.admin && data.parent === meeting.parent) {
  //       found = true;
  //     }
  //   });
  //   if (!found) {
  //     processedData.push(meeting);
  //   }
  // });

  const uniqueData = pairStats?.pairStats.filter((item, index, self) =>
    index === self.findIndex(t => t.adminId === item.adminId && t.parentId === item.parentId)
  );



  //to get rating icons
  const getEmptyIcon = (value) => {
    const defaultProps = {
      size: 30,
      color: "gray",
    };
    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} />;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return (
          <span title="feedback required">
            <IconMoodEmpty {...defaultProps} />
          </span>
        );
    }
  };

  const getFullIcon = (value) => {
    const defaultProps = {
      size: 30,
    };
    switch (value) {
      case 1:
        return (
          <span title="very poor">
            <IconMoodCry {...defaultProps} color="red" />
          </span>
        );
      case 2:
        return (
          <span title="poor">
            {" "}
            <IconMoodSad {...defaultProps} color="orange" />
          </span>
        );
      case 3:
        return (
          <span title="average">
            <IconMoodSmile {...defaultProps} className="text-yellow-400" />
          </span>
        );
      case 4:
        return (
          <span title="good">
            <IconMoodHappy {...defaultProps} color="lime" />
          </span>
        );
      case 5:
        return (
          <span title="very good">
            <IconMoodCrazyHappy {...defaultProps} color="green" />
          </span>
        );
      default:
        return (
          <span title="feedback required">
            <IconMoodEmpty {...defaultProps} />
          </span>
        );
    }
  };
  

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data?.info.map((ad)=>{
                  return <tr>
                    <td>{ad.firstName}</td>
                    <td>{ad.lastName}</td>
                    <td>{ad.desgination}</td>
                    <td>{ad.cnic}</td>
                    <td><Menu width={200} shadow="sm">
                      <Menu.Target>
                        <ActionIcon>
                          <FontAwesomeIcon icon={faEllipsis} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Label>Meeting information</Menu.Label>
                        <Menu.Item
                          onClick={()=>{
                            setAdminId(ad.cnic)
                            setMeetingModal(ad)
                          }}
                        >
                          View All
                        </Menu.Item>
                      </Menu.Dropdown>

                    </Menu>
                    </td>
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

        <div className="mt-4">
          <Title order={2} align="center" className="text-gray-900 font-Montserrat">
            Admin-Parent Meeting Statistics
          </Title>
          <Table>
            <thead>
              <tr>
                <th>Admin ID</th>
                <th>Admin Name</th>
                <th>Parent ID</th>
                <th>Total Meetings</th>
              </tr>
            </thead>
            <tbody>
              {uniqueData &&
                uniqueData?.map((ad) => {
                  return <tr>
                    <td>{ad.adminId}</td>
                    <td>{ad.firstName} {ad.lastName}</td>
                    <td>{ad.parentId}</td>
                    <td>{ad.total_meetings}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>

        <div className="mt-4">
          <Title order={2} align="center" className="text-gray-900 font-Montserrat">
            Average Admin Ratings
          </Title>
          <Table>
            <thead>
              <tr>
                <th>Admin name</th>
                <th>Average Rating</th>
              </tr>
            </thead>
            <tbody>
              {
                avgRating?.avgRating.map((ad) => {
                  return <tr>
                    <td>{ad.firstName} {ad.lastName}</td>
                    <td>{ad.average_rating}</td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </div>

          <Modal
          opened={meetingModal}
          title={"All meetings"}
          onClose={() => setMeetingModal(false)}
          shadow="sm"
          size="lg"
          overlayOpacity={0.1}
          centered
          >
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List position="center">
              <Tabs.Tab value="pending">Pending</Tabs.Tab>
              <Tabs.Tab value="completed">Completed</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="pending">
              <Table className="relative" highlightOnHover>
                <thead>
                  <tr>
                    <th>Meeting ID</th>
                    <th>Status</th>
                    <th>Parent ID</th>
                    <th>Arid Number</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    meetings?.meetings.map((meeting)=>{
                      return <tr>
                        <td>{meeting.mid}</td>
                        <td>{meeting.status}</td>
                        <td>{meeting.parentId}</td>
                        <td>{meeting.regNo}</td>
                        <td>{meeting.reason}</td>
                      </tr>
                    })
                  }
                </tbody>
              </Table>
            </Tabs.Panel>

            <Tabs.Panel value="completed">
              <Table className="relative" highlightOnHover>
                <thead>
                  <tr>
                    <th>Meeting ID</th>
                    <th>Status</th>
                    <th>Parent ID</th>
                    <th>Arid Number</th>
                    <th>Reason</th>
                    {/* rating given by admin to parent */}
                    <th>Parent rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    meetings?.completedMeetings.map((meeting) => {
                      return <tr>
                        <td>{meeting.hid}</td>
                        <td>{meeting.status}</td>
                        <td>{meeting.parentId}</td>
                        <td>{meeting.regNo}</td>
                        <td>{meeting.reason}</td>
                        <td>{meeting.adminRating}</td>
                        <td><Menu width={200} shadow="sm">
                          <Menu.Target>
                            <ActionIcon>
                              <FontAwesomeIcon icon={faEllipsis} />
                            </ActionIcon>
                          </Menu.Target>

                          <Menu.Dropdown>
                            <Menu.Label>Rating information</Menu.Label>
                            <Menu.Item
                              onClick={() => {
                                setRatingModal(meeting)
                              }}
                            >
                              View rating
                            </Menu.Item>
                          </Menu.Dropdown>

                        </Menu>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </Table>
            </Tabs.Panel>
          </Tabs>
          </Modal>

        <Modal
          opened={ratingModal}
          title="Parent Feedback"
          onClose={() => setRatingModal(null)}
          shadow="sm"
          overlayOpacity={0.1}
          centered
        >
          {console.log("Meeting", ratingModal)}
          {ratingModal?.feedback? <div className="flex gap-4 justify-start mt-3">
            <Table>
              <tbody>
                <tr>
                  <td className="font-semibold">Polite</td>
                  <td>{getFullIcon(ratingModal?.feedback?.polite)}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Attentive</td>
                  <td>{getFullIcon(ratingModal?.feedback?.attentive)}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Rude</td>
                  <td>{getFullIcon(ratingModal?.feedback?.rude)}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Suggestion</td>
                  <td>{ratingModal?.feedback?.suggestion}</td>
                </tr>
              </tbody>
            </Table>
          </div> : <Text className="font-semibold">Rating still pending from parent side</Text>}
        </Modal>
        </div>
    </AppSkeloton>
  )
}

export default adminInfo;
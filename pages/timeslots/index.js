import { Title, Table, Text, ActionIcon, Modal, Switch, LoadingOverlay, Button } from "@mantine/core";
import AppSkeloton from "components/AppSkeleton";
import useFetchAllTimeSlots from "hooks/admin/use-fetch-all-timeslots";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useDeleteTimeslot from "hooks/admin/use-delete-timeslot";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import useUpdateTimeslotStatus from "hooks/admin/use-update-timeslot-status";
import { useToggle } from "@mantine/hooks";
import { getSession } from "next-auth/react";
import { PrismaClient } from "/prisma/src/generated/client";


const Timeslots = ({session}) => {

    const {data: timeslots, isLoading: isLoadingTs, isError: timeslotError} = useFetchAllTimeSlots(session?.user.id);

    const { mutate: deleteTimeslot, isLoading: isDeleting, isError: errorDeleting } = useDeleteTimeslot();
    const { mutate: updateTimeslotStatus, isLoading: isUpdating, isError: errorUpdating } = useUpdateTimeslotStatus();

    const [deleteModal, setDeleteModal] = useState(null);

    const queryClient = useQueryClient();


    return (
        <AppSkeloton session={session}>
            <Title order={1} align="center" className="text-gray-900 font-Montserrat">Timeslots</Title>

            <Table className="relative" highlightOnHover align="center">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Availibility</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { timeslots?.timeSlots.length !== 0 ?
                    timeslots?.timeSlots.map((ts, index)=>{
                        return (<tr key={ts.tsid}>
                            <td>{new Date(ts.date).toDateString()}</td>
                            <td>{dayjs(ts.startTime).subtract(5, "hours").hour() +
                                ":" +
                                dayjs(ts.startTime).subtract(5, "hours").minute()}
                            </td>
                            <td>
                                {dayjs(ts.endTime).subtract(5, "hours").hour() +
                                ":" +
                                dayjs(ts.endTime).subtract(5, "hours").minute()}
                            </td>
                            <td>
                                <Switch
                                    className="cursor-pointer"
                                    size="sm"
                                    checked={ts.availibility}
                                    color={"#ba68c8"}
                                    onChange={()=>{
                                        updateTimeslotStatus({
                                            timeslotId: ts.tsid,
                                            status: ts.availibility === true ? false: true
                                        }, {
                                            onSuccess: ()=>{
                                                queryClient.refetchQueries("timeslots-all");
                                                toast.success("Timeslot status updated.");
                                            },
                                            onError: ()=>{
                                                toast.error("Error updating timeslost status.");
                                            }
                                        })
                                    }}
                                />
                            </td>
                            <td>
                                <ActionIcon onClick={()=>setDeleteModal(ts)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </ActionIcon>
                            </td>
                        </tr>)
                    }) : <tr>
                        <td colSpan={3}>
                            <Text ta="center" fw={500} color="red">
                                  No timeslots available.
                              </Text>
                        </td>
                    </tr>
                }
              </tbody>
            </Table>
            <Modal
                opened={deleteModal}
                title="Are you sure?"
                onClose={() => setDeleteModal(null)}
                shadow="sm"
                overlayOpacity={0.1}
                centered
            >
                <div className="flex gap-4 justify-start">
                    <Button
                        className="bg-purple-500 hover:bg-purple-600"
                        onClick={() => {
                            deleteTimeslot({ timeslotId: deleteModal.tsid }, {
                                onSuccess: () => {
                                    queryClient.refetchQueries("timeslots-all");
                                    toast.success("Timeslot deleted successfully");
                                    setDeleteModal(null);
                                },
                                onError: () => {
                                    toast.error("Error deleting timeslot");
                                }
                            });
                        }}
                    >
                        <LoadingOverlay visible={isDeleting} />
                        Yes
                    </Button>
                    <Button
                        className="bg-red-400 hover:bg-red-500"
                        onClick={() => setDeleteModal(null)}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </AppSkeloton>
    );
};



// export async function getServerSideProps(context) {
//     const session = await getSession(context);
//     if (session) {
//         const prisma = new PrismaClient();
        
//         const timeslots = await prisma.timeslot.findMany({
//             where: {
//                 adminId: session.user.id,
//                 date: { gte: new Date() },
//             },
//             select: {
//                 startTime: true,
//                 endTime: true,
//                 date: true,
//                 availibility: true,
//                 tsid: true,
//                 meeting: true
//             },
//         })

//         var timeSlots = timeslots.filter((ts) => ts.meeting == null)

//         console.log("TIMESLOTS: ", timeSlots)

//         prisma.$disconnect();

//         return {
//             props: { timeSlots: JSON.parse(JSON.stringify(timeSlots)) }
//         }
//     }
// }


export default Timeslots;
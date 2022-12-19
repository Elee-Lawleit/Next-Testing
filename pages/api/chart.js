import { PrismaClient } from "prisma/src/generated/client";
const prisma = new PrismaClient();


import React from 'react'

const handler = () => {
    prisma.$queryRaw`SELECT m.mid from meeting m, timeslot t
                        where t.date < ${new Date("2022-12-1")} AND t.date > ${new Date("2022-12-31")}
                        AND m.tsid = t.tsid`.then((err, result) => {
                            console.log(result)
                            return res.status(200).json({ data: result })
    })

  
}


export default chart;
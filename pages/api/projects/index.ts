// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../database/db';

import ProjectModel from '../../../database/models/projectModel';

dbConnect();

type Data = {
    data: object[]
}

export default async (req:NextApiRequest, res:NextApiResponse<Data>) => {
    const { method } = req;

    if (method === 'GET') {
        const projects = await ProjectModel.find({});

        res.status(200).json({data: projects});
    }
}
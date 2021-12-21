// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../database/db';

import ProjectModel from '../../../database/models/projectModel';

import { ProjectInterface } from '../../../utils/util';

// Connect to the database
dbConnect();

// Return a list of projects
type Data = {
    data: ProjectInterface[]
}

export default async (req:NextApiRequest, res:NextApiResponse<Data>) => {
    const { method } = req;

    // If it is a GET request
    if (method === 'GET') {
        // Get all projects and return it in a JSON object
        const projects = await ProjectModel.find({});
        res.status(200).json({data: projects});
    }
}
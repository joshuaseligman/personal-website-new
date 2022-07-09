// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../database/db';

import ProjectModel from '../../../database/models/projectModel';

import { ProjectInterface } from '../../../utils/util';

import Cors from 'cors';

// Connect to the database
dbConnect();

// Return a list of projects
type Data = {
    data: ProjectInterface[]
}

const cors = Cors({
    methods: ['GET', 'HEAD']
});

// Code from https://nextjs.org/docs/api-routes/api-middlewares
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
  
        return resolve(result);
      })
    })
  }

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    await runMiddleware(req, res, cors)

    const { method } = req;

    // If it is a GET request
    if (method === 'GET') {
        // Get all projects and return it in a JSON object
        const projects = await ProjectModel.find({});
        res.status(200).json({data: projects});
    }
}
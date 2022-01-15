// import mongoose from 'mongoose';
// import Test from '../models/test.js';

// export const getTest = async (req, res) => {
//     try {
//         const testInfo = await Test.find();

//         res.status(200).json(testInfo);
//     } catch (e) {
//         res.status(404).json({message: e})
//     }
// }

// export const postTest = async (req, res) => {
//     const test = req.body;

//     const newTestInfo = new Test({ ...test, createdAt: new Date().toISOString() })

//     try {
//         await newTestInfo.save();

//         res.status(201).json(newTestInfo);
//     } catch (e) {
//         res.status(409).json({message: e});
//     }
// }

export const getTest = async (req, res) => {
    await res.status(200).json('successful get');
    console.log('get works')
}

export const postTest = async (req, res) => {
    await res.status(201).json('successful post');
    console.log('post works')
}
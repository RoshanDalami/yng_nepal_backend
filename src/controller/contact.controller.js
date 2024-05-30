import Contact from "../Model/Contact.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

export async function CreateContact(req, res) {
  try {
    const body = req.body;
    const newContact = new Contact({
      ...body,
    });
    await newContact.save();
    return res
      .status(200)
      .json(new ApiResponse(200, newContact, "contact created successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function Getcontact(req, res) {
  try {
    const response = await Contact.find({});
    return res
      .status(200)
      .json(new ApiResponse(200, response, "contact fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetContactById(req, res) {
  try {
    const { id } = req.body;
    const response = await Contact.findOne({ _id: id });
    return res.status(200).json(new ApiResponse(200, response, "fetched"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

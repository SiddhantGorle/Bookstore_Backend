import Contact from "../model/contact.model.js";

export const contactUs = async(req, res) => {
    try {
        console.log("inside contact us controller");
        const { name, email, message } = req.body;
        console.log("Name :", name, email, message);
        const createdContact = new Contact({
            name: name,
            email: email,
            message: message,
        });
        await createdContact.save();
        res.status(201).json({
            message: "User Query Saved successfully",
            contact: {
                _id: createdContact._id,
                name: createdContact.name,
                email: createdContact.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
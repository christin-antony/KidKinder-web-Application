import { kidSchema } from "../model/add.js";
import {classSchema} from "../model/addclass.js";
import {teachersSchema} from "../model/addteacher.js"

export const classFrom = (req,res) => {
  res.send("class details");
}; 
export const pageclass = (req, res) => {
  res.send("hello")
}

export const classdata = (req, res) => {
  const { classname,classsubject} = req.body;

  if ( !classname ||!classsubject ||  !req.file) {
      return res.status(400).json({ message: "Missing required fields" });
  }
  
  const classimage = req.file.path;

  const newclass = new classSchema({
   classname,
   classimage,
   classsubject
    
  });

  newclass
    .save()
    .then(() => {
      console.log("New class data saved successfully");
      res.json({ message: "New class data saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving the new class details: ", error);
      res.status(500).send("Error saving data: " + error.message);
    });
};

export const classget = async (req, res) => {
  try {
    const clas = await classSchema.find();
    res.json(clas);
  } catch (clas) {
    console.log(console.log(error));
  }
};

export const deleteclass = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await classSchema.findByIdAndDelete(id);
    console.log("Result:", result);
    if (result) {
      res.send("success");
    } else {
      console.log("User not found");
      res.send("User not found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.send("Error deleting user");
  }
};

export const editclass = async (req, res) => {
  try {
    const emp = await classSchema.findById(req.params.id);
    if (!emp) {
      return res.status(404).send("User not found");
    }
    res.json(emp);
  } catch (err) {
    console.log(err);
    res.send("Server error");
  }
};

export const updateclass = async (req, res) => {
  try {
    const { id } = req.params; 
    const {classname,classsubject } = req.body; 
    
    let classimage=""
    if (req.file) {
      classimage = req.file.path;
    } else {
 
      const existingPost1 = await classSchema.findById(id);
      if (existingPost1) {
        classimage=existingPost1.classimage;
      }
    }

    const updatedPost = await classSchema.findByIdAndUpdate(
      id, 
      { classname,classimage,classsubject},
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};


// teacher controller



export const teacherFrom = (req,res) => {
  res.send("teacher details");
}; 
export const pageteacher = (req, res) => {
  res.send("hello")
}

export const teacherdata = (req, res) => {
  const {  teachername,teachersubject} = req.body;

  if ( ! teachername ||!teachersubject ||  !req.file) {
      return res.status(400).json({ message: "Missing required fields" });
  }
  
  const teacherimage = req.file.path;

  const newteacher = new teachersSchema({
    teachername,
    teacherimage,
    teachersubject
    
  });

  newteacher
    .save()
    .then(() => {
      console.log("New class data saved successfully");
      res.json({ message: "New class data saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving the new class details: ", error);
      res.status(500).send("Error saving data: " + error.message);
    });
};

export const teacherget = async (req, res) => {
  try {
    const teach = await teachersSchema.find();
    res.json(teach);
  } catch (teach) {
    console.log(console.log(error));
  }
};

export const deleteteacher = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await teachersSchema.findByIdAndDelete(id);
    console.log("Result:", result);
    if (result) {
      res.send("success");
    } else {
      console.log("User not found");
      res.send("User not found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.send("Error deleting user");
  }
};

export const editteacher = async (req, res) => {
  try {
    const emp = await teachersSchema.findById(req.params.id);
    if (!emp) {
      return res.status(404).send("User not found");
    }
    res.json(emp);
  } catch (err) {
    console.log(err);
    res.send("Server error");
  }
};

export const updateteacher = async (req, res) => {
  try {
    const { id } = req.params; 
    const { teachername,teachersubject } = req.body; 
    
    let teacherimage=""
    if (req.file) {
      teacherimage== req.file.path;
    } else {
 
      const existingPost = await teachersSchema.findById(id);
      if (existingPost) {
        teacherimage=existingPost.teacherimage;
      }
    }

    const updatedPost = await teachersSchema.findByIdAndUpdate(
      id, 
      {  teachername,teachersubject,teacherimage},
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};





// form controller
// form controller
// form controller
// form controller

export const kidFrom = (req, res) => {
  res.send('kid details')
}
export const page1 = (req, res) => {
  res.send("hello")
}
export const kiddata = (req, res) => {
   
    const { name, email, classes } = req.body;
  
    if (!name || !email || !classes) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    const newKid = new kidSchema({
      name: name,
      email: email,
      classes: classes
    });

    newKid.save()
      .then(() => {
        console.log("New kid data saved successfully");
        res.json({ message: "New kid data saved successfully" });
      })
      .catch((error) => {
        console.error("Error saving the new kid details: ", error);
        res.status(500).send("Error saving data: " + error.message);
      });
  };



export const kidget = async (req, res) => {
  try {
      const kid = await kidSchema.find();
      res.json(kid)
  }
  catch (error) {
      console.log(console.log(error))

  }
}

export const deletedata = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await kidSchema.findByIdAndDelete(id);
      console.log('Result:', result);
      if (result) {
          res.send('success');
      } else {
          console.log('User not found');
          res.send('User not found');
      }
  } catch (error) {
      console.error('Error:', error);
      res.send('Error deleting user');
  }
};

export const editdata = async (req, res) => {
  try {
      const emp = await kidSchema.findById(req.params.id);
      if (!emp) {
          return res.status(404).send('User not found');
      }
      res.json(emp)
  } catch (err) {
      console.log(err);
      res.send('Server error');
  }
}

export const updatedata = async (req, res) => {
  try {
      const { id } = req.params;
      const { name, email,  classes} = req.body;
      const updatbank = await bankSchema.findByIdAndUpdate(id, { name, email,classes }, { new: true });
      if (!updatbank) {
          return res.send('User not found');
      }
      res.status(200).json(updatbank);
  } catch (err) {
      console.log(err);
      res.send('Server error');
  }
}

import Video from "../models/Video";


export const trendingVideos = async (req, res) => {
      const videos = await Video.find({}).sort({ createdAt: "desc"});
      return res.render("home", { pageTitle: "Home", videos });
};
export const seeVideos = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video) {
    return res.render( "404", { pageTitle: "Video Not Found" }, );
    }
    return res.render( "watch", { pageTitle: video.title, video }, );
};
export const editVideos = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video) {
        return res.render( "404", { pageTitle: "Video Not Found" }, );
        }
    res.render( "edit", { pageTitle: "Editing", video } );
};
export const saveEdits = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } =req.body;
    const video = await Video.exists({ _id : id });
    if(!video) {
        return res.render( "404", { pageTitle: "Video Not Found" }, );
        }
    await Video.findByIdAndUpdate(id, {
        title, 
        description, 
        hashtags: Video.handleHashtags(hashtags),
    });
    await video.save();
    return res.redirect(`/videos/${id}`);
};
export const uploadVideos = (req, res) => res.send("Upload Videos");

export const deleteVideos = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
};

export const getUpload = (req, res) => {
    return res.render("upload" , {pageTitle :"Upload Video"});
};
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
     await Video.create({
         title,
         description,
         hashtags: Video.handleHashtags(hashtags),
     });
     return res.redirect("/");
  } catch(error) {
     return res.render("upload" , { 
         pageTitle: "Upload Video", 
         errorMessage: error._message,
        });
  }
};

export const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) {
        videos = await Video.find({
            title: {
                $regex: new RegExp(`${keyword}`, "i"),
            },
        });
    }
    return res.render("search", { pageTitle : "Search" , videos });
};
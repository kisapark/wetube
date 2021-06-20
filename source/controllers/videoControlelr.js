import Video from "../models/Video";


export const trendingVideos = async (req, res) => {
      const videos = await Video.find({});
      return res.render("home", { pageTitle: "Home", videos });
};
export const seeVideos = (req, res) => {
    const { id } = req.params;
    return res.render( "watch", { pageTitle: "Watching" } );
};
export const editVideos = (req, res) => {
    const { id } = req.params;
    res.render( "edit", { pageTitle: "Editing" } );
};
export const saveEdits = (req, res) => {
    const { id } = req.params;
    const { title } =req.body;
    return res.redirect(`/videos/${id}`);
};
export const uploadVideos = (req, res) => res.send("Upload Videos");
export const removeVideos = (req, res) => res.send("Remove Videos");

export const getUpload = (req, res) => {
    return res.render("upload" , {pageTitle :"Upload Video"});
};
export const postUpload = async (req, res) => {
    const { Title, Description, Hashtags } = req.body;
    await Video.create({
        title: Title,
        description: Description,
        createdAt: Date.now(),
        hashtags: Hashtags.split(",").map(word => `#${word}`),
        meta: {
            views: 0,
            rating: 0,
        }
    });
    return res.redirect("/");
}
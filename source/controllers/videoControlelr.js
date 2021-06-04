export const trendingVideos = (req, res) => res.send("Trending Videos");
export const seeVideos = (req, res) => {
    console.log(req.params);
    res.send(`Watch Videos ${req.params.id}`);
};
export const editVideos = (req, res) => res.send("Edit Videos");
export const uploadVideos = (req, res) => res.send("Upload Videos");
export const removeVideos = (req, res) => res.send("Remove Videos");
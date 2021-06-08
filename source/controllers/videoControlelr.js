let videos = [
{
    title: "First Video",
    rating: 5,
    comments: 2,
    created: "2minutes ago",
    views: 125,
    id: 1
},
{
    title: "Second Video",
    rating: 3,
    comments: 2,
    created: "2minutes ago",
    views: 94,
    id: 2
},
{
    title: "Third Video",
    rating: 4,
    comments: 2,
    created: "2minutes ago",
    views: 238,
    id: 3
}
];
export const trendingVideos = (req, res) => {
    const fakeUser = {
        username : "Kisa",
        loggedIn : true
    };
    return res.render( "home", { pageTitle: "Home", fakeUser, videos } )
};
export const seeVideos = (req, res) => res.render( "watch", { pageTitle: "Watch"} );
export const editVideos = (req, res) => res.render( "edit", { pageTitle: "Edit"} );
export const uploadVideos = (req, res) => res.send("Upload Videos");
export const removeVideos = (req, res) => res.send("Remove Videos");
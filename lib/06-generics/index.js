function printMovie(movie) {
    console.log(movie);
}
function registerMovie(movie) {
    console.log(movie);
}
printMovie({
    title: "It",
    director: { name: "", age: 30 },
    actor: { name: "", country: "" },
});
registerMovie({
    title: "It2",
    director: "",
    actor: "",
});
class Video {
    type;
    constructor(type) {
        this.type = type;
    }
}
class TvVideo extends Video {
}
const video = new TvVideo("music");
function createLabel(title) {
    return {
        label: title,
    };
}
const createTextLabel = (createLabel);
createTextLabel("string");
createLabel(true);
// const makeFilm = <Label extends string>(title: BaseMovie<Label>): Label => {
//   return title;
// };
// makeFilm<"title" | "title2" | "title3">;
function getProperty(obj, key) {
    return obj[key];
}
const result = getProperty({ name: "", age: 30 }, "awards");
export {};

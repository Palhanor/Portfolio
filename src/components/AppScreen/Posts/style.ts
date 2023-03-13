export const style = {
    container: "my-section",
    sectionTitle: "my-section-title",
    filterContainer: "my-filter-container",
    filterInput: "my-filter-input",
    filterSelect: "my-filter-select",
    post: "w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:shadow-md",
    postUrl: "flex justify-between max-h-[22vh]",
    postImg: "w-1/3 rounded-l-lg object-cover",
    postContent: "py-6 pr-10 pl-8 w-full",
    postDate: "my-date",
    postTitle: "my-content-title text-lg",
    postDescription: "my-content-text mb-4",
    postTag: "my-tag bg-slate-200 mr-3",
    button: (more: boolean) => {
        return more
            ? "my-post-button bg-sky-600 hover:bg-sky-700"
            : "my-post-button bg-gray-400 cursor-not-allowed";
    },
};
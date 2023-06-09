export const style = {
    container: "my-section",
    sectionTitle: "my-section-title",
    filterContainer: "my-filter-container",
    filterInput: "my-filter-input",
    filterSelect: "my-filter-select",
    post: "w-full bg-white rounded-lg mb-8  ease-in-out duration-200 hover:shadow-md",
    postUrl: "flex justify-between",
    postImg: "hidden rounded-l-lg object-cover"
        + " lg:block lg:w-4/12"
        + " 2xl:w-3/12",
    postContent: "py-3 px-5 w-full"
        + " lg:py-6 lg:pr-10 lg:pl-8",
    postDate: "my-date",
    postTitle: "my-content-title text-md"
        + " lg:text-lg",
    postDescription: "my-content-text mb-4 text-sm"
        + " lg:text-normal",
    postTag: "my-tag bg-slate-200 mr-3 mb-3"
        + " lg:mb-0",
    button: (more: boolean) => {
        return more
            ? "w-full my-post-button bg-sky-600 hover:bg-sky-700" + " lg:w-auto"
            : "w-full my-post-button bg-gray-400 cursor-not-allowed" + " lg:w-auto";
    },
};
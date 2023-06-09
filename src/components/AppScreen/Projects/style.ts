import colorTag from "@/utils/colorTag";

export const style = {
    section: "my-section",
    sectionTitle: "my-section-title",
    filterContainer: "my-filter-container",
    filterInput: "my-filter-input",
    filterSelect: "my-filter-select",
    projectList: "grid grid-cols-1 gap-5"
        + " lg:grid-cols-2",
    project:
        "relative bg-white bg-cover bg-no-repeat bg-center min-h-[42vh] shadow-md rounded-lg cursor-pointer px-2 pt-2 pb-7 ease-in-out duration-100 hover:shadow-lg",
    banner: "max-h-[25vh] rounded-md w-full object-cover object-top",
    logo: "rounded-full -mt-8 h-16 -ml-8 border-white border-solid border-4 absolute inset-x-1/2"
        + " lg:h-20 lg:-ml-10 lg:-mt-10",
    content: "px-3 mt-5",
    title: "my-content-title text-xl mb-3",
    about: "my-content-text mb-4",
    tag: (tech: string) => `my-tag mr-2 mb-2 ${colorTag(tech)}`,
};
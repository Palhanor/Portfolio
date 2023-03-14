import colorTag from "@/utils/colorTag";

export const style = {
    container: "my-section",
    title: "my-section-title",
    content: "flex justify-between items-stretch flex-col lg:flex-row",
    textContainer: "lg:w-3/5 w-full px-2 lg:px-0 text-justify lg:text-left",
    paragraph: " text-lg lg:text-xl mb-5",
    download:
        "hidden lg:block w-full lg:w-auto mt-4 py-3 px-8 rounded-md text-white bg-red-600 hover:bg-red-700",
    skills: "w-full lg:w-2/6",
    skillsContainer: "w-full h-auto bg-white shadow-md rounded-xl py-4 px-7 mt-5 lg:-mt-10",
    skillsTitle: "my-content-title text-xl text-center mb-3",
    skillsArea: "my-content-title text-lg lg:text-md mb-3 mt-2 cursor-pointer",
    skillTag: (tech: string) =>
        `my-tag mr-3 mb-3 cursor-pointer ${colorTag(tech)}`,
};
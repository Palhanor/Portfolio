import colorTag from "@/utils/colorTag";

export const style = {
    container: "my-section",
    title: "my-section-title",
    content: "flex justify-between items-stretch flex-col"
        + " lg:flex-row",
    textContainer: "w-full px-2 text-justify"
        + " lg:text-left lg:w-3/5 lg:px-0",
    paragraph: " text-lg mb-5"
        + " lg:text-xl",
    download:
        "hidden w-full mt-4 py-3 px-8 rounded-md text-white bg-red-600 hover:bg-red-700"
        + " lg:block lg:w-auto",
    skills: "w-full"
        + " lg:w-2/6",
    skillsContainer: "w-full h-auto bg-white shadow-md rounded-xl py-4 px-7 mt-5"
        + " lg:-mt-10",
    skillsTitle: "my-content-title text-xl text-center mb-3",
    skillsArea: "my-content-title text-lg mb-3 mt-2 cursor-pointer"
        + " lg:text-md",
    skillTag: (tech: string) =>
        `my-tag mr-3 mb-3 cursor-pointer ${colorTag(tech)}`,
};
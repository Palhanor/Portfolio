export const style = {
    navbar: (scroll: number) => {
        return scroll == 0 ? "my-header-navbar" : "my-header-navbar shadow-md";
    },
    listItems: "flex justify-around w-[30vw] list-none text-xl"
        + " 2xl:w-[20vw]",
    item: "cursor-pointer",
    logo: "h-[7vh] cursor-pointer"
        + " 2xl:h-[5vh]",
    listSocial: "flex justify-end w-[30vw] list-none text-xl"
        + " 2xl:w-[20vw]",
    social: "ml-5",
};
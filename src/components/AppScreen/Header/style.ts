export const style = {
    navbar: (scroll: number) => {
        return scroll == 0 ? "my-header-navbar" : "my-header-navbar shadow-md";
    },
    listItems: "flex justify-around w-[30vw] 2xl:w-[20vw] list-none text-xl",
    item: "cursor-pointer",
    logo: "h-[7vh] 2xl:h-[5vh] cursor-pointer",
    listSocial: "flex justify-end w-[30vw] 2xl:w-[20vw] list-none text-xl",
    social: "ml-5",
};
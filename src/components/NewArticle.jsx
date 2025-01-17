export const NewArticle = ({ title, text }) => {
    return (
        <article className="h-[140px] border-b-2 border-Grayishblue py-7 last:border-none lg:h-[160px] lg-py-4">
            <h2 className="cursor-pointer hover:text-Softorange text-[20px] mb-3 font-bold">{title}</h2>
            <p className="text-[15px]">{text}</p>
        </article>
    );
};
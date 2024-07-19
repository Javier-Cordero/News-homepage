import { Article } from "./Article"
import gaming from '../assets/image-gaming-growth.jpg'
import retro from '../assets/image-retro-pcs.jpg';
import laptop from '../assets/image-top-laptops.jpg';
export const ArticleContainer = () => {
    return (
        <section className="mt-8 sm:flex md:flex-wrap">
            <Article img={retro} number={'01'} title={'Reviving Retro PCs'} text={'What happens when old PCs are given modern upgrades?'}/>
            <Article img={laptop} number={'02'} title={'Top 10 Laptops of 2022'} text={'Our best picks for various needs and budgets.'}/>
            <Article img={gaming} number={'03'} title={'The Growth of Gaming'} text={'How the pandemic has sparked fresh opportunities.'}/>
        </section>
    )
}
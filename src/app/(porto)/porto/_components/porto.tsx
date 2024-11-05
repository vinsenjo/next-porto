
import PortoCard from "./portoCard"
import unpublish from '../../../../lib/comingSoon.json'
import data from '../../../../lib/porto.json'

export default function PortoBody() {
    return (
        <div className="text-white px-2 lg:px-10 flex flex-col gap-10">

            <div>

                <h2 className="text-4xl font-roboto mb-5">Publish</h2>
                <div className="grid lg:grid-cols-3  gap-4 text-white gap-y-7 lg:gap-y-16">
                    {data.map((item, idx) => (
                        <PortoCard link={item.link} title={item.title} tech={item.tech} imgSrc={item.imgSrc} caption={item.caption} key={idx} />
                    )
                    )}

                </div>
            </div>
            <div>

                <h2 className="text-4xl font-roboto mb-5">Coming Soon</h2>
                <div className="grid lg:grid-cols-3  gap-4 text-white gap-y-7 lg:gap-y-16">
                    {unpublish.map((item, idx) => (
                        <PortoCard link={item.link} title={item.title} tech={item.tech} imgSrc={item.imgSrc} caption={item.caption} key={idx} />
                    )
                    )}

                </div>
            </div>
        </div>
    )
}